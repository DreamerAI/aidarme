import Image from 'next/image'
import React from 'react'
type Props = {}

export const AboutMe = (props: Props) => {
    return (
        <>
            <div className='pt-10 w-full md:w-1/2 max-w-4xl flex flex-col gap-10 text-aboutme font-light'>
                <h3 className='text-5xl font-semibold uppercase md:text-left'>Aidar Abdykayimov</h3>
                <p>I&apos;m a very cool frontender. I developed many sites and projects.</p>
                <p className='tracking-tight'>
                    I am your friendly AI assistant, always ready to lend a helping hand. Whether you&apos;re seeking advice information, or simply a friendly chat, I&apos;m here to cater to your needs. From answering your burning questions to providing insightful suggestions, I&apos;m equipped with a vast knowledge base to assist you on a wide range of topics.
                </p>
            </div>
            <div className='md:px-0 h-1/2 flex justify-center '>
                <Image src="/images/aidar.png" alt="Picture of the author" width={500} height={500} />
            </div>
        </>
    )
}
