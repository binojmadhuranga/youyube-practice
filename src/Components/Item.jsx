import React from 'react'
import { PlusIcon } from './PlusIcon'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';


export default function ({ name, item, noBorder, leftIcon, items }) {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className={`py-[20px] border-gray-400 w-[70vw] ${noBorder ? "" : "border-b "}`}>
            <div className='flex items-center justify-between w-full gap-2'>
                <div className='flex items-center gap-2'>
                    {leftIcon && <span className='text-gray-500'>{leftIcon}</span>}
                    {name}
                </div>
                {item && (
                    <div className='flex items-center gap-2'>
                        {item}
                    </div>
                )}
                {items && items.length > 0 && (
                    <PlusIcon onClick={() => setIsOpen(!isOpen)} />)
                }
            </div>
            <AnimatePresence>
                {isOpen && items && items.length > 0 && (
                    <motion.div 
                        className='px-3 overflow-hidden'
                        initial={{ 
                            height: 0,
                            opacity: 0 
                        }}
                        animate={{ 
                            height: "auto",
                            opacity: 1 
                        }}
                        exit={{ 
                            height: 0,
                            opacity: 0 
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        {items.map((subItem, index) => (
                            <motion.div 
                                key={subItem} 
                                className='py-2 text-sm text-gray-600 border-b border-gray-300'
                                initial={{ 
                                    x: -20,
                                    opacity: 0 
                                }}
                                animate={{ 
                                    x: 0,
                                    opacity: 1 
                                }}
                                transition={{ 
                                    delay: index * 0.1,
                                    duration: 0.2 
                                }}
                                whileHover={{ 
                                    x: 5,
                                    color: "#374151" 
                                }}
                            >
                                {subItem}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
