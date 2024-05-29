import React, { Fragment }  from 'react'
import { delay, motion } from "framer-motion"

export const Contacts = () => {

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
            className='text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left text-purple-900 dark:text-neutral-100 mb-8 md:mb-16'>Contatti</motion.h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8'>

            </div>
      </div>
    </Fragment>
  )
}
