import React from 'react';
import "./About.css";
import Card from '../Card/card';
import mern from"../../assets/mern.png";
import cpp from "../../assets/c++.png";
import dsanew from "../../assets/dsanew.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetailes h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetailes h1",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetailes li", {
      y: 100,
      duration: 1.2,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetailes li",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
  });

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetailes">
          <div className="personalinfo">
            <h1>PERSONAL INFO </h1>
            <ul>
              <li>
                <span>Name</span> : RESHOO RANJAN
              </li>
              
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : ENGLISH , HINDI
              </li>
              <li>
                <span>E-MAIL</span> : reshooranjan7@gmail.com
              </li>
            </ul>
          </div>
          <div className="EDUCATION">
            <h1>EDUCATION</h1>
            <ul>
              <li>
                <span>HIGHEST QUALIFICATAION</span> : B-TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8
              </li>
            </ul>
          </div>
          <div className="SKILLS">
            <h1>SKILLS</h1>
            <dd>
              <li>
                MERN STACK WEB DEVELOPER
              </li>
              <li>
                DATA STRUCTURE & ALGORITHMS
              </li>
              <li>
                DATA BASE & MANAGEMENT SYSTEM
              </li>
            </dd>
          </div>
        </div>
      </div>
      <div className="rightabout">
        {/* Pass no props to hide the button on these cards */}
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="C++" image={cpp} />
        <Card title="DSA" image={dsanew} />
      </div>
    </div>
  );
}

export default About;