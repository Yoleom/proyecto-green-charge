import express from 'express';
import mysql from 'mysql2/promise';
import { OAuth2Client } from 'google-auth-library';
import 'dotenv/config';

const app = express();
app.use(express.json());

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// Configuración adaptada para la base de datos remota de InfinityFree
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306')
};

/**
 * ENDPOINT: /api/auth/google
 */
app.post('/api/auth/google', async (req, res) => {
    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({ error: "El token de Google es requerido." });
    }

    let connection;

    try {
        // 1. Verificar el token con Google
        const ticket = await googleClient.verifyIdToken({
            idToken: idToken,
            audience: GOOGLE_CLIENT_ID,
        });
        
        const payload = ticket.getPayload();
        const { sub: google_id, email, name, picture } = payload;

        // Conectar a la base de datos remota de GreenCharge
        connection = await mysql.createConnection(dbConfig);

        // 2. Buscar si el usuario ya existe en la tabla 'usuarios' 
        const [rows] = await connection.execute(
            'SELECT * FROM usuarios WHERE email = ?', 
            [email]
        );

        let usuario = rows[0];

        if (usuario) {
            // Si existía sin google_id, se lo vinculamos 
            if (!usuario.google_id) {
                await connection.execute(
                    'UPDATE usuarios SET google_id = ?, foto_perfil = ?, updated_at = NOW() WHERE id = ?',
                    [google_id, picture || usuario.foto_perfil, usuario.id]
                );
                usuario.google_id = google_id;
            }
        } else {
            // 3. Registro automático del primer inicio de sesión 
            const [result] = await connection.execute(
                `INSERT INTO usuarios (google_id, email, nombre, foto_perfil, rol, pin_hash, password_hash, created_at, updated_at) 
                 VALUES (?, ?, ?, ?, 'admin', NULL, NULL, NOW(), NOW())`,
                [google_id, email, name, picture]
            );

            const [newRows] = await connection.execute('SELECT * FROM usuarios WHERE id = ?', [result.insertId]);
            usuario = newRows[0];
        }

        // 4. Retornar los datos de sesión estructurados
        res.status(200).json({
            mensaje: "Autenticación exitosa con Google en servidor remoto",
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                foto_perfil: usuario.foto_perfil,
                rol: usuario.rol
            }
        });

    } catch (error) {
        console.error("Error en la autenticación con la BD remota:", error);
        res.status(401).json({ error: "Token de Google inválido o fallo de conexión con el hosting." });
    } finally {
        if (connection) await connection.end();
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor de GreenCharge corriendo y apuntando a InfinityFree en el puerto ${PORT}`);
});