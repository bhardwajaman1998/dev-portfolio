import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  swift,
  carrent,
  jobit,
  tripguide,
  threejs,
  clicklabs,
  wellquest,
  skillbridge,
  autohive,
  googleVision,
  movieDb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Download Resume",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "iOS app Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Objective-C",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "ClickLabs",
    icon: clicklabs,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Developing and maintaining iOS mobile applications using React.js and other related technologies.",
      "Spearheaded the development of over 30+ innovative iOS applications on the Mac platform, leveraging Swift/Objective-C and Cocoa frameworks to deliver advanced functionalities.",
      "Applied strong programming skills and object-oriented analysis and design principles to develop scalable and maintainable codebases.",
      "Mentored team members, fostering a culture of knowledge-sharing and effective collaboration",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "ClickLabs",
    icon: clicklabs,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Aided in optimising coding and testing procedures, enhancing efficiency.",
      "Developed adeptness in Swift and Objective-C through practical application",
      "Played a key role in crafting program specifications, and ensuring adherence to industry benchmarks.", 
      "Transitioned to real-world application development swiftly after minimal training.",
    ],
  }
];

const testimonials = [
];

const projects = [
  {
    name: "WellQuest",
    description:
      "An intricate React Native marvel meticulously crafted for seamless calorie tracking and cutting-edge image scanning, complemented by a sophisticated appointment scheduling system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
      {
        name: "GluestackUI",
        color: "pink-text-gradient",
      },
    ],
    image: wellquest,
    source_code_link: "https://github.com/bhardwajaman1998/wellquest-frontend",
  },
  {
    name: "SkillBridge",
    description:
      " A sophisticated fusion of React.js frontend and Node.js backend, featuring an elegant dashboard meticulously designed to simplify startup developer onboarding, enhanced with cutting-edge OpenAI testing capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: skillbridge,
    source_code_link: "https://github.com/bhardwajaman1998/Cosmic-Chaos-Skillbridge",
  },
  {
    name: "WellQuest-Backend",
    description:
      "A robust Node.js backend intricately interwoven with MongoDB, engineered to perfection, empowering Wellquest's frontend with dynamic REST APIs, setting the stage for unparalleled user experiences.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
      {
        name: "AwsEC2",
        color: "pink-text-gradient",
      },
    ],
    image: wellquest,
    source_code_link: "https://github.com/bhardwajaman1998/wellquest-backend",
  },
  {
    name: "Movie Database",
    description:
      "A pinnacle of React Native innovation, meticulously sculpted to deliver unparalleled movie and show exploration experiences, boasting advanced search, sorting, and filtering functionalities for the most discerning of users.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
      {
        name: "GlueStackUI",
        color: "pink-text-gradient",
      },
    ],
    image: movieDb,
    source_code_link: "https://github.com/bhardwajaman1998/MovieDB-App",
  },
  {
    name: "AutoHive",
    description:
      "A groundbreaking JavaScript masterpiece ingeniously engineered with GraphQL prowess and intelligent caching mechanisms, offering unparalleled precision in managing vast volumes of user vehicle data with effortless grace.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: autohive,
    source_code_link: "https://github.com/bhardwajaman1998/PeopleAndCars",
  },
  {
    name: "Who am I?",
    description:
      "An awe-inspiring JavaScript marvel harnessing the power of Google Vision, meticulously designed to effortlessly identify and categorize objects captured by the camera, offering users a seamless and enlightening experience with every scan.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleVisionAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: googleVision,
    source_code_link: "https://github.com/bhardwajaman1998/Google-Vision-API",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
