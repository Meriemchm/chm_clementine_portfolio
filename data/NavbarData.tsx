export const NavbarData = [
  {
    id: 3,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "My Projects",
    link: "/projects",
    children: [
      {
        id: 1,
        name: "Projet OaSYS",
        link: "/projects/project-oasys",
      },
      {
        id: 2,
        name: "Projet Chignik",
        link: "/projects/project-chignik",
      },
      {
        id: 3,
        name: "Projet Golf in Wonderland",
        link: "/projects/project-golf-in-wonderland",
      },
    ],
  },
];
