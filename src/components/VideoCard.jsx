import React, { useRef, useState } from 'react'
import {hightlightsSlides} from '../constants'
export default function VideoCard() {

    const videRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [ video, setVideo]= useState({

    });

    
  return (
    <>
    <div className=' flex items-center'>
        {hightlightsSlides.map((each,index)=>(
            <div key={each.id} id='slider' className=' sm:pr-20 pr-10'>
                <div className='video-carousel_container'>
                    <div className=' w-full h-full flex-center overflow-hidden bg-black rounded-3xl'>
                        <video id='video' muted playsInline={true} preload='auto'>
                            <source src={each.video} type='video/mp4'/>
                        </video>
                    </div>
                    <div className=' absolute top-12 left-[5%] z-10'>
                        {each.textLists.map((singleText)=>(
                            <p key={singleText}
                            className='md:text-2xl text-xl font-medium'>{singleText}</p>
                        ))}
                    </div>
                </div>

            </div>
        ))}

    </div>
    </>
  )
}
