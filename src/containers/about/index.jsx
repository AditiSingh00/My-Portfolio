import React from 'react';
import './styles.scss';
import pic from '../../images/pic.png';
import { FaPaintBrush } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { GiCookingPot } from 'react-icons/gi';

const skills = [
  {
    title: 'Languages',
    skills: [
      {
        name: 'HTML',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg',
      },
      {
        name: 'CSS',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg',
      },
      {
        name: 'JavaScript',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg',
      },
      {
        name: 'TypeScript',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg',
      },
      {
        name: 'Python',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Python-Dark.svg',
      },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      {
        name: 'React.js',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg',
      },
      {
        name: 'Next.js',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/NextJS-Dark.svg',
      },
      {
        name: 'Redux',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Redux.svg',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg',
      },
      {
        name: 'Node.js',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg',
      },
      {
        name: 'Express.js',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg',
      },
      {
        name: 'Sass',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Sass.svg ',
      },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Git.svg',
      },
      {
        name: 'GitHub',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg',
      },
      {
        name: 'VS Code',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/VSCode-Dark.svg',
      },
      // {
      //   name: 'Docker',
      //   image:
      //     'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Docker.svg',
      // },
      {
        name: 'Postman',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Postman.svg',
      },
      {
        name: 'Firebase',
        image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg',
      },
      {
        name: 'MySQL',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg',
      },
      {
        name: 'Postgres',
        image:
          'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/PostgreSQL-Dark.svg',
      },
    ],
  },
];
function index() {
  return (
    <>
      <div className="about_sec" id="about">
        <h1 className="heading">
          About <strong className="pink">Myself</strong>
        </h1>
        <div className="text ">
          <div
            className="about_text"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <p>
              Hi Everyone, and welcome to my corner of the internet! I am{' '}
              <span className="pink"> Aditi Singh </span>
              from <span className="pink"> Jharkhand, India.</span>
              <br />I graduated with a BCA degree.
            </p>
            <p>
              I started getting into web development in 2021, and I quickly fell
              in love with coding. I enjoy creating websites and online
              experiences that people can use and enjoy.
            </p>
            <p>
              I'm interested in exploring new web technologies and building cool
              products Most of the time. I use React.js, Next.js, Node.js, and
              PostgreSQL to build efficient full-stack applications.
            </p>
            <p>When I'm not coding, I love:</p>
            <ul className="list">
              <li>
                <FaPaintBrush size={20} />
                Sketching
              </li>
              <li>
                <RiMovie2Fill size={20} />
                Watching Anime
              </li>
              <li>
                <GiCookingPot size={20} />
                Cooking
              </li>
            </ul>
          </div>
          <div className="pic1">
            <div
              className="wrapper"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <img src={pic} alt="img" className="img" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="skills-container" id="skills">
          <div className="skills-wrapper">
            <h1 className="skills-title"> Skills</h1>
            <p
              className="skills-desc"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              Here are some of my skills on which I have been working on for the
              past 2 years.
            </p>
            <div className="skills-list-container">
              {skills.map((skill) => (
                <div
                  className="skill"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  key={skill.title}
                >
                  <h2
                    className="skill-title"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    {skill.title}
                  </h2>
                  <div className="skill-list">
                    {skill.skills.map((item) => (
                      <div className="skill-item" key={item.name}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="skill-image"
                        />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
