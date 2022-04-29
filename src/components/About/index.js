import React from 'react'
import avatar from "../../assets/images/avatar.jpeg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Hello hey!</h1>
      <img src={avatar} className="my-2" style={{ width: "200px", height: "200px" }} alt="avatar" />
      <div className="my-2">
        <p>
          Hello, world! I'm Rob.  I'm an aspiring Full Stack Web Developer and I have Trypophobia, which is an aversion or repulsion to objects like honeycombs and sponges that have repetitive patterns or clusters of small holes.  
      </p>
      </div>
    </section>
  )
}

export default About