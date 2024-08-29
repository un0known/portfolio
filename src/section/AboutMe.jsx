import { faFacebookF, faLinkedinIn, faInstagram, faGit } from "@fortawesome/free-brands-svg-icons"
import { useEffect } from "react";
import deepak from "../assets/deepak.png"
import { bootstrap, tailwind, flowbite, github, javascript, react, nodejs, expressjs, mongo } from "../assets/png"
import AOS from "aos";
import 'aos/dist/aos.css'


const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, [])
  return (
    <section id="about" className=" py-10 bg-white text-black my-10">

      <div className="flex justify-center items-center h-1/2" data-aos="fade-up"
     data-aos-duration="1000">
        <div className="hidden md:flex rounded-full justify-center" >
          <img src={deepak} alt="/" width={350} className="m-5 rounded-[100%]" />
        </div>
        <div className="md:w-1/2 px-3 md:px-10">
          <h1 className="sm:text-[35px] text-2xl leading-snug font-thin">Hello, I'm Deepak singh from Uttrakhand, India</h1>
          <p className="text-justify leading-7 font-thin py-5">
            I'm a passionate and dedicated web developer with a keen interest in creating innovative and efficient
            web applications. As a recent graduate, I am excited to embark on my journey in the web development world, leveraging
            my skills to build impactful digital experiences.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-16 ">

        <hr className="my-5" />
        <div className="sm:w-1/2 px-2">
          <div className="xl:mx-2 flex flex-wrap justify-center gap-12 items-center ">
            <div className="stack">
              <img src={bootstrap} alt="" width={50} className="items-center" />
              <h4 className="text-sm">Bootstrap</h4>
            </div>
            <div className="stack">
              <img src={tailwind} alt="" width={50} />
              <h4 className="text-sm">Tailwind</h4>
            </div>
            <div className="stack" >
              <img src={flowbite} alt="" width={50} />
              <h4 className="text-sm">Flowbite</h4>
            </div>
            <div className="stack">
              <img src={github} alt="" width={50} />
              <h4 className="text-sm">GitHub</h4>
            </div>
            <div className="stack">
              <img src={mongo} alt="" width={50} />
              <h4 className="text-sm">Mongodb</h4>
            </div>
            <div className="stack ">
              <img src={javascript} alt="" width={50} />
              <h4 className="text-sm">JavaScript</h4>
            </div>
            <div className="stack ">
              <img src={react} alt="" width={60} className="p-" />
              <h4 className="text-sm text-center">React</h4>
            </div>
            <div className="stack ">
              <img src={nodejs} alt="" width={60} />
              <h4 className="text-sm">NodeJs</h4>
            </div>
            <div className="stack">
              <img src={expressjs} alt="" width={50} />
              <h4 className="text-sm text-center">ExpressJs</h4>
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