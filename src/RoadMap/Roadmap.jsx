import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiC, SiJavascript, SiPython, SiMongodb, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiPandas, SiNumpy, SiScikitlearn, SiPlotly } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const milestones = [
    {
        title: 'Started Programming',
        description: 'Began with C and Java during my first year at university.',
        date: '2023',
        icon: (<div className="flex space-x-2 text-2xl text-green-300">
            <SiC />
            <FaJava />
        </div>),
    },
    {
        title: 'Web Development Basics',
        description: 'Learned HTML, CSS, and JavaScript to build basic websites.',
        date: '2024',
        icon: (<div className="flex space-x-2 text-2xl text-green-300">
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
        </div>),
    },
    {
        title: 'Full Stack Projects',
        description: 'Built full-stack apps using the MERN stack.',
        date: '2025',
        icon: (
            <div className="flex space-x-2 text-2xl text-green-300">
                <SiMongodb />
                <SiReact />
                <SiNodedotjs />
            </div>
        ),
    },
    {
        title: 'Exploring Data Science',
        description: 'Dived into Python libraries like Pandas and NumPy.',
        date: '2025',
        icon: (
            <div className="flex space-x-2 text-2xl text-green-300">
                <SiPython />
                <SiPandas />
                <SiNumpy />
            </div>
        ),
    },
    {
        title: 'Learning ML Tools',
        description: 'Currently learning Scikit-learn and Matplotlib.',
        date: '2025',
        icon: (
            <div className="flex space-x-2 text-2xl text-green-300">
                <SiPython />
                <SiScikitlearn />
                <SiPlotly />
            </div>
        ),
    },
];

gsap.registerPlugin(ScrollTrigger);



