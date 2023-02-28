import homeIcon from "../svg/home.svg"
import info from "../svg/info.svg"
import whatsup from "../svg/whatsup.svg"
import Logo from "../Logo/logo-no-background.svg"
import gallery from "../svg/photo-gallery-icon.svg"
import call from "../svg/call.svg"
import { useState } from "react"
import useMightyMouse from 'react-hook-mighty-mouse';
const Navbar = () =>  {
    
   

    const {
        selectedElement: {
          position: { angle: angleLeftEye },
        },
      } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
      const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;

return(
    <nav className="z-10">
        
       <div className="fixed top-0  h-[100%]  w-[60px] sm:w-[70px] bg-gradient-to-b from-[#bfdce5] to-[#9a66d7]">
            <div><img src={Logo} alt=""  className="absolute sm:top-4 sm:left-3 top-4 left-[8px] w-[8rem]"/> </div>
            
        <div className="flex flex-col sm:pt-[4rem] pt-[4rem] justify-center items-center">
        

            <div id="info__home" className="w-[100%] flex justify-center mt-10 " >
                <img src={homeIcon}  alt=""  className="w-[2.5rem] md:w-[1.5rem] icon_ani cursor-pointer md:max-lg:w-[3rem]"/>
            </div>
            <div><p>Home</p></div>

            <div id="info__gallery" className="w-[100%] flex justify-center mt-8 " >
                <img src={gallery} alt="" className="w-[2.5rem] md:w-[1.5rem]  icon_ani cursor-pointer md:max-lg:w-[3rem]"/>
            </div>
            <div><p>Gallery</p></div>

            <div id="info__info" className="w-[100%] flex justify-center mt-8">
                <img src={info} alt="" className="w-[2.5rem] md:w-[1.5rem]  icon_ani cursor-pointer md:max-lg:w-[3rem]"/>
            </div>
            <div><p>Info</p></div>

            

            <div className="eyes-follow pt-[4rem] ">
      <div className="eyes">
        <div id="left-eye" className="eye " style={{ transform: rotateLeftEye }}>
          <div className="pupil" />
        </div>
      </div>
    </div>      
   
                <div id="info_whatsup" className="mt-[5rem] sm:mt-[0rem]">
                <img src={whatsup} alt="" className="icon_ani w-[5rem]  md:w-[2rem] lg:w-[2.8rem]  sm:mt-[4rem] p-2 cursor-pointer  duration-300 md:max-lg:py-[0.1rem] md:max-lg:w-[5rem] md:max-lg:mt-[10rem]"/>
                </div>
            

            <div className="sm:mt-[2rem] mt-[3rem] " id="info__call-me">
              <img src={call} className="cursor-pointer icon_ani w-[3rem] md:w-[1rem] lg:w-[2rem] md:max-lg:w-[5rem] md:max-lg:mt-[3rem]" alt="" />
            </div>
            
           
          
        </div>    
           

       </div>
    </nav>
)
}

export default Navbar