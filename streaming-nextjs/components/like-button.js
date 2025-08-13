"use client";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLinked] = useState(false);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        setLinked(!liked);
      }}
      className="h-10 w-10"
    >
      <Heart
        className={`h-5 w-5 ${
          liked ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </Button>
  );
}
