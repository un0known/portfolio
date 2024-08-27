import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, [])

  return (
    <section id="project" className="py-5">


      <div className="xl:grid grid-cols-2 gap-2 sm:mx-20 items-center mb-20">
        <div className="lg:px-10 mb-5 " data-aos="fade-up">
          <p className="sm:text-5xl text-3xl font-bold sm:leading-snug leading-10">SOME OF THE PROJECTS I HAVE WORKED</p>
        </div>
        <div className="lg:px-10 font-thin text-[16px]  text-justify text-gray-700  mb-5" data-aos="fade-up">
          <p className=" pb-5">
            These are just a few projects that I personally enjoy the most. I would be glad to show you a bunch of other
            projects that I have done so far. Would you like to have a look at them?
          </p>
          <div className="flex items-center gap-5">
            <span className="text-2xl">All Project</span>
            <MdArrowOutward className="border border-black text-4xl p-2 rounded-full " />
          </div>

        </div>

      </div>

      <hr />

      <div className="xl:flex justify-between items-center sm:mx-24 my-20 h-full" >
        <div className="flex justify-center xl:order-last rounded-xl py-5  my-0" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <img src={project1}
            width={700}

            alt="Placeholder Image" className="object-cover rounded-lg shadow-xl shadow-gray-500" />
        </div>
        <div className="flex justify-center xl:mx-10 my-10" data-aos="fade-up">
          <div className="sm:w-[520px] ">
            <h1 className="text-4xl font-medium">U Make</h1>
            <p className="text-justify font-thin mt-5">
              I designed a slick and responsive website to showcase my projects and skills, including 3D models,
              2D elements, textures, and HDR environments. Technologies include HTML, CSS, Bootstrap, and
              JavaScript.
            </p>
            <div className="flex gap-10 justify-center my-7">

              <ul className="leading-8">
                <li>Category:</li>
                <hr />
                <li>Role:</li>
                <hr />

              </ul>
              <ul className="leading-8 font-thin">
                <li className="">website, UI Design</li>
                <hr />
                <li>Web Designer</li>
                <hr />

              </ul>
            </div>
            <div className="flex justify-center gap-5">
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://un0known.github.io/uMake/index.html" target="blank">
                  Live Preview
                </a></button>
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://github.com/un0known/uMake.git" target="blank">
                  Get code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />


      <div className="xl:flex justify-between items-center sm:mx-24 my-20 h-full">
        <div className="flex justify-center  rounded-xl py-5 px-2  my-10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
          <img src={project2}
            width={700}

            alt="Placeholder Image" className="object-cover rounded-lg shadow-xl shadow-gray-500" />
        </div>
        <div className="flex justify-center xl:mx-10 my-10" data-aos="fade-up">
          <div className="sm:w-[520px]">
            <h1 className="text-4xl font-medium">One Shot</h1>
            <p className="text-justify font-thin mt-5">
              Created a service-based website for mobile applications to showcase my innovative skills and
              initiatives. Participants showcase their inventiveness through their applications. Technologies used
              include HTML, CSS, Bootstrap, JavaScript, and Swiper JS.
            </p>
            <div className="flex gap-10 justify-center my-7">
              <ul className="leading-8">
                <li>Category:</li>
                <hr />
                <li>Role:</li>
                <hr />

              </ul>
              <ul className="leading-8 font-thin">
                <li className="">website, UI Design</li>
                <hr />
                <li>Web Designer</li>
                <hr />

              </ul>
            </div>
            <div className="flex gap-5  justify-center">
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://un0known.github.io/OneShot" target="blank">
                  Live Preview
                </a></button>
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://github.com/un0known/OneShot.git" target="blank">
                  Get code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />


      <div className="xl:flex justify-between items-center sm:mx-24 my-20 h-full">
        <div className="flex justify-center xl:order-last  rounded-xl py-5 px-2  my-10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
          <img src={project3}
            width={700}

            alt="Placeholder Image" className="object-cover rounded-lg shadow-xl shadow-gray-500" />
        </div>
        <div className="flex justify-center xl:mx-10 my-10" data-aos="fade-up">
          <div className="sm:w-[520px]">
            <h1 className="text-4xl font-medium">Nike</h1>
            <p className="text-justify font-thin mt-5">
              Created an e-commerce user interface for product management and order processing using HTML,
              CSS, JavaScript, React JS, and Tailwind CSS.
            </p>
            <div className="flex gap-10 justify-center my-7">
              <ul className="leading-8">
                <li>Category:</li>
                <hr />
                <li>Role:</li>
                <hr />

              </ul>
              <ul className="leading-8 font-thin">
                <li className="">website, UI Design</li>
                <hr />
                <li>Web Designer</li>
                <hr />

              </ul>
            </div>
            <div className="flex gap-5  justify-center">
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://nikeshoes-clone.netlify.app/" target="blank">
                  Live Preview
                </a></button>
              <button className="bg-gray-600 text-white rounded-lg p-2 px-3 font-medium text-lg duration-300">
                <a href="https://github.com/un0known/nike.git" target="blank">
                  Get code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="h-10 rounded-full shadow-xl"></div>


    </section>
  )
}

export default Projects