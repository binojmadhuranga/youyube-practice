import React from 'react';
import Logo from '../assets/logo.avif';
import { BurgerIcon } from './BurgerIcon';
import { CartIcon } from './CartIcon';
import { SearchIcon } from './Searchicon';


function Navbar() {
    return (
        <div className="px-4 mt-5 flex justify-between w-[100vw]">
            <img
                src={Logo}
                alt="Logo"
                className="w-[100px] h-[10%] cursor-pointer object-contain"
            />
            <div className="flex items-center space-x-6 w-[30%] justify-between">
                <SearchIcon />
                <CartIcon />
                <BurgerIcon />

            </div>

        </div>
    );
}

export default Navbar;
