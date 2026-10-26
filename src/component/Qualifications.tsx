interface CardsProps {
  image: string;
  title: string;
  desc: string;
  desc1: string;
  className?: string;
}

function Cards1({ image, title, desc1, desc, className = "" }: CardsProps) {
  return (
    <div
      className={`grid w-full max-w-full select-none items-center justify-items-center rounded-[1rem] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-[220px] w-full rounded-[0.5rem] object-cover"
        />
      )}

      <div className="pb-3 pt-3 text-center text-title font-semibold text-lg">
        {title}
      </div>

      <div className="pb-3 pt-3 text-center text-m text-gray-600">
        {desc1}
      </div>

      {desc && (
        <div className="w-full overflow-hidden text-left transition-all text-m text-gray-500">
          {desc}
        </div>
      )}
    </div>
  );
}

export default function Qualifications() {
  return (
    <div className="z-10 rounded-[0.75rem] bg-white p-2">
      <div className="w-full gap-3 grid grid-cols-1 p-3 justify-items-center place-items-center sm:grid-cols-3">
        <div className="text-title col-span-1 sm:col-span-3 text-2xl font-bold mb-2">
          My Qualifications
        </div>

        <Cards1
          image=""
          title="Certificate III in Information Technology"
          desc1="TAFE NSW Ultimo"
          desc=""
        />
        <Cards1
          image=""
          title="Diploma in Information Technology (Ongoing)"
          desc1="University of New England"
          desc=""
        />
        <Cards1
          image=""
          title="1st Place Statewide"
          desc1="IDT Virtual Work Placement"
          desc=""
        />
        <Cards1
          image=""
          title="Bronze Duke of Edinburgh's Award"
          desc1="South Sydney High School"
          desc=""
        />
        <Cards1
          image=""
          title="Bronze Principal's Award"
          desc1="South Sydney High School"
          desc=""
        />
        <Cards1
          image=""
          title="Silver Principal's Award"
          desc1="South Sydney High School"
          desc=""
        />
        <Cards1
          image=""
          title="Big Picture High Achiever"
          desc1="South Sydney High School"
          desc=""
          className="sm:col-start-2"
        />
      </div>
    </div>
  );
}