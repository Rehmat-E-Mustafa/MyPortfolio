import Img from "./images/Asset3.png";
import DonarApp from "./images/donarapp.png";
import AnimeApp from "./images/animeApp.png";
import SastaApp from "./images/sastaSafar.png";
import Resume from "./images/Rehmat_cv.pdf";
import {DiIllustrator} from "react-icons/di";
import {DiPhotoshop} from "react-icons/di";
import {SiAdobexd} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {TbBrandCss3} from "react-icons/tb";
import {ImHtmlFive2} from "react-icons/im";
import {FiFigma} from "react-icons/fi";
import { Link } from 'react-router-dom';
import Sign from "./images/myLogo.png";
export default function Portfolio()
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
            <div className="flex flex-col space-y-2 pt-20 items-center">
                <img className=" w-5/6" src={Img} alt="Signup" />
                <h1 className="text-[44px] text-[#878787]">& GRAPHIC DESIGNER</h1>
                <h2 className="text-xl tracking-[.5em] text-[#444444]">based in Pakistan</h2>
                <div className="h-12"></div>
                <span className="w-full p-0.5 bg-[#F7931E] lg:w-2/3"></span>
            </div>
            <div className="h-32"></div>
            {/* ------------------------------------------Work portion------------------------------------ */}

            <div className="flex flex-col sm:flex-row items-center m-10 lg:mt-20 lg:mb-10 lg:m-40 border-[#444444] hover:border-2">
                <img src={SastaApp} className="w-3/4 sm:w-2/4"/>
                <div className="flex flex-col m-8 space-y-2">
                    <h1 className="md:text-4xl sm:text-2xl text-xl font-bold text-[#444444]">Sasta-Safar</h1>
                    <h2 className="md:text-lg sm:text-md text-xs italic text-[#878787]">A mobile app for cheapest route finding </h2>
                    <h3 className="md:text-2xl sm:text-lg text-xs">It provides cheapest route using public transport based in Lahore, Pakistan</h3>
                    <div className="h-2"> </div>
                    <Link to="https://www.behance.net/gallery/164622861/Sasta-Safar" target="_blank">
                        <button className="h-8 sm:h-10 rounded-full hover:scale-105 hover:drop-shadow-lg bg-black w-32 sm:w-48 text-md sm:text-lg text-white">View Case Study
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center m-10 lg:mt-20 lg:mb-10 lg:m-40 border-[#444444] hover:border-2">
                <img src={AnimeApp} className="w-3/4 sm:w-2/4"/>
                <div className="flex flex-col m-8 space-y-2">
                    <h1 className="md:text-4xl sm:text-2xl text-xl font-bold text-[#444444]">Animena</h1>
                    <h2 className="md:text-lg sm:text-md text-xs italic text-[#878787]">A mobile app for anime recomendation</h2>
                    <h3 className="md:text-2xl sm:text-lg text-xs">Want a app where you can find your new favourite show to binge watching?</h3>
                    <div className="h-2"> </div>
                    <Link to="https://www.behance.net/gallery/157477497/Animena-UIUX-Design" target="_blank">
                        <button className="h-8 sm:h-10 rounded-full hover:scale-105 hover:drop-shadow-lg bg-black w-32 sm:w-48 text-md sm:text-lg text-white">View Case Study
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center m-10 lg:mt-20 lg:mb-10 lg:m-40 border-[#444444] hover:border-2">
                <img src={DonarApp} className="w-3/4 sm:w-2/4"/>
                <div className="flex flex-col m-8 space-y-2">
                    <h1 className="md:text-4xl sm:text-2xl text-xl font-bold text-[#444444]">Doneture</h1>
                    <h2 className="md:text-lg sm:text-md text-xs italic text-[#878787]">A mobile app for Donation Management</h2>
                    <h3 className="md:text-2xl sm:text-lg text-xs">A donation management platform to bring ease to both Donars and NGO's</h3>
                    <div className="h-2"> </div>
                    <Link to="https://www.behance.net/gallery/151029571/Doneture" target="_blank">
                        <button className="h-8 sm:h-10 rounded-full hover:scale-105 hover:drop-shadow-lg bg-black w-32 sm:w-48 text-md sm:text-lg text-white">View Case Study
                        </button>
                    </Link>
                    
                </div>
            </div>
            
            <div className="h-40"></div>
            <div className="w-full flex justify-center pb-20">
                <h1 className="text-4xl text-[#444444] font-bold">My Skills</h1>
            </div>
           {/* ---------------------------------------Skills------------------------------------------------ */}
           <div className="sm:pl-32 sm:pr-32 pl-2 pr-2 grid grid-cols-3 sm:grid-cols-4 place-content-center">
                <div className="grid place-content-center drop-shadow-sm border-[#444444] hover:border-b-2 hover:border-r-2 md:h-52 sm:h-42 h-32 ">
                    <DiIllustrator size={90} fill="#878787"/>
                </div>
                <div className="grid place-content-center border-[#444444] hover:border-b-2 hover:border-l-2 hover:border-r-2 drop-shadow-sm  md:h-52 sm:h-42 h-32">
                    <DiPhotoshop size={90}/>
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-b-2 hover:border-l-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <SiAdobexd size={75} fill="#878787"/>
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-r-0 sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-b-2 hover:border-t-2 hover:border-r-2 drop-shadow-sm  md:h-52 sm:h-42 h-32 ">
                <FiFigma size={75}/>
                </div>
                <div className="grid place-content-center  border-[#444444] sm:hover:border-b-2 sm:hover:border-l-0 sm:hover:border-b-0  sm:hover:border-t-2 sm:hover:border-r-2 hover:border-t-2 hover:border-l-2 hover:border-b-2 hover:border-r-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <ImHtmlFive2 size={75} />
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-b-0 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-t-2 hover:border-l-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <TbBrandCss3 size={95} stroke="#878787"/>
                </div>
                <div className="grid place-content-center  border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 sm:hover:border-b-0 hover:border-t-2  hover:border-r-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <FaReact size={85}/>
                </div>
                <div className="grid place-content-center border-[#444444] hover:border-t-2 hover:border-l-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <SiTailwindcss size={75} fill="#878787"/>
                </div>
            </div>
            <div className="h-40"></div>
            <div className="flex flex-col items-center space-y-8">
                <span className="w-full p-0.5 bg-[#F7931E] lg:w-2/3"></span>
                <div className="h-24"></div>
                    <Link to="/about">
                        <div className="grid place-content-center border-2 border-[#444444] hover:bg-[#444444] hover:scale-110">
                            <h1 className="text-xl p-2 pl-6 pr-6  font-semibold text-[#444444] hover:text-[#EAE8E8] ">About Me</h1>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="grid place-content-center border-2 border-[#444444] hover:bg-[#444444] hover:scale-110">
                            <h1 className="text-xl p-2 pl-4 pr-4 font-semibold text-[#444444] hover:text-[#EAE8E8]">Contact Me</h1>
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/rehmatlink/ "  target="_blank">
                        <div className="grid place-content-center border-2 border-[#444444] hover:bg-[#444444] hover:scale-110">
                            <h1 className="text-xl p-2 pl-8 pr-8 font-semibold text-[#444444] hover:text-[#EAE8E8]">Linkedin</h1>
                        </div>
                    </Link>
                
                <div className="h-20"></div>
                <div className="flex flex-row flex-wrap space-x-10 place-content-around m-6">
                    <h1>rehmat.e.mustafa2@gmail.com</h1>
                    <Link to="https://www.linkedin.com/in/rehmatlink/" target="_blank">
                        <h1>Linkedin</h1>
                    </Link>
                    <Link to="https://www.behance.net/rehmatemuastafa" target="_blank">
                        <h1>Behance</h1>
                    </Link>
                    <Link to="https://dribbble.com/Rehmat22" target="_blank">
                        <h1>Dribbble</h1>
                    </Link>
                    <Link to="https://www.instagram.com/artic_realm/" target="_blank">
                        <h1>Instagram</h1>
                    </Link>
                </div>
            </div>

            
            <div className="h-28"></div>
        </div>
       
        
    );
}