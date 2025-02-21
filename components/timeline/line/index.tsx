import StartMarker from "./start-marker";
import EndArrow from "./end-arrow";

interface LineProps {
  progress: number;
}

export default function Line({ progress }: LineProps) {
  const width = Math.round(progress);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10">
        <StartMarker />
      </div>

      {/* Dotted line */}
      <div className="border-t-[2px] border-dotted border-white" />

      {/* Progress line */}
      <div className={`absolute top-0 left-0 bg-white w-[${width}%] h-[2px]`} />

      <div className="absolute top-[-6px] right-[62px] z-10">
        <EndArrow />
      </div>
    </div>
  );
}
