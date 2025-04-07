import React from "react";

interface CardProps {
  platform: string;
  user: string;
  followers: number;
  followerGrowth: number;
  image?: string;
}

const platformIcons: Record<string, string> = {
  Facebook: "/images/icon-facebook.svg",
  Instagram: "/images/icon-instagram.svg",
  Twitter: "/images/icon-twitter.svg",
  Youtube: "/images/icon-youtube.svg",
};

function getBorderColor(platform: string) {
  switch (platform) {
    case "Facebook":
      return "border-t-blue-600";
    case "Twitter":
      return "border-t-sky-400";
    case "Instagram":
      return "border-t-gradient-instagram"; 
    case "Youtube":
      return "border-t-red-600";
    default:
      return "border-t-gray-400";
  }
}

function formatFollowers(platform: string, followers: number): string {
  if (platform === "Instagram" && followers < 1000) {
    return `${followers}K`;
  }
  return followers.toString();
}

function Card({ platform, user, followers, followerGrowth, image }: CardProps) {
  const iconSrc = platformIcons[platform] || image || `/images/${platform.toLowerCase()}.svg`;
  const isPositive = followerGrowth >= 0;
  const growthIcon = isPositive ? "/images/icon-up.svg" : "/images/icon-down.svg";

  return (
    <div className={`p-4 border-t-4 ${getBorderColor(platform)} bg-gray-100 dark:bg-gray-800 rounded-lg h-48 md:h-52`}>

      <div className="flex items-center justify-center gap-2 pt-8">
        <img src={iconSrc} alt={platform} className="w-6 h-6" />
        <p className="text-sm font-semibold">{user}</p>
      </div>

      <h2 className="text-3xl font-bold flex justify-center">
        {formatFollowers(platform, followers)}
      </h2>

      <h2 className="uppercase text-xs tracking-widest text-gray-500 flex justify-center">
        Followers
      </h2>

      <div className="flex items-center justify-center gap-1 mt-2">
        <img src={growthIcon} alt="trend icon" className="w-3 h-3" />
        <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {followerGrowth} Today
        </p>
      </div>
    </div>
  );
}

export default Card;
