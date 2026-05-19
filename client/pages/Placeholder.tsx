import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="text-center px-4 max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Zap className="w-10 h-10 text-primary animate-pulse-glow" />
        </div>
        <h1 className="text-4xl font-bold text-secondary mb-4">{title}</h1>
        <p className="text-lg text-foreground/70 mb-8">{description}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition-all hover:shadow-glow"
        >
          <ArrowLeft size={20} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
