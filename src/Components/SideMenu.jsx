import { motion, AnimatePresence } from 'motion/react';
import Logo from '../assets/logo.avif';
import { CloseIcon } from './CloseIcon';
import Item from './Item';
import { InstagramIcon } from './InstagramIcon';
import { TiktokIcon } from './TiktokIcon';
import { YoutubeIcon } from './YoutubeIcon';
import { UserIcon } from './UserIcon';

function SideMenu({ isOpen, handleClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <motion.div 
                        className='fixed bg-black/40 w-[100vw] h-[100vh] top-0 z-20'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                    />

                    {/* Side Menu */}
                    <motion.div 
                        className='bg-white w-[80%] z-30 fixed top-0 right-0 h-full shadow-2xl'
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ 
                            type: "spring", 
                            damping: 25, 
                            stiffness: 300,
                            duration: 0.4
                        }}
                    >
                        <motion.div 
                            className='flex items-center justify-between p-4 min-h-[10vh] border-b border-gray-200'
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                        >
                            <img src={Logo} alt="logo" className='h-[20px] w-[80px]' />
                            <CloseIcon onClick={handleClose} />
                        </motion.div>

                        <motion.div 
                            className='flex flex-col items-start justify-start h-[90vh] px-4 bg-white overflow-y-auto'
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ 
                                        delay: 0.4 + (index * 0.1), 
                                        duration: 0.3 
                                    }}
                                >
                                    <Item
                                        name={item.name}
                                        items={item.subItem}
                                    />
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ 
                                    delay: 0.4 + (items.length * 0.1), 
                                    duration: 0.3 
                                }}
                            >
                                <Item name="Account" noBorder={true} leftIcon={<UserIcon/>} />
                            </motion.div>

                            <motion.div 
                                className='flex items-center gap-4 pb-4 mt-6'
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.3 }}
                            >
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <InstagramIcon/>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <TiktokIcon/>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <YoutubeIcon/>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
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
