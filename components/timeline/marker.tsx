"use client";

import { useMemo } from "react";

import { formatDateDifference } from "@/utils/dates";
import { GOALS_DATA, type Marker, type Goal } from "@/data/goals";
import GoalCard from "./goal-card";

interface MarkerProps {
  marker: Marker;
  index: number;
}

export default function Marker({ marker, index }: MarkerProps) {
  const isLastMarker = useMemo(() => {
    return index === GOALS_DATA.length - 1;
  }, [index]);

  const markerLabel = useMemo(() => {
    let markerLabel = null;

    if (marker.date) {
      markerLabel = formatDateDifference(marker.date);
    } else if (isLastMarker) {
      markerLabel = "Ultimately";
    }

    return markerLabel;
  }, [marker, isLastMarker]);

  return (
    <div key={index} className="w-[130px] relative">
      {marker.goals.map((goal: Goal, index: number) => {
        return <GoalCard key={index} goal={goal} isLast={isLastMarker} />;
      })}

      {/* Dot */}
      {marker.date && (
        <span className="absolute left-1/2 transform -translate-x-1/2 top-[180px] size-2 bg-lifecheq-primary rounded-full" />
      )}

      {markerLabel && (
        <p className="absolute left-0 w-full top-[200px] text-center opacity-60">
          {markerLabel}
        </p>
      )}
    </div>
  );
}
