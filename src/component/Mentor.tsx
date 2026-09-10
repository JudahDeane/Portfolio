import Cards from './newscard'
export default function Mentor() {

    return (
            <div className='main-l'>
                <div className='grid grid-cols-2 w-full gap-3'>

                    <div className=' col-span-2 sm:cols-span-1 text-[2cqw]'>
                        My mentors
                    </div>
                    <div className='min-h-[30vh] col-start-1 justify-center items-center grid'>
                        <Cards desc='' title='Marc Carmichael' image='src\assets\1694688227978.jpeg' className='' />
                    </div>
                    <div className='min-h-[30vh] col-start-2   justify-center items-center grid '>
                        <Cards desc='' title='Drew Cosgrove' image='src\assets\Judah Deane and Drew Cosgrove2.jpg' className=' aspect-[1/1]' />
                    </div>
                    
                </div>
        </div>
    )
}