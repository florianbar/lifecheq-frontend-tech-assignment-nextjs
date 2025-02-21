import StartMarker from "./start-marker";
import EndArrow from "./end-arrow";

interface LineProps {
  progress: number;
}

export default function Line({ progress }: LineProps) {
  const width = Math.round(progress);

  return (
    <div className="relative">
      <div className="absolute z-30 top-0 left-0">
        <StartMarker />
      </div>

      {/* Dotted line */}
      <div className="relative z-10 border-t-[2px] border-dotted border-white" />

      {/* Progress line */}
      <div
        className={`absolute z-20 top-0 left-0 bg-white w-[${width}%] h-[2px]`}
      />

      <div className="absolute z-30 top-[-6px] right-[100px]">
        <EndArrow />
      </div>
    </div>
  );
}
