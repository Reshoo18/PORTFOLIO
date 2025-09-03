import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import {TypeWriter} from "react-simple-typewriter"
function Home() {
  return (
    <div id="home">
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">RESHOO RANJAN</div>
            <div className="line3">
              <TypeWriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}

              />
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
