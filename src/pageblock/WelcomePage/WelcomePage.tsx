import React from 'react'

type Props = {}

export const WelcomePage = (props: Props) => {
    return (
        <div className=" h-[100dvh] text-black w-[100vw] flex flex-col items-center justify-center bg-cover bg-[url('/images/pattern2.png')] ">
            <div>
                <h1 className='text-clamp font-bold'>AIDAR.</h1>
            </div>
            <div className='flex justify-around w-full text-4xl md:flex-row flex-col text-center'>
                <p>Frontend Developer</p>
                <p>UI/UX Designer</p>
            </div>
        </div>
    )
}
