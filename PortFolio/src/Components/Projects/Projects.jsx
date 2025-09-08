import React from 'react'
import Card from '../Card/card'
import "./Projects.css"
import weather from "../../assets/waether.png"
import bill from "../../assets/BILL.png"
import text from "../../assets/text.png"
import news from "../../assets/news.png"
function Projects() {
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
