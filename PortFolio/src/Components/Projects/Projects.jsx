import React from 'react';
import Card from '../Card/card';
import "./Projects.css";
import weather from "../../assets/waether.png";
import bill from "../../assets/BILL.png";
import text from "../../assets/text.png";
import news from "../../assets/news.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 80,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
  });

  return (
    <div id="projects">
      <h1 id="para">1+ YEAR EXPERIENCE IN PROJECTS</h1>
      <div className="slider">
        <Card title="WEATHER APP" image={weather} repoUrl="https://github.com/Reshoo18/Weather-App" showButton={true} />
        <Card title="BILLING SOFTWARE" image={bill} repoUrl="https://github.com/Reshoo18/BillingSoftware-" showButton={true} />
        <Card title="TEXT ANALYZER" image={text} repoUrl="https://textythings.netlify.app" showButton={true} />
        <Card title="NEWS APP" image={news} repoUrl="https://github.com/Reshoo18/NewsApp-Project" showButton={true} />
      </div>
    </div>
  );
}

export default Projects;