import Img from "./images/Asset3.png";
import MoodBoard from "./images/moodboard.jpeg";
import DonarApp from "./images/donarapp.png";
import Wireframe from "./images/wireFrame.png";
import AnimeApp from "./images/animeApp.png";
import Lily from "./images/lily.png";
import BFlower from "./images/blackflower.png";
import HalloweenSVG from "./images/halloweentransport.png";
import Gojo from "./images/gojo.png";
import LOGO from "./images/Logo.png";
import Sun from "./images/sun.png";
import Rose from "./images/rose.png";
import Pika from "./images/pika.png";
import Galaxy from "./images/galaxy.png";
import MM from "./images/mm.png";
import Beauty from "./images/beauty.png";
import Minimal from "./images/minimal.png";
import {AiFillBehanceCircle,AiFillInstagram } from "react-icons/ai";
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
            <div className="flex flex-col space-y-2 pt-20 items-center">
                <img className=" w-5/6" src={Img} alt="Signup" />
                <h1 className="text-[44px] text-[#878787]">& GRAPHIC DESIGNER</h1>
                <h2 className="text-xl tracking-[.5em] text-[#444444]">based in Pakistan</h2>
                <div className="h-12"></div>
                <span className="w-full p-0.5 bg-[#F7931E] lg:w-2/3"></span>
            </div>
            <div className="h-40"></div>
            {/* ------------------------------------------Work portion------------------------------------ */}
            
            <div className="w-full max-w-[100rem] sm:columns-1  md:columns-2 lg:columns-3 gap-5">
                <div className="flex flex-col flex-wrap space-y-6">
                    <Link to="https://www.behance.net/gallery/157477497/Animena-UIUX-Design" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={MoodBoard} alt="MoodBoard" />
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">MoodBoard</h1>
                                <p className="mb-3 text-xm italic text-white">Fro project Animena. This describes the color theory and overall feel of the app</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/157477497/Animena-UIUX-Design" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={Wireframe} alt="Wireframes"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Wireframes</h1>
                                <p className="mb-3 text-xm italic text-white">Wireframe to demonstrate the initial working of project Animena</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/157477497/Animena-UIUX-Design" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={AnimeApp} alt="Animena App"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Animena</h1>
                                <p className="mb-3 text-xm italic text-white">UI/UX project for anime recomendation App.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.behance.net/gallery/151029571/Doneture" target="_blank">
                        <div className="row-span-2 drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={DonarApp} alt="Donar App"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Doneture</h1>
                                <p className="mb-3 text-xm italic text-white">Fro Donation Management Mobile Application. This is a flutter project</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.behance.net/gallery/154468517/Summer-digital-art" target="_blank">
                        <div className="row-span-2 self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={Sun} alt="Sunset" />
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">SunSet</h1>
                                <p className="mb-3 text-xm italic text-white">Digital art created on Krita.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    
                    <Link to="https://www.behance.net/gallery/154467333/Desktop-wallpaper-Krita" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={BFlower} alt="flower"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Flower</h1>
                                <p className="mb-3 text-xm italic text-white">Digital art created on Krita.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>

                    
                    <Link to="https://www.behance.net/gallery/154468391/desktop-wallpaper-Anime" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={Gojo} alt="Anime desktop wallpaper" />
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Asthetic</h1>
                                <p className="mb-3 text-xm italic text-white">Asthetic Desktop wallpaper created on canva.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>

                    <Link to="https://www.behance.net/gallery/149707671/Desktop-wallpaper-pikachu" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={Pika} alt="Pikachu desktop wallpaper"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Pikachu</h1>
                                <p className="mb-3 text-xm italic text-white">Asthetic Pokemon themed desktop wallpaper created on canva.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154471897/Halloween-transport" target="_blank">
                        <div className="row-span-1 self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={HalloweenSVG} alt="Halloween" />
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Halloween illustration</h1>
                                <p className="mb-3 text-xm italic text-white">Halloween svg illustration created in illustrator</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154470745/Minimalist-Poster" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={Minimal} alt=""/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Minimalistic poster</h1>
                                <p className="mb-3 text-xm italic text-white">Minimalist poster created in photoshop in the voulenteer work as a member of GDSC.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154469117/Postcard-floral" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className="w-[27rem]" src={Lily} alt="Pikachu desktop wallpaper"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Postcard</h1>
                                <p className="mb-3 text-xm italic text-white">Asthetic postcard using free tool Krita</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/164558843/Digitise-logo" target="_blank">
                        <div className="row-span-2 drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={LOGO} alt="Donar App"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Digitise Logo</h1>
                                <p className="mb-3 text-xm italic text-white">Logo created during internship with "The Digitise" for the renewal of there website.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154469307/diital-art-infinite-beauty" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={Galaxy} alt="Pikachu desktop wallpaper"/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Infinity</h1>
                                <p className="mb-3 text-xm italic text-white">Galaxy poster demonstrating the infinite opportunities awaiting to be captured by us.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154468777/digital-art-Rose" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={Rose} alt="Rose" />
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Rose</h1>
                                <p className="mb-3 text-xm italic text-white">Digital art created on Krita using free hand water brush tool.</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.instagram.com/p/Cg2EImwNov0/?utm_source=ig_web_copy_link" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={MM} alt=""/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Mystic Messanger</h1>
                                <p className="mb-3 text-xm italic text-white">Exploring Glow effect using photohsop brightness and sharpness features.</p>
                                <AiFillInstagram fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://www.behance.net/gallery/154472289/Asthetic-Poster" target="_blank">
                        <div className="self-center drop-shadow-[0_7px_8px_rgba(0,0,0,0.5)] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow "> 
                            <img className=" w-[27rem]" src={Beauty} alt=""/>
                            <div className="absolute inset-0 bg-[#ED6A11] transition-opacity duration-500 opacity-0 group-hover:opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                <h1 className="font-dmserif text-xl font-bold text-white">Asthetic poster</h1>
                                <p className="mb-3 text-xm italic text-white">Asthetic poster created in photoshop.IT describes the beauty within using asthetic and minimalistic design</p>
                                <AiFillBehanceCircle fill="#FFFFFF" size={30}/>
                            </div>
                        </div>
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
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-b-2 hover:border-r-2 drop-shadow-sm  md:h-52 sm:h-42 h-32 ">
                <FiFigma size={75}/>
                </div>
                <div className="grid place-content-center  border-[#444444] sm:hover:border-b-2 sm:hover:border-t-2 sm:hover:border-r-2 hover:border-l-2 hover:border-b-2 hover:border-r-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <ImHtmlFive2 size={75} />
                </div>
                <div className="grid place-content-center border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-t-2 hover:border-l-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
                <TbBrandCss3 size={95} stroke="#878787"/>
                </div>
                <div className="grid place-content-center  border-[#444444] sm:hover:border-b-2 sm:hover:border-l-2 sm:hover:border-r-2 hover:border-t-2  hover:border-r-2 drop-shadow-sm md:h-52 sm:h-42 h-32 ">
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