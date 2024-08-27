import React from 'react'
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios"
import Swal from "sweetalert2"
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, []);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001', {})
            .then(result => console.log(result))
            .catch((error) => {
                console.log(error);
            })

    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        formData.append("access_key", "c90700bf-33a3-4148-80f4-d422ecf46fda");
      
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
      
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
      
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message send",
                icon: "success"
              });
        }
      }


     

      

    return (
        <section className=' bg-white'>
            <div className='max-w-[1240px] mx-auto px-2 py-10 text-black'>
                {/* dshfgosdhf */}

                <div className='lg:flex sm:px-10 justify-around items-center pb-10'>
                    <div className='pt-10'  data-aos="fade-right">
                        <span className='text-md font-thin'>That's for all now</span>

                        <p className='text-2xl sm:text-4xl font-thin my-6 sm:leading-relaxed leading-relaxed'>Got a project in mind? <br />
                            Let's talk</p>
                    </div>
                    {/* email section */}


                    <div className=" rounded-xl"  data-aos="fade-left">
                        
                        <div className="">
                            <form action="#" onSubmit={onSubmit}>
                                <div className="sm:flex justify-center gap-2 my-5">
                                    <div className="w-full">
                                        
                                        <TextInput id="name" name="name" placeholder="Name" type="text"
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="w-full mt-2 sm:mt-0">
                                        
                                        <TextInput id="email" name="email" placeholder="Email" type="email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <Textarea id="message" name="message" placeholder="Your message..." rows={4}
                                        onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <div className="mb-6">
                                    <Button type="submit" className="w-full">
                                        Send message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* jfdjfosdl */}

                <hr className='' />

                <div className='sm:flex gap-5  md:gap-16 text-[14px] font-light mt-10 grid'>
                    <div>
                        <p className='leading-6'>Email address: <br />
                            <a href="">deepakmehra7830@gamilcom</a></p>
                    </div>
                    <div>
                        <p className='leading-6'>Phone Number: <br />
                            +91 7830799870</p>
                    </div>
                    <div className=''>
                        <p className='leading-6'>Social:</p>
                        <ul className='flex gap-1 sm:gap-0'>
                            <li>
                                <a href="https://www.facebook.com/the.demon.3/" target="blank" className=' bg-white bg-opacity-10 px-1'>
                                    facebook,
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/deepak__mehra" target="blank" className=' bg-white bg-opacity-10 px-1'>
                                    Instagram,
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className=' bg-white bg-opacity-10 px-1'>
                                    Linkdin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>




        </section>
    )
}

export default Footer