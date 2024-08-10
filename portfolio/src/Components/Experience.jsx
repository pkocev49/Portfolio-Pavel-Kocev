import EducationCard from "./ExperienceCard";

const Education = () => {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center w-full mb-[200px]"
    >
      <h1
        className="text-3xl text-center
          mb-[40px] mt-[50px] font-bold  lg:text-4xl xl:mb-[100px] 4xl:text-5xl"
      >
        Education & Experience
      </h1>
      <div className="relative flex-col items-center flex justify-center my-24 gap-8">
        <div className="w-[1px] h-[500px] bg-neutral-700 absolute -z-10"></div>
        <EducationCard
          title="Digimak - Internship"
          company="Software Development Company"
          time="06/2024 - present"
          desc="Working as a Web Developer on Vue.js PHP and Wordpress projects"
          className="sm:relative sm:left-[170px]"
          innerClass="sm:right-2/3 sm:-z-10"
        />
        <EducationCard
          title="Seavus Education And Development"
          time="10/2022 - 17/2023"
          desc="Acadmy for Full Stack Web Development"
          className="sm:relative sm:-left-[170px]"
          innerClass="sm:left-2/3 sm:-z-10"
        />
        <EducationCard
          title="SOU 'Nikola Karev'-Strumica"
          time="09/2018 - 06/2022"
          desc="https://nkarev-strumica.edu.mk/"
          className="sm:relative sm:left-[170px]"
          innerClass="sm:right-2/3 sm:-z-10"
        />
      </div>
    </section>
  );
};

export default Education;
