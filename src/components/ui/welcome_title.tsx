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
      className={`transition-opacity delay-500 duration-1000 scale-150 ease-in ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1>
        That's <b>your business</b> with
      </h1>
      <h1 className={"font-quicksand text-white"}>CASSOWARE</h1>
    </h1>
  );
};
