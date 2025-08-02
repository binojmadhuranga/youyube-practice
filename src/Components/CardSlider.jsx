import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react";

import { CloseIconWithBg } from "./CloseIconWithBg";
import { CartIcon } from './CartIcon';

export default function CardSlider({ isOpen, handleClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/50"
                        onClick={handleClose}
                    />

                    {/* Cart Slider */}
                    <motion.div
                        initial={{ 
                            x: "100%",
                            opacity: 0 
                        }}
                        animate={{ 
                            x: 0,
                            opacity: 1 
                        }}
                        exit={{ 
                            x: "100%",
                            opacity: 0 
                        }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.4
                        }}
                        className="fixed top-0 right-0 z-50 h-full"
                    >
                        <motion.div 
                            className="bg-[#f3f3f3] w-[95vw] h-[90vh] ml-[5vw] mt-4 rounded-l-2xl shadow-2xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                        >
                            {/* Header */}
                            <motion.div 
                                className="flex justify-between items-center py-[10px] px-2 shadow-sm"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <CloseIconWithBg onClick={handleClose} />
                                <span className="text-[12px] be-vietnam-pro-bold tracking-wider">
                                    My Cart
                                </span>
                                <CartIcon />
                            </motion.div>

                            {/* Content */}
                            <motion.div 
                                className="flex items-center justify-center w-full h-full -mt-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <div className="flex flex-col items-center gap-7">
                                    <motion.span 
                                        className="text-[12px] be-vietnam-pro-bold tracking-wider"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.2 }}
                                    >
                                        Your cart is currently empty.
                                    </motion.span>
                                    <motion.button 
                                        className="uppercase w-[90px] py-[10px] bg-white shadow-sm rounded-full be-vietnam-pro-bold text-[14px] hover:shadow-lg transition-shadow"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.5, duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Shop
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
