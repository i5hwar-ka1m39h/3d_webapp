import { Html } from '@react-three/drei'
import React from 'react'
import { footerLinks } from '../constants'

export default function Footer() {
  return (
    <footer className=' py-5 sm:px-10 px-5'>
        <div className=' screen-max-width'>
            <div>
                <p className=' font-semibold text-gray text-xs'>
                    More ways to shop:{' '}
                    <span className=' underline text-blue'>
                         Find an apple store 
                    </span>{' '}or {' '}
                    <span className=' underline text-blue'>
                         other retailer 
                    </span>{' '} near you.
                </p>
                <p className=' font-semibold text-gray text-xs'>
                    or call 911
                </p>
            </div>
            <div className=' bg-neutral-700 my-5 h-[1px] w-full'/>
            <div className=' flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray text-xs'>
                    Copyright © 2024 NotApple Inc. All rights reserved.
                </p>
                <div className=' flex'>
                    {footerLinks.map((single, i)=>(
                        <p className='font-semibold text-gray text-xs' key={single}>
                            {single}{' '}
                            {i !== footerLinks.length -1 && (
                                <span className='mx-2'>|</span>
                            )}
                            </p>
                    ))}

                </div>
            </div>
        </div>
    </footer>
  )
}
