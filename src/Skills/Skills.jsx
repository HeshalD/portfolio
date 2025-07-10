import React from 'react';
import SpotlightCard from '../Components/SpotlightCard/SpotlightCard';

// ✅ Icon Imports
// From Simple Icons (si)
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiKotlin,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiPostman,
  SiJupyter,
  SiDocker,
} from 'react-icons/si';

// From Font Awesome
import { FaJava } from 'react-icons/fa';

// From VS Code icon pack
import { VscVscode } from 'react-icons/vsc';

// Fallback for R
import { TbLetterR } from 'react-icons/tb';


const iconMap = {
  C: SiC,
  'C++': SiCplusplus,
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  SQL: SiMysql,
  Kotlin: SiKotlin,
  R: TbLetterR,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Matplotlib: SiPython, // fallback
  'Scikit-learn': SiScikitlearn,
  Git: SiGit,
  'VS Code': VscVscode,
  Postman: SiPostman,
  Jupyter: SiJupyter,
  Docker: SiDocker,
  'MERN Stack': SiReact, // symbolic fallback
};

function Skills() {
  const sections = [
    {
      title: 'Languages',
      color: 'rgba(0, 229, 255, 0.2)',
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL', 'Kotlin', 'R'],
      description: 'These are the current programing languages that I proficent in.',
    },
    {
      title: 'Frameworks & Tools',
      color: 'rgba(255, 215, 0, 0.2)',
      items: [
        'MERN Stack',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Tailwind',
        'Bootstrap',
      ],
      description: 'These are the current frameworks and tools I currently use in my projects.',
    },
    {
      title: 'Learning',
      color: 'rgba(255, 99, 132, 0.2)',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      description: 'I am currently learning these languages',
    },
    {
      title: 'Other Tools',
      color: 'rgba(0, 255, 138, 0.2)',
      items: ['Git', 'VS Code', 'Postman', 'Jupyter', 'Docker'],
      description: 'These are the some other tools I am familiar with.',
    },
  ];

  return (
    <section className="px-6 py-20 md:px-12 mt-[-50px]" >
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl w-[800px] max-h-[800px] sm:grid-cols-2">
        {sections.map(({ title, color, items, description }) => (
          <SpotlightCard
            key={title}
            className="p-6 rounded-xl backdrop-blur custom-spotlight-card bg-defaultBlack/30 border-[1px] border-defaultWhite/30"
            spotlightColor={color}
          >
            <h3 className="mb-4 text-2xl font-semibold text-defaultWhite font-gilroyRegular">
              {title}
            </h3>

            <h3 className="mb-4 text-sm font-base text-defaultWhite font-gilroyLight">
              {description}
            </h3>

            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {items.map((item, idx) => {
                const IconComponent = iconMap[item];

                return (
                  <li
                    key={idx}
                    className="flex flex-col justify-center items-center w-16 h-16 transition-transform cursor-pointer group text-defaultWhite hover:scale-110"
                  >
                    {IconComponent ? (
                      <>
                        <IconComponent className="w-8 h-8" />
                        <span className="mt-1 text-xs text-center opacity-0 transition-all duration-200 ease-in-out translate-y-1 group-hover:opacity-100 group-hover:translate-y-2 font-gilroyLight">
                          {item}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm">{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>

          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
