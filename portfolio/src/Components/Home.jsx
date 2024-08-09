import React from "react";
import image from "../assets/profileImg/pkImg.jpg";
const Home = () => {
  return (
    <>
      <section id="home">
        <div
          className="p-5 h-screen w-full mb-[50px] flex justify-center items-center flex-col
         lg:flex-row lg:justify-evenly "
        >
          <div className="w-[300px] lg:w-1/2 2xl:w-[800px] 4xl:w-[1000px]">
            <h1 className="text-black text-2xl font-bold md:text-3xl  4xl:text-4xl 16xl:text-5xl">
              Crafting Digital Excellence, One Line of Code at a Time.
            </h1>
            <p className="2xl:text-[20px]">
              Creative and detail-oriented Full-Stack Web Developer with a
              passion for turning ideas into seamless digital experiences. I
              thrive on blending innovation with functionality, crafting
              user-friendly solutions that leave a lasting impact. Let's build
              something remarkable together.
            </p>
          </div>
          <div>
            <img
              className=" mt-[30px] w-[200px] h-[200px] object-cover rounded-full  sm:w-[300px] sm:h-[300px] 4xl:w-[400px] 4xl:h-[400px] 16xl:w-[500px] 16xl:h-[500px]"
              src={image}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
