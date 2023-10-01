import Image from 'next/image'
import React from 'react'

const Background = () => {
    return (
        <div className='absolute h-screen w-full -z-50 top-0'>
            <div className='absolute rounded-full h-[600px] md:h-[1200px] w-[600px] md:w-[1200px] translate-x-[300px] -translate-y-[450px] md:translate-x-[600px] md:-translate-y-[600px] bg-gradient-radial from-[#F7941D]/40 from-1% to-black-500/0 to-60% z-50 right-0' />
            <div className='absolute rounded-full h-[600px] md:h-[1200px] w-[600px] md:w-[1200px] -translate-x-[300px] -translate-y-[450px] md:-translate-x-[600px] md:-translate-y-[600px] bg-gradient-radial from-[#00B0FF]/40 from-1% to-black-500/0 to-60% z-50 left-0' />
            <div className='absolute top-0 w-full h-full bg-gradient-to-b from-[#000000]/90 from-0% via-[#005156]/40 via-70% to-[#00787F]/10 to-90% backdrop-blur-sm z-20' />
            <Image src={"/images/bg-home.png"} alt='tongkang' layout="fill" objectFit="cover" className='h-screen' />
            <div className='absolute bottom-0 w-full h-[100px] z-50 bg-gradient-to-t from-[#232332] to-black-500/0' />
        </div>
    )
}

export default Background