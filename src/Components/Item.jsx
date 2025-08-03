import React from 'react'
import { PlusIcon } from './PlusIcon'


export default function ({ name, item, noBorder, leftIcon,items}) {


    return (
        <div className={`py-[20px] border-gray-400 w-full ${noBorder ? "" : "border-b"}`}>
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
                    < PlusIcon />)
                }
            </div>
        </div>
    )
}
