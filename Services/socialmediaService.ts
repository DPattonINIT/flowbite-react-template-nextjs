export interface SocialMediaStats {
    platform: string;
    user: string;
    followers: number;
    followerGrowth: number;
    pageViews: number;
    pageViewsGrowth: number;
    retweets: number;
    retweetsGrowth: number;
    likes: number;
    likesGrowth: number;
    profileViews: number;
    profileViewsGrowth: number;
    totalViews: number;
    totalViewsGrowth: number;
    subscribers: number;
    subscribersGrowth: number;
    image: string;
  }
  
  const API_URL = "https://darrylssocialmediaapi-dcejgabvbfbrc7fy.westus-01.azurewebsites.net/SocialMedia/stats";
  
  

export const fetchSocialMediaStats = async (): Promise<SocialMediaStats[]> => {
    try {
      const response = await fetch("https://darrylssocialmediaapi-dcejgabvbfbrc7fy.westus-01.azurewebsites.net/SocialMedia/stats");
  
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return [];
      }
  
      const data = await response.json();
  
      if (!data.platforms || !Array.isArray(data.platforms)) {
        console.error("Unexpected API response:", data);
        return [];
      }
  
      return data.platforms;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  
  
  
  
  