import { AiOutlineClose, AiOutlineMenu, } from "react-icons/ai"


import { useState } from "react";


"use client";

const Nav = () => {
    const [toogle, setToogle] = useState(false)
    return (
        <header className="bg-black text-white">
            <div className="px-10 mx-auto flex justify-between items-center p-5">
                <div>
                    <h1 className="text-white text-4xl font-light font-raleway">
                        <a href="#home">Deepak Singh</a></h1>
                </div>

                <div>


                    <span className="md:grid hidden font-thin">Sitemap</span>
                    <ul className="hidden font-thin text-lg md:flex gap-10">
                        {/* <li><a href="#home">Home</a></li> */}
                        <li><a href="#project">Project</a></li>
                        <li><a href="#about">About Me</a></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>

                    {/* responise */}
                    <div className={` font-medium w-full h-[100%] md:hidden gap-10 z-10 absolute left-0 top-[-100%] bg-white text-black leading-10 py-2 rounded-b-lg duration-700
                        ${toogle ? 'top-[0px]' : 'top-[-100%]'}`}>

                        <div className="absolute bottom-28 left-5">
                            <ul className=" text-5xl font-semibold  leading-snug ">
                                {/* <li><a href="">Home</a></li> */}
                                <li className="text-sm font-medium pb-4">Sitemap:</li>
                                <li
                                onClick={() => setToogle(!toogle)}><a href="#about">About Me</a></li>
                                <li
                                onClick={() => setToogle(!toogle)}><a href="#project">Projects</a></li> 
                                
                                {/* <li><a href="">Contact</a></li> */}
                            </ul>

                        </div>
                    </div>
                </div>
                <div>
                    {
                        toogle ? <AiOutlineClose onClick={() => setToogle(!toogle)} className="md:hidden text-2xl absolute right-[35px] top-[30px] text-black z-10" /> :
                            <AiOutlineMenu onClick={() => setToogle(!toogle)} className="md:hidden text-2xl" />
                    }
                    <h3 className="md:grid hidden font-thin">
                        Status <br />
                        <span>Searching jobs</span>
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Nav