import { GOALS_DATA, type Marker } from "@/data/goals";

import MarkerComponent from "./marker";
import Line from "./line";

export default function Timeline() {
  const totalMarkersWithDate = GOALS_DATA.filter(
    (marker: Marker) => marker.date
  ).length;
  const xOffset = 0.5;
  const lineProgress =
    ((totalMarkersWithDate - xOffset) / GOALS_DATA.length) * 100;

  return (
    <div className="relative">
      <div className="flex space-x-2 justify-evenly leading-[1.125rem] text-center relative z-20 mx-[60px]">
        {GOALS_DATA.map((marker: Marker, index: number) => (
          <MarkerComponent key={index} marker={marker} index={index} />
        ))}
      </div>
      <div className="relative z-10 mt-[183px]">
        <Line progress={lineProgress} />
      </div>
    </div>
  );
}
