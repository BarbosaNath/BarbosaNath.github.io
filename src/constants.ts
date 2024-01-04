import CavesAndThornsIMG from "/caves_and_thorns.png"
import FotoShoppingIMG from "/fotoshopping_logo_bigger.png"
import IUULIMG from "/iuul.jpg"
import PlaceHolderIMG from "/placeholder.png"

export const PROJECTS: ProjectType[] = [
  {
    key: 1,
    name: "Caves and Thorns",
    image: CavesAndThornsIMG,
    description:
      "Uma demo de um jogo top-down feito durante o curso de game development da DANKI.CODE. O nome dessa demo dá-se à ambientação do jogo, onde os personagens são suculentas, famosas por seus espinhos, que formam uma sociedade primitiva em cavernas subterrâneas.",
    tools: ["Java", "AWT"],
  },
  {
    key: 2,
    name: "Foto Shopping",
    image: FotoShoppingIMG,
    description:
      "Um aplicativo de gerenciamento de estoque com foco em auxiliar vendedores que trabalham em lojas físicas através de redes sociais e que precisem disponibilizar imagens de seus produtos rapidamente, sem possuir um site de vendas profissional.",
    tools: ["Python", "PySimpleGUI", "SQLite3", "Pillow"],
    links: [
      { type: "github", link: "https://github.com/BarbosaNath/ProjetoAPII" },
    ],
  },
  {
    key: 3,
    name: "Meu Antigo Portfólio",
    image: IUULIMG,
    description:
      "Este portfólio foi desenvolvido como desafio do programa de residência em Front-End da iUUL em parceria com a PRO-REFORMA. ",
    tools: ["HTML", "CSS", "Bootstrap"],
    links: [
      { type: "github", link: "https://github.com/BarbosaNath/DESAFIOS-IUUL" },
      { type: "project", link: "https://portfolio-barbosanath.vercel.app/" },
    ],
  },
  {
    key: 4,
    name: "Este Portfólio",
    image: PlaceHolderIMG,
    description: "",
    tools: ["React.JS", "TypeScript", "TailwindCSS"],
    links: [
      {
        type: "github",
        link: "https://github.com/BarbosaNath/BarbosaNath.github.io",
      },
      { type: "project", link: "https://barbosanath.github.io/" },
    ],
  },
];

export const COURSES: CourseType[] = [
  {
    key: 1,
    name: "Sistemas de Informação",
    institution: "Instituto Federal do Ceará",
    duration: "2022 até 2025",
  },
  {
    key: 2,
    name: "Interfaces Web com JavaScript, HTML e CSS",
    institution: "UTD",
    duration: "120 horas",
  },
  {
    key: 3,
    name: "Logica de Programação Java",
    institution: "UTD",
    duration: "120 horas",
  },
  {
    key: 4,
    name: "Desenvolvedor de Jogos",
    institution: "Masters Informática",
    duration: "140 horas",
  },
  {
    key: 5,
    name: "Desenvolvimento de Jogos",
    institution: "DANKI.CODE",
    duration: "350 horas",
  },
  {
    key: 6,
    name: "Inglês Módulos I e II",
    institution: "IFSUL",
    duration: "360 horas",
  },
  {
    key: 7,
    name: "Microsoft Excel",
    institution: "Fundação Bradesco",
    duration: "15 horas",
  },
  {
    key: 8,
    name: "Design Gráfico",
    institution: "FIAP",
    duration: "140 horas",
  },
  {
    key: 9,
    name: "Assistente Administrativo",
    institution: "IDESQ",
    duration: "400 horas",
  },
];

export const WORK_HISTORY: WorkExperienceType[] = [
  {
    key: 1,
    institution: "Compass.UOL",
    duration: "08/2023 até 12/2023",
    title: "Estagiário Front-End",
    description: "",
    activities: [
      "Trabalho em equipe",
      "Kanban",
      "Scrum",
      "Git & Github",
      "Desenvolvimento Web com React.JS",
    ],
  },
  {
    key: 2,
    institution: "Colégio Pequeno Príncipe",
    duration: "07/2022 até 06/2023",
    title: "Jovem Aprendiz",
    description:
      "Jovem Aprendiz através do programa Primeiro Passo exercendo a função de Auxiliar Administrativo na gráfica do Colégio Pequeno Príncipe.",
    activities: [
      "Trabalho em equipe",
      "Kanban",
      "Microsoft Office",
      "Produção de publicações para as redes sociais da empresa",
    ],
  },
  {
    key: 3,
    institution: "Jogo World of Science",
    duration: "04/2022 até 06/2022",
    title: "Freelancer",
    description:
      "Freelancer voluntário para o laboratório LITE do Instituto Federal do Ceará Campus Crato exercendo a função de Audio Designer. ",
    activities: ["Trabalho em equipe", "Kanban", "Produção musical no LMMS"],
  },
];
