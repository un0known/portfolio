import { AiOutlineClose, AiOutlineMenu, } from "react-icons/ai"
import { Link } from 'react-scroll'
import resume from "../assets/resume.pdf"
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import '../componant/button.css'


"use client";

const Nav = () => {
    const [toogle, setToogle] = useState(false)

    return (
        <header className="bg-black text-white">
            {/* ####################################
            mininavbar ############################ */}
            <div className="bg-whit border-b px-2 sm:px-5 flex justify-between">
            <div>
                    <button className=" md:hidden text-xl rounded-xl bg-white bg-opacity-10 p-1 px-2 my-1">
                        <a href={resume} target="blank">Resume</a>
                    </button>
                </div>
                <div className="flex gap-1 sm:gap-5 text-xl justify-end sm:mx-20 items-center py-1">
                    <a href="https://www.facebook.com/the.demon.3/" target="blank" className=' bg-whi bg-opacity-5 px-1'>
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/deepak__mehra" target="blank" className=' bg-white bg-opacity-5 px-1'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className=' bg-white bg-opacity-5 px-1'>
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/un0known" target="blank" className=' bg-white bg-opacity-5 px-1'>
                        <FaGithub />
                    </a>
                </div>
                

            </div>

            {/* #################################
                      navbar
                      ##################################### */}

            <div className=" sm:mx-20 flex justify-between items-end p-5">
                <div>
                    <h1 className="text-white text-2xl sm:text-4xl font-light font-raleway hello">
                        <a href="#home">Deepak Singh</a>
                    </h1>
                </div>

                <div>
                    <ul className="hidden font-thin text-lg md:flex gap-10">
                        {/* <li><a href="#home">Home</a></li> */}
                        {/* <li><a href="#project">Project</a></li> */}
                        <li><Link
                            to="project"
                            spy={true}
                            smooth={true}

                            duration={500}
                            className=" cursor-pointer text-2xl" >Project</Link></li>
                        <li><Link
                            to="about"
                            spy={true}
                            smooth={true}

                            duration={500}
                            className=" cursor-pointer text-2xl">About Me</Link></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </div>
                <div >

                    <h3 className="md:flex gap-3 hidden font-thin">
                        {/* Status: <span>Searching jobs</span> */}
                        <button className=" text-2xl rounded-xl bg-white bg-opacity-10 p-1 px-2">
                            <a href={resume} target="blank">Resume</a>
                        </button>
                    </h3>

                </div>

                {
                    toogle ? <AiOutlineClose onClick={() => setToogle(!toogle)} className="md:hidden text-2xl absolute right-[1px] top-[30px] m-5 text-black z-50" /> :
                        <AiOutlineMenu onClick={() => setToogle(!toogle)} className="md:hidden text-white text-2xl" />
                }


            </div>






            {/* ##################
                     responise
                     ########################## */}



            <div className={`flex font-medium w-full h-[100%] md:hidden gap-10 z-10 absolute left-0 top-[-100%] bg-white text-black leading-10 py-2 rounded-b-lg duration-700 drop-shadow-2xl
                        ${toogle ? 'top-[0px]' : 'top-[-100%]'}`}>

                <div className=" self-end mx-3">

                    <ul className=" text-5xl font-semibold  leading-snug ">
                        {/* <li><a href="">Home</a></li> */}

                        <li
                        >
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className=" cursor-pointer"
                                onClick={() => setToogle(!toogle)}>About Me</Link></li>
                        <li
                            onClick={() => setToogle(!toogle)}>
                            <Link
                                to="project"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className=" cursor-pointer"
                                onClick={() => setToogle(!toogle)}>Projects</Link></li>

                        {/* <li><a href="">Contact</a></li> */}
                    </ul>

                    <div className=" text-bas my-5  text-black font-medium xl:hidden">
                        <div className='grid'>
                            <span className=''>deepakmehra7830@gamil.com</span>
                            <span className=''>+91 7830799870</span>
                        </div>
                        <ul className="flex gap-10 text-3xl py-3">
                            <li>
                                <a href="https://www.facebook.com/the.demon.3/" target="blank" className=' bg-whi bg-opacity-5 px-'>
                                    <FaFacebookF />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/deepak__mehra" target="blank" className=' bg-white bg-opacity-5 px-'>
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className=' bg-white bg-opacity-5 px-'>
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/un0known" target="blank" className=' bg-white bg-opacity-5 px-'>
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


        </header>
    )
}

export default Nav