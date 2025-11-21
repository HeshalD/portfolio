import React, { useState, useEffect } from 'react'
import ScrollFloat from '../TextAnimations/ScrollFloat/ScrollFloat';

function AboutMe() {
  const [dots, setDots] = useState([]);

  const DOT_COUNT = 35;

  useEffect(() => {
    const generatedDots = Array.from({ length: DOT_COUNT }, (_, i) => {
      const angle = (360 / DOT_COUNT) * i;
      return {
        id: i,
        angle,
      };
    });
    setDots(generatedDots);
  }, []);


  return (

    <div className="relative mx-auto mt-20 w-[150vh] h-[1000px] p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-defaultWhite/10 border-defaultWhite/20 ">
      {/* Rotating Outer Circle 
      <div className="absolute inset-0 rounded-full animate-spin-slow">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-[30px] h-[30px] rounded-full bg-defaultWhite"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${dot.angle}deg) translateX(35rem) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Inner Content with Glass Effect */}

      <div className="flex absolute inset-0 flex-col justify-center items-center my-[5px]  text-center">

      <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=70%'
          scrollEnd='bottom bottom-=60%'
          stagger={0.03}
          textClassName="text-defaultWhite text-4xl font-bold font-gilroyBold uppercase tracking-wider text-center"
        >
          About Me
        </ScrollFloat>

        <div className="flex flex-col items-center space-y-6 max-w-[600px]">
          <img
            src="./images/me.jpg"
            alt="me"
            className='h-[300px] w-auto rounded-[12px] mb-[50px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
          />

          <div className="space-y-4">
            <p className='font-gilroyLight text-defaultWhite text-[15px] leading-relaxed'>
              Hi, I'm Heshal — a passionate full-stack website developer with experience in building dynamic, user-focused applications across multiple platforms.
            </p>

            <p className='font-gilroyLight text-defaultWhite text-[15px] leading-relaxed'>
              I've worked extensively with the MERN stack, as well as Java and PHP-based web solutions. Beyond the browser, I have hands-on experience in mobile app development using Kotlin, and I'm currently expanding my skills by learning React Native to build cross-platform apps more efficiently.
            </p>

            <p className='font-gilroyLight text-defaultWhite text-[15px] leading-relaxed'>
              As a data science undergraduate, I'm also exploring the intersection of software development and intelligent data-driven systems — combining technical implementation with analytical thinking.
            </p>

            <p className='font-gilroyLight text-defaultWhite text-[15px] leading-relaxed'>
              Whether it's front-end interfaces, back-end architecture, or mobile platforms, I enjoy creating solutions that are both functional and thoughtfully designed.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe