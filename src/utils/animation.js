import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const aniGSAPtimeline =(timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProp)=>{
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    })

    timeline.to(firstTarget,{
        ...animationProp,
        ease:'power2.inOut'
    }, '<')

    timeline.to(secondTarget,{
        ...animationProp,
        ease:'power2.inOut'
    }, '<')
}

export const gsapScrollTrigger = (target, animationProp, scrollProp)=>{
    gsap.to(target, {
        ...animationProp,
        scrollTrigger:{
            trigger:target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProp

        }
    })
}

