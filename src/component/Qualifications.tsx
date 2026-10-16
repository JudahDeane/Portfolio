
 export default function Qualifications(){

    return(
          <div className="z-10 rounded-[0.75rem] bg-white p-2">
      <div className="w-full 1 gap-3 flex flex-col">
        <div className="text-title ">My Qualifications</div>
           <ListBox className=""  title="Cert III in Information Technology"/> 
           <ListBox className=""  title="Diploma in Information Technology (Ongoing)"/> 

        </div>
        </div>
        
    )
 }


 interface listProps{
    className: String,
    title:string
 }

function ListBox({className, title}: listProps){

    return(
            <div className={className +" hover:translate-y-[-0.5vh] hover:shadow-2xl hover:scale-[1.04] transition-all duration-75 bg-white filter rounded-[1cqw] shadow-md  p-5  justify-center items-center grid grid-cols-3 grid-rows-1 max-h-[10vh]"}>
          <div className="pl-5 list-disc text-left"> 
            <ul className="list-disc">
                <li className=" col-start-2 row-start-1">{title || "test skill"}</li>
                
            </ul>
            </div>
        </div>
    )
}