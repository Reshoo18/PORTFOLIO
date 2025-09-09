import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
function Contact() {
  return (
    <div id="contacts">
        <div className="leftcontact">
        <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="#">
                <input name="Username" type="text" placeholder='Name'/>
                <input name="Email" type="email" placeholder='Email'/>
                <textarea name="message" id="textarea" placeholder='message 
                me'></textarea>
                <input type="submit" id="btn" value="Submit"/>
                
            </form>
        </div>
    </div>
  )
}

export default Contact
