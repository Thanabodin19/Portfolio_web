import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../contents/about'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
    return (
        <div className='space-y-4'>
            <div className='text-primaryAccess font-medium'>Project</div>
            <div className='grid grid-cols-[25%_75%]'>
                <div>
                    <div>
                        <span className='text-sm'>2023</span>
                    </div>
                    <div>image</div>
                </div>
                <div className='grid gap-y-4'>
                    <div className='text-primaryAccess font-medium'>CDTI Chat</div>
                    <div className='text-xl'>
                        <FontAwesomeIcon icon={faGithub} />
                        
                    </div>
                    <div className='text-sm'>discription</div>
                    <div className='flex gap-4 text-sm'>
                        <div className='bg-primaryBG2 px-2 rounded-sm text-primaryAccess hover:text-primaryTitle'>React</div>
                        <div className='bg-primaryBG2 px-2 rounded-sm text-primaryAccess'>SCSS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;