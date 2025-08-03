import { useState } from 'react';
import Logo from '../assets/logo.avif';
import { BurgerIcon } from './BurgerIcon';
import { CartIcon } from './CartIcon';
import { SearchIcon } from './Searchicon';
import CardSlider from './CardSlider';
import Searchbar from './Searchbar';
import SideMenu from './SideMenu';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchbarOpen, setSearchBar] = useState(false);
    const [isSideMenuOpen, setSideMenu] = useState(false);

    return (
        <>
            <div className="px-4 mt-5 flex justify-between w-[100vw] h-[]">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-[100px] h-[10%] cursor-pointer object-contain"
                />
                <div className="flex items-center space-x-6 w-[30%] justify-end">
                    <SearchIcon onClick={() => setSearchBar(true)} />
                    <CartIcon onClick={() => setIsOpen(true)} />
                    <BurgerIcon onClick={() => setSideMenu(true)} />

                </div>
            </div>
            <CardSlider isOpen={isOpen} handleClose={() => setIsOpen(false)} />
            <Searchbar isOpen={isSearchbarOpen} handleClose={() => setSearchBar(false)} />
            <SideMenu isOpen={isSideMenuOpen} handleClose={() => setSideMenu(false)} />
        </>
    );
}

export default Navbar;
