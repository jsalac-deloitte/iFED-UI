import { MdOutlineMenu } from 'react-icons/md'
const Logo = './assets/images/shared/Deloitte-Logo-Mobile.png'

const Navbar: React.FC = () => {
    return (
        <div className="w-screen h-[70px] bg-black flex justify-between">
            <div>
                <img src={Logo} alt="Logo" className="w-[125px] ml-[20px] mt-[9.725px]" />
            </div>
            <div>
                <MdOutlineMenu className="w-[48px] h-[48px] invert mr-[20px] mt-[11px]" />
            </div>
        </div>
    )
}

export default Navbar