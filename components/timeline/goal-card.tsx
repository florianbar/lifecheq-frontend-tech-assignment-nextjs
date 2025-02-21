import Image from "next/image";

import { CARD_POSITION, type Goal } from "@/data/goals";
import GoalCardArrow from "./goal-card-arrow";

interface GoalCardProps {
  goal: Goal;
  isLast: boolean;
}

export default function GoalCard({ goal, isLast }: GoalCardProps) {
  let cardPositionClasses = "top-0";
  let arrowYClasses = "-bottom-[15px]";
  let arrowXClasses = "left-1/2 transform -translate-x-1/2";
  let arrowRotation = 45;

  if (goal.position === CARD_POSITION.BOTTOM) {
    cardPositionClasses = "top-[274px]";
    arrowYClasses = "-top-[11px]";
    arrowRotation = -45;
  }

  if (isLast) {
    arrowXClasses = "right-[14px]";
  }

  return (
    <div
      className={`flex flex-col absolute left-0 w-full min-h-[136px] rounded-md shadow-lg bg-lifecheq-teal-dark p-2 pb-0 ${cardPositionClasses}`}
    >
      <Image
        src={goal.image}
        width={100}
        height={100}
        alt={goal.title}
        className="w-full h-auto"
      />

      <p className="flex-grow flex items-center justify-center p-2">
        {goal.title}
      </p>

      <div className={`absolute ${arrowXClasses} ${arrowYClasses}`}>
        <GoalCardArrow rotation={arrowRotation} />
      </div>
    </div>
  );
}
