import Marquee from "react-fast-marquee";
import { ReactTyped } from "react-typed";
import deepak from "../assets/deepak.png"



const Home = () => {
  return (
    <section id="home" className=" bg-[#000000] text-white">
      <div className="mx-auto h-auto relative">

          <div className=''>

            <div className="flex justify-center">
            <img src={deepak}
              width={509} alt=""
              className="" />
            </div>


            <div className="absolute bottom-[80px] sm:left-32 lg:ms-10">
              <div className=" text-4xl font-light sm:text-7xl md:text-8xl">
                <h1 className=' bg-opacity-5 px-5 mb-5'>Web</h1>

                <span className='bg-white bg-opacity-5 px-2'>
                  
                <ReactTyped strings={["Developer", "Designer"]} typeSpeed={70} backSpeed={50} loop className=' ps-2' />
                </span>
              </div>
            </div>



            {/* *********
                ICONS
                ========== */}
            <div className=" absolute text-base text-white font-medium  right-16 bottom-[80px] hidden xl:grid pe-10">
              <div className='grid'>
                <span className=' bg-white bg-opacity-10  px-1'>deepakmehra7830@gamil.com</span>
                <span className=' bg-white bg-opacity-10  px-1 my-1'>+91 7830799870</span>
              </div>
              <ul className="flex gap-5 sm:gap-3">
                <li>
                  <a href="https://www.facebook.com/the.demon.3/" target="blank" className=' bg-white  bg-opacity-10 px-1'>
                    facebook,
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/deepak__mehra" target="blank" className=' bg-white  bg-opacity-10 px-1'>
                    Instagram,
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className=' bg-white bg-opacity-10 px-1'>
                    Linkdin,
                  </a>
                </li>
                <li>
                  <a href="https://github.com/un0known" target="blank" className=' bg-white  bg-opacity-10 px-1'>
                    Github
                  </a>
                </li>
              </ul>
            </div>

            <div  className=' absolute bottom-0 w-full bg-white bg-opacity-20 font-thin' >
              <Marquee speed={150} className="">
              <div className="flex justify-between items-center py-[5px]">
                <span className="">Web Designer</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Web Devloper</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Landing Page</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Business Website</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Ecommerce Website</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Graphic Designer</span>
                <span className="w-1 h-1 rounded-full bg-white mx-5"></span>
                <span className="">Front-End Developer</span>
                
              </div>
              </Marquee>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home