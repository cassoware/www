// import { ExpandingCircle } from "@/components/animation/expanding_circle";
import { Rocket } from "@/components/animation/rocket";
import { WelcomeTitle } from "@/components/ui/welcome_title";

// type delayColorPair = [number, string];

// const circleDelays: delayColorPair[] = [
//   [0, "white"],
//   [0.75, "yellow"],
//   [1.5, "red"],
// ];

export default function Home() {
  return (
    <section className="dark:text-white relative z-[-2] flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <Rocket />
      {/* {circleDelays.map(([delay, color]: delayColorPair, idx) => ( */}
      {/*   <ExpandingCircle key={delay} delay={delay} color={color}> */}
      {/*     {idx == circleDelays.length - 1 ? ( */}
      {/*       <h1>How do I make this shit stay still</h1> */}
      {/*     ) : null} */}
      {/*   </ExpandingCircle> */}
      {/* ))} */}
      <WelcomeTitle />
    </section>
  );
}
