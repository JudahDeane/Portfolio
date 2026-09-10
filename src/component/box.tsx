interface SkillProps{
    img: string;
    title: string;
    className: string;
}

export default function Box({img,title , className}: SkillProps) {
    
    return (
        <div className={className +" hover:translate-y-[-0.5vh] hover:shadow-2xl hover:scale-[1.04] transition-all duration-75 bg-white filter rounded-[1cqw] shadow-md  p-10  flex-col justify-center items-center grid grid-cols-3 grid-rows-2"}>
            <img className="w-[5cqw] col-start-2 row-start-1" src={img || "src\assets\Tailwind_CSS_Logo.svg.webp"}></img>
            <div className=" col-start-2 row-start-2">{title || "test skill"}</div>
        </div>
    )
}