import React from 'react';
import { SiReact, SiMongodb, SiNodedotjs, SiTailwindcss, SiExpress } from 'react-icons/si';

const projects = [
    {
        id: 1,
        title: 'Sojourn Parking',
        year: '2025',
        description: 'Online parking reservation and emergency services platform.',
        status: 'In Progress',
        image: '/images/sojournLogo.png',
        tech: [SiReact, SiNodedotjs, SiMongodb],
        imageOnTop: true,
        link: 'https://sojournparking.example.com',
    },
    {
        id: 2,
        title: 'CeylonTopGuide',
        year: '2025',
        description: 'Tour guide booking platform connecting locals and tourists.',
        status: 'Launched',
        image: '/images/ceylonLogo.jpg',
        tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
        imageOnTop: false,
        link: 'https://ceylontopguide.com',
    },
    {
        id: 3,
        title: 'AquaFiles',
        year: '2025',
        description: 'Government document upload and connection registration system.',
        status: 'In Progress',
        image: '/images/aquaLogo.jpg',
        tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
        imageOnTop: true,
        link: 'https://aquafiles.example.com',
    },
    {
        id: 4,
        title: 'GigNotes',
        year: '2025',
        description: 'A band management system for bands to keep track of essential documents and details.',
        status: 'Pending',
        image: '/images/gigLogo.jpg',
        tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
        imageOnTop: false,
        link: 'https://gignotes.example.com',
    },
];

function ProjectsSection() {
    return (
        <section className="px-6 py-24 rounded-2xl bg-defaultWhite/10 text-defaultWhite">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primaryCyan to-defaultWhite font-gilroyBold">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-defaultWhite/70 font-gilroyRegular">
                        Explore my latest work showcasing modern web development and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden relative bg-gradient-to-br rounded-2xl border backdrop-blur-sm transition-all duration-500 group from-defaultBlack/50 to-defaultBlack/20 border-defaultWhite/20 hover:scale-105 hover:shadow-2xl hover:shadow-primaryCyan/20 hover:border-primaryCyan/50"
                        >
                            

                            {/* Image Container */}
                            <div className="overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-48 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 from-defaultBlack/80 group-hover:opacity-100"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="mb-1 text-xl transition-colors duration-300 font-gilroyBold group-hover:text-primaryCyan">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-defaultWhite/60 font-gilroyRegular">
                                        {project.year}
                                    </p>
                                </div>
                                
                                <p className="text-sm leading-relaxed text-defaultWhite/80 font-gilroyRegular">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tech.map((Icon, idx) => (
                                        <div 
                                            key={idx} 
                                            className="p-2 rounded-lg backdrop-blur-sm transition-all duration-300 bg-defaultWhite/10 group-hover:bg-primaryCyan/20 group-hover:scale-110"
                                        >
                                            <Icon className="text-xl text-defaultWhite group-hover:text-primaryCyan" />
                                        </div>
                                    ))}
                                </div>

                                {/* Status Badge */}
                            <div className="absolute">
                                <span className={`px-3 py-1 rounded-full text-xs font-gilroyMedium ${
                                    project.status === 'Launched' ? 'bg-primaryCyan/20 text-primaryCyan border border-primaryCyan/30' :
                                    project.status === 'In Progress' ? 'bg-secondaryBlue/20 text-secondaryBlue border border-secondaryBlue/30' :
                                    project.status === 'In Development' ? 'bg-primaryBlue/20 text-primaryBlue border border-primaryBlue/30' :
                                    'bg-defaultGrey/20 text-defaultGrey border border-defaultGrey/30'
                                }`}>
                                    {project.status}
                                </span>
                            </div>

                                {/* Hover Arrow */}
                                <div className="flex justify-end">
                                    <div className="flex justify-center items-center w-8 h-8 rounded-full border transition-all duration-300 bg-primaryCyan/20 border-primaryCyan/30 group-hover:bg-primaryCyan group-hover:scale-110">
                                        <svg className="w-4 h-4 transition-colors duration-300 text-primaryCyan group-hover:text-defaultBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r rounded-2xl transition-all duration-500 pointer-events-none from-primaryCyan/0 via-primaryCyan/0 to-primaryCyan/0 group-hover:from-primaryCyan/10 group-hover:via-primaryCyan/5 group-hover:to-primaryCyan/10"></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
