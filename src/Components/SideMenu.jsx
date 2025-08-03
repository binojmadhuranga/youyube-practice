import Logo from '../assets/logo.avif';
import { CloseIcon } from './CloseIcon';

function SideMenu({ isOpen, handleClose }) {
    return (
        <>
            <div className='fixed bg-black/40 w-[100vw] h-screen top-0'>
                <div className='bg-white/90 w-[80%] z-20 fixed top-0 right-0'>
                    <div className='flex items-center justify-between p-4 min-h-[10vh]'>
                        <img src={Logo} alt="logo" className='h-[20px] w-[80px] ' />
                        <CloseIcon onClick={handleClose} />
                    </div>



                </div>
            </div>

        </>
    )
}

export default SideMenu