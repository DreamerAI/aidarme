'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const WelcomePage = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

    return (
        <motion.div 
            ref={ref}
            className="min-h-screen h-full text-black w-screen flex flex-col items-center justify-center bg-fixed bg-[url('/images/pattern.png')]"
            style={{
                opacity,
                scale,
            }}
        >
            <div className="text-center">
                <h1 className='text-headline font-bold'>AIDAR.</h1>
                <div className='flex justify-around mt-6 gap-2 w-full text-xl md:flex-row flex-col sm:text-4xl'>
                    <p>Frontend Developer</p>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </motion.div>
    )
}