const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/13wS5h1FyQG4bbVCdZ_snRjp2gkE0axoO/view?usp=share_link",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 250, suffix: "+", label: "Problems Solved" },
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "System Reliability",
    desc: "Designing and deploying systems with high uptime, optimized backend logic, and production-grade performance.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Transparent Collaboration",
    desc: "Communicating progress clearly across teams to ensure alignment, accountability, and shared ownership.",
  },
  {
    imgPath: "/images/time.png",
    title: "Efficient Execution",
    desc: "Delivering scalable features and integrations under tight timelines without compromising quality.",
  },
];

const techStackImgs = [
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "NextJs Developer",
    imgPath: "/images/logos/nextjs.png",
  },
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  ,
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Kartikey brought technical skill and a robust development approach to our team, significantly automating our in-game item shop. His work has been invaluable in delivering a seamless and reliable purchasing experience for our players.",
    imgPath: "/images/logos/nextjs.png",
    logoPath: "/images/logos/react.png",
    title: "Full-Stack Developer",
    date: "June 2024 - Present",
    responsibilities: [
    "Building a Minecraft SMP item shop for real-time purchase of coins, ranks, and crates with in-game delivery.",
    "Integrating Tebex for secure, game-native payment processing and automated reward fulfillment.",
    "Developing a Node.js backend with webhook handling and deploying on a Virtual Machine to ensure seamless web-to-game integration."
  ]
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    url:"https://github.com/ImKartikey27"
  },
  {
    name: "Discord",
    imgPath: "/images/discord.jpg",
    url: "http://discord.com/users/kartikey_2710"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url:"https://x.com/KartikeySa5866"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/kartikey-sangal-752567301/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
