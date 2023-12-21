import github from '../src/images/icons8-github.svg';
import telegram from '../src/images/telegram-svgrepo-com.svg';
import albums from '../src/images/albums.gif';
import filterableList from '../src/images/filterable-list.gif';
import lamoda from '../src/images/lamoda.gif';
import notions from '../src/images/notions.gif';

function App() {
  return (
    <section class='wrapper'>
      <section class='left-side'>
        <section class='main-info'>
          <h1>Michael Krasnov</h1>
          <p>Front End Developer</p>
        </section>
        <section class='contacts'>
          <h1>CONTACT</h1>
          <ul class='contacts-list'>
            <li>
              <a href='https://t.me/meowups' class='telegram' target='_blank'>
                <img src={telegram} alt='telegram' />
                Telegram
              </a>
            </li>
            <li>
              <a
                href='https://github.com/sssBless'
                class='github'
                target='_blank'
              >
                <img src={github} alt='GitHub' />
                GitHub
              </a>
            </li>
          </ul>
        </section>
        <section class='skills'>
          <h1>SKILLS</h1>
          <div class='skills-container'>
            <div class='skill'>React.js + Vite</div>
            <div class='skill'>Tailwind</div>
            <div class='skill'>Redux</div>
            <div class='skill'>JavaScript</div>
            <div class='skill'>HTML 5</div>
            <div class='skill'>CSS 3</div>
            <div class='skill'>MySQL</div>
            <div class='skill'>3D-modeling</div>
            <div class='skill'>Adobe Photoshop</div>
            <div class='skill'>C++</div>
          </div>
        </section>
      </section>
      <section class='right-side'>
        <section class='summary'>
          <h1>SUMMARY</h1>
          <p>
            Aspiring programmer looking to hone their skills through hands-on
            learning and development. Familiar with mobile and desktop
            development environments. Proficient in using HTML5, JavaScript, and
            other programming languages to produce clean code. Well-organized
            and collaborative team player with strong communication and
            analytical skills.
          </p>
        </section>
        <section class='education'>
          <h1>EDUCATION</h1>
          <p>Sep. 2022 - Present</p>
          <p>BSU, Student at Mechanic and Mathematic Faculty</p>
          <p>English proficiency: B1</p>
        </section>
        <section class='projects'>
          <h1>PROJECTS</h1>
          <ul class='projects-list'>
            <li class='project'>
              <img src={notions} alt='project' class='gif-represent' />
              <span>
                <a
                  href='https://github.com/sssBless/notions-redux'
                  class='github'
                  target='_blank'
                >
                  <img src={github} alt='GitHub' />
                  Notions
                </a>
                <p>
                  The project is a convenient web application in minimalistic
                  design for creating (editing) and storing notes. The project
                  was created using such technologies as: React.js, Redux, Vite,
                  Json-server, Tailwind, cryptojs.
                </p>
              </span>
            </li>
            <li class='project'>
              <img src={filterableList} alt='project' class='gif-represent' />
              <span>
                <a
                  href='https://github.com/sssBless/filtrable-todo-list'
                  class='github'
                  target='_blank'
                >
                  <img src={github} alt='GitHub' />
                  Filtrable Todo list
                </a>
                <p>
                  The app is a minimalistic application for creating and easily
                  maintaining a to-do list. My app is a simple and convenient
                  tool for increasing productivity and organizing time. Core
                  technologies: React.js
                </p>
              </span>
            </li>
            <li class='project'>
              <img src={lamoda} alt='project' class='gif-represent' />
              <span>
                <a
                  href='https://github.com/sssBless/things-market'
                  class='github'
                  target='_blank'
                >
                  <img src={github} alt='GitHub' />
                  Lamoda
                </a>
                <p>
                  The Lamoda web application is an online platform where users
                  can find and buy clothes and accessories. It has a clear
                  interface for searching and selecting products, and allows you
                  to use a convenient search and filtering system. The Lamoda
                  web app is a great way to shop for clothes online. Main
                  technologies: React.js, css.module
                </p>
              </span>
            </li>

            <li class='project'>
              <img src={albums} alt='project' class='gif-represent' />
              <span>
                <a
                  href='https://github.com/sssBless/users-albums'
                  class='github'
                  target='_blank'
                >
                  <img src={github} alt='GitHub' />
                  Users albums
                </a>
                <p>
                  The Albums Project - is a repository of linked album and user
                  pages, as well as all albums. Each user can view their albums,
                  as well as go to the album creator's page. Core technologies:
                  React.js, Json Placeholder
                </p>
              </span>
            </li>
          </ul>
        </section>
        <section class='letter'>
          <h1>Cover letter</h1>
          <p>
            I am interested in the position of Front End Web Developer in your
            company. With my experience in the industry, I am confident that I
            have the necessary skills and qualifications to be a successful
            addition to your team. My experience includes web application
            development, creating user interfaces and coding with HTML, CSS and
            JavaScript. I also have experience with the latest web technologies
            and frameworks such as React. I am fairly organized and have a track
            record of meeting deadlines and delivering projects on time. Most
            importantly, I am passionate about web development and strive to
            stay up to date with the latest trends and technologies. I am
            confident that I can add value to your company and would be happy to
            discuss my qualifications and experience in more detail. I have
            attached my resume for review and look forward to hearing from you.
          </p>
        </section>
      </section>
    </section>
  );
}

export default App;
