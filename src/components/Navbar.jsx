// import { Link } from "react-router-dom"
import { Link } from "react-scroll"
import { useState } from "react"

function Navbar()
{
    let [isOpen, setIsOpen] = useState(false);

    function handleMenu()
    {
        setIsOpen(!isOpen);
    }

    // to close menu when u click on any link
    {/* <Link onClick={ closeMenu } className="nav-link" to="/">Home</Link> */}
    // function closeMenu()
    // {
    //     setIsOpen(false)
    // }

    return(
        <>
            <div className="navbar">

            <h1 className="logo">My Portfolio</h1>

            <div className={ isOpen ? "nav-linksActive" : "nav-links"}>
                <Link className="nav-link" to="home" smooth={true} duration={600} >Home </Link>
                <Link className="nav-link" to="about" smooth={true} duration={600} > About </Link>
                <Link className="nav-link" to="projects" smooth={true} duration={1000}> Projects </Link>
                <Link className="nav-link" to="contact" smooth={true} duration={1000}> Contact </Link>
            </div>

            <div className="menu" onClick={ handleMenu }>&#9776;</div>
    
            </div>
        </>
    )
}

export default Navbar;