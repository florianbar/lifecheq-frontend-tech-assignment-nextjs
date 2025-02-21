export default function StartMarker() {
  return (
    <div className="w-[50px]">
      {/* Dot */}
      <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 size-[18px] bg-background rounded-full border-[5px] border-solid border-lifecheq-primary z-10" />
      <p className="absolute top-[17px] text-center opacity-60 leading-[1.125rem]">
        You are here
      </p>
      {/* Cover-up */}
      <div className="absolute top-0 w-[37px] h-3 bg-background" />
    </div>
  );
}
