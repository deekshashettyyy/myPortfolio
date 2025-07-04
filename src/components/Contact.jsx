import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { useState } from "react"


function Contact()
{
    let [data , setData] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    );

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(data);
        setData(             //EMPTY INPUT
            { 
                name: "",
                email: "",
                message: "",
            }
        );  
    }

    function handleChange(event)
    {
        let { name , value } = event.target;
            setData(
                (prevData)=>({
                        ...prevData,
                        [name] : value 
                    })       
            );
    }

    return(
        <>
            <div className="contact">

                <h2>Let's Connect!</h2>
                {/* <p className="para">Feel free to react out</p> */}

                <div className="form-dabba" onSubmit={ handleSubmit }>
                    <form className="form" >

                        <div className="dabba">
                            <label htmlFor="name" >Name:</label>
                            <input type="text" id="name" className="input" name="name"  required
                            onChange={ handleChange } value={ data.name } />
                        </div>

                        <div className="dabba">
                            <label htmlFor="email" >Email:</label>
                            <input type="text" id="email" className="input" name="email"  required 
                            onChange={ handleChange } value={ data.email } />
                        </div>

                        <div className="dabba">
                            <label htmlFor="msg" >Message:</label>
                            <input type="text" id="msg" className="input" name="message"  required 
                            onChange={ handleChange } value={ data.message } />
                        </div>

                        <button className="button" type="submit" >Send!</button>
                    </form>
                </div>

                <div className="contact-icons">
                    <a href="mailto:deekshashetty104@gmail.com" target="_blank" rel="noopener noreferrer" >
                       <SiGmail className="Cicon" />           
                    </a>
                    <a href="https://www.linkedin.com/in/deeksha-shetty-0704672a7/"
                       target="_blank"
                       rel="noopener noreferrer">
                       <FaLinkedin className="Cicon" />
                    </a>
                </div>

                <footer className="footer">              
                    <div className="copy">
                        <p>© 2025 Deeksha Shetty. All rights reserved.</p>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Contact;


// import Linkedin from "../assets/linkedin.svg"
// import Gmail from "../assets/gmail.svg"

{/* <img src={ Linkedin } alt="Linkedin" className="icon" />
<img src={ Gmail } alt="Gmail" className="icon" /> */}