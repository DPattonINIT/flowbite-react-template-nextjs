'use client'
import React, { useState, useEffect } from "react";
import { fetchSocialMediaStats, SocialMediaStats } from "@/Services/socialmediaService";
import DarkModeToggle from "./components/DarkModeToggle";
import Card from "./components/Card";
import OverviewSection from "./components/OverviewSection";

export default function Dashboard() {
  const [stats, setStats] = useState<SocialMediaStats[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSocialMediaStats();
      console.log("API Response:", data);  
      setStats(data);
      setLoading(false);  
    };

    fetchData();
  }, []); 

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
        <DarkModeToggle />
      </div>
        <div>
        <h2 className="text-bold ">Total Followers:23,004 </h2>
        </div>

      {loading ? (
        <div className="flex justify-center items-center mt-6">
          <p>Loading...</p>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              platform={stat.platform}
              user={stat.user}
              followers={stat.followers || stat.subscribers || stat.totalViews}
              followerGrowth={stat.followerGrowth || stat.subscribersGrowth || stat.totalViewsGrowth}
              image={stat.image}
            />
          ))}
        </div>
      )}

  
      <OverviewSection  />
    </main>
  );
}
