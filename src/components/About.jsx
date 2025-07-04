import CIcon from "../assets/iconC.svg"
import Java from "../assets/java.svg"
import Html from "../assets/html5.svg"
import Css from "../assets/css3.svg"
import Js from "../assets/js.svg"
import React from "../assets/react.svg"
import Vite from "../assets/vite.svg"
import VScode from "../assets/vsCode.svg"
import Intellij from "../assets/intellij.svg"
import MySql from "../assets/mysql2.png"

function About()
{
    return(
    <>
    <div className="about" id="about">

        <div className="intro">
            <h2 className="introPara">
                "Exploring and building with these technologies as I grow in my Coding Journey"</h2>
        </div>

        <div className="skills-dabba">

            <div className="lang-dabba">
                <div className="title">
                    <h2 className="head">Languages</h2>
                </div>
                <div className="lang-icons">
                    <img src={ Html}   alt="Html5" className="lang"  />
                    <img src={ Css }   alt="CSS3" className="lang" />
                    <img src={ Js }    alt="Javascript" className="lang" />
                    <img src={ CIcon } alt="C" className="lang" />
                    <img src={ Java }  alt="Java" className="lang" />
                    <img src={ MySql } alt="MySql" className="lang" />
                </div>
            </div>

            <div className="lib-dabba">
                <div className="title">
                    <h2 className="head">Library</h2>
                </div>
                <div className="lib-icons">
                   <img src={ React } alt="React" className="react" />
                </div>
            </div>

            <div className="tool-dabba"> 
                <div className="title">
                    <h2 className="head">Tools</h2>
                </div> 
                <div className="tool-icons">
                    <img src={ VScode } alt="VScode" className="tIcon" />
                    <img src={ Intellij } alt="Intellij" className="tIcon" />
                    <img src={ Vite } alt="Vite" className="tIcon" />
                </div>      
            </div>
        </div>
    </div> 
    </> 
    )

}

export default About;