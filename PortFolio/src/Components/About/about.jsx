import React from 'react'
import "./About.css"
function About() {
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
          <span>AGE</span> : 22
                </li>
                <li>
          <span>GENDER</span> : MALE
                </li>
                <li>
          <span>LANGUAGE KNOWN</span> : ENGLISH , HINDI
                </li>
            </ul>
         
        </div>
        <div className="EDUCATION">
          <h1>EDUCATION</h1>
            <ul>
                <li>
          <span>HIGHEST QUALIFICATAION</span> :  B-TECH 
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
    <div className="rightabout"></div>
  </div>
  )
}

export default About
