import React from 'react'
import ScrollFloat from '../TextAnimations/ScrollFloat/ScrollFloat'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

function Footer() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'heshal.dissanayake1@gmail.com',
      link: 'mailto:heshal.dissanayake1@gmail.com',
      icon: MdEmail
    },
    {
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/heshal-dissanayake/',
      link: 'https://www.linkedin.com/in/heshal-dissanayake/',
      icon: FaLinkedin
    },
    {
      title: 'GitHub',
      value: 'github.com/HeshalD',
      link: 'https://github.com/HeshalD',
      icon: FaGithub
    },
    {
      title: 'Phone',
      value: '+94 76 789 5024',
      link: 'tel:+94767895024',
      icon: FiPhone
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-relative" style={{ backgroundImage: "url('/images/spaceBackground3.jpg')" }}>
      <div id="contact" className='p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-defaultWhite/10 border-defaultWhite/20 mt-[100px] w-[150vh] flex flex-col items-center justify-center'>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=70%'
          scrollEnd='bottom bottom-=60%'
          stagger={0.03}
          textClassName="text-defaultWhite text-4xl font-bold font-gilroyBold uppercase tracking-wider text-center mb-8"
        >
          Get In Touch
        </ScrollFloat>

        <div className="flex flex-col items-center space-y-8 max-w-[800px]">
          <p className='font-gilroyLight text-defaultWhite text-[18px] leading-relaxed text-center'>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 group border-defaultWhite/20 bg-defaultWhite/5 hover:bg-defaultWhite/10 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl text-defaultWhite">
                    <contact.icon />
                  </span>
                  <div className="text-left">
                    <h3 className="text-lg transition-colors font-gilroyRegular text-defaultWhite group-hover:text-primaryCyan">
                      {contact.title}
                    </h3>
                    <p className="text-sm font-gilroyLight text-defaultWhite/80">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className='font-gilroyLight text-defaultWhite/60 text-[14px]'>
              © 2024 Heshal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer 