import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function About() {
  return (
    <div>
      <h1 className="heading">ABOUT ME</h1>
      <img
        src="images/10.jpg"
        alt="img"
        width={200}
        height={200}
        className="img1"
      />
      <h2>Explore My Skills </h2>
      <p>
        I am Shabbir I am a Designer and recently I am learning Web Development
        I have skills of HTML, CSS, TS, JS AND NEXTJS
        <br /> command to handle and also doing well good. I am making develop
        so many projects of Web Pages. Now I am work on my skills <br /> to
        improve my more skills. Recently Present I am a student of Governor
        Sindh Kamran Khan Tessori Initiative.
      </p>
      <div className="btn3">
        <button className="bt2">
          <FaLinkedin className="icon" />
        </button>
        <button className="bt2">
          <FaGithub className="icon" />
        </button>
        <button className="bt2">
          <FaFacebook className="icon" />
        </button>
        <button className="bt2">
          <FaDiscord className="icon" />
        </button>
        <button className="bt2">
          <FaInstagramSquare className="icon" />
        </button>
      </div>
      <Skills />
    </div>
  );
}
export default About;

export const Skills = () => {
  return (
    <div className="">
      <h1 className="heading">My Skills</h1>
      <div>
        <h2 className="skill-h2">HTML</h2>
        <div className="bar1"></div>
      </div>

      <div>
        <h2 className="skill-h2">CSS</h2>
        <div className="bar2"></div>
      </div>

      <div>
        <h2 className="skill-h2">JAVASCRIPT</h2>
        <div className="bar3"></div>
      </div>

      <div>
        <h2 className="skill-h2">NEXT.JS</h2>
        <div className="bar4"></div>
      </div>

      <div>
        <h2 className="skill-h2">TYPESCRIPT</h2>
        <div className="bar5"></div>
      </div>
    </div>
  );
};
