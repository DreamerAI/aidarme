import React from 'react'

type Props = {}

export const WelcomePage = (props: Props) => {
    return (
        <div className="min-h-screen h-full text-black w-screen flex flex-col items-center justify-center bg-fixed bg-[url('/images/pattern.png')] ">
            <div>
                <h1 className='text-headline font-bold'>AIDAR.</h1>
            </div>
            <div className='flex justify-around mt-6 gap-2 w-full text-xl md:flex-row flex-col text-center sm:text-4xl'>
                <p>Frontend Developer</p>
                <p>UI/UX Designer</p>
            </div>
        </div>
    )
}
