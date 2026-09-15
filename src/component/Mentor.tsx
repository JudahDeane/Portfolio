import { useState } from "react";

export default function Mentor() {
  return (
    <div className="z-10 rounded-[0.75rem] bg-white p-2">
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="col-span-1 text-title sm:col-span-2">My mentors</div>

        <div className="grid min-h-[30vh] items-center justify-center">
          <Cards
            desc="Judah has a genuine passion for robotics and is always keen to deepen his understanding. I have been particularly impressed by the relevant and thoughtful questions he asks, which demonstrate both curiosity and a real desire to understand the ideas and challenges behind robotics."
            title="Marc Carmichael"
            image="src\\assets\\1694688227978.jpeg"
            className=""
          />
        </div>

        <div className="grid min-h-[30vh] items-center justify-center">
          <Cards
            desc=""
            title="Drew Cosgrove"
            image="src\\assets\\Judah Deane and Drew Cosgrove2.jpg"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

interface CardsProps {
  image: string;
  title: string;
  desc: string;
  className: string;
}

function Cards({ image, title, desc, className }: CardsProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={`${className} grid w-[80vw] sm:w-[300px] max-w-full cursor-pointer select-none items-center justify-items-center rounded-[1rem] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
          isClicked ? "h-full" : "h-[30vh] sm:h-[400px]"
        }`}
    >
      <img
        src={image}
        alt={title}
        className="h-[220px] w-full rounded-[0.5rem] object-cover"
      />

      <div className="pb-3 pt-3 text-center text-title">
        {title}
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