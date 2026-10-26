import Box from "./box"
import aieimage from "../assets/cropped-aie-logo-dark.jpg"
import neosimage from "../assets/images2222.jpg"
import jublieeImage from "../assets/images5432.jpg"
import coffeImage from "../assets/images9876.png"
import priceImace from '../assets/14984779-large.png'
import bigpictureImage from "../assets/images276542.jpg"
import awsImage from "../assets/images.png"
import RSSimage from "../assets/RSS2026-logo.png"

export default function Outlearning() {
    return (
        <div className="flex flex-col justify-center items-center gap-[1cqw] mt-[8vh]">
            <div className='main-l flex flex-col'>
                <div className="mb-[1cqw] text-title font-bold text-2xl">Internships & Work Experience</div>
                <div className='grid grid-cols-3 w-full gap-[3cqw]'>
                    
                    {/* Item 1 */}
                    <div className="col-start-1 row-start-1 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">29 May 2023 - 02 June 2023</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Spent a week at the Academy of Interactive Entertainment (AIE), where I designed a 3D model using Autodesk Maya and developed a functional game prototype in Unreal Engine 4.
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="col-start-3 row-start-2 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">24 November 2023 - 25 November 2023</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Visited NEOS for an exploratory work shadow day, conducting interviews with software professionals to gain insight into daily life in the tech industry.
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="col-start-1 row-start-3 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">4 April 2024 - 6 April 2024</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Traveled to the Central Coast to serve as a video camera operator for the Imagine Conference, managing live event coverage and media capture.
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="col-start-1 row-start-4 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">17 June 2024</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Completed a certified barista training course followed by practical work experience at Black Market Coffee, gaining hands-on hospitality skills.
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="col-start-3 row-start-5 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">1 August 2024</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Participated in an immersive corporate insight day at T. Rowe Price, learning about corporate operations and engaging in Q&A sessions with industry professionals.
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="col-start-1 row-start-6 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">10 April 2025 - 12 April 2025</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Volunteered at Jubilee Church over two days, assisting with facility renovation, building maintenance, and venue setup.
                        </div>
                    </div>

                    {/* Item 7 */}
                    <div className="col-start-3 row-start-7 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">5 June 2025</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Began an IT support internship at NEOS Headquarters, actively supporting the internal IT service desk with system maintenance and user support.
                        </div>
                    </div>

                    {/* Item 8 */}
                    <div className="col-start-1 row-start-8 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">27 August 2025</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Spent a day at the Big Picture head office assisting the web development team with website updates and UI rebuilds.
                        </div>
                    </div>

                    {/* Item 9 */}
                    <div className="col-start-1 row-start-9 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">27 October 2025 - 31 October 2025</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Participated in the AWS IDT workplace learning program via TAFE. Collaborated in a team hackathon to build a working software product, securing 1st place overall.{' '}
                            <a href="https://github.com/LiamHea09/The-Unspoken-Classroom" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700">
                                View GitHub Repository
                            </a>
                        </div>
                    </div>

                    {/* Item 10 */}
                    <div className="col-start-1 row-start-10 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">27 October 2025 - 31 October 2025</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Completed a week-long placement at the Big Picture head office, assisting with technical administrative tasks and web development maintenance.
                        </div>
                    </div>

                    {/* Item 11 */}
                    <div className="col-start-1 row-start-11 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">13 July 2026 - 15 July 2026</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Attended the prestigious Robotics: Science and Systems (RSS) conference via Pathways@RSS, touring state-of-the-art robotics labs at UTS, UNSW, and USYD.
                        </div>
                    </div>

                    {/* Item 12 */}
                    <div className="col-start-3 row-start-12 flex flex-col justify-center items-center">
                        <div className="text-[clamp(10px,1.5cqw,40px)] font-semibold">10 September 2026</div>
                        <div className="text-[clamp(6.6666px,1cqw,30px)] leading-[clamp(10px,1.5cqw,40px)]">
                            Completed my ongoing Learning Through Internship (LTI) placement at NEOS, culminating in the deployment of an automated Jira asset management system synced with Microsoft Intune.
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="row-span-4 row-start-8 col-start-3 flex justify-center items-center mt-[-3cqw] mb-[-3cqw]">
                        <div className="max-w-[1cqw] h-full bg-black min-w-[0.1cqw]"></div>
                    </div>

                    {/* Logo Box Components */}
                    <Box className="col-start-2" title="AIE" img={aieimage}></Box>
                    <Box className="col-start-2" title="Neos" img={neosimage}></Box>
                    <Box className="col-start-2" title="Jubilee Church" img={jublieeImage}></Box>
                    <Box className="col-start-2" title="Black Market Coffee" img={coffeImage}></Box>
                    <Box className="col-start-2" title="T.Rowe Price" img={priceImace}></Box>
                    <Box className="col-start-2" title="Jubilee Church" img={jublieeImage}></Box>
                    <Box className="col-start-2" title="Neos" img={neosimage}></Box>
                    <Box className="col-start-2" title="Big Picture" img={bigpictureImage}></Box>
                    <Box className="col-start-2" title="AWS" img={awsImage}></Box>
                    <Box className="col-start-2" title="Big Picture" img={bigpictureImage}></Box>
                    <Box className="col-start-2" title="RSS" img={RSSimage}></Box>
                    <Box className="col-start-2" title="Neos" img={neosimage}></Box>

                </div>
            </div>
        </div>
    )
}