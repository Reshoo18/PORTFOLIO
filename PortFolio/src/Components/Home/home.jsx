import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import Typewriter from "typewriter-effect";

function Home() {
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
