
import headerImg from '../assets/IMG_3146.jpg'
import img2099 from '../assets/Judah-Deane-2026.jpg'
import Mentor from './Mentor'
import Skills from './Skills'
import Qualifications from './Qualifications'
export default function About() {


    return (
        <div className="flex flex-col justify-center items-center gap-[1cqw]" >
            <div className='main-f'>
                <div className="overflow-hidden bg-cover bg-center w-[100vw] h-[100vh]" style={{ backgroundImage: `url(${headerImg})` }}>
                </div>
            </div>
            <div className='main-l'>
                <div className='Header grid grid-cols-1 sm:grid-cols-3 w-full justify-content place-content-between'>
                    <div className='text col-span-2 flex flex-grow-0 flex-inital align-middle justify-center flex-col items-center max-h-[60vh] '>
                        <div className='text-title '>
                            About Me
                        </div>
                        <div className='text-m max-w-[60%] text overflow-scroll scroll-auto max-h-[80vh] '>
                            Hi my name is Judah Deane I am a student at South Sydney High School in the <a href='https://sthsydney-h.schools.nsw.gov.au/about-us/enrol/big-picture-program' className=' underline text-blue-500'>Big Picture Academy.</a>
                            My main focus and passion is on robotics and coding which the majority of my time in Big Picture was spent researching. I decied my senior project should be based in robotics so I built a version of the <a href='http://thor.angel-lm.com/' className=' underline text-blue-500'>THOR Robot Arm by Ángel L.M.</a>
                            There are many other activitys I have completed while at school some include: 
                            <ul className=' list-disc pl-5 text-left'>
                                <li className=''>Certificate III In Information Technology</li>
                                <li className=''>Diploma In Information Technology (Ongoing)</li>
                            </ul>
                        </div>
                    </div>
                    <div className='img flex items-center justify-center'>
                        <img className='' src={img2099} alt="IMG_2099" />
                    </div>

                </div>
            </div>
            <Mentor/>
            <Skills/>
            <Qualifications/>
        </div>
    )
}