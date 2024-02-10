import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'
const Left_Sec = () =>{
    return (
        <div>
            <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[90vh]'>
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    )
}

export default Left_Sec