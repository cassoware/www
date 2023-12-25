// import { ExpandingCircle } from "@/components/animation/expanding_circle";
import { InView } from "react-intersection-observer";
import { Rocket } from "@/components/animation/rocket";
import { Stars } from "@/components/animation/stars";
import { WelcomeTitle } from "@/components/ui/welcome_title";
import { FadeIn } from "@/components/ui/fade_in";

// type delayColorPair = [number, string];

// const circleDelays: delayColorPair[] = [
//   [0, "white"],
//   [0.75, "yellow"],
//   [1.5, "red"],
// ];

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white z-[-2] flex flex-col items-center justify-center">
      <div className="absolute">
        <Rocket />
        {/* <Stars></Stars> */}
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
