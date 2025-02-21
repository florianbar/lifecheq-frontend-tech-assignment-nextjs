interface GoalCardArrowProps {
  rotation: number;
}

export default function GoalCardArrow({ rotation }: GoalCardArrowProps) {
  let rotationClasses: string;
  let lineYClasses: string;

  switch (rotation) {
    case 45:
      rotationClasses = "-rotate-45 origin-top-left";
      lineYClasses = "bottom-[-16px]";
      break;
    case -45:
    default:
      rotationClasses = "rotate-45 origin-bottom-left";
      lineYClasses = "top-[-19px]";
  }

  return (
    <div className="relative">
      <div className={`w-[20px] overflow-hidden inline-block`}>
        <div
          className={`size-[14px] bg-lifecheq-teal-dark transform ${rotationClasses}`}
        />
      </div>
      <span
        className={`absolute block left-1/2 transform -translate-x-1/2 w-[2px] h-[16px] bg-lifecheq-primary/40 ${lineYClasses}`}
      />
    </div>
  );
}
