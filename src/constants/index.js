import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  mencap,
  jpmorgan,
  scottishpower,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "AI Engineer", 
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
];

const achievements = [
  {
    title: "JPMorgan Chase Hackathon Winner",
    description: "Won the Data for Good hackathon by JPMorgan Chase, developing innovative solutions for AfriKids charity focusing on child rights and poverty alleviation in Ghana.",
    icon: "🏆",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500"
  },
  {
    title: "Microsoft Hackathon Champion",
    description: "Secured victory in Microsoft's competitive hackathon, showcasing advanced technical skills and innovative problem-solving capabilities.",
    icon: "🥇",
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    title: "Oxford University Platinum Cadet",
    description: "Achieved Platinum Cadet status at University of Oxford, recognizing exceptional leadership, academic excellence, and commitment to professional development.",
    icon: "🎖️",
    color: "bg-gradient-to-r from-purple-400 to-purple-600"
  },
  {
    title: "Sheffield University Platinum Cadet",
    description: "Earned Platinum Cadet recognition at University of Sheffield, demonstrating outstanding performance and dedication to academic and professional growth.",
    icon: "⭐",
    color: "bg-gradient-to-r from-green-400 to-green-600"
  },
  {
    title: "MSc Advanced Computer Science (Distinction)",
    description: "Graduated with Distinction from University of Leicester's MSc Advanced Computer Science program, specializing in machine learning and data analytics.",
    icon: "🎓",
    color: "bg-gradient-to-r from-indigo-400 to-indigo-600"
  },
  {
    title: "BSc Computer Science (First Class Honours)",
    description: "Achieved First Class Honours in Computer Science with AI from Coventry University, demonstrating excellence in artificial intelligence and software development.",
    icon: "🌟",
    color: "bg-gradient-to-r from-pink-400 to-pink-600"
  }
];

const technologies = [
  {
    name: "Python",
    icon: javascript, // Using JS icon as placeholder for Python
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Mencap",
    icon: mencap,
    iconBg: "#383E56",
    date: "Feb 2026 - Present",
    points: [
      "Lead development of advanced analytics and reporting solutions transforming Quality and QMS datasets into actionable insights for senior leadership.",
      "Design and maintain organisation-wide Power BI dashboards using Power Query and DAX for real-time performance monitoring.",
      "Build automated analytics pipelines using Python and SQL, reducing manual reporting processes while strengthening data validation.",
      "Apply NLP techniques and Azure OpenAI services to analyse qualitative inspection reports and incident narratives.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "JPMorgan Chase (Data for Good)",
    icon: jpmorgan,
    iconBg: "#E6DEDD", 
    date: "Oct 2024",
    points: [
      "Collaborated with multidisciplinary team to design data-driven solution for AfriKids, focused on child rights and poverty alleviation in Ghana.",
      "Leveraged Jupyter Notebooks and SQL for data analysis, processing large datasets to uncover insights on student success and socio-cultural influences.",
      "Utilized GitHub for version control ensuring seamless collaboration and project transparency.",
      "Won hackathon by delivering actionable recommendations on improving education, child protection, and health outcomes.",
    ],
  },
  {
    title: "Software & Database Developer",
    company_name: "Scottish Power",
    icon: scottishpower,
    iconBg: "#383E56",
    date: "Jan 2023 - Sept 2023",
    points: [
      "Developed Python applications and Power Automate workflows for automated email and Teams messaging systems.",
      "Created web applications using JavaScript and Python Flask for internal business operations.",
      "Built data pipelines from SQL and Access databases across multiple electricity production sites including wind farms and solar installations.",
      "Developed SharePoint Lists and Power BI visualisations with DAX expressions for renewable energy data analytics.",
    ],
  },
  {
    title: "Database Developer",
    company_name: "Scottish Power Renewables",
    icon: scottishpower,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2023", 
    points: [
      "Digitalised Renewables department by developing data lake improving automation, security, and decision-making processes.",
      "Created data pipelines from various SQL and Access databases across onshore/offshore wind, battery, and solar sites.",
      "Performed data analytics using SharePoint Lists, Power BI Query Editor, and DAX for custom measures in data visualisations.",
      "Developed strategic business insights through data reporting and analysis for renewable energy operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abdul's analytical skills and technical expertise in machine learning significantly enhanced our data-driven decision making processes.",
    name: "Data Team Lead",
    designation: "Senior Manager", 
    company: "Scottish Power",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His ability to transform complex datasets into actionable insights and automated reporting solutions is exceptional.",
    name: "Project Supervisor",
    designation: "Technical Lead",
    company: "Mencap",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Abdul consistently delivers high-quality solutions that bridge the gap between advanced AI research and practical business applications.",
    name: "Academic Supervisor",
    designation: "Professor",
    company: "University of Leicester",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Stock Prediction with LSTM-CNN",
    description:
      "Deep learning research project integrating financial market data and NLP sentiment analysis to forecast S&P 500 index using LSTM, GRU, and CNN-LSTM hybrid architectures with 96% accuracy (R² = 0.96).",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abdulwadoodmotla/LSTM-CNN-Stock-prediction",
  },
  {
    name: "Distributed Whiteboard System",
    description:
      "Fault-tolerant distributed whiteboard application on Azure cloud with real-time collaboration, Paxos consensus for synchronization, and MongoDB Atlas for state persistence. Achieved <1s latency with high availability.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abdulwadoodmotla/ICC",
  },
  {
    name: "Privacy-Preserving Network IDS",
    description:
      "Machine learning-driven Intrusion Detection System using UNSW-NB15 dataset (~1.7M records). Achieved ~96% ROC-AUC with XGBoost, integrated SHAP for explainable AI, and deployed Flask web app with Firebase real-time monitoring.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "xgboost",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, achievements, technologies, experiences, testimonials, projects };
