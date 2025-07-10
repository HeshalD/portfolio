import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Roadmap from '../RoadMap/Roadmap'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import Footer from '../Footer/Footer'
import ScrollFloat from '../TextAnimations/ScrollFloat/ScrollFloat';
import CurvedLoop from '../TextAnimations/CurvedLoop/CurvedLoop'

function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <CurvedLoop
        marqueeText=" Inspiration Through Inovation | "
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="fill-defaultWhite"
        height="h-32"
        fontSize="text-2xl"
        fontFamily="font-gilroyBold"
      />
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-relative" style={{ backgroundImage: "url('/images/spaceBackground3.jpg')" }}>
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills" className='p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-defaultWhite/10 border-defaultWhite/20 mt-[100px] w-[150vh] flex flex-col items-center justify-center'>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=70%'
            scrollEnd='bottom bottom-=60%'
            stagger={0.03}
            textClassName="text-defaultWhite text-4xl font-bold font-gilroyBold uppercase tracking-wider text-center"
          >
            Skills & Frameworks
          </ScrollFloat>
          <Skills />
        </div>

        <div id="roadmap" className="flex flex-col justify-center items-center p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-defaultWhite/10 border-defaultWhite/20 mt-[100px] w-[150vh]">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=70%'
            scrollEnd='bottom bottom-=60%'
            stagger={0.03}
            textClassName="text-defaultWhite text-4xl font-bold font-gilroyBold uppercase tracking-wider text-center"
          >
            Roadmap
          </ScrollFloat>
          <Roadmap />
        </div>

        <div id="projects" className="flex flex-col justify-center items-center p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-defaultWhite/10 border-defaultWhite/20 mt-[100px] w-[150vh]">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="text-defaultWhite text-4xl font-bold font-gilroyBold uppercase tracking-wider text-center"
          >
            My Projects
          </ScrollFloat>

          <ProjectsSection />
        </div>

        <Footer />

      </div>

    </div>
  )
}

export default Portfolio