import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sarees.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Traditional Indian Sarees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in">
            Exquisite Handloom & Powerloom Sarees
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in">
            Discover the timeless beauty of traditional Indian textiles, woven with heritage and crafted with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Link to="/collections">
              <Button
                size="lg"
                variant="secondary"
                className="group font-medium shadow-elegant hover:shadow-glow transition-all"
              >
                Shop Collections
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
