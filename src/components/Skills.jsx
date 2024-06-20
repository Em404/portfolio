import React, { Fragment } from "react";
import { motion } from "framer-motion";
import htmlIcon from "../icons/file-type-html.svg";
import cssIcon from "../icons/file-type-css.svg";
import jsIcon from "../icons/javascript-js.svg";
import tsIcon from "../icons/typescript-icon.svg";
import reactIcon from "../icons/react.svg";
import angularIcon from "../icons/file-type-angular.svg";
import bootstrapIcon from "../icons/bootstrap.svg";
import tailwindIcon from "../icons/tailwind-css.svg";
import gitIcon from "../icons/git.svg";
import { Helmet } from "react-helmet-async";
import { getPageMeta } from '../utils/metaUtils';
import { useLocation } from "react-router-dom";

export const Skills = () => {
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
    animate: (index) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.15 * index,
        },
      };
    },
  };

  const icons = [
    {
      id: 0,
      name: "HTML",
      icon: htmlIcon,
    },
    {
      id: 1,
      name: "CSS",
      icon: cssIcon,
    },
    {
      id: 2,
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      id: 3,
      name: "TypeScript",
      icon: tsIcon,
    },
    {
      id: 4,
      name: "React",
      icon: reactIcon,
    },
    {
      id: 5,
      name: "Angular",
      icon: angularIcon,
    },
    {
      id: 6,
      name: "Bootstrap",
      icon: bootstrapIcon,
    },
    {
      id: 7,
      name: "Tailwind",
      icon: tailwindIcon,
    },
    // {
    //   id: 8,
    //   name: 'git',
    //   icon: gitIcon,
    // }
  ];

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
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <motion.h2
          variants={fadeInDownAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left text-purple-600 dark:text-neutral-50 mb-8 md:mb-16"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {icons.map((icon, index) => {
            return (
              <motion.div
                variants={fadeInUpAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                key={index}
                className="flex flex-col items-center"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="w-12 lg:w-16 h-12 lg:h-16"
                />
                <h3 className="mt-2 font-semibold md:text-lg">{icon.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
