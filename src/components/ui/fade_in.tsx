"use client";
import { InView } from "react-intersection-observer";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <InView threshold={0} rootMargin="-20% 0px">
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={
            inView
              ? "transition-all w-screen duration-1000 opacity-100 ease-in-out"
              : "transition-all w-screen -translate-x-1/2 duration-1000 opacity-30 ease-in-out"
          }
        >
          {children}
        </div>
      )}
    </InView>
  );
};
