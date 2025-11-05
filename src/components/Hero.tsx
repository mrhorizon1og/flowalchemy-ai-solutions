import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Smarter", "Faster", "Effortless", "Profitable", "Scalable"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentWord.substring(0, displayedText.length - 1)
            : currentWord.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-10">
            <span className="text-sm font-semibold text-primary tracking-wide">AI Automation Simplified</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 tracking-tight leading-[1.1]">
            Build{" "}
            <span className="inline-block font-black text-accent min-w-[280px] md:min-w-[400px] text-left">
              {displayedText}
              <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse align-middle" />
            </span>
            <br />
            Systems with{" "}
            <span 
              className="inline-block relative bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient-shift"
              style={{
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(135deg, hsl(87 100% 51%), hsl(73 100% 60%), hsl(82 88% 52%), hsl(87 100% 51%))"
              }}
            >
              FlowAlchemy
            </span>
          </h1>

          <p className="text-base md:text-lg font-body text-muted-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            FlowAlchemy helps modern businesses integrate AI to streamline sales, support, and operations — designing intelligent systems that automate repetitive tasks, connect workflows, and keep your business running seamlessly in a world that never slows down.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("contact")}
              className="text-base"
            >
              Get Your Free Automation Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("solutions")}
              className="text-base border-primary text-primary hover:bg-primary/10"
            >
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">50%</div>
              <div className="text-sm text-muted-foreground font-semibold">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground font-semibold">Lead Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-semibold">Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
