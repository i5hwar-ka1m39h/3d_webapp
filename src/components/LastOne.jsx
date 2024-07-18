import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo,  } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { gsapScrollTrigger } from '../utils/animation'
gsap.registerPlugin(ScrollTrigger)


export default function LastOne() {

    const videoRef = useRef();
    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:'#chip',
                start: '20% bottom',
            },
            opacity:0,
            ease: 'power2.inOut',
            scale: 2,
            duration: 2
        })

        gsapScrollTrigger('.g_fadeIn',{
            opacity:1,
            y:0,
            ease: 'power2.inOut',
            duration:1
        })
    },[])
  return (
    <section className='common-padding'>
        <div className=' screen-max-width'>
            <div className=' flex-center w-full my-20' id='chip'>
                <img src={chipImg} alt="chip_image" width={180} height={180} />
            </div>

            <div className=' flex flex-col items-center '>
                <h2 className='hiw-title'>A17 Pro Chip. <br /> A monster win for gaming.</h2>
                <p className='hiw-subtitle'>It's here. The biggest redesign in history of apple GPUs.</p>
                

            </div>

            <div className=' mt-10 md:mt-20 mb-14'>
                <div className=' relative h-full flex-center'>
                    <div className=' overflow-hidden'> 
                        <img src={frameImg} alt="frames" className=' bg-transparent relative z-10' />
                    </div>

                    <div className='hiw-video'>
                            <video playsInline muted autoPlay preload='none' ref={videoRef} className=' pointer-events-none'>
                                <source  src={frameVideo} type='video/mp4'/>
                            </video>
                    </div>
                </div>

                <p className=' text-gray font-semibold text-center mt-3'>Honkai: star rail</p>

                </div>

                <div className='hiw-text-container'>
                        <div className='flex flex-1 justify-center flex-col'>
                                <p className='hiw-text g_fadeIn'>
                                    A17 is entirely a new class of iPhone chip that delivers our {' '}
                                    <span className=' text-white'>
                                        best graphic performance by far
                                    </span>.
                                </p>
                           

                            <p className='hiw-text g_fadeIn'>
                                    Mobile{' '}
                                    <span className=' text-white'>
                                       look and feel so immersive
                                    </span> with increadibly detailed enviroment and character
                             </p>

                        </div>
                        
               

                <div className=' flex flex-1 justify-center flex-col g_fadeIn'>
                    <p className='hiw-text'>New</p>
                    <p className='hiw-bigtext'>Pro-class GPU</p>
                    <p className='hiw-text'>with 6 cores</p>
                </div>

            </div>
            </div>
        

    </section>
  )
}
