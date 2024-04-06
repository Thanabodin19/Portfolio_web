import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../contents/about'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
    return (
        <div className='space-y-4'>
            <div className='text-primaryAccess font-medium'>Experience</div>
            <div className='grid grid-cols-[25%_75%]'>
                <div>
                    <div>2023</div>
                    <div>image</div>
                </div>
                <div className='grid gap-y-4'>
                    <div className='text-primaryAccess font-medium'>Title</div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div>discription</div>
                    <div className='flex gap-4'>
                        <div>React</div>
                        <div>SCSS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;