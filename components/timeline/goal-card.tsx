import { type Goal } from "@/data/goals";
import Image from "next/image";

interface GoalCardProps {
  goal: Goal;
}

export default function GoalCard({ goal }: GoalCardProps) {
  return (
    <div
      className={`flex flex-col absolute left-0 w-full min-h-[136px] ${
        goal.order === 0 ? "top-0" : "top-[250px]"
      } rounded-md shadow-lg bg-[#173F4B] hover:bg-[#3C7F90] p-2 pb-0`}
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
    </div>
  );
}
