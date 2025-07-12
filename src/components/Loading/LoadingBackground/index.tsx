import React from "react";

import { Star } from "lucide-react";

const LoadingBackground: React.FC = () => {
  return (
    <div className="loading-background">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="loading-rand"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            position: "absolute",
          }}
        >
          <Star className="loading-stars" />
        </div>
      ))}
    </div>
  );
};

export default LoadingBackground;
