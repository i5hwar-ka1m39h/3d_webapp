import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {rightImg, watchImg} from '../utils'
import VideoCard from './VideoCard'


export default function Highlights() {
  useGSAP(()=>{
    gsap.to('#title', {
      
      y:0,
      opacity:1,
    })

    gsap.to('.link',{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
    })
  },[])



  return (
    <section id='highlights' className=' w-screen bg-zinc common-padding overflow-hidden h-full'>
      <div className=' screen-max-width'>
        <div className=' mb-12 items-end md:flex justify-between w-full'>
          <h1 id='title' className='section-heading'>Get the hightlights.</h1>

          <div className=' flex flex-wrap items-end gap-5'>
            <p className='link'> Watch the film
            <img src={watchImg} alt=" watch image" className=' ml-2' />
            </p>

            <p className='link'> Watch the event
            <img src={rightImg} alt="go to logo" className=' ml-2' />
            </p>
          </div>
        </div>

        <VideoCard/>
      </div>
    </section>
  )
}
