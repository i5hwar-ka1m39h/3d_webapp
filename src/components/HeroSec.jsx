import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import {heroVideo, smallHeroVideo }  from '../utils'

export default function HeroSec() {
    const [videoSrc, setVideoSrc] = useState( window.innerWidth < 760 ? smallHeroVideo : heroVideo );

    useGSAP(()=>{
        gsap.to('.hero-title',{
            opacity:1,
            duration:1,
        })

        gsap.to('#cta', {
            opacity:1, delay:1.5, y:-50,
        })
    },[])

    const handleWindowResize = () =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleWindowResize)

        return ()=>{
            window.removeEventListener('resize', handleWindowResize)
        }
    },[])







  return (
    <section className=' w-full nav-height bg-black'>
        <div className=' h-5/6 w-full flex-center flex-col'>
            <p className='hero-title'>iPhone 15 Pro</p>
            <div className=' md:w-10/12 w-9/12'>
                <video autoPlay muted playsInline={true} key={videoSrc} className=' pointer-events-none' >
                    <source src={videoSrc} type='video/mp4'/>
                </video>
            </div>
        </div>

        <div id='cta' className=' flex flex-col items-center opacity-0 translate-y-20'>
            <a href="#highlights" className='btn'>Buy</a>
            <p className=' font-normal text-xl'>From $199/month or $999</p>
        </div>

    </section>
  )
}
