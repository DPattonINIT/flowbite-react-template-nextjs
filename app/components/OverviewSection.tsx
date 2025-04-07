import React from "react";
import OverviewCard from "./OverviewCard";

function OverviewSection() {
  const overviewData = [
    // TOP ROW
    {
      title: "Page Views",
      count: 87,
      growth: 3,
      image: "/images/icon-facebook.svg",
    },
    {
      title: "Likes",
      count: 52,
      growth: -2,
      image: "/images/icon-facebook.svg",
    },
    {
      title: "Likes",
      count: 5462,
      growth: 2257,
      image: "/images/icon-instagram.svg",
    },
    {
      title: "Profile Views",
      count: 52000,
      growth: 1375,
      image: "/images/icon-instagram.svg",
    },
    

    // BOTTOM ROW
    {
      title: "Retweets",
      count: 117,
      growth: 303,
      image: "/images/icon-twitter.svg",
    },
    {
      title: "Likes",
      count: 507,
      growth: 553,
      image: "/images/icon-twitter.svg",
    },
    {
      title: "Likes",
      count: 107,
      growth: -19,
      image: "/images/icon-youtube.svg",
    },
    {
      title: "Total Views",
      count: 1407,
      growth: -12,
      image: "/images/icon-youtube.svg",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {overviewData.map((item, index) => (
        <OverviewCard
          key={index}
          title={item.title}
          count={item.count}
          growth={item.growth}
          image={item.image}
        />
      ))}
    </section>
  );
}

export default OverviewSection;
