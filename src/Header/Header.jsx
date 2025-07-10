import React from 'react'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='flex justify-between items-center px-4 py-2 w-full'>
        <img src="/images/HDLogo.png" alt="Logo" className="w-[40px] mt-[10px] flex-shrink-0 border-[1px] border-defaultWhite rounded-full"/>
        <div className='flex gap-[30px] items-center'>
            <button 
              onClick={() => scrollToSection('about')} 
              className="transition-colors hover:text-blue-400 text-defaultWhite font-gilroyLight text-[18px] cursor-pointer"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="transition-colors hover:text-blue-400 text-defaultWhite font-gilroyLight text-[18px] cursor-pointer"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')} 
              className="transition-colors hover:text-blue-400 text-defaultWhite font-gilroyLight text-[18px] cursor-pointer"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="transition-colors hover:text-blue-400 text-defaultWhite font-gilroyLight text-[18px] cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="transition-colors hover:text-blue-400 text-defaultWhite font-gilroyLight text-[18px] cursor-pointer"
            >
              Contact
            </button>
        </div>
    </div>
  )
}

export default Header