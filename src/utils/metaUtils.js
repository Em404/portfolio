export const getPageMeta = (pathname) => {
  switch (pathname) {
    case "/about":
      return {
        title: "Emanuele Macchiarulo | About",
        description: "Informazioni su Emanuele, sviluppatore front end react",
        canonical: "/about",
      };
    case "/skills":
      return {
        title: "Emanuele Macchiarulo | Skills",
        description: "Skill di Emanuele, sviluppatore front end react",
        canonical: "/skills",
      };
    case "/projects":
      return {
        title: "Emanuele Macchiarulo | Projects",
        description:
          "Progetti realizzati da Emanuele, sviluppatore front end react",
        canonical: "/projects",
      };
    case "/contacts":
      return {
        title: "Emanuele Macchiarulo | Contacts",
        description: "Contatti di Emanuele, sviluppatore front end react",
        canonical: "/contacts",
      };
    case "/home":
    default:
      return {
        title: "Emanuele Macchiarulo | Home",
        description: "Emanuele Macchiarulo, sviluppatore front end react",
        canonical: "/home",
      };
  }
};