function Roadmap() {
    const lineRef = useRef(null);
    const dotRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const line = lineRef.current;
        const dot = dotRef.current;

        if (!container || !line || !dot) return;

        const containerHeight = container.scrollHeight;
        const lineOffsetStart = -500;
        const lineOffsetEnd = 200;
        const fullHeight = containerHeight + lineOffsetEnd;
        const maxLineHeight = 1100; // <-- Adjust this value to your needs


        // Animate line and dot scroll
        ScrollTrigger.create({
            trigger: container,
            start: 'top center',
            end: `bottom center`,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;

                // Calculate the current line height and clamp it
                const currentHeight = Math.min(progress * maxLineHeight, maxLineHeight);

                gsap.set(line, {
                    height: `${currentHeight}px`,
                });

                gsap.set(dot, {
                    top: `${currentHeight}px`,
                });
            },
        });


        // Animate glow for each milestone
        const milestoneEls = gsap.utils.toArray('.milestone-card');

        milestoneEls.forEach((el, i) => {

            let startValue;

            if (i === 0) {
                startValue = 'top center';
            } else if (i === 8) {
                startValue = 'top-=400';
            } else if (i === 9) {
                startValue = 'top-=420';
            } else if (i === 4) {
                startValue = 'top-=520';
            } else if (i === 5) {
                startValue = 'top-=540';
            } else if (i === 6) {
                startValue = 'top-=140';
            } else if (i === 7) {
                startValue = 'top-=160';
            } else if (i === 3) {
                startValue = 'top+=800';
            }
            else {
                startValue = 'top center-=100'; // Default for others
            }

            milestoneEls.forEach((el, i) => {
                const specialIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Milestones you want to style differently
                let startValue;

                if (i === 0) {
                    startValue = 'top center';
                } else {
                    startValue = 'top center-=100';
                }

                if (specialIndices.includes(i)) {
                    // Background color animation for specific milestones
                    gsap.fromTo(
                        el,
                        {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 0 0px rgba(0, 255, 255, 0)',
                        },
                        {
                            backgroundColor: 'rgba(38,198,218,0.08)', // Cyan-tinted highlight
                            boxShadow: '0 0 20px rgba(38,198,218,0.6)',
                            duration: 0.4,
                            scrollTrigger: {
                                trigger: el,
                                start: startValue,
                                end: 'bottom center',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                } else {
                    // Default glow animation for the rest
                    gsap.fromTo(
                        el,
                        { boxShadow: '0 0 0px rgba(255, 255, 255, 0)' },
                        {
                            boxShadow: '0 0 20px rgba(38,198,218,0.6)',
                            duration: 0.3,
                            scrollTrigger: {
                                trigger: el,
                                start: startValue,
                                end: 'bottom center',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                }
            });

        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="relative min-h-[150vh] py-20 text-defaultWhite">

            <div className="relative mx-auto max-w-6xl">
                <div className="flex relative items-start" ref={containerRef}>
                    {/* Left milestones */}
                    <div className="flex flex-col flex-1 gap-24 justify-between py-12 pr-8 left-milestones">

                        {milestones.map((milestone, i) =>
                            i % 2 === 0 ? (
                                <div
                                    key={i}
                                    className="flex relative justify-end items-center"
                                    style={{
                                        marginTop: i === 0 ? '-100px' : `${i * 130}px`
                                    }}
                                >
                                    <div className="p-4 w-full max-w-sm text-right rounded-xl border backdrop-blur milestone-card border-defaultWhite/20 bg-defaultWhite/5">
                                        <div className="p-4 w-full max-w-sm text-right rounded-xl border backdrop-blur items-right milestone-card border-defaultWhite/20 bg-defaultWhite/5">
                                            <h4 className="text-lg font-semibold font-gilroyRegular">{milestone.title}</h4>
                                            <p className="mt-1 text-sm text-defaultWhite/80 font-gilroyRegular">{milestone.description}</p>
                                            <p className="mt-2 text-xs text-defaultWhite/50 font-gilroyRegular">{milestone.date}</p>
                                            <span className="mt-2 text-xs text-defaultWhite/80">{milestone.icon}</span>
                                        </div>

                                    </div>
                                    <div className="absolute right-0 w-4 h-4 rounded-full transform translate-x-2 bg-primaryCyan"></div>
                                </div>
                            ) : null
                        )}
                    </div>

                    {/* Center timeline */}
                    <div className="relative w-[4px] bg-defaultBlack/30 overflow-visible">
                        <div
                            ref={lineRef}
                            className="absolute left-0 w-full origin-top bg-primaryCyan"
                            style={{ height: '0px' }}
                        />
                        <div
                            ref={dotRef}
                            className="absolute left-1/2 w-6 h-6 rounded-full -translate-x-1/2 bg-gradient-to-tr from-primaryCyan to-secondaryBlue shadow-[0_0_12px_rgba(0,212,255,0.7)] animate-pulse"
                        />

                    </div>

                    {/* Right milestones */}
                    <div className="flex flex-col flex-1 gap-24 justify-between py-[200px] pr-8 ml-[50px]">

                        {milestones.map((milestone, i) =>
                            i % 2 === 1 ? (
                                <div
                                    key={i}
                                    className="flex relative justify-start items-center"
                                    style={{
                                        marginTop: i === 1 ? '0px' : `${(i - 1) * 130}px`
                                    }}

                                >

                                    <div className="p-4 w-full max-w-sm text-left rounded-xl border backdrop-blur milestone-card border-defaultWhite/20 bg-defaultWhite/5">
                                        <div className="p-4 w-full max-w-sm text-left rounded-xl border backdrop-blur milestone-card border-defaultWhite/20 bg-defaultWhite/5">
                                            <h4 className="text-lg font-semibold font-gilroyRegular">{milestone.title}</h4>
                                            <p className="mt-1 text-sm text-defaultWhite/80 font-gilroyRegular">{milestone.description}</p>
                                            <p className="mt-2 text-xs text-defaultWhite/50 font-gilroyRegular">{milestone.date}</p>
                                            <div className="flex justify-end mt-2">
                                                <span className="text-xs text-defaultWhite/80">{milestone.icon}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute left-0 w-4 h-4 rounded-full transform -translate-x-2 bg-primaryCyan"></div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
