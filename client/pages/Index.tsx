import { Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary hidden sm:inline">GreenCharge</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors font-medium">
                Características
              </a>
              <a href="#dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
                Dashboard
              </a>
              <a href="#sensores" className="text-foreground hover:text-primary transition-colors font-medium">
                Sensores
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="hidden sm:inline-block px-6 py-2 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all hover:shadow-glow"
              >
                Iniciar Sesión
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-slide-up">
              <div className="flex flex-col gap-3">
                <a href="#inicio" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                  Inicio
                </a>
                <a href="#caracteristicas" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                  Características
                </a>
                <a href="#dashboard" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                  Dashboard
                </a>
                <a href="#sensores" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                  Sensores
                </a>
                <a href="#contacto" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
                  Contacto
                </a>
                <Link
                  to="/login"
                  className="mx-4 px-4 py-2 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all text-center"
                >
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-secondary leading-tight mb-6">
                Controla tu energía en <span className="text-primary">tiempo real</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Monitoreo inteligente de energía con ESP32-S3 y sensores IoT. Visualiza consumo, voltaje, corriente y más en un dashboard futurista.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="px-8 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all hover:shadow-glow-lg text-center"
                >
                  Comenzar
                </Link>
                <a
                  href="#dashboard-preview"
                  className="px-8 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary/5 transition-all text-center"
                >
                  Ver Dashboard
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full min-h-80 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative h-full bg-card rounded-3xl border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
                    <Zap className="w-16 h-16 text-primary animate-pulse-glow" />
                  </div>
                  <p className="text-2xl font-bold text-secondary">Panel IoT</p>
                  <p className="text-foreground/60 mt-2">Visualización en tiempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary text-center mb-16">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Monitoreo en Tiempo Real", desc: "Datos actualizados al instante desde tus sensores IoT" },
              { title: "Dashboard Intuitivo", desc: "Interfaz moderna y fácil de usar para visualizar datos" },
              { title: "Alertas Inteligentes", desc: "Notificaciones automáticas de anomalías y cambios" },
              { title: "Análisis Avanzado", desc: "Gráficas detalladas y estadísticas de consumo" },
              { title: "Control Remoto", desc: "Gestiona dispositivos desde cualquier lugar" },
              { title: "Seguridad Premium", desc: "Encriptación y autenticación de nivel empresarial" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-glow transition-all hover:border-primary/50 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard-preview" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Tu Dashboard Personalizado</h2>
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-glow transition-all">
            <div className="bg-gradient-to-r from-secondary to-secondary/80 p-6 sm:p-8">
              <h3 className="text-white text-2xl font-bold">Panel Principal</h3>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Voltaje", value: "230V", icon: "⚡" },
                  { label: "Corriente", value: "5.2A", icon: "📊" },
                  { label: "Temperatura", value: "28°C", icon: "🌡️" },
                  { label: "Batería", value: "85%", icon: "🔋" },
                ].map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background border border-border">
                    <p className="text-foreground/60 text-sm">{metric.label}</p>
                    <p className="text-3xl font-bold text-primary mt-2">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="h-64 bg-background rounded-xl border border-border flex items-center justify-center">
                <p className="text-foreground/50">Gráfica de consumo energético</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors Section */}
      <section id="sensores" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-secondary text-center mb-16">Sensores Disponibles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sensor de Voltaje", desc: "Monitorea voltaje en tiempo real", status: "Conectado" },
              { name: "Sensor de Corriente", desc: "Mide corriente eléctrica con precisión", status: "Conectado" },
              { name: "Sensor de Temperatura", desc: "Control de temperatura del dispositivo", status: "Conectado" },
              { name: "Sensor Solar", desc: "Monitorea energía solar generada", status: "Disponible" },
            ].map((sensor, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary">{sensor.name}</h3>
                  <div className={`w-3 h-3 rounded-full ${sensor.status === "Conectado" ? "bg-primary" : "bg-muted-foreground"}`} />
                </div>
                <p className="text-foreground/70 mb-4">{sensor.desc}</p>
                <p className="text-sm font-semibold text-primary">{sensor.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Comienza tu Monitoreo Inteligente</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que confían en GreenCharge para monitorear su energía de forma inteligente.
            </p>
            <Link
              to="/register"
              className="inline-block px-10 py-4 rounded-lg font-semibold text-secondary bg-white hover:bg-white/90 transition-all shadow-lg"
            >
              Registrarse Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-secondary">GreenCharge</span>
              </div>
              <p className="text-foreground/60 text-sm">Monitoreo inteligente de energía con IoT</p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#caracteristicas" className="hover:text-primary transition-colors">Características</a></li>
                <li><a href="#sensores" className="hover:text-primary transition-colors">Sensores</a></li>
                <li><a href="#dashboard-preview" className="hover:text-primary transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">Compañía</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 GreenCharge. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
