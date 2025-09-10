import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import Typewriter from "typewriter-effect";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
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
    strings: ["WEB DEVELOPER", "SOFTWARE DEVELOPER","MERN"],
    autoStart: true,
    loop: true,
  }}
/>
          </div>
    <button>HIRE ME</button>
          </div>
        </div>

        <div className="righthome">
            <img src={man} alt="" />
        </div>

    </div>
  )
}

export default Home
