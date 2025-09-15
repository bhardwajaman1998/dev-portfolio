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
  threejs,
  clicklabs,
  wellquest,
  yelo,
  jugnoo,
  jungleworks,
  tookan,
  mappr,
  momentum
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
    title: "iOS app Developer",
    icon: mobile,
  }, 
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
  }
];

const technologies = [
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "SwiftUI",
    icon: swift,
  },
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
    name: "Node/Express JS",
    icon: nodejs,
  },
  {
    name: "PostGreSQL",
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
    title: "Associate Software Developer",
    company_name: "ClickLabs (Jugnoo)",
    icon: jugnoo,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Migrated Jugnoo’s legacy iOS app from Objective-C to Swift in 4 months, improving stability and performance.",
      "Delivered real-time tracking, multilingual support, and payment integrations in white-labeled ride-hailing and rental apps.",
      "Enhanced dispatcher and admin panels with analytics dashboards for better fleet and trip management."
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Jungleworks",
    icon: jungleworks,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Fixed 180+ bugs in 2 months on the government-backed SmartBike IoT project, enabling launch in 3 major cities.",
      "Delivered 30+ application features for clients across 10+ countries, ensuring scalable and consistent UI/UX standards.",
      "Mentored and guided interns on coding best practices, code reviews, and project delivery."
    ],
  },
    {
    title: "Associate Software Developer",
    company_name: "ClickLabs",
    icon: clicklabs,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Improved UI responsiveness in Yelo, enhancing navigation speed and usability.",
      "Supported development of delivery tracking and route optimization features in Tookan for field agents.",
      "Collaborated in agile sprint cycles, assisting with bug fixes and code reviews under senior developer guidance."
    ],
  }
];

const testimonials = [
];

const projects = [
  {
    name: "Momentum",
    description:
      "An iOS app built in Swift that uses CoreML/openAI-powered sentiment analysis to track moods, visualize trends, and provide personalized recommendations for well-being.",
    tags: [
      { name: "Swift", color: "blue-text-gradient" },
      { name: "CoreML", color: "green-text-gradient" },
      { name: "UIKit", color: "pink-text-gradient" },
    ],
    image: momentum, // add your screenshot here
    source_code_link: "https://github.com/bhardwajaman1998/MoodTracker-AI",
  },
    {
    name: "Yelo Ordering App",
    description:
      "No-code SaaS platform enabling merchants to create online stores. Built features like store setup, product catalogs, and checkout flows, serving 1,000+ businesses worldwide.",
    tags: [
      { name: "Swift", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "NodeJS", color: "pink-text-gradient" },
    ],
    image: yelo,
    source_code_link:
      "https://apps.apple.com/ca/app/yelo-build-online-local-store/id1526698470",
  },
  {
    name: "Tookan Delivery App",
    description:
      "Delivery management solution with real-time tracking, task assignment, and push notifications, improving operational efficiency for global businesses.",
    tags: [
      { name: "Swift", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "REST", color: "pink-text-gradient" },
    ],
    image: tookan,
    source_code_link: "https://apps.apple.com/ca/app/tookan-agent/id997255391",
  },
  {
    name: "Mappr Route Planner",
    description:
      "Route optimization and fleet mapping solution. Built interactive map UI and optimization logic to reduce delivery times for enterprise clients.",
    tags: [
      { name: "Swift", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "REST", color: "pink-text-gradient" },
    ],
    image: mappr,
    source_code_link: "https://apps.apple.com/ca/app/mappr-route-planner/id1609359238",
  },
  {
    name: "WellQuest",
    description:
      "A wellness tracking app built with React Native and Node.js. Features include habit logging, real-time dashboards, and progress tracking. Presented at Langara’s Capstone Showcase.",
    tags: [
      { name: "ReactNative", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "REST", color: "pink-text-gradient" },
    ],
    image: wellquest,
    source_code_link: "https://github.com/bhardwajaman1998/wellquest-frontend",
  }
];


export { services, technologies, experiences, testimonials, projects };
