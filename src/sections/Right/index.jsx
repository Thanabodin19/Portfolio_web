import About from "../About"
import Experience from "../Experience"
import Project from "../Project"

const Right_Sec = () =>{
    return (

        <div className="grid gap-y-40 px-5">
            <About />
            <Project />
            <Experience />
            <div>Skill</div>
        </div>
    )
}

export default Right_Sec