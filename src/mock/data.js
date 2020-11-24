import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MV Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is a web developer\'s portfolio website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Maria Vlasenko',
  subtitle: 'I am a self-taught developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am an enthusiastic, responsible and hard-working self-taught developer from Ukraine. ',
  paragraphTwo: 'Skillsets: Javascript, React, Redux, GraphQL, Node.js, Postgresql, mySQL.',
  paragraphThree: 'I can work hard and am a person, passionate about learning new technologies. I’m currently improving my front-end skills and teaching myself back-end development (Node.js and Python).',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Robofriends',
    info: '',
    info2: '',
    url: 'https://marja1895.github.io/robofriends/',
    repo: 'https://github.com/marja1895/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Quote Generator',
    info: 'An app made with Vanilla JS that generates a random quote. This random quote you can post to your Twitter account.',
    info2: '',
    url: 'https://marja1895.github.io/quote-generator',
    repo: 'https://github.com/marja1895/quote-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Infinite Scroll',
    info: 'Infinite scroll  - an app made with Unsplash API, which provides random photos from Unsplash.com. ',
    info2: '',
    url: 'https://marja1895.github.io/infinite_scroll',
    repo: 'https://github.com/marja1895/infinite_scroll', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Awesome!',
  btn: 'Mail me',
  email: 'marja.vlasenko@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maria-vlasenko',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/marja1895',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
