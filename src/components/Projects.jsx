import Travel from "../assets/travelJava.png"
import Bank from '../assets/vbsJava.png'

function Projects()
{
    return(
    <>
        <div className="project" id="projects">

            <h2 className="proj-title">Snapshots of My Projects</h2>

            <div className="proj-dabba">
                <div className="proj">
                    <img src={ Travel } alt="JavaProject" className="javaProj"  />
                    <p>ExploreIt - Hotel Booking System</p>
                    <p>Java | MySql</p>
                </div>
                <div className="proj">
                    <img src={ Bank } alt="BankingProject" className="javaProj" />
                    <p>Virtual Banking System</p>
                    <p>Java | MySql</p>
                </div>
            </div>
    
        </div>
    </>
    )
}

export default Projects;