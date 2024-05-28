import React, { Fragment } from 'react'
import profilePic from '../img/Emanuele-Macchiarulo-Sviluppatore-React.png'
import { motion } from "framer-motion"

export const About = () => {

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
      <div className='container mx-auto px-8 md:px-32 lg:px-48 py-4'>
        <motion.h2
          variants={fadeInDownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2}}
          className='text-2xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left text-purple-900 dark:text-neutral-100 mb-4'>Su di me</motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-16 lg:gap-0 mt-8 lg:mt-16'>
          <motion.div 
            variants={fadeInDownAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            transition={{duration: 1, ease: "easeOut", delay: 0.2}}
            className='self-center justify-self-center lg:justify-self-start'>
            <div className='w-[16rem] lg:w-[24rem]'>
              <img src={profilePic} alt="Emanuele-Macchiarulo-Sviluppatore-React" loading='lazy' className='custom-drop-shadow'/>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            transition={{duration: 1, ease: "easeOut", delay: 0.2}}
            className='text-center md:text-left text-xl mt-8 lg:mt-0 flex flex-col'>
            <h3>Ciao a tutti!</h3>
            <p>Sono un Front End Developer con competenze in <span className='text-purple-900 font-bold'>React</span>.</p>
            <p>Mi ritengo una persona precisa, organizzata, con buone capacità di problem solving e in grado di lavorare sia in autonomia che in gruppo mostrando adattabilità e flessibilità.</p>
            <div className='md:hidden lg:block'>
              <p className='mt-4'>💭 Sempre alla ricerca di nuovi stimoli e opportunità per crescere sia come professionista che come persona. 🤝</p>
              <p className='mt-4'>Appassionato di:</p>
              <ul>
                <li>💻 Tecnologia</li>
                <li>🎮 Videogames</li>
                <li>🎵 Musica</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInUpAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          transition={{duration: 1, ease: "easeOut", delay: 0.2}}
          className='text-xl hidden md:block lg:hidden'>
              <p className='mt-4'>💭 Sempre alla ricerca di nuovi stimoli e opportunità per crescere sia come professionista che come persona. 🤝</p>
              <p className='mt-4'>Appassionato di:</p>
              <ul>
                <li>💻 Tecnologia</li>
                <li>🎮 Videogames</li>
                <li>🎵 Musica</li>
              </ul>
            </motion.div>
      </div>
    </Fragment>
  )
}
