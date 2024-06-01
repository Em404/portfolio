import React, { Fragment, useRef, useEffect } from 'react'
import {About} from "../components/About"
import {Skills} from "../components/Skills"
import {Projects} from "../components/Projects"
import {Contacts} from "../components/Contacts"
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import profilePic from '../img/Emanuele-Macchiarulo-Sviluppatore-React.png'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom';
import resume from '../docs/Emanuele_Front End Developer_CV.pdf'

export const Home = ({ clickedLink, setcliCkedLink }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (clickedLink) {
      setcliCkedLink(false);
      switch (location.pathname) {
        case "/home":
          scrollToSection(homeRef);
          break;
        case "/about":
          scrollToSection(aboutRef);
          break;
        case "/skills":
          scrollToSection(skillsRef);
          break;
        case "/projects":
          scrollToSection(projectsRef);
          break;
        case "/contacts":
          scrollToSection(contactsRef);
          break;
        default:
          break;
      }
    }
  }, [clickedLink, location, setcliCkedLink]);

  const fadeInDownAnimation = {
    initial: {
      opacity: 0, 
      y: -100
    },
    animate: {
      opacity: 1, 
      y: 0
    }
  }

  const fadeInUpAnimation = {
    initial: {
      opacity: 0, 
      y: 100
    },
    animate: {
      opacity: 1, 
      y: 0
    }
  }

  return (
    <Fragment>
      <div ref={homeRef} className='bg-neutral-50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 flex items-center h-[100vh] h-custom'>
        <div className='container mx-auto px-8 md:px-16 lg:px-48'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <motion.div
              variants={fadeInDownAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              transition={{duration: 1, ease: "easeOut", delay: 0.2}}
              className='font-semibold text-lg md:text-xl lg:text-2xl self-center'>
              <div className='mb-4 lg:mb-16 text-left'>
                <p className=''>Ciao!</p>
                <p>Sono <span className='text-purple-600'>Emanuele</span>,</p>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Front End Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Amo la tecnologia',
                    1000,
                    'Amo i videogiochi',
                    1000,
                    'Amo la musica',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'block' }}
                  repeat={Infinity}
                />
              </div>

              {/* profile pic mobile */}
              <div className='lg:hidden mb-12 flex justify-center'>
                <div className='w-[12rem]'>
                  <img src={profilePic} alt="Emanuele-Macchiarulo-Sviluppatore-React" loading='lazy' className='custom-drop-shadow'/>
                </div>
              </div>

              {/* buttons - contacts and cv */}
              <div className='mb-16 md:mb-8 lg:mb-16 flex flex-col justify-center lg:justify-start'>
                <button className='bg-purple-600 text-neutral-50 rounded-lg text-lg md:text-xl py-2 px-4 hover:scale-110 duration-300 mb-4 md:mx-32 lg:ms-0 lg:me-32' ref={contactsRef} id="contatti">
                 <Link to='/contacts' onClick={() => setcliCkedLink(true)}>Contattami!</Link>
                </button>
              
                  <a  href={resume} download='CV_Emanuele_Macchiarulo' className='flex justify-center bg-purple-600 text-neutral-50 rounded-lg text-lg md:text-xl py-2 px-4 hover:scale-110 duration-300 md:mx-32 lg:ms-0 lg:me-32'>
                    Scarica il mio CV!
                  </a>
            
              </div>

              {/* links - linkedin and github */}
              <div className='flex justify-center lg:justify-start'>
                  <a href="https://www.linkedin.com/in/emanuele-macchiarulo-web-dev/" className='me-4 hover:scale-125 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 448 512">
                    <path fill='#9233ea' d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Em404" className='hover:scale-125 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 496 512">
                    <path fill='#9233ea' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
              </div>
            </motion.div>
            {/* profile pic desktop */}
            <motion.div 
               variants={fadeInUpAnimation}
               initial="initial"
               whileInView="animate"
               viewport={{
                 once: true
               }}
               transition={{duration: 1, ease: "easeOut", delay: 0.2}}
              className='justify-self-center self-center hidden lg:block'>
              <div className='w-[24rem]'>
                <img src={profilePic} alt="Emanuele-Macchiarulo-Sviluppatore-React" loading='lazy' className='custom-drop-shadow'/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div ref={aboutRef} id="about" className="bg-neutral-50 dark:bg-neutral-800 text-neutral-50 flex items-center h-[100vh] h-custom pt-24 md:pt-0">
          <About />
        </div>

        <div ref={skillsRef} id="skills" className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 flex items-center h-[100vh] h-custom">
          <Skills />
        </div>

        <div ref={projectsRef} id="projects" className="bg-neutral-50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 flex items-center">
          <Projects />
        </div>

        <div ref={contactsRef} id="contacts" className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 flex items-center h-[90vh]">
          <Contacts />
        </div>

        <div className='bg-purple-600 text-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 flex items-center justify-center h-[10vh] py-8'>
          <p className='text-center font-semibold'>Copyright © Emanuele Macchiarulo | 2024</p>
        </div>
    </Fragment>
  )
}
