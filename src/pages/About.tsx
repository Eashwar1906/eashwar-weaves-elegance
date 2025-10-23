import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import weavingImage from "@/assets/weaving-process.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Weaving tradition, heritage, and excellence for over three decades
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img
                  src={weavingImage}
                  alt="Traditional Weaving Process"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  The Heritage of Eashwar Collections
                </h2>
                <div className="space-y-4 text-lg text-foreground/80">
                  <p>
                    Established in the heart of India's textile industry, Eashwar Handloom & Powerloom Collections 
                    has been a beacon of traditional craftsmanship and quality for over 30 years. Our journey began 
                    with a simple vision: to preserve and promote the rich heritage of Indian handloom weaving while 
                    embracing modern powerloom techniques.
                  </p>
                  <p>
                    Every saree that leaves our collection tells a story of skilled artisans, time-honored techniques, 
                    and unwavering dedication to quality. We work directly with master weavers across India, ensuring 
                    that each piece meets our exacting standards of excellence.
                  </p>
                  <p>
                    Our commitment extends beyond business – we are passionate about supporting traditional weaving 
                    communities and preserving cultural heritage for future generations. When you choose Eashwar Collections, 
                    you become part of this beautiful legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-primary-foreground">🧵</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Craftsmanship</h3>
                <p className="text-foreground/70">
                  Every saree is meticulously crafted with attention to detail, ensuring the highest quality standards.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-primary-foreground">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Cultural Heritage</h3>
                <p className="text-foreground/70">
                  Preserving traditional weaving techniques and supporting artisan communities across India.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-primary-foreground">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Customer Trust</h3>
                <p className="text-foreground/70">
                  Building lasting relationships through authentic products and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technique Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
              Traditional Weaving Techniques
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Handloom Weaving</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our handloom sarees are created using traditional manual looms, where skilled artisans 
                  meticulously weave each thread by hand. This age-old technique produces unique patterns 
                  and textures that cannot be replicated by machines. The process requires immense skill, 
                  patience, and artistic vision, resulting in truly one-of-a-kind pieces.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Powerloom Craftsmanship</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our powerloom collection combines modern technology with traditional designs. While machine-aided, 
                  these sarees maintain the essence of Indian textile artistry with consistent patterns and 
                  superior finish. This technique allows us to offer high-quality sarees at accessible prices 
                  while preserving traditional motifs and color combinations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
