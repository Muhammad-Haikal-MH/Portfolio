import g1 from '../assets/sertif/g1.png';
import g2 from '../assets/sertif/g2.png';
import g3 from '../assets/sertif/g3.png';
import g4 from '../assets/sertif/g4.png';
import g5 from '../assets/sertif/g5.png';
import g6 from '../assets/sertif/g6.png';
import g7 from '../assets/sertif/g7.png';
export const Data = [
    {
    id: '1',
    imageUrl: 'https://www.codepolitan.com/c/AHZR9BD/',
    gambar: g1,
    title: 'Belajar Javascript',
    organization: 'CODEPOLITAN',
    issueDate: 'November 2024',
  },
  {
    id: '2',
    imageUrl: 'https://www.codepolitan.com/c/6QFKRAA/',
    gambar: g2,
    title: 'Belajar Konsep OOP di Javascript',
    organization: 'CODEPOLITAN',
    issueDate: 'January 2025',
  },
  {
    id: '3',
    imageUrl: 'https://www.codepolitan.com/c/E1BAVQU/',
    gambar: g3,
    title: 'Belajar Javascript Asynchronous',
    organization: 'CODEPOLITAN',
    issueDate: 'January 2025',
  },
  {
    id: '4',
    imageUrl: 'https://www.codepolitan.com/c/QZIFGIB/',
    gambar: g4,
    title: 'Belajar Javascript DOM',
    organization: 'CODEPOLITAN',
    issueDate: 'November 2024',
  },
  {
    id: '5',
    imageUrl: 'https://www.codepolitan.com/c/L83NEBF/',
    gambar: g5,
    title: 'Belajar AJAX dan Web API',
    organization: 'CODEPOLITAN',
    issueDate: 'January 2025',
  },
  {
    id: '6',
    imageUrl: 'https://www.codepolitan.com/c/FJHNIKE/',
    gambar: g6,
    title: 'Belajar React Fundamental',
    organization: 'CODEPOLITAN',
    issueDate: 'February 2025',
  },
  { id: '7',
    imageUrl: 'https://www.udemy.com/certificate/UC-31ad8e8d-4560-413a-a579-bcc23c2bafb2/',
    gambar: g7,
    title: 'Belajar React sampai mahir',
    organization: 'UDEMY',
    issueDate: 'Mey 2025',
  }
]


import p1 from '../assets/projek/p1.png'
import p2 from '../assets/projek/p2.png'
import p3 from '../assets/projek/p3.png'
import p4 from '../assets/projek/p4.png'
import p5 from '../assets/projek/p5.png'
import p6 from '../assets/projek/p6.png'
import p7 from '../assets/projek/p7.png'
import p8 from '../assets/projek/p8.png'


import tml from '../assets/skill/html5-color.svg'
import css from '../assets/skill/css-color.svg'
import js from '../assets/skill/javascript-color.svg'
import riek from '../assets/skill/react-color.svg'
import redux from '../assets/skill/redux-color.svg'
import router from '../assets/skill/reactrouter-color.svg'
import vite from '../assets/skill/vite-color.svg'
import tailwind from '../assets/skill/tailwindcss-color.svg'
import framer from '../assets/skill/framer-color.svg'


export const project = [
  {
    id: '1',
    nama: 'muhammadhaikal.vercel.app',
    desc: 'Personal website & portfolio, built from scratch using Javascript, TailwindCSS, React, Vite, Framer motion and React Router.',
    techStack: [js,riek, tailwind, vite, framer, router],
    img: p8,
    intro: 'This is a personal website to showcase my projects and my skill development.',
    porto: 'To showcasing my awesome projects. You can see this feature',
    demo: 'https://muhammadhaikal.vercel.app/'
  },
  {
    id: '2',
    nama: 'keberagaman nusantara',
    desc: 'Nusantara’s culture from Sabang to Merauke features dances, music, crafts, and local food. Celebrate Indonesia’s rich heritage.',
    techStack: [js, tailwind, tml],
    img: p2,
    intro: '',
    porto: '',
    demo: 'https://muhammad-haikal-mh.github.io/projek-1/'
  },
  {
    id: '3',
    nama: 'spotify clone',
    desc: 'inspired by Spotify. explore, listen, and enjoy your favorite tunes seamlessly. Built from scratch using Javascript, React JS, TailwindCSS, Vite, and Router.',
    techStack: [js,riek, tailwind, vite, router],
    img: p3,
    intro: '',
    porto: ''
  },
  {
    id: '4',
    nama: 'Disney Hotstar clone',
    desc: 'inspired by Disney — watch beloved movies and shows anytime, anywhere. Built from scratch using  Javascript, React, TailwindCSS, and Vite.',
    techStack: [js,riek, tailwind, vite],
    img: p4,
    intro: '',
    porto: ''
  },
  {
    id: '5',
    nama: 'e-commerce miniture',
    desc: 'A simple mini e-commerce app, buy your favorite products easily. Built from scratch using Javascript, React, TailwindCSS, Vite, Router and Redux.',
    techStack: [js,riek, tailwind, vite, router,redux],
    img: p5,
    intro: '',
    porto: ''
  },
  {
    id: '6',
    nama: 'e-commerce ecoRags',
    desc: 'Eco Green-themed competition team creation platform make your activities successful with an environmentally friendly team.',
    techStack: [js, tailwind, tml],
    img: p6,
    intro: '',
    porto: '',
    demo: 'https://barudak-sikece-fashion-hijau-berkelanjutan-xrgj.vercel.app/edu4.html'
  },
  {
    id: '7',
    nama: 'portfolio',
    desc: 'Personal website & portfolio, built from scratch using Javascript, TailwindCSS, Vite and HTML.Designed with clean UI and responsiveness in mind',
    techStack: [js, tailwind, vite, tml], 
    img: p7,
    intro: '',
    porto: ''
  },
  {
    id: '8',
    nama: 'siaga manado',
    desc: 'A disaster reporting web app for Manado. Built with a team for a university project, featuring reporting, education, and user authentication.',
    techStack: [js, tailwind, tml],
    img: p1,
    intro: '',
    porto: '',
    demo: ''
  }
]

export const icon = [
  {
    id: '1',
    nama: 'HTML',
    icon:tml,
  },
  {
    id: '2',
    nama: 'CSS',
    icon:css,
  },
  {
    id: '3',
    nama: 'Javascript',
    icon:js,
  },
  {
    id: '4',
    nama: 'TailwindCSS',
    icon:tailwind,
  },
  {
    id: '5',
    nama: 'Vite ',
    icon:vite,
  },
  {
    id: '6',
    nama: 'React JS',
    icon:riek,
  },
  {
    id: '7',
    nama: 'React Router',
    icon:router,
  },
  {
    id: '8',
    nama: 'Redux',
    icon:redux,
  },
]
