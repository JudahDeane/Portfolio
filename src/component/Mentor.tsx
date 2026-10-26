
import Cards from "./Cards";

import marcImage from '../assets/1694688227978.jpeg'
import drewImage from '../assets/Judah Deane and Drew Cosgrove2.jpg'
export default function Mentor() {
  return (
    <div className="z-10 rounded-[0.75rem] bg-white p-2">
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="col-span-1 text-title sm:col-span-2">My mentors</div>

        <div className="grid min-h-[30vh] items-center justify-center">
          <Cards
            desc="Judah has a genuine passion for robotics and is always keen to deepen his understanding. I have been particularly impressed by the relevant and thoughtful questions he asks, which demonstrate both curiosity and a real desire to understand the ideas and challenges behind robotics."
            title="Marc Carmichael"
            desc1="Associate Professor at UTS"
            image={marcImage}
            className=""
          />
        </div>

        <div className="grid min-h-[30vh] items-center justify-center">
          <Cards
            desc=" Judah has been a thoughtful and committed student who has shown persistence in working through the challenges of his robotics project. He has shown genuine curiosity in exploring the problem space and learning the technologies within it."
            title="Drew Cosgrove"
            desc1="Lecturer at USYD"
            image={drewImage}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

