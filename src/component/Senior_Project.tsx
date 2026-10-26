import thorImage1 from "../assets/IMG_2979.jpg"
import thorImage2 from "../assets/thor image1.jpg"
import thorImage3 from "../assets/Screenshot 2026-10-08 140751.png"
import thorImage4 from "../assets/thingoconstuctuion.jpg"
import thorImage5 from "../assets/Judah Deane 3.jpg"

export default function SeniorProject() {
    return (
        <div className="flex flex-col justify-center items-center gap-[1cqw] mt-[8vh] flex-1">
            
            {/* Introduction Section */}
            <div className="main-l flex flex-col gap-[2cqw]">
                <div className="text-title">Robotics Education With A Robotic Arm</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="text flex flex-col col-span-2 gap-4">
                        <div>
                            The primary goal of my senior project is to bridge the gap in robotics education by creating an accessible, hands-on learning tool. 
                            I chose to use the <a href='http://thor.angel-lm.com/' className='underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a> as a foundation. 
                            Through extensive iterative testing, troubleshooting hardware and software bottlenecks, and refining mechanical tolerances, I adapted the system to make robotics concepts easier to visualise and understand.
                        </div>
                        <div>
                            You can see a full demonstration of how the arm operates, along with a walkthrough of its educational features, in my video profile.
                        </div>
                    </div>
                    <div className="image grid  grid-rows-2 grid-cols-3 sm:grid-rows-3 col-span-3">  
                        <img src={thorImage5} className="sm:col-start-1 sm:row-start-1 col-span-3 sm:col-span-2 sm:row-span-2 "/>
                        <img src={thorImage2} className="sm:col-start-2 sm:row-start-2 col-span-3 sm:col-span-2 sm:row-span-2"/>
                    </div>
                </div>
            </div>
            
            {/* The Design Section */}
            <div className="main-l flex flex-col">
                <div className="text-title">The Design</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="text flex flex-col col-span-2 gap-7">
                        <div>
                            The mechanical design is a custom fork of the open-source <a href='http://thor.angel-lm.com/' className='underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a>. 
                            While keeping the core kinematic structure intact, I implemented several targeted modifications to better suit my specific educational use cases, improve structural rigidity, and optimize cable routing.
                        </div>
                    </div>
                    <div className="image col-span-3">  
                        <img src={thorImage3} className=" aspect-video"/>
                    </div>
                </div>
            </div>
            
            {/* Construction Section */}
            <div className="main-l flex flex-col">
                <div className="text-title">Construction</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="text flex flex-col col-span-2 gap-7">
                        <div>
                            Building the robotic arm required careful planning and execution. I 3D printed all structural components using high-precision settings to ensure durability and minimal backlash in the joints. 
                            The entire construction and calibration process took approximately one month, involving meticulous assembly, wiring management, and stress-testing under various loads.
                        </div>
                    </div>
                    <div className="image grid grid-cols-1 sm:grid-cols-3 grid-rows-2 sm:grid-rows-3 col-span-3">  
                        <img src={thorImage4} className="sm:col-start-1 sm:row-start-1 col-span-3 sm:col-span-2 sm:row-span-2 "/>
                        <img src={thorImage1} className="sm:col-start-2 sm:row-start-2 col-span-3 sm:col-span-2 sm:row-span-2"/>
                    </div>
                </div>
            </div>
            
            {/* The Code Section */}
            <div className="main-l flex flex-col">
                <div className="text-title">The Code</div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="text flex flex-col col-span-2 gap-4">
                        <div>
                            I designed and implemented the entire software stack from scratch in Python. The codebase spans multiple modules and files, managing low-level motor controls and machine learning pipelines. 
                            The integration of machine learning allows the arm to perform hand tracking tasks seamlessly.
                        </div>
                    </div>
                     <div className="image grid grid-cols-1 sm:grid-cols-3  grid-rows-2 sm:grid-rows-3 col-span-3">  
                        <img src={thorImage4} className="sm:col-start-1 sm:row-start-1 col-span-3 sm:col-span-2 sm:row-span-2 z-20"/>
                        <img src={thorImage1} className="sm:col-start-2 sm:row-start-2 col-span-3 sm:col-span-2 sm:row-span-2"/>
                    </div>x
                </div>
            </div>
            
        </div>
    )
}