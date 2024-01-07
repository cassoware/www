import { Rocket } from "@/components/animation/rocket";
import { Stars as Star } from "@/components/animation/stars";
import { WelcomeTitle } from "@/components/ui/welcome_title";
import { FadeIn } from "@/components/ui/fade_in";
// type delayColorPair = [number, string];

// const circleDelays: delayColorPair[] = [
//   [0, "white"],
//   [0.75, "yellow"],
//   [1.5, "red"],
// ];

import {
  STAR_HW,
  STAR_COUNT,
  INIT_STAR_HEIGHT_LIMIT,
  POSITION_NOISE,
} from "@/constants/animation_constants";

const horizontalTiles: number = 100 / STAR_HW;
const verticalTiles = INIT_STAR_HEIGHT_LIMIT / STAR_HW;
const gridTiles = horizontalTiles * verticalTiles;

type coordinate = { i: number; j: number };
type coordinateMap = { [key: number]: coordinate };

export default function Home() {
  const tileSet = Array.from({ length: gridTiles }, (_, index) => index).reduce(
    (acc: Set<number>, cur: number) => {
      acc.add(cur);
      return acc;
    },
    new Set<number>(),
  );

  const acc: coordinateMap = {};
  Array.from({ length: STAR_COUNT }).forEach((_, idx) => {
    //pick a random tile from tileSet
    const tileArr = Array.from(tileSet);
    const randomTile = tileArr[Math.floor(Math.random() * tileSet.size)];
    tileSet.delete(randomTile);

    //convert to coordinate
    const i =
      Math.floor(randomTile / horizontalTiles) * STAR_HW +
      Math.random() * POSITION_NOISE -
      POSITION_NOISE / 2;
    const j =
      (randomTile % horizontalTiles) * STAR_HW +
      Math.random() * POSITION_NOISE -
      POSITION_NOISE / 2;
    acc[idx] = { i, j };
  });

  return (
    <div className="overflow-x-hidden dark:bg-gray-900 dark:text-white z-[-2] flex flex-col items-center justify-center">
      <div className="absolute z-[1] h-screen">
        <Rocket />
      </div>
      <div className="absolute top-0 h-screen w-screen">
        <div className="flex flex-1 items-start justify-start">
          {Array.from({ length: STAR_COUNT }).map((_val, idx) => (
            <Star key={idx} id={idx} initX={acc[idx].j} initY={acc[idx].i} />
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
