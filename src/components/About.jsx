import React, { Fragment } from "react";
import profilePic from "../img/profile-pic.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getPageMeta } from '../utils/metaUtils';
import { useLocation } from "react-router-dom";

export const About = ({ t }) => {
  const location = useLocation();
  const pageMeta = getPageMeta(location.pathname);

  const fadeInDownAnimation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeInUpAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Fragment>
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta
          name="description"
          content={pageMeta.description}
        />
        <link rel="canonical" href={pageMeta.canonical}/>
      </Helmet>

      <div className="container mx-auto px-8 md:px-16 lg:px-32 py-8 bg-purple-600 lg:rounded-xl custom-box-shadow">
        {/* H2 */}
        <motion.h2
          variants={fadeInDownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left text-neutral-50 my-4 md:my-8 lg:my-4"
        >
          {t('about_me')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 lg:gap-0">
          {/* pic */}
          <motion.div
            variants={fadeInDownAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="self-center justify-self-center lg:justify-self-start mb-4"
          >
            <div className="w-[12rem] xl:w-[24rem]">
              <img
                src={profilePic}
                alt="Emanuele-Macchiarulo-Sviluppatore-React"
                loading="lazy"
                className=""
              />
            </div>
          </motion.div>

          {/* about */}
          <motion.div
            variants={fadeInUpAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left lg:mt-0 flex flex-col"
          >
            <h3>{t('hi_everyone')}</h3>
            <p>{t('presentation_1')}</p>
            <p className="mb-4">{t('presentation_2')} <span className="font-semibold">{t('fe_dev')}</span> {t('from')} <span className="font-semibold">Epicode</span>.</p>
            <p>{t('presentation_3')}</p>
            <div className="md:hidden lg:block">
              <p className="mt-4">{t('presentation_4')}</p>
              <p className="mt-4">{t('presentation_5')}</p>
              <ul>
                <li>{t('hobby_1')} <span className="font-semibold">{t('util_hobby_1')}</span>💻</li>
                <li>{t('hobby_2')} <span className="font-semibold">{t('util_hobby_2')}</span>🎮</li>
                <li>{t('hobby_3')} <span className="font-semibold">{t('util_hobby_3')}</span>🎵</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* about section md */}
        <motion.div
          variants={fadeInUpAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg hidden md:block lg:hidden"
        >
          <p className="mt-4">{t('presentation_4')}</p>
          <p className="mt-4">{t('presentation_5')}</p>
              <ul>
                <li>{t('hobby_1')} <span className="font-semibold">{t('util_hobby_1')}</span>💻</li>
                <li>{t('hobby_2')} <span className="font-semibold">{t('util_hobby_2')}</span>🎮</li>
                <li>{t('hobby_3')} <span className="font-semibold">{t('util_hobby_3')}</span>🎵</li>
              </ul>
        </motion.div>
      </div>
    </Fragment>
  );
};
