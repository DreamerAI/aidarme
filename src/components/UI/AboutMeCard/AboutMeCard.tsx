'use client';

import React from 'react'
import { InView } from "react-intersection-observer"

type AboutMeCardProps = {
    value: number,
    title: string,
}

export const AboutMeCard = ({ title, value }: AboutMeCardProps) => {
    return (
        <InView threshold={0.70}>
            {({ inView, ref }) => (
                <div className={`${inView ? 'animate-scaleUpCenter' : 'opacity-0'}`} ref={ref}>
                    <div className={`card-hover flex flex-col rounded-xl py-3 px-2 text-center gap-1 justify-center`}>
                        <p className='text-2xl lg:text-3xl'>{value}</p>
                        <p className='text-text-gray text-base'>{title}</p>
                    </div>
                </div>
            )}
        </InView>
    )
}