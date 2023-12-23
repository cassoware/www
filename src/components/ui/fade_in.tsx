"use client";
import { InView } from "react-intersection-observer";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <InView threshold={1} rootMargin="-10% 0px">
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={
            inView
              ? "transition-all flex w-screen justify-center opacity-100 duration-1000"
              : "transition-all flex w-screen justify-center duration-1000 opacity-0"
          }
        >
          {children}
        </div>
      )}
    </InView>
  );
};
