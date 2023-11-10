'use client'
import React, { useState } from 'react';
import Home from "../shared/assets/icons/Home.svg"
import Skills from "../shared/assets/icons/Skills.svg"
import Portfolio from "../shared/assets/icons/Portfolio.svg"
import Contact from "../shared/assets/icons/Contact.svg"
import ArrowTop from "../shared/assets/icons/ArrowTop.svg"
import ArrowBottom from "../shared/assets/icons/ArrowBottom.svg"

import { SidebarItems } from './SidebarItems';

type Props = {};

export const Sidebar = (props: Props) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleMobileSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>

            {/* TEST */}
            <ul className='hidden md:flex flex-col gap-3 md:animate-slideOut md:group-hover:animate-slideIn'>
                <SidebarItems><Home className="w-8 h-8" /></SidebarItems>
                <SidebarItems><Skills className="w-8 h-8" /></SidebarItems>
                <SidebarItems><Portfolio className="w-8 h-8" /></SidebarItems>
                <SidebarItems><Contact className="w-8 h-8" /></SidebarItems>
            </ul>
            <div className="md:hidden transition-all">
                <ul className={`flex flex-col gap-3 transition-all duration-500 ${showSidebar ? "translate-y-0" : "-translate-y-[-150%]"}`}>
                    <SidebarItems><Home className="w-8 h-8" /></SidebarItems>
                    <SidebarItems><Skills className="w-8 h-8" /></SidebarItems>
                    <SidebarItems><Portfolio className="w-8 h-8" /></SidebarItems>
                    <SidebarItems><Contact className="w-8 h-8" /></SidebarItems>
                </ul>
                <button className='pt-4' onClick={toggleMobileSidebar}>
                    {showSidebar ? <div className='group w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark hover:text-white duration-500 transition-all'><ArrowBottom className="w-10 h-10" /></div> : <div className='group w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark hover:text-white duration-500 transition-all'><ArrowTop className="w-10 h-10" /></div>}
                </button>
            </div>
        </div >
    );
};
