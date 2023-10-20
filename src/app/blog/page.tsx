'use client'
import React, { useRef } from 'react';

type Props = {};

export default function Blog(props: Props) {

    return (
        <div>
            <div className="animate-primary text-main-dark w-full flex min-h-screen items-center justify-center">
                <div className="flex gap-[220px] overflow-auto" style={{
                    display: 'block',
                    maxHeight: '500px',
                    margin: 0,
                    background: '#abc',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}>
                    <p className="bg-blue-500 p-20">111</p>
                    <p className="bg-blue-500 p-20">222</p>
                    <p className="bg-blue-500 p-20">333</p>
                    <p className="bg-blue-500 p-20">444</p>
                    <p className="bg-blue-500 p-20">555</p>
                    <p className="bg-blue-500 p-20">666</p>
                    <p className="bg-blue-500 p-20">777</p>
                    <p className="bg-blue-500 p-20">888</p>
                    <p className="bg-blue-500 p-20">999</p>
                    <p className="bg-blue-500 p-20">10101010</p>
                </div>
            </div>
            <div>
                <p>111</p>
                <p>222</p>
                <p>333</p>
                <p>444</p>
                <p>555</p>
                <p>666</p>
                <p>777</p>
                <p>888</p>
                <p>999</p>
                <p>10101010</p>
            </div>
        </div>
    );
}
