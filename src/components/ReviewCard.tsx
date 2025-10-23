import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
}

const ReviewCard = ({ name, review, rating }: ReviewCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-300">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-accent text-accent" : "text-muted"}
          />
        ))}
      </div>
      <p className="text-foreground/80 mb-4 italic">{review}</p>
      <p className="font-semibold text-primary">- {name}</p>
    </Card>
  );
};

export default ReviewCard;
