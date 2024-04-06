import { data } from '../../contents/about'

const About = () => {
    return (
        <div className='space-y-4'>
            <div className='text-primaryAccess font-medium'>{data.title}</div>
            <div>{data.dtscription}</div>
        </div>
    )
}
export default About;