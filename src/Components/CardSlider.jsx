import React, { useState } from 'react'
import { motion } from "motion/react";

import { CloseIconWithBg } from "./CloseIconWithBg";
import { CartIcon } from './CartIcon';
import { div } from 'motion/react-client';

export default function CardSlider({ isOpen,handleClose }) {
    // const handleClose = () => {
    //     if (onClose) {
    //         onClose();
    //     }
    // };

    if(!isOpen) {
        return null;
    }
    
   

    return (
        <div>
            <div className="bg-[#f3f3f3] w-[95vw] h-[90vh] ml-[5vw] mt-4 rounded-l-2xl">
                <div className="flex justify-between items-center py-[10px] px-2 shadow-sm">
                    <CloseIconWithBg onClick={handleClose} />
                    <span className="text-[12px] be-vietnam-pro-bold tracking-wider">
                        My Cart
                    </span>
                    <CartIcon />
                </div>

                <div className="h-full w-full flex justify-center items-center -mt-8">
                    <div className="flex flex-col items-center gap-7">
                        <span className="text-[12px] be-vietnam-pro-bold tracking-wider">
                            Your cart is currently empty.
                        </span>
                        <button className="uppercase w-[90px] py-[10px] bg-white shadow-sm rounded-full be-vietnam-pro-bold text-[14px]">
                            Shop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
