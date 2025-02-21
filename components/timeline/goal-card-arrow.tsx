interface GoalCardArrowProps {
  rotation: number;
}

export default function GoalCardArrow({ rotation }: GoalCardArrowProps) {
  let rotationClasses: string;

  switch (rotation) {
    case 45:
      rotationClasses = "-rotate-45 origin-top-left";
      break;
    case -45:
    default:
      rotationClasses = "rotate-45 origin-bottom-left";
  }

  return (
    <div className={`w-[20px] overflow-hidden inline-block`}>
      <div
        className={`size-[14px] bg-lifecheq-teal-dark transform ${rotationClasses}`}
      />
    </div>
  );
}
