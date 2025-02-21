export default function StartMarker() {
  return (
    <div className="relative">
      {/* Arrow */}
      <div className="size-3.5 border-t-2 border-r-2 transform rotate-45 border-white relative z-10" />
      {/* Cover-up */}
      <div className="absolute top-0 left-2 w-[70px] h-3 bg-background" />
    </div>
  );
}
