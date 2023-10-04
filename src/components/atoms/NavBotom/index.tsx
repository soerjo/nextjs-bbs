'use client'

import React from 'react'
import CallIcons from '@/components/assets/CallIcons'
import HomeIcon from '@/components/assets/HomeIcon'
import NewsIcon from '@/components/assets/NewsIcon'
import PeopleIcon from '@/components/assets/PeopleIcon'
import ServicesIcon from '@/components/assets/ServicesIcon'

import translate from '@/constant/translate.constant.json'
import { AllContext } from "@/components/atoms/ContextComp";

const uriWhatsApp = "https://api.whatsapp.com/send?phone=+6281259010485&text=saya+ingin+membuat+sebuah+permintaan."

const BottomNav = () => {
    const { setallContext, allContext } = React.useContext(AllContext);

    const handleLangToggle = () => {
        setallContext((prev: Record<string, any>) => ({ ...prev, lang: prev.lang === "en" ? "id" : "en" }))
    }

    return (
        <>
            <div className="fixed top-0 right-0 mt-4 flex items-center justify-end w-full container px-4 ">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer select-none" >
                    <div className="relative" >
                        <input type="checkbox" id="toggleB" className="sr-only " onClick={handleLangToggle} />
                        <div className="block bg-gray-600 w-14 h-8 rounded-full" />
                        <div className="uppercase dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition text-xs flex justify-center items-center font-bold cap">{allContext?.lang || "id"}</div>
                    </div>
                </label>
            </div>
            <div className='fixed bottom-0 mb-8 w-full h-[100px] flex justify-center items-center z-50'>
                <a href={uriWhatsApp} target="_blank" className='flex flex-col justify-center items-center gap-2 text-white font-semibold bg-[#FFFFFF]/40 hover:hover:bg-[#242424]/90 backdrop-blur-sm md:w-[100px] w-[60px] md:h-[100px] h-[60px] rounded-full absolute -translate-y-[30px] z-50 hover:cursor-pointer'>
                    <CallIcons className='w-[20px] md:w-auto' />
                    <span className='hidden md:flex'>Call</span>
                </a>

                <div className='flex justify-center items-center gap-2 md:gap-4 container mx-auto bg-[#FFFFFF]/10 backdrop-blur-md p-2 rounded-full w-fit'>
                    <a href='#home' className='flex justify-center items-center gap-2 text-white font-semibold hover:cursor-pointer hover:bg-[#242424]/60 px-4 h-[50px] md:h-[70px] rounded-full'>
                        <HomeIcon className='w-[20px] md:w-auto' />
                        <span className='hidden md:flex'>Home</span>
                    </a>
                    <a href='#service' className='flex justify-center items-center gap-2 text-white font-semibold hover:cursor-pointer hover:bg-[#242424]/60 px-4 h-[50px] md:h-[70px] rounded-full'>
                        <ServicesIcon className='w-[20px] md:w-auto' />
                        <span className='hidden md:flex'>Service</span>
                    </a>
                    <div className='w-[60px] md:w-[100px]' />
                    <a href='#people' className='flex justify-center items-center gap-2 text-white font-semibold hover:cursor-pointer hover:bg-[#242424]/60 px-4 h-[50px] md:h-[70px] rounded-full'>
                        <PeopleIcon className='w-[20px] md:w-auto' />
                        <span className='hidden md:flex'>People</span>
                    </a>
                    <a href='#news' className='flex justify-center items-center gap-2 text-white font-semibold hover:cursor-pointer hover:bg-[#242424]/60 px-4 h-[50px] md:h-[70px] rounded-full'>
                        <NewsIcon className='w-[20px] md:w-auto' />
                        <span className='hidden md:flex'>News</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default BottomNav