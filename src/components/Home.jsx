import React, { Fragment, useRef, useEffect } from 'react'
import {About} from "../components/About"
import {Skills} from "../components/Skills"
import {Projects} from "../components/Projects"
import {Contacts} from "../components/Contacts"

export const Home = ({ location }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contattiRef = useRef(null);

  useEffect(() => {
    console.log(location);
    switch (location) {
      case "home": {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "about": {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "skills": {
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "projects": {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "contatti": {
        contattiRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Fragment>
      <div className='bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 h-[100vh] relative'>
        <div ref={homeRef} className='pt-24 text-center container mx-auto px-4 md:px-8 lg:px-16'>Home</div>
      </div>
      
      <div ref={aboutRef} id="about" className="pt-20 text-center container mx-auto px-4 md:px-8 lg:px-16">
          <About />
        </div>

        <div ref={skillsRef} id="skills" className="pt-20 text-center container mx-auto px-4 md:px-8 lg:px-16">
          <Skills />
        </div>

        <div ref={projectsRef} id="projects" className="text-center container mx-auto px-4 md:px-8 lg:px-16">
          <Projects />
        </div>

        <div ref={contattiRef} id="contatti" className="text-center container mx-auto px-4 md:px-8 lg:px-16">
          <Contacts />
        </div>
    </Fragment>
  )
}
