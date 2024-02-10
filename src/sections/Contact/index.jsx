import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () =>{
    return (
        <div>
            <div className='flex items-end gap-4 text-2xl '>
                <FontAwesomeIcon className='hover:scale-150 hover:text-primaryTitle duration-500' icon={faGithub}/>
                <FontAwesomeIcon className='hover:scale-150 hover:text-primaryTitle duration-500' icon={faLinkedin}/>
                <FontAwesomeIcon className='hover:scale-150 hover:text-primaryTitle duration-500' icon={faFacebook}/>
            </div>
        </div>
    )
}

export default Contact