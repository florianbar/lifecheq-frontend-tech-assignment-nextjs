"use client";

import { useEffect, useState } from "react";

import { formatDateDifference } from "@/utils/dates";
import { GOALS_DATA, type Marker, type Goal } from "@/data/goals";
import GoalCard from "./goal-card";

interface MarkerProps {
  marker: Marker;
  index: number;
}

export default function Marker({ marker, index }: MarkerProps) {
  const [markerLabel, setMarkerLabel] = useState<string | null>(null);

  useEffect(() => {
    let markerLabel = null;

    if (marker.date) {
      markerLabel = formatDateDifference(marker.date);
    } else if (index === GOALS_DATA.length - 1) {
      markerLabel = "Ultimately";
    }

    setMarkerLabel(markerLabel);
  }, [marker, index]);

  return (
    <div key={index} className="w-[130px] relative">
      {marker.goals.map((goal: Goal, index: number) => {
        return <GoalCard key={index} goal={goal} />;
      })}

      {markerLabel && (
        <p className="absolute left-0 w-full top-[200px] text-center opacity-60">
          {markerLabel}
        </p>
      )}

      {marker.date && (
        <span className="absolute left-1/2 top-[180px] size-2 bg-[#00B897] rounded-full" />
      )}
    </div>
  );
}
