

import Particles from './component/Particles';
import Header from './component/Header.tsx';
import './index.css'
function App() {






  return (
    <div className='relative min-h-screen w-full items-center justify-center flex'>
      <div className=' absolute top-0 z-20 w-full'>
        <Header />
      </div>
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
          pixelRatio={1} />
        
      </div>
      <div className='main-l'>
        <div className='Header grid grid-cols-3 w-full justify-content place-content-between max-h-[80vh]'>

          <div className='text col-span-2 flex flex-grow-0 flex-inital align-middle justify-center flex-col items-center max-h-[60vh] '>
            <div className='text-title '>
              About Me
            </div>
            <div className='text-m max-w-[60%] text overflow-y-scroll'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue nisi, pellentesque nec lobortis ac, consequat quis nunc. Nunc condimentum ante ac dictum accumsan. Maecenas eget elit iaculis, ultricies ipsum sed, ultrices est. Vestibulum at magna dui. Nunc vulputate in purus sit amet malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent faucibus dignissim dui varius convallis. Sed fermentum ante eu massa pretium euismod. Phasellus laoreet justo eget libero suscipit varius. Praesent blandit lectus metus. Morbi rhoncus non ligula eu varius. Vestibulum in mi eget ex dapibus lacinia. Duis nec lacus neque. Nulla fermentum tortor non lectus consectetur dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, dui eget suscipit posuere, ante turpis sodales sapien, eu ultricies nunc felis iaculis ex. Etiam eget ligula faucibus, tempor nulla nec, rutrum velit. Proin laoreet lacus lectus, ut euismod mauris vestibulum ac. Morbi eget elit interdum, metus
            </div>
          </div>
          <div className='img flex items-center justify-center'>
          <img className='' src='./src/assets/IMG_2099.jpg'></img>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App
