import { reverse } from "dns";

export const ProjectsDetailsData = [
  {
    slug: "project-oasys",
    title: "OaSYS",
    subtitle: "Runner – First Person – Competitive – Fast-paced",
    heroMedia: "/Images/hero_oasys.png", // image ou video
    teamSize: "20+",
    duration: "1 year",
    tools: ["Unreal Engine", "Figma", "Google Sheets"],
    description:
      "Projet le plus important réalisé pendant 1 an avec 4 mois de pré-production. Système intelligent d’analyse et de simulation. Disponible sur Steam.",
    sections: [
      {
        title: "3C - Rational Weapon Design",
        text: "C’est grosso-modo un tableur dynamique qui m’a permis, pendant la préproduction, de me donner une idée de l’équilibrage de chacune des armes sur plusieurs paramètres divers. Une problématique avec les tableurs et les autres documents comme ça, (qui constituent une grosse partie de mon travail), c’est qu'à moins de voir l’image en taille 100%; est ce que tu penses que c’est possible de pouvoir zoomer sur l’image en cliquant dessus ?",
        images: ["/Images/TableurRG_Oasys.png"],
        reverse: false,
      },
      {
        title: "S&F - Signs & Feedback",
        text: "Une liste organisée en tableur de tous les retours visuels, audios, et haptiques possibles pour chacune des actions du joueurs.",
        images: ["/Images/S&F_Oasys.png"],
        reverse: true,
      },
      {
        title: "UX Flowchart",
        text: "Un graphique pour la navigation dans les menus du jeu, avec plusieurs références, idées, des besoins graphiques listés, etc…",
        images: ["/Images/UXFlowChart_Oasys.jpg"],
        reverse: false,
      },
      {
        title: "Figma Prototype",
        text: "Pour celui ci je pense que le plus pratique ce serait directement d’envoyer le lien Figma, parce que bon sinon c’est une image pour chacun des écrans et c’est quand même moins pratique je pense.",
        links: [
          "https://www.figma.com/design/dgmGBoMb8I3wu4ixSw05jl/OASYS?node-id=47-146&t=bq3l9gHogtgg6M9s-1",
        ],
        reverse: false,
      },
    ],
  },

  {
    slug: "project-chignik",
    title: "Chignik",
    subtitle: "Runner – First Person – Competitive – Fast-paced",
    heroMedia: "/Images/Chignik.png", // image ou video
    teamSize: "20+",
    duration: "1 year",
    tools: ["Unreal Engine", "Figma", "Google Sheets"],
    description:
      "Projet de jeu de rôle non terminé mais avec un bon travail de mise en page et de map making.",
    sections: [
      {
        title: "Mise en page",
        text: "C’est à ça qu’a finis par ressembler le projet à la fin du temps impartie.",
        files: ["/Files/MiseEnPage_PDF.pdf"],
        reverse: false,
      },
      {
        title: "Map Making",
        text: "Un plan que j’ai fait sur Photoshop de la ville principale dans laquelle les joueurs passent à un moment.",
        images: ["/Images/Plan_Chignik.jpg"],
        reverse: true,
      },
      {
        title: "Création de matériel",
        text: "	À un moment je me suis dis que, pour un maître du jeu, ça devait être compliqué de s’organiser pour avoir toutes les informations disponibles le plus rapidement possible derrière son petit paravent. Du coup je me suis dis que ce serait sympa d’avoir des petits trucs à déplier avec plusieurs infos concises dessus.",
        images: ["/Images/sheet.jpg"],
        reverse: false,
      },
    ],
  },

  {
    slug: "project-golf-in-wonderland",
    title: "Golf in Wonderland",
    subtitle: "Runner – First Person – Competitive – Fast-paced",
    heroMedia: "/Images/golf_in_wonderland.png", // image ou video
    teamSize: "20+",
    duration: "1 year",
    tools: ["Unreal Engine", "Figma", "Google Sheets"],
    description:
      "Jeu de golf multijoueur inspiré d’Alice au pays des merveilles.",
    sections: [
      {
        title: "GPE Design",
        text: "C’est un tableur pour se donner une idée théorique de la difficultée générée par un pattern spécifique de GPE (ici une rivière de thé) pendant l’élaboration du level design. Globalement ça devient plutôt obsolète après les premiers play tests, mais c’est toujours utile à avoir pour éviter de faire une expérience totalement incohérente.",
        images: [
          "/Images/RGD_RiviereDeThe_Image_GolfInWonderland.png",
          "/Images/RGD_RiviereDeThe_Tableur_GolfInWonderland.png",
        ],
        reverse: false,
      },
      {
        title: "UX Flowchart",
        text: "Comme pour OaSYS, un UX Flowchart, avec globalement drôlement moins d’infos (pour ma défense c’était deux ans avant).",
        images: ["/Images/UXFlowchart_GolfInWonderland.jpg"],
        reverse: true,
      },
      {
        title: "Level Design Document",
        text: "C’est peut être le seul truc dont je suis encore fière sur le projet, mais c’est techniquement un travail de Level Designer, pas de Game Designer, donc je dois me retenir de l’afficher + haut malheureusement :(... En gros pour les niveaux dans ce jeu on avait tout fait en module, pour que ce soit plus simple pour les graphistes qui passeront après. Du coup j’avais préparé un gros gros document photoshop avec tous nos modules, et après pour les Level Design Document il suffisait d’y repasser et de composer le truc comme des LEGO.",
        images: ["/Images/LDD_Circuit2_GolfInWonderland.jpg"],
        reverse: false,
      },
    ],
  },
];
