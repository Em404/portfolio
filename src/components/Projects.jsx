import React, { Fragment }  from 'react'
import { motion } from "framer-motion"
import portfolio from "../img/Portfolio-React.png"
import bsample from "../img/B-Sample-Angular-crop.png"
import nutrizionista from "../img/Nutrizionista-React.png"
import neonweather from "../img/Neon-Weather-React.png"
import { Link } from 'react-router-dom';

export const Projects = () => {

  const projects = [
    {
      id: 0,
      name: 'Il mio prtfolio',
      thumb: portfolio,
      description: 'Portfolio che racchiude i miei progetti e le mie informazioni.',
      repo: 'https://github.com/Em404/portfolio',
      url: '',
      tags: ['React', 'Tailwind', 'Framer Motion']
    },
    {
      id: 1,
      name: 'B-Sample',
      thumb: bsample,
      description: 'Piattaforma rivolta ai produttori musicali, per cercare ispirazione, nuovi sample e per poterli scaricare e utilizzare nelle proprie produzioni.',
      repo: 'https://github.com/Em404/Capstone-B-Sample-Emanuele-Macchiarulo',
      url: '',
      tags: ['Angular', 'Bootstrap', 'API']
    },
    {
      id: 2,
      name: 'Studio Professionale di Nutrizione | Gaspa - Micheli',
      thumb: nutrizionista,
      description: 'Sito vetrina per un ipotetico studio di nutrizione. In questo caso vengono riportate le informazioni del nutrizionista che attualmente mi segue.',
      repo: 'https://github.com/Em404/website-nutrizionista',
      url: 'https://gaspa-micheli.web.app/home',
      tags: ['React', 'Tailwind', 'NextUI']
    },
    {
      id: 3,
      name: 'Neon Weather',
      thumb: neonweather,
      description: 'Neon Weather è una webapp per il meteo che riprende il tema Cyberpunk.', 
      repo: 'https://github.com/Em404/webapp-weather',
      url: 'https://weather-app-7f1c6.web.app/',
      tags: ['React', 'Tailwind', 'API']
    },
  ]

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
    animate:  (index) => {
      return{
        opacity: 1, 
        y: 0,
        transition: {
          delay: 0.15 * index,
        },
      }
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
            className='text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left text-purple-900 dark:text-neutral-50 mb-8 md:mb-16'>Projects</motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                projects.map((project, index) => {
                  return (
                    <motion.div
                      variants={fadeInUpAnimation}
                      initial='initial'
                      whileInView='animate'
                      viewport={{
                        once: true
                      }}
                      custom={index}
                      key={index} className='flex flex-col items-center py-4 px-4 dark:bg-neutral-800 bg-purple-900 rounded-3xl text-neutral-50 custom-box-shadow'>
                      <img src={project.thumb} alt={project.name} className="rounded-3xl"/>
                      <h3 className='mt-4 font-semibold md:text-lg text-center'>{project.name}</h3>
                      <p className='text-center mt-2'>{project.description}</p>
                      <div className='flex flex-wrap justify-center mt-4'>
                        {
                          project.tags.map((tag, index) => {
                            return (
                              <span key={index} className='dark:bg-purple-900 bg-neutral-50 text-purple-900 dark:text-neutral-50 font-semibold rounded-3xl px-2 me-2 mb-2'>{tag}</span>
                            )
                          })
                        }
                      </div>
                      <Link to={project.repo}>
                        <svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 496 512" className='bg-neutral-50 rounded-full mt-2'>
                        <path fill='#581c87' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                      </Link>
                    </motion.div>
                  )
                })
              }
            </div>
      </div>
    </Fragment>
  )
}
