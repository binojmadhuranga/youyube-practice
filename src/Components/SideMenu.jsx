import { sub } from 'motion/react-client';
import Logo from '../assets/logo.avif';
import { CloseIcon } from './CloseIcon';
import Item from './Item';
import { InstagramIcon } from './InstagramIcon';
import { TiktokIcon } from './TiktokIcon';
import { YoutubeIcon } from './YoutubeIcon';
import { UserIcon } from './UserIcon';

function SideMenu({ isOpen, handleClose }) {
    return (
        <>
            <div className='fixed bg-black/40 w-[100vw] h-[100vh] top-0 z-20'>
                <div className='bg-white/90 w-[80%] z-20 fixed top-0 right-0'>
                    <div className='flex items-center justify-between p-4 min-h-[10vh]'>
                        <img src={Logo} alt="logo" className='h-[20px] w-[80px] ' />
                        <CloseIcon onClick={handleClose} />
                    </div>
                    <div className='flex flex-col items-start justify-start h-[90vh] mt-2.5 px-4 bg-white/90 z-20'>
                        {
                            items.map((item) => (
                                <Item
                                    key={item.name}
                                    name={item.name}
                                    items={item.subItem}
                                />

                            ))
                        }
                        <Item name= "Account" noBorder={true} leftIcon={<UserIcon/>} />
                        <div className='flex items-center gap-4 mt-3'>
                            <InstagramIcon/>
                            <TiktokIcon/>
                            <YoutubeIcon/>

                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default SideMenu

const items = [
    {
        name: "12 days of Christmas"

    },
    {
        name: "Men",
        subItem: ["T-Shirts", "Shirts", "Pants", "Shorts", "Jackets"]
    },
    {
        name: "Women",
        subItem: ["Tops", "Dresses", "Skirts", "Jeans", "Jackets"]
    },
    {
        name: "Accessories",
        subItem: ["Bags", "Hats", "Belts", "Watches", "Sunglasses"]
    },
    {
        name: "Gift Item",
        subItem: ["Mugs", "Keychains", "Stickers"]
    }
];
