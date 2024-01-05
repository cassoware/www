// import { ExpandingCircle } from "@/components/animation/expanding_circle";
import { Rocket } from "@/components/animation/rocket";
import { Stars as Star } from "@/components/animation/stars";
import { WelcomeTitle } from "@/components/ui/welcome_title";
import { FadeIn } from "@/components/ui/fade_in";
import { STAR_COUNT } from "@/constants/animation_constants";
import { useMotionValueEvent, useScroll } from "framer-motion";
// type delayColorPair = [number, string];

// const circleDelays: delayColorPair[] = [
//   [0, "white"],
//   [0.75, "yellow"],
//   [1.5, "red"],
// ];
export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white z-[-2] flex flex-col items-center justify-center">
      <div className="absolute z-[1] h-screen">
        <Rocket />
      </div>
      <div className="absolute h-1/4 top-0 w-screen">
        <div className="relative">
          {Array.from({ length: STAR_COUNT }).map((_val, idx) => (
            <Star key={idx} id={idx} />
          ))}
        </div>
      </div>
      <section className="flex flex-col items-center justify-center h-screen w-screen text-center p-4">
        <div className="top-0"></div>
        <WelcomeTitle />
      </section>
      <section className="flex h-screen w-screen justify-center">
        <div className="h-min">
          <FadeIn>
            <p className="text-center">Your wish is our command</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
