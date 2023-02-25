import {AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai";
import {FiLinkedin,FiGithub} from "react-icons/fi";
import {SlSocialBehance} from "react-icons/sl";
import Resume from "./images/Rehmat_cv.pdf";
import Craft from "./images/craft.jpg";
import Journal from "./images/journal.jpg";
import PIC from "./images/photograph.jpg";
import ART from "./images/art.jpg";
import { Link } from 'react-router-dom';
import MyPic from "./images/mypic1.jpg";
import Sign from "./images/myLogo.png";

export default function About()
{
    return(

        <div className="bg-[#EAE8E8] h-full">
             <div className="w-full flex justify-between pr-8 p-4 fixed z-50 bg-[#EAE8E8]  ">
                <div className="sm:pl-20 pl-4">
                    <img src={Sign} className="w-24"/>
                </div>
                <div className="flex w-full sm:w-2/4 justify-around space-x-2 sm:space-x-4">
                    <Link to="/home">
                        <h2 className="text-[#F15A24] ">Design</h2>
                    </Link>
                    <Link to="/illustration">
                        <h2 className="text-[#444444] ">Illustrations</h2>
                    </Link>
                    <Link to="/about">
                        <h2 className="text-[#444444] ">About</h2>
                    </Link>
                    <Link to="/contact">
                        <h2 className="text-[#444444] ">Contact</h2>
                    </Link>
                    <a href={Resume} download="Rehmat Resume">
                        <h2 className="text-[#444444] font-semibold ">Resume</h2>
                    </a>
                </div>
                
            </div>
            <div className="columns-1 md:columns-2 w-full pt-28 w-full ">
                <div className="flex justify-center h-[32rem] bg-gradient-to-l from-black/10 via-black/20 to-black-40">
                    <div className="w-60 h-auto drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)]">
                        <div className="border-2 border-black w-80 absolute  h-64 -right-10 top-24"></div>
                        <div className="border-2 border-black w-20 sm:w-32 absolute  h-24 left-52 top-72"></div>
                        <div className="border-2 border-black w-20 sm:w-56 absolute  h-6 left-52 top-32"></div>
                        <div className="border-2 border-black w-10 absolute  h-10 right-52 top-32"></div>
                        <img className="" src={MyPic} />
                    </div>
                </div>
                <div className="md:pt-20 flex flex-col items-center lg:items-start p-10 pl-20 space-y-4">
                    <h1 className="text-5xl text-[#424241] font-semibold">Hi,I'm<br></br>Rehmat E Mustafa</h1>
                    <p className=" text-xl text-[#606060]">As a curious UI UX and visual designer in Lahore, Pakistan I believe in problem solving, and work to inspire others.<br/><br/>My goal is to learn, grow and create designs to enhace my creativity and to provide out of the box solutions and wonderful experience to users.</p>
                    <div className="flex flex-wrap sm:space-x-10 space-x-4 sm:p-12 pt-8">
                        <Link to="https://www.instagram.com/artic_realm/" target="_blank">
                            <AiOutlineInstagram size={35} className="hover:scale-125"/>
                        </Link>
                        <Link to="https://dribbble.com/Rehmat22" target="_blank">
                            <AiOutlineDribbble size={35} className="hover:scale-125 "/>
                        </Link>
                        <Link to="https://www.behance.net/rehmatemuastafa" target="_blank">
                            <SlSocialBehance stroke-width={30} size={35} className="hover:scale-125 "/>
                        </Link>
                        <Link to="https://github.com/Rehmat-E-Mustafa" target="_blank">
                            <FiGithub size={30} className="hover:scale-125"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/rehmatlink/" target="_blank">
                            <FiLinkedin size={30} className="hover:scale-125 "/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-32"></div>
            <div className="flex  justify-center">
                <h1 className="text-4xl text-[#444444] font-bold">My Leisure Activity</h1>
            </div>
            <div className="h-32"></div>
            <div className="md:pl-32 md:pr-32 pl-2 pr-2 sm:pl-8 sm:pr-8 grid grid-cols-2 sm:grid-cols-4 place-content-center">
                <div className="grid justify-center place-content-center drop-shadow-sm border-[#444444] hover:border-b-2 hover:border-r-2 h-64 ">
                    <h1 className="place-self-center pb-4 text-xl">Art</h1>
                    <img className="w-40 " src={ART} />
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-b-2 hover:border-l-2 drop-shadow-sm h-64 ">
                    <h1 className="place-self-center pb-4 text-xl">Crafting</h1>
                    <img className="w-40" src={Craft} />
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-b-2  hover:border-r-2 drop-shadow-sm h-64">
                <h1 className="place-self-center pb-4 text-xl">Photography</h1>
                    <img className="w-40" src={PIC}/>
                </div>
                <div className="grid place-content-center border-[#444444] hover:border-b-2 hover:border-l-2 drop-shadow-sm  h-64 ">
                <h1 className="place-self-center pb-4 text-xl">Journaling</h1>
                    <img className="w-40" src={Journal}  />
                </div>
            </div>
            <div className="h-32"></div>
        </div>
       
    );
}