"use client";
import { useEffect, useState } from "react";

export const WelcomeTitle = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <h1
      className={`transition-opacity delay-500 duration-1000 ease-in ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1>That's your business with</h1>
      <h1 className={`font-quicksand font-bold text-white `}>CASSOWARE</h1>
    </h1>
  );
};
