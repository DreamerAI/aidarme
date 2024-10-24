'use client'

import React from 'react'
import { InView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
}

export const PagesLayout = ({ children }: Props) => {
  return (
    <InView triggerOnce threshold={0.50}>
      {({ inView, ref }) => (
        <div className={`max-w-[1440px] px-4 py-10 lg:px-10 w-full transition-all duration-1000 ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}`} ref={ref}>
          {children}
        </div>
      )}
    </InView >
  )
}
