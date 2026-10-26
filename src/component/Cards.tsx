import { useState } from "react";
interface CardsProps {
  image: string;
  title: string;
  desc: string;
  desc1: string;
  className: string;
}
export default function Cards({ image, title, desc1,desc, className }: CardsProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={`grid w-[80vw] sm:w-[300px] max-w-full cursor-pointer select-none items-center justify-items-center rounded-[1rem] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
          isClicked ? "h-full" : "h-[30vh] sm:h-[400px]"
        } ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-[220px] w-full rounded-[0.5rem] object-cover"
      />

      <div className="pb-3 pt-3 text-center text-title">
        {title}
      </div>

      <div className="pb-3 pt-3 text-center text-m">
        {desc1}
      </div>
      <div
        className={`w-full overflow-hidden text-left transition-all text-m ${
          isClicked ? "max-h-96 opacity-100 duration-500" : "max-h-0 opacity-0 duration-200"
        }`}
      >
        {desc}
      </div>
    </div>
  );
}