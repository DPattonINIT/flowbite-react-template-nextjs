'use client'; 
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

 
  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <h2 className="pr-5">Dark Mode</h2>
      <label
        htmlFor="dark-mode-toggle"
        className="relative inline-flex items-center cursor-pointer"
        onClick={toggleTheme} 
      >
        <div className="w-10 h-6 bg-gray-200 dark:bg-gray-600 rounded-full">
        </div>
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-900 rounded-full transition-all duration-300 ease-in-out transform ${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          }`}
        ></span>
      </label>
    </div>
  );
}
