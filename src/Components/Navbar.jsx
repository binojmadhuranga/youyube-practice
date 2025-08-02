import { useState } from 'react';
import Logo from '../assets/logo.avif';
import { BurgerIcon } from './BurgerIcon';
import { CartIcon } from './CartIcon';
import { SearchIcon } from './Searchicon';
import CardSlider from './CardSlider';



function Navbar() {
   const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="px-4 mt-5 flex justify-between w-[100vw] h-[]">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-[100px] h-[10%] cursor-pointer object-contain"
                />
                <div className="flex items-center space-x-6 w-[30%] justify-end">
                    <SearchIcon />
                    <CartIcon onClick={() => setIsOpen(true)} />
                    <BurgerIcon />

                </div>
            </div>
            <CardSlider isOpen={isOpen} handleClose={() => setIsOpen(false)} />
        </>
    );
}

export default Navbar;
