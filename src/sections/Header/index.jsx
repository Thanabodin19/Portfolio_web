import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "../../contents/header"
const Header = () =>{
    return (
        <div>
            <div className='flex flex-col gap-2'>
                <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
                <div className='text-primaryAccess font-semibold'>{data.title}</div>
                <div className='text-sm w-5/6'>{data.caption}</div>
                <div className='mt-4'>
                    <a href="#">
                        <span className='rounded-md bg-primaryTitle py-2 px-4 '>
                            {data.btnText}
                            <span className='rotate-90 inline-block ml-2 text-sm'>
                                <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                            </span>
                        </span>
                    </a>
                 </div>
            </div>
        </div>
    )
}

export default Header