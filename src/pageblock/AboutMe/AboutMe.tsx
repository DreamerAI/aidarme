import { AboutMeCard } from '@/components'
import Image from 'next/image'
import React from 'react'

export const AboutMe = () => {
    return (
        <>
            <div className='md:pt-10 w-full md:w-1/2 max-w-4xl flex flex-col gap-10 text-aboutme tracking-tight'>
                <h3 className='md:text-5xl text-4xl font-semibold uppercase md:text-left'> Aidar Abdykayimov</h3>
                <div className='flex flex-col gap-10 leading-paragraph font-normal'>
                    <p>I am a passionate and experienced frontend developer and UI designer with a passion for creating user-friendly and visually appealing web interfaces.
                        I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in React.
                        I am also skilled in UI design principles and can create high-fidelity mockups that translate seamlessly into functional web interfaces.</p>
                </div>

                <div className='grid md:grid-cols-2 md:grid-rows-2 gap-4'>
                    <AboutMeCard value={2005} title='projects' />
                    <AboutMeCard value={2005} title='projects' />
                    <AboutMeCard value={2005} title='projects' />
                    <AboutMeCard value={2005} title='projects' />
                </div>
            </div>
            <div className='md:px-0'>
                <Image src="/images/aidar.png" alt="Picture of the author" className='rounded-lg' width={350} height={350} />
            </div>
        </>
    )
}
