import { faFacebookF, faLinkedinIn, faInstagram, faGit } from "@fortawesome/free-brands-svg-icons"
import lufy1 from "../assets/lufy1.png"
import bg9 from "../assets/bg9.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { bootstrap, tailwind, flowbite, github, javascript, react, nodejs, expressjs, mongo } from "../assets/png"



const AboutMe = () => {
  return (
    <section id="about" className=" py-10 bg-white text-black my-10"
    // style={{
    //   backgroundSize: `cover`,
    //   backgroundImage: `url(${bg9})`
    // }}
    >
      

      <div className=" mx-auto  grid xl:grid-cols-2 items-center  h-auto">
        <div className=" flex justify-center col-span-1 mb-1 xl:order-last">
          <div className="sm:w-2/3">
            <h1 className="text-[35px] text-justi font-thin">Hello, I'm Deepak singh from Uttrakhand, India</h1>
            <p className="text-justify leading-7 font-thin py-10">
              I'm a passionate and dedicated web developer with a keen interest in creating innovative and efficient
              web applications. As a recent graduate, I am excited to embark on my journey in the web development world, leveraging
              my skills to build impactful digital experiences.
            </p>
          </div>

          {/* <div className="hidden sm:flex justify-end ms-10 h-[400px]">
            <img src={lufy1} alt="" width={250} />
          </div> */}
        </div>
        
        <div className="grid justify-center col-span-1 ">
          
          <hr className="py-5 xl:hidden"/>
          <div className="xl:mx-20 flex flex-wrap justify-center gap-12 items-center md:mx-48 ">
            <div>
              <img src={bootstrap} alt="" width={50} className="items-center" />
              <h4 className="text-sm">Bootstrap</h4>
            </div>
            <div>
              <img src={tailwind} alt="" width={50} />
              <h4 className="text-sm">Tailwind</h4>
            </div>
            <div>
              <img src={flowbite} alt="" width={50} />
              <h4 className="text-sm">Flowbite</h4>
            </div>
            <div>
              <img src={github} alt="" width={50} />
              <h4 className="text-sm">GitHub</h4>
            </div>
            <div>
              <img src={mongo} alt="" width={50} />
              <h4 className="text-sm">Mongodb</h4>
            </div>
            <div>
              <img src={javascript} alt="" width={50} />
              <h4 className="text-sm">JavaScript</h4>
            </div>
            <div>
              <img src={react} alt="" width={50} />
              <h4 className="text-sm">React</h4>
            </div>
            <div>
              <img src={nodejs} alt="" width={50} />
              <h4 className="text-sm">NodeJs</h4>
            </div>
            <div>
              <img src={expressjs} alt="" width={50} />
              <h4 className="text-sm">ExpressJs</h4>
            </div>
          </div>
          <h1 className="text-center my-14 text-5xl font-thin">stack</h1>
        </div>


      </div>
      <div className="h-10 rounded-full shadow-xl"></div>

    </section>
  )
}

export default AboutMe