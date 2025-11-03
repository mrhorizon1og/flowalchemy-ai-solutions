import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            FlowAlchemy
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefits
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
