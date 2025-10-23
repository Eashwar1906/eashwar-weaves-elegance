import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CollectionCard from "@/components/CollectionCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import handloomImage from "@/assets/handloom-collection.jpg";
import powerloomImage from "@/assets/powerloom-collection.jpg";
import silkImage from "@/assets/silk-collection.jpg";
import cottonImage from "@/assets/cotton-collection.jpg";

const Index = () => {
  const featuredCollections = [
    {
      title: "Handloom Sarees",
      description: "Authentic handwoven masterpieces with intricate traditional patterns",
      priceRange: "₹2,500 - ₹15,000",
      image: handloomImage,
    },
    {
      title: "Powerloom Sarees",
      description: "Premium quality sarees with contemporary designs and classic elegance",
      priceRange: "₹1,500 - ₹8,000",
      image: powerloomImage,
    },
    {
      title: "Silk Sarees",
      description: "Luxurious pure silk sarees perfect for weddings and celebrations",
      priceRange: "₹5,000 - ₹25,000",
      image: silkImage,
    },
    {
      title: "Cotton Sarees",
      description: "Comfortable everyday wear with beautiful prints and soft textures",
      priceRange: "₹800 - ₹3,500",
      image: cottonImage,
    },
  ];

  const customerReviews = [
    {
      name: "Priya Sharma",
      review: "The quality of handloom sarees is exceptional! I bought three sarees for my wedding season and received countless compliments.",
      rating: 5,
    },
    {
      name: "Lakshmi Menon",
      review: "Beautiful collection and excellent customer service. The staff helped me choose the perfect saree for my daughter's engagement.",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      review: "Love their cotton sarees for daily wear. Comfortable, elegant, and affordable. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Introduction Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Welcome to Eashwar Collections
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              For generations, we have been weaving dreams into reality through our exquisite handloom and powerloom sarees. 
              Each piece represents the rich cultural heritage of Indian textiles, crafted with passion and perfection. 
              Visit our store to experience the elegance of traditional craftsmanship.
            </p>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Featured Collections
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our carefully curated selection of traditional sarees
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCollections.map((collection) => (
                <CollectionCard key={collection.title} {...collection} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/collections">
                <Button size="lg" variant="default">
                  View All Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by thousands of satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {customerReviews.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Visit Our Store Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Experience the beauty of traditional sarees in person. Our expert staff is ready to help you find the perfect saree for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get Directions
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
