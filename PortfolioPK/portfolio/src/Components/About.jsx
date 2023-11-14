import React from "react";
import Fade from "react-reveal";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-aboutMeBG h-full w-full mb-[50px] md:h-screen  flex justify-center items-center flex-col 
         "
      >
        <Fade top>
          <h1
            className="text-3xl 
           text-white mb-[40px] mt-[50px]  lg:text-4xl xl:mb-[100px] 4xl:text-5xl"
          >
            About Me
          </h1>
        </Fade>
        <div className=" p-5 xl:flex xl:justify-around xl:w-[1100px] 2xl:w-[1400px] 8xl:w-[1500px] ">
          <div className="xl:text-1xl xl:w-[400px] 4xl:text-1xl ">
            <Fade left>
              <p className="text-white ">
                Hello, I'm Pavel Kocev, a passionate Full-Stack Web Developer
                based in North Macedonia. My journey into the world of coding
                began with a curiosity for problem-solving and a love for
                turning creative concepts into functional, user-centric digital
                solutions. With a keen eye for detail and a commitment to
                delivering excellence, I specialize in crafting seamless web
                applications that not only meet but exceed expectations.
              </p>
            </Fade>
            <Fade left>
              <p className="text-white mt-[20px]">
                I thrive on the continuous evolution of web technologies,
                ensuring that my skill set remains cutting-edge in this dynamic
                industry. From front-end design to back-end functionality, I
                bring a holistic approach to every project, aiming to create
                immersive and impactful online experiences. Let's collaborate to
                transform your ideas into a visually stunning and technically
                robust digital presence. Explore my portfolio to see how we can
                build something remarkable together.
              </p>
            </Fade>
            <Fade left>
              <button className="mt-[20px] p-[10px] rounded-xl border-0 text-white bg-btnColor">
                <a href="mailto:pkocev83@gmail.com">Contact Me!</a>
              </button>
            </Fade>
          </div>
          <div className=" text-white mt-[30px] xl:mt-0  ">
            <h3 className="text-2xl font-bold  ">My Skills:</h3>
            <div className="flex flex-wrap   w-[350px] justify-evenly space-y-3  xl:mt-[30px]">
              <Fade right>
                <p className="w-[100px] h-full mt-[12px] p-2 border-[1px] rounded-[5px]">
                  HTML
                </p>

                <p className="w-[100px] p-2   border-[1px] rounded-[5px]">
                  CSS
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  TailwindCSS
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  SCSS
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  JavaScript
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  TypeScript
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  React
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  Angular
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  Firebase
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  MongoDB
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  PostgreSQL
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  Node.js
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  NestJS
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">
                  ExpressJS
                </p>
                <p className="w-[100px] p-2  border-[1px] rounded-[5px]">Git</p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
