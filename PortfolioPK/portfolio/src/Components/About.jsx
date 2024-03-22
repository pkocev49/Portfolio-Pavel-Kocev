import React from "react";
import Fade from "react-reveal";
const About = () => {
  const skills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "TailwindCSS" },
    { id: 4, skill: "SCSS" },
    { id: 5, skill: "JavaScript" },
    { id: 6, skill: "TypeScript" },
    { id: 7, skill: "React" },
    { id: 8, skill: "Angular" },
    { id: 9, skill: "Firebase" },
    { id: 10, skill: "MongoDB" },
    { id: 11, skill: "PostgreSQL" },
    { id: 12, skill: "Node.js" },
    { id: 13, skill: "NestJS" },
    { id: 14, skill: "ExpressJS" },
    { id: 15, skill: "Git" },
  ];
  return (
    <>
      <section
        id="about"
        className="bg-aboutMeBG h-full w-full mb-[50px] md:h-full  md:h-screen  flex justify-center items-center flex-col 
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
        <div className=" p-5 md:flex md:justify-around md:w-full xl:w-[1100px] 2xl:w-[1400px] 8xl:w-[1500px] ">
          <div className="w-[300px] xl:text-1xl xl:w-[400px] 4xl:text-1xl ">
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
                I thrive on the continuous evolution of web technologies
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
                <a href="mailto:pkocev83@gmail.com"> Contact Me!</a>
              </button>
            </Fade>
          </div>
          <div className=" text-white mt-[30px] xl:mt-0  ">
            <h3 className="text-2xl font-bold">My Skills:</h3>
            <div className="flex flex-wrap  w-[320px] justify-evenly space-y-3 xl:mt-[30px]">
              <Fade left>
                {skills.map((skill) => (
                  <p
                    key={skill.id}
                    className="w-[100px] h-full mt-[12px] p-2 border-[1px] rounded-[5px] "
                  >
                    {skill.skill}
                  </p>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
