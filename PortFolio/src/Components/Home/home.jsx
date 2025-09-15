import React from 'react'
import "./Home.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import man from "../../assets/man.png"
import Typewriter from "typewriter-effect";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
    // This is the new function to handle the button click
    const handleHireMeClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reshooranjan7@gmail.com', '_blank');
    };

    useGSAP(()=>{
        let tl1=gsap.timeline();
        tl1.from(".line1",{
            y:100,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:100,
            duration:1,
            opacity:0
        })
        tl1.from(".line3",{
            y:100,
            duration:1,
            opacity:0
        })
    })

    return (
        <div id="home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">I'M</div>
                    <div className="line2">RESHOO RANJAN</div>
                    <div className="line3">
                        <Typewriter
                            options={{
                                strings: ["WEB DEVELOPER", "MERN DEVELOPER"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    {/* The `<a>` tag now has an onClick event */}
                    <a onClick={handleHireMeClick} className="hire-me-button">
                        HIRE ME
                    </a>

                    <div className="social-links">
                        <a href="https://github.com/Reshoo18" target="_blank" rel="noopener noreferrer" className="github-icon">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/reshoo-ranjan-22b74829a" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://instagram.com/reshooranjan" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://leetcode.com/CGVwD5faxE/" target="_blank" rel="noopener noreferrer" className="leetcode-icon">
                            <SiLeetcode size={30} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="righthome">
                <img src={man} alt="" />
            </div>
        </div>
    )
}

export default Home