import { GOALS_DATA, type Marker } from "@/data/goals";

import MarkerComponent from "./marker";

export default function Timeline() {
  return (
    <div className="flex space-x-2 justify-between leading-[1.125rem] text-center">
      {GOALS_DATA.map((marker: Marker, index: number) => (
        <MarkerComponent key={index} marker={marker} index={index} />
      ))}
    </div>
  );
}
