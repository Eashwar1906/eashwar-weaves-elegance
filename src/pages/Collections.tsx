import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard";
import handloomImage from "@/assets/handloom-collection.jpg";
import powerloomImage from "@/assets/powerloom-collection.jpg";
import silkImage from "@/assets/silk-collection.jpg";
import cottonImage from "@/assets/cotton-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Handloom Sarees",
      description: "Authentic handwoven masterpieces featuring intricate traditional patterns, zari work, and timeless designs. Each piece is a testament to the skill of our master weavers.",
      priceRange: "₹2,500 - ₹15,000",
      image: handloomImage,
    },
    {
      title: "Powerloom Sarees",
      description: "Premium quality sarees combining contemporary designs with classic elegance. Perfect balance of tradition and modernity at affordable prices.",
      priceRange: "₹1,500 - ₹8,000",
      image: powerloomImage,
    },
    {
      title: "Pure Silk Sarees",
      description: "Luxurious pure silk sarees with elaborate zari work, perfect for weddings, festivals, and grand celebrations. Ultimate elegance and sophistication.",
      priceRange: "₹5,000 - ₹25,000",
      image: silkImage,
    },
    {
      title: "Cotton Sarees",
      description: "Comfortable everyday wear featuring beautiful block prints, soft textures, and breathable fabrics. Ideal for daily wear and casual occasions.",
      priceRange: "₹800 - ₹3,500",
      image: cottonImage,
    },
    {
      title: "Wedding Collection",
      description: "Exclusive bridal sarees with heavy embellishments, intricate designs, and rich fabrics. Make your special day unforgettable with our wedding collection.",
      priceRange: "₹8,000 - ₹30,000",
      image: silkImage,
    },
    {
      title: "Festive Sarees",
      description: "Vibrant and colorful sarees perfect for festivals and celebrations. Features traditional motifs and auspicious colors for every festive occasion.",
      priceRange: "₹2,000 - ₹12,000",
      image: handloomImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
              Our Collections
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Explore our diverse range of handloom and powerloom sarees, each crafted with precision and care
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard key={collection.title} {...collection} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Custom Orders & Bulk Inquiries
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Looking for something specific or planning a bulk order? We offer customization services 
              and special pricing for bulk purchases. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Contact for Custom Orders
                </button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  WhatsApp Inquiry
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
