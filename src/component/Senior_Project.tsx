
import thorImage1 from "../assets/IMG_2979.jpg"
import thorImage2 from "../assets/thor image1.jpg"
import thorImage3 from "../assets/Screenshot 2026-10-08 140751.png"
import thorImage4 from "../assets/thingoconstuctuion.jpg"
import thorImage5 from "../assets/Judah Deane 3.jpg"
export default function SeniorProject() {
    return (
        <div className="flex flex-col justify-center items-center gap-[1cqw] mt-[8vh] flex-1    ">
            <div className="main-l flex flex-col gap-[2cqw]">
                <div className="text-title">Robotics Education With A Robotic Arm</div>
                <div className="grid grid-cols-5 ">
                    <div className="text flex flex-col col-span-2 ">
                         <div>The goal of my senior project is to educate people in robotics.
                       I am using the <a href='http://thor.angel-lm.com/' className=' underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a> as a base design. then after iterative testing and fixing erros </div>
                    </div>
                    <div className=" grid col-span-3 grid-rows-3 grid-cols-3 image object-cover max-h-[50vh]">  
                        <img src={thorImage5} className=" row-start-1 col-start-1 row-span-2 col-span-2 z-20 "/>
                        <img src={thorImage2} className=" aspect-auto col-start-2 row-start-2 row-span-2 col-span-2"/>
                    </div>
                </div>
            </div>
            
            <div className="main-l flex flex-col">
                <div className="text-title">The Design </div>
                <div className="grid grid-cols-5">
                    <div className="text flex flex-col col-span-2 ">
                        The design of the robot is a fork of the 
                        <div><a href='http://thor.angel-lm.com/' className=' underline text-blue-500'>THOR Robot Arm by Ángel L.M</a>  design with a couple changes tp fit my use caseses the changes I have made to the design can be found <a className=" underline">here </a> </div>
                    </div>
                    <div className="image flex flex-1 col-span-3">  
                        <img src={thorImage3} className=" h-full w-full aspect-auto"/>
                    </div>
                </div>
            </div>
            
            <div className="main-l flex flex-col">
                <div className="text-title">Constructions</div>
                <div className="grid grid-cols-5">
                    <div className="text flex flex-col col-span-2 ">
                        The goal of my senior project is to educate people in robotics.
                        <div>I am using the <a href='http://thor.angel-lm.com/' className=' underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a> as a base design. </div>
                    </div>
                    <div className="image grid grid-cols-3 grid-row-3 col-span-3">  
                        <img src={thorImage4} className=" col-start-1 row-start-1 col-span-2 row-span-2 aspect-[16/9] "/>
                        <img src={thorImage1} className=" col-start-2 rowstart-2 col-span-2 row-span-2 "/>
                    </div>
                </div>
            </div>
            
            <div className="main-l flex flex-col">
                <div className="text-title">The Code</div>
                <div className="grid grid-cols-5">
                    <div className="text flex flex-col col-span-2 ">
                        The goal of my senior project is to educate people in robotics.
                        <div>I am using the <a href='http://thor.angel-lm.com/' className=' underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a> as a base design. </div>
                    </div>
                    <div className="image">  
                        <img src={thorImage1} className="max-h=[30vh] aspect-[1008/567]"/>
                        <img src={thorImage2} className="h-[40-vh] aspect-auto"/>
                    </div>
                </div>
            </div>
            
        </div>

    )
}