interface LineProps {
  progress: number;
}

export default function Line({ progress }: LineProps) {
  const width = Math.round(progress);

  return (
    <div className="relative">
      {/* Start marker */}
      <div className="absolute top-0 left-0 w-[50px] z-10">
        {/* Start marker dot */}
        <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 size-[18px] bg-background rounded-full border-[5px] border-solid border-lifecheq-primary z-10" />
        <p className="absolute top-[17px] text-center opacity-60 leading-[1.125rem]">
          You are here
        </p>
        {/* Start marker cover-up */}
        <div className="absolute -top-1 w-[37px] h-3 bg-background" />
      </div>

      {/* Dotted line */}
      <div className="border-t-[2px] border-dotted border-white" />

      {/* Progress line */}
      <div className={`absolute top-0 left-0 bg-white w-[${width}%] h-[2px]`} />
    </div>
  );
}
