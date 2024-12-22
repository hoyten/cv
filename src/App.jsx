import React from "react";
import "./App.css";
import profilePhoto from "./img/photo.png"; // Импорт фотографии
import notionImage from "./img/notion.png"; // Импорт изображения для проекта
import todoListImage from "./img/todolist.png"; // Импорт другого изображения

// Header Component
const Header = () => (
  <header className="cv-header">
    <div className="header-left">
      <h1 className="name">Boboed Anastasia</h1>
      <p className="tagline">Frontend developer</p>
      <section className="info">
        <p>
          <strong>Gmail:</strong>{" "}
          <a href="mailto:nastyaboboed416@gmail.com">
            nastyaboboed416@gmail.com
          </a>
        </p>
        <p>
          <strong>Telegram:</strong>{" "}
          <a href="https://t.me/hoyten">@hoyten</a>
        </p>
        <p>
          <strong>Location:</strong>{" "}
          <a href="https://t.me/hoyten">Minsk, Belarus</a>
        </p>
      </section>
    </div>
    <div className="header-right">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
    </div>
  </header>
);

// About Me Section
const AboutMe = () => (
  <div className="aboutme">
    <h1>ABOUT ME</h1>
    <p>
      I'm a beginner frontend developer striving to create high-quality,
      responsive, and user-friendly web applications. I am passionate about
      learning modern technologies and improving my skills to deliver engaging
      user experiences. My goal is to grow as a professional by working on
      challenging projects and contributing to innovative solutions in web
      development.
    </p>
  </div>
);

// Education Section
const Education = () => (
  <section className="education">
    <h2>EDUCATION</h2>
    <p>
      <strong>Belarusian State University</strong> <br />
      Mathematical and software support for mobile devices <br />
      2023 - Present
    </p>
  </section>
);

// Work Experience Section
const WorkExperience = () => (
  <section className="experiences">
    <h2>WORK EXPERIENCE</h2>
    <ul>
      <li>
        <strong>Freelance</strong> <br />
        Frontend developer (2024 - Present)
      </li>
    </ul>
  </section>
);

// Skills Section
const Skills = () => (
  <section className="soft-skills">
    <h2>SOFT SKILLS</h2>
    <div className="skills-columns">
      <ul>
        <li>Time Management</li>
        <li>Teamwork</li>
        <li>Leadership</li>
      </ul>
      <ul>
        <li>Problem Solving</li>
        <li>Adaptability</li>
        <li>Creativity</li>
      </ul>
    </div>
  </section>
);

const HardSkills = () => (
  <section className="software-skills">
    <h2>HARD SKILLS</h2>
    <ul>
      <li>JavaScript</li>
      <li>HTML&CSS</li>
      <li>React</li>
    </ul>
    <ul>
      <li>UX/UI & Graphic design</li>
      <li>Figma</li>
      <li>Adobe Photoshop, Adobe Illustrator</li>
    </ul>
  </section>
);

// Languages Section
const Languages = () => (
  <section className="languages">
    <h2>LANGUAGES</h2>
    <ul>
      <li>English - B2</li>
      <li>Polish - B1</li>
      <li>Belarusian/Russian - Native</li>
    </ul>
  </section>
);

// Interests Section
const Interests = () => (
  <section className="interests">
    <h2>INTERESTS</h2>
    <ul>
      <li>SMM</li>
      <li>Graphic design</li>
      <li>Adobe Premiere</li>
    </ul>
    <ul>
      <li>Video editing</li>
      <li>Art</li>
      <li>Fashion</li>
    </ul>
  </section>
);

const Portfolio = () => (
  <div className="portfolio">
    <h1>PORTFOLIO</h1>
    <ul>
      <li>
        <a href="https://github.com/hoyten/notion">Notion</a> <br />
        <img src={notionImage} alt="Notion Clone" />
        <p>
          Developed using React, Redux. A simplified version of the popular
          note-taking service, featuring real-time data synchronization and an
          intuitive user interface for creating, editing, and organizing notes.
        </p>
      </li>
      <li>
        <a href="https://github.com/hoyten/todolist">To-do List</a> <br />
        <img src={todoListImage} alt="Todo List" />
        <p>
          A simple task management application where users can add, delete, and
          mark tasks as completed. Built with React and featuring a minimalist
          design, it showcases the use of local state management for handling
          user interactions.
        </p>
      </li>
    </ul>
  </div>
);

const App = () => (
  <div className="cv">
    <Header />
    <AboutMe />
    <main>
      <Education />
      <WorkExperience />
      <Skills />
      <HardSkills />
      <Languages />
      <Interests />
    </main>
    <Portfolio />
  </div>
);

export default App;
