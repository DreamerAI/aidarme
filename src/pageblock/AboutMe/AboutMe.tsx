import { AboutMeCard } from '@/components'
import { PagesLayout } from '@/layout/PagesLayout'
import Image from 'next/image'
import React from 'react'

const aboutMeData = [
    {
        title: 'Years of Experience',
        value: 3
    },
    {
        title: 'Projects Completed',
        value: 10
    },
    {
        title: 'Happy Clients',
        value: 5
    },
    {
        title: 'Cups of Coffee',
        value: 100
    }
]

export const AboutMe = () => {

    return (
        <PagesLayout>
            <div className='flex w-full gap-10 md:gap-4 flex-col-reverse md:flex-row justify-between h-full'>
                <div className='w-full md:w-1/2 max-w-4xl flex flex-col gap-6 lg:gap-10 text-aboutme tracking-tight'>
                    <h3 className='md:text-5xl text-4xl font-semibold uppercase md:text-left'> Aidar Abdykayimov</h3>
                    <div className='flex flex-col gap-10 leading-paragraph font-normal'>
                        <p>I am a passionate and experienced frontend developer and UI designer with a passion for creating user-friendly and visually appealing web interfaces.
                            I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in React.
                            I am also skilled in UI design principles and can create high-fidelity mockups that translate seamlessly into functional web interfaces.</p>
                    </div>

                    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                        {aboutMeData.map((item, index) => (
                            <AboutMeCard key={index} title={item.title} value={item.value} />
                        ))}
                    </div>
                </div>
                <div className='md:px-0 '>
                    <Image src="/images/aidar.png" alt="Picture of the author" className='rounded-lg w-full' width={350} height={350} />
                </div>
            </div>
        </PagesLayout>
    )
}
