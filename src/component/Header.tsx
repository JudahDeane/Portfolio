import { Link } from 'react-router-dom'
export default function Header() {

    return (
        <div className=" z-10 t min-h-[8vh] top-0 max-h-[8vh] bg-white w-full align-middle items-center justify-center text-center content-center ">
            <div className=" flex flex-row ml-[2vw] mr-[2vw] max-h-[8vh] justify-between items-center align-middle top-[%50]">
                <Link to="/" className="h-full text-titlexl top-0">Judah Deane</Link>
                <nav className="text-titlexl1 flex flex-row gap-[3vw] items-center justify-center">
                    <Link to="/Senior-project">Senior Project</Link>
                    <Link to="/Out Learning">Out Learning</Link>
                </nav>
            </div>
        </div>
    );
}