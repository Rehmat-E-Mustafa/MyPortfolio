
import Blob from "./images/Asset2.png";
import Resume from "./images/Rehmat_cv.pdf";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Sign from "./images/myLogo.png";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact()
{
    const Sent = () => toast.success('Message is sent', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const Notsent = () => toast.error('Error! message not sent', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1k1bcpj', 'template_wc5x3bw', form.current, 'ybyrW6QoSW-W2mwiy')
      .then((result) => {
          console.log(result.text);
          Sent();
          

      }, (error) => {
          console.log(error.text);
          Notsent();
      });
    };



    return(
        <div className="bg-[#EAE8E8] h-full lg:h-screen">
             <div className="w-full flex place-content-between pr-8 p-4 fixed z-50 bg-[#EAE8E8]  ">
                <div className="pl-20 ">
                    <img src={Sign} className="w-24"/>
                </div>
                <div className="flex">
                    <Link to="/home">
                        <h2 className="text-[#444444] p-4">Work</h2>
                    </Link>
                    <Link to="/about">
                        <h2 className="text-[#444444] p-4">About</h2>
                    </Link>
                    <Link to="/contact">
                        <h2 className="text-[#444444] p-4">Contact</h2>
                    </Link>
                    <a href={Resume} download="Rehmat Resume">
                        <h2 className="text-[#F15A24] p-4">Resume</h2>
                    </a>
                </div>
                
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-28">
                <div className="flex flex-col justify-center items-center space-y-12 h-96 ">
                    <div className="relative">
                        <img className=" w-96" src={Blob} alt="" />
                        <h1 className="absolute h-40 -top-4 text-6xl text-[#424241] ">Let's Get<br></br>in Contact</h1>

                    </div>
                </div>
                <div className=" space-y-4">
                    <div className="w-full">
                        <form className="flex flex-col items-center md:items-start gap-4" ref={form} onSubmit={sendEmail}>

                            <div className="w-2/4 md:w-3/4 ">
                                <label className="text-black text-lg" htmlFor="name">
                                    Name
                                </label>
                                <input className="border-0 border-solid border-b border-gray-600 dark:border-gray-400 w-full appearance-none bg-transparent text-black focus:outline-none font-light pt-2 pb-1"
                                    name="userName"
                                    required={true}
                                    type="text"
                                    placeholder="Name" />
                            </div>
                            <div className="w-2/4 md:w-3/4 ">
                                <label className="text-black text-lg" htmlFor="email">
                                    Email
                                </label>
                                <input className="border-0 border-solid border-b border-gray-600 dark:border-gray-400 w-full appearance-none bg-transparent text-black focus:outline-none font-light pt-2 pb-1"
                                    name="userEmail"
                                    required={true}
                                    type="email"
                                    placeholder="example@gmail.com" />
                            </div>
                            <div className="w-2/4 md:w-3/4 ">
                                <label className="text-black text-lg" htmlFor="name">
                                    Subject
                                </label>
                                <input className="border-0 border-solid border-b border-gray-600 dark:border-gray-400 w-full appearance-none bg-transparent text-black focus:outline-none font-light pt-2 pb-1"
                                    name="subject"
                                    required={true}
                                    type="text"
                                    placeholder="Subject" />
                            </div>
                            <div className="w-2/4 md:w-3/4 ">
                                <label className="text-black text-lg" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="border-0 border-solid border-b border-gray-600 dark:border-gray-200 w-full bg-transparent text-black focus:outline-none font-light pt-2 pb-1"
                                    id="message"
                                    name="message"
                                    required={true}
                                    placeholder="Enter your message here!"
                                    cols="12"
                                    rows="4"></textarea>
                            </div>

                            {/* send button */}
                                <button type="submit" value="Send" className="mr-12 m-2 h-10 rounded self-end hover:scale-105 hover:drop-shadow-lg bg-[#ED6A11] w-28 text-lg">Send
                                </button>

                            <ToastContainer/>

                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}