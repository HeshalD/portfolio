import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'

function HeroSection() {
    
    return (
        <div className="overflow-hidden relative w-full h-screen">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] shadow-2xl backdrop-blur-md bg-defaultWhite/10"
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* Header at the top */}
            <Header />

            {/* Foreground Content */}
            <div className="flex flex-col justify-center items-center h-full">
                <img 
                    src="/images/HDLogo.png" 
                    alt="HD Logo" 
                    className='w-[120px] border-[3px] border-defaultWhite rounded-full mb-[30px] drop-shadow-2xl'
                />
                <h1 className="text-[85px] deop-shadow-lg font-gilroyRegular text-defaultWhite mt-[-50px]">
                    Heshal Dissanayake
                </h1>
                <h2 className="text-[25px] drop-shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.3)] font-gilroyRegular text-defaultWhite">Innovation through Inspiration</h2>
            </div>
        </div>
    )
}

export default HeroSection