import React, { Fragment } from "react";
import profilePic from "../img/profile-pic.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const About = () => {
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
        <title>About</title>
        <meta
          name="description"
          content="Infromazioni su Emanuele, sviluppatore front end react"
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="container mx-auto px-8 md:px-16 lg:px-32 py-8 bg-purple-600 xl:rounded-xl custom-box-shadow">
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
          Su di me
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
            <h3>Ciao a tutti!</h3>
            <p>
              Sono un Front End Developer con competenze in{" "}
              <span className="font-bold">React</span>.
            </p>
            <p>
              Mi ritengo una persona precisa, organizzata, con buone capacità di
              problem solving e in grado di lavorare sia in autonomia che in
              gruppo mostrando adattabilità e flessibilità.
            </p>
            <div className="md:hidden lg:block">
              <p className="mt-4">
                💭 Sempre alla ricerca di nuovi stimoli e opportunità per
                crescere sia come professionista che come persona. 🤝
              </p>
              <p className="mt-4">Appassionato di:</p>
              <ul>
                <li>💻 Tecnologia</li>
                <li>🎮 Videogames</li>
                <li>🎵 Musica</li>
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
          <p className="mt-4">
            💭 Sempre alla ricerca di nuovi stimoli e opportunità per crescere
            sia come professionista che come persona. 🤝
          </p>
          <p className="mt-4">Appassionato di:</p>
          <ul>
            <li>💻 Tecnologia</li>
            <li>🎮 Videogames</li>
            <li>🎵 Musica</li>
          </ul>
        </motion.div>
      </div>
    </Fragment>
  );
};
