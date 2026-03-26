'use client';

import React from 'react';
import { InView } from 'react-intersection-observer';

type AboutMeCardProps = {
  value: number;
  title: string;
  index: number;
};

export const AboutMeCard = ({ title, value, index }: AboutMeCardProps) => {
  return (
    <InView threshold={0.8}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out transform ${
            inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-12 scale-90'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}>
          <div className={`card-hover flex flex-col  py-3 px-2 text-center gap-1 justify-center`}>
            <p className="text-2xl lg:text-3xl">{value}</p>
            <p className="text-text-gray text-base">{title}</p>
          </div>
        </div>
      )}
    </InView>
  );
};
