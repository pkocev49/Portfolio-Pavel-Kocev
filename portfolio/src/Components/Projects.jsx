import React from "react";
import Fade from "react-reveal";
import beerAppImg from "../assets/projects/beerapp.jpg";
import starWarsImg from "../assets/projects/strwars.jpg";
import clickAndShip from "../assets/projects/Capture.jpg";
import todosImg from "../assets/projects/todo.jpg";
import blogImg from "../assets/projects/blogss.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Beer-App",
      link: "https://beer-app-react.netlify.app/",
      img: beerAppImg,
      gitHubLink: "https://github.com/pkocev49/Beer-App-React",
    },
    {
      id: 2,
      name: "StarWars Web Page",
      link: "https://starwars-web-page.netlify.app/",
      img: starWarsImg,
      gitHubLink: "https://github.com/pkocev49/StarWars-App",
    },

    {
      id: 3,
      name: "Click And Ship",
      link: "https://clickandship-sedc.github.io/store/",
      img: clickAndShip,
      gitHubLink: "https://github.com/sedc-codecademy/sp2023-cp02-dsw-4",
    },
    {
      id: 4,
      name: "Simple-React-Todo-App",
      link: "https://simple-todo-app-pk.netlify.app/",
      img: todosImg,
      gitHubLink: "https://github.com/pkocev49/Simple-React-Todo-App",
    },
    {
      id: 5,
      name: "Psychologycornerwithivv-Blog",
      link: "https://psychologycornerwithivv-blog.netlify.app/",
      img: blogImg,
      gitHubLink: "https://github.com/pkocev49/Psychologycornerwithivv-Blog",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="h-full md:h-screen w-full flex justify-center items-center flex-col"
      >
        <Fade top>
          <h1 className="text-3xl mb-[100px] font-bold lg:text-4xl  4xl:text-5xl">
            Projects
          </h1>
        </Fade>
        <div
          className="flex mb-[40px] flex-col w-[300px]  lg:flex lg:flex-wrap lg:flex-row lg:justify-center 
          lg:w-full lg:space-x-10 "
        >
          {projects.map((project) => (
            <Fade key={project.id} top>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  id={project.id}
                  className="flex items-center flex-col mb-[20px] justify-center w-[300px] h-[200px]  rounded-xl shadow-2xl shadow-blue-500/20 border-[2px] border-grey "
                >
                  <p className="text-center font-bold mb-[5px] mt-[15px]">
                    {project.name}
                  </p>
                  <img
                    className="w-[200px] rounded-xl mb-[30px] "
                    src={project.img}
                    alt="Beer App"
                  />
                  <a
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-[15px] text-[20px] "
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </a>
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
