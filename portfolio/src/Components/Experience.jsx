import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Digimak",
      role: "Web Developer",
      start: "Jun 2024",
      isPresent: true,
      description:
        "Worked on developing web applications using React and Node.js.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-aboutMeBG  w-full  md:h-full  md:h-screen  flex justify-center items-center flex-col 
         "
    >
      <h1
        className="text-3xl 
           text-white mb-[40px] mt-[50px] lg:text-4xl xl:mb-[100px] 4xl:text-5xl"
      >
        Experience
      </h1>
      <div
        className="flex mb-[40px] items-center flex-col w-[300px]  lg:flex lg:flex-wrap lg:flex-row lg:justify-center 
         lg:w-full lg:space-x-10"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item border-[3px] border-white p-[50px] w-[320px] md:w-[400px] rounded-[30px]"
          >
            <h2 className="text-white font-bold text-[20px]">
              {exp.role} at {exp.company}
            </h2>
            <span className="text-white font-bold ">{exp.start} -</span>{" "}
            <span className="text-white font-bold">
              {exp.isPresent ? "Present" : "Completed"}
            </span>
            <p className="text-white">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
