import React from "react";

interface OverviewCardProps {
  title: string;
  count: number;
  growth: number;
  image: string;
}

function OverviewCard({ title, count, growth, image }: OverviewCardProps) {
  const isPositive = growth >= 0;
  const growthIcon = isPositive
    ? "/images/icon-up.svg"
    : "/images/icon-down.svg";


  const formatCount = () => {
  
    if (title === "Followers" && count === 11000) return "11K";
    if (title === "Profile Views" && count >= 1000) return `${Math.round(count / 1000)}K`;

    return count.toString();
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{title}</p>
        <img src={image} alt={title} className="w-6 h-6" />
      </div>
      <div className="flex justify-between items-center pt-8">
        <h2 className="text-2xl font-bold">{formatCount()}</h2>
        <div className="flex items-center gap-1">
          <img src={growthIcon} alt="arrow icon" className="w-3 h-3" />
          <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {Math.abs(growth)}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
