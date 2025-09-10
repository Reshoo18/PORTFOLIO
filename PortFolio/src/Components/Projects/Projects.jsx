import React from 'react'
import Card from '../Card/card'
import "./Projects.css"
import weather from "../../assets/waether.png"
import bill from "../../assets/BILL.png"
import text from "../../assets/text.png"
import news from "../../assets/news.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(()=>{
    gsap.from("#para",{
                  y:80,
                  duration:1,
                  opacity:0,
                  stagger:1,
                  scrollTrigger:{
                        trigger:"#para",
                        scroll:"body",
                        scrub:2,
                        
                        start:"top 60%",
                        end:"top 30%"
                  }
            })
  })
  return (
    <div id="projects">
        <h1 id="para">1+ YEAR EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
          <Card title="WEATHER APP" image={weather}/>
          <Card  title="BILLING SOFTWARE" image={bill}/>

          <Card   title="TEXT ANAYLYZER" image={text}/>
          <Card   title="NEWS APP" image={news}/>
        </div>
    </div>
  )
}

export default Projects
