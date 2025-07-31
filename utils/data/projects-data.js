import ayla from '/public/image/ayla.jpg';
import Project1 from '/public/image/Project1.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'GoHolidays – Full-Stack Airbnb-Inspired Web Application',
    description:
      'A full-stack travel stay booking app where users can register, create/edit/delete listings, upload images, view listings on Mapbox, and leave reviews. Built using MVC architecture with secure auth, cloud-based storage, and dynamic map integration.',
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Bootstrap',
      'MongoDB Atlas',
      'Cloudinary',
      'Mapbox',
      'Passport.js'
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/yashshuklaa001/GoHolidays.git',
    demo: 'https://goholidays-dwu7.onrender.com',
    image: Project1,
  },
  {
    id: 2,
    name: 'CodeShare – Real-Time Collaborative Code Editor',
    description:
      'Built a real-time collaborative code editor where multiple users can write, compile, and execute code together. Supports live editing, I/O sync, and user activity notifications using WebSockets.',
    tools: ['HTML','CSS','JavaScript','React.js','Socket.io','Node.js','Express.js','JudgeAPI','codeMirror','CodeSync'],
    role: 'Full Stack Developer',
    code: 'https://github.com/yashshuklaa001/CodeShare_FrontEnd.git',
    demo: 'https://code-share-front-end.vercel.app/',
    image: travel,
  }]
//   {
//     id: 3,
//     name: 'CryptoVerse – Cryptocurrency Tracker & News App',
//     description:
//       'Developed a cryptocurrency tracker platform offering real-time news, exchange data, and detailed coin info via RapidAPI. Built with React and Redux, the app displays charts, market trends, and analytics.',
//     tools: ['JavaScript', 'React.js', 'Tailwind CSS', 'RapidAPI', 'Redux'],
//     code: 'https://github.com/rampalyadav0001/cryptoverse',
//     demo: 'https://cryptoverse-cryptonews.netlify.app/',
//     image: realEstate,
//     role: 'Full Stack Developer',
//   },
//   {
//     id: 4,
//     name: 'E-commerce Website',
//     description:
//       'Designed and developed a modern e-commerce platform using React and Material UI. Implemented Redux for state management, Axios for API calls, and integrated Stripe for secure payments.',
//     tools: ['JavaScript', 'React.js', 'Material UI', 'Redux', 'Tailwind CSS'],
//     code: 'https://github.com/rampalyadav0001/React-Ecommerce',
//     demo: 'https://github.com/rampalyadav0001/React-Ecommerce',
//     image: ayla,
//     role: 'Frontend Developer',
//   }
// ];
