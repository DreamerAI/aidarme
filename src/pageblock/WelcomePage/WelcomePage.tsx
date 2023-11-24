import React from 'react'

type Props = {}

export const WelcomePage = (props: Props) => {
    return (
        <div className="min-h-screen text-black w-[100vw] flex flex-col items-center justify-center">
            <div>
                <h1 className='text-clamp font-bold text-shadow-pop-bottom'>AIDAR.</h1>
            </div>
            <div className='flex justify-around w-full text-4xl'>
                <p>Frontend Developer</p>
                <p>UI/UX Designer</p>
            </div>
        </div>
    )
}
