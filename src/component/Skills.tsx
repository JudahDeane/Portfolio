import Box from "./box" 

export default function Skills() {
    return (
        <div className='main-l overflow-visible'>
            <div className='grid grid-cols-3 w-full gap-[1.5cqw] overflow-visible m-[1cqw]'>
                <div className=' col-span-3 sm:cols-span-1 text-[2cqw] mb-[2cqw]'>
                    Skills
                </div>
                <Box className="" title="Python" img="src\assets\Python-logo-notext.svg.png"/>
                <Box className="" title="Tailwind" img="src\assets\Tailwind_CSS_Logo.svg.webp"/>
                <Box className="" title="React" img="src\assets\react.png"/>
                <Box className="" title="Java" img="src\assets\java-4-logo.svg"/>
                <Box className="" title="Arduino & Esp32" img="src\assets\arduinologo.png"/>
                <Box className="" title="Blender & Fusion 360" img="src\assets\Blender_logo_no_text.svg.webp"/>
        
            </div>
        </div>
    )
}
