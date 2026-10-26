
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Particles from './component/Particles';
import Header from './component/Header.tsx';
import About from './component/About.tsx';
import Mentor from './component/Mentor.tsx';
import Outlearning from './component/Outlearning.tsx';
import SeniorProject from './component/Senior_Project.tsx';
import './index.css'
import Qualifications from './component/Qualifications.tsx';
function App() {






  return (
    <BrowserRouter>
      <div className='relative min-h-screen w-full items-center justify-center flex'>
        
         
       
        <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden bg-transparent canvas1'>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={2000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}/>
        </div>

         
          <div className=' max-h-[100vh]  min-w-[100vw] min-h-[100vh] overflow-y-auto  flex flex-col flex-1'>
            <Header />
          <Routes>
            <Route path='*' element={<About />}/>
            <Route path='/' element={<About />}/>
            <Route path='/mentor' element={<Mentor />}/>
            <Route path='/Out-Learning' element={<Outlearning />}/>
            <Route path='/Senior-Project' element={<SeniorProject/>}/>
            <Route path='/Qualifications' element={<Qualifications/>}/>
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App


