import React from 'react'
import {appleImg, bagImg, searchImg} from './../utils'
import {navLists} from '../constants'

export default function Navbar() {
  return (
    <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className=' flex w-full screen-max-width'>
            <img src={appleImg} alt="apple image" width={14} height={18} />

            <div className=' flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((single, index)=>(
                    <div className=' px-5 text-sm text-gray hover:text-white cursor-pointer transition-all' key={index}>
                        {single}
                    </div>
                ))}
            </div>

            <div className=' flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search image" width={18} height={18} />
                <img src={bagImg} alt="bag image" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}
