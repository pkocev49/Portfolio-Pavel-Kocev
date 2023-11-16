import React from "react";
import Fade from "react-reveal";
import beerAppImg from "../assets/projects/beerapp.jpg";
import starWarsImg from "../assets/projects/strwars.jpg";
import clickAndShip from "../assets/projects/Capture.jpg";
import todosImg from "../assets/projects/todo.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Beer-App",
      link: "https://beer-app-react.netlify.app/",
      img: beerAppImg,
    },
    {
      id: 2,
      name: "StarWars Web Page",
      link: "https://starwars-web-page.netlify.app/",
      img: starWarsImg,
    },

    {
      id: 3,
      name: "Click And Ship",
      link: "https://clickandship-sedc.github.io/store/",
      img: clickAndShip,
    },
    {
      id: 4,
      name: "Simple-React-Todo-App",
      link: "https://simple-todo-app-pk.netlify.app/",
      img: todosImg,
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="h-full md:h-screen w-full flex justify-center items-center flex-col"
      >
        <Fade top>
          <h1 className="text-3xl mb-[20px] font-bold lg:text-4xl  4xl:text-5xl">
            Projects
          </h1>
        </Fade>
        <div
          className="flex mb-[40px] flex-col  w-[300px] space-y-7 lg:flex lg:flex-wrap lg:flex-row lg:justify-center 
         lg:w-[900px] lg:space-x-10 "
        >
          {projects.map((project) => (
            <Fade top>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  id={project.id}
                  className="flex items-center flex-col mb-[20px] justify-center w-[300px] rounded-xl shadow-2xl shadow-blue-500/20 "
                >
                  <p className="text-center">{project.name}</p>
                  <img
                    className="w-[200px] rounded-xl mb-[30px] "
                    src={project.img}
                    alt="Beer App"
                  />
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
