import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CollectionCardProps {
  title: string;
  description: string;
  priceRange: string;
  image: string;
}

const CollectionCard = ({ title, description, priceRange, image }: CollectionCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-scale-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <p className="text-primary font-semibold text-lg mb-4">
          {priceRange}
        </p>
        <Button variant="default" className="w-full">
          View Collection
        </Button>
      </div>
    </Card>
  );
};

export default CollectionCard;
