import React from 'react'

type Props = {}

export const WelcomePage = (props: Props) => {
    return (
        <div className="min-h-screen h-full text-black w-[100vw] flex flex-col items-center justify-center bg-fixed bg-[url('/images/pattern.png')] ">
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
