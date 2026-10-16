import Box from "./box" 
import pythonImage from "../assets/Python-logo-notext.svg.png"
import tailwindImage from "../assets/Tailwind_CSS_Logo.svg.webp"
import reactImage from "../assets/react.png"
import javaImage from "../assets/java-4-logo.svg"
import ardunioImage from "../assets/arduinologo.png"
import blenderImage from "../assets/Blender_logo_no_text.svg.webp"

export default function Skills() {
    return (
        <div className='main-l overflow-visible'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-[1.5cqw] overflow-visible m-[1cqw]'>
                <div className=' sm:col-span-2 md:col-span-3 col-span-1 text-title mb-[2cqw]'>
                    Skills
                </div>
                <Box className="" title="Python" img={pythonImage}/>
                <Box className="" title="Tailwind" img={tailwindImage}/>
                <Box className="" title="React" img={reactImage}/>
                <Box className="" title="Java" img={javaImage}/>
                <Box className="" title="Arduino & Esp32" img={ardunioImage}/>
                <Box className="" title="Blender & Fusion 360" img={blenderImage}/>
        
            </div>
        </div>
    )
}
