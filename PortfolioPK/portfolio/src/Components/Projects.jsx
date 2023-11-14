import React from "react";
import Fade from "react-reveal";
import beerAppImg from "../assets/projects/beerapp.jpg";
import starWarsImg from "../assets/projects/strwars.jpg";
import clickAndShip from "../assets/projects/Capture.jpg";
const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="h-screen w-full flex justify-center items-center flex-col"
      >
        <Fade top>
          <h1 className="text-3xl mb-[10px] font-bold lg:text-4xl  4xl:text-5xl">
            Projects
          </h1>
        </Fade>
        <div className="mt-[100px] w-[300px] space-y-7 lg:flex lg:flex-wrap lg:justify-center  lg:w-[900px] lg:space-x-10 ">
          <Fade left>
            <a
              href="https://beer-app-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="beerApp"
                className="flex items-center flex-col mb-[20px] justify-center w-[300px] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-500 ease-in-out hover:bg-blue-500 "
              >
                <p className="text-center">Beer App</p>
                <img
                  className="w-[200px] rounded-xl mb-[30px] "
                  src={beerAppImg}
                  alt="Beer App"
                />
              </div>
            </a>
          </Fade>
          <Fade right>
            <a
              href="https://starwars-web-page.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="starWars"
                className="flex items-center mb-[20px] flex-col w-[300px] xl:w-[350px] xl:h-[150px] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-500 ease-in-out hover:bg-blue-500"
              >
                <p className="text-center">StarWars Web Page</p>
                <img
                  className="w-[200px] rounded-xl mb-[30px] "
                  src={starWarsImg}
                  alt="StarWars Web Page"
                />
              </div>
            </a>
          </Fade>
          <Fade bottom>
            <a
              href="https://clickandship-sedc.github.io/store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                id="clickAndShip"
                className="flex items-center mb-[50px] flex-col w-[300px] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-500 ease-in-out hover:bg-blue-500"
              >
                <p className="text-center">Click And Ship</p>
                <img
                  className="w-[200px] rounded-xl mb-[30px]"
                  src={clickAndShip}
                  alt="Click And Ship"
                />
              </div>
            </a>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Projects;
