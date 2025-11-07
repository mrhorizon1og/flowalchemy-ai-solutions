import { Sparkles, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Address</h3>
            <address className="not-italic text-muted-foreground leading-relaxed">
              Azad Chowk, Near Hanuman<br />
              Mandir, Sadar, Nagpur,<br />
              Maharashtra, 440001
            </address>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* AI-Powered Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">AI-Powered Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom AI Agent Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  AI-Powered Web & App Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                FlowAlchemy
              </span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              © 2025 FlowAlchemy. Transforming businesses through AI automation.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
