import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fade } from "react-reveal";
const Navbar = () => {
  const [menu, openMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <>
      <div
        className=" flex justify-between items-center px-4 
       bg-myBlue text-white fixed z-50  w-full h-20 "
      >
        <Fade top>
          <div className="mb-[10px]">
            <h1 className="text-5xl ml-2 text-white">KP</h1>
          </div>

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer  text-white font-medium  hover:scale-110 capitalize duration-200"
              >
                <Link to={link} smooth duration={2000}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Fade>
        <div
          onClick={() => openMenu(!menu)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {menu && (
          <div className="fixed inset-0 bg-myBlue md:hidden">
            <div className="flex justify-center items-center mt-[300px]">
              <ul className="text-2xl text-white">
                {links.map(({ id, link }) => (
                  <li
                    className="cursor-pointer mb-[10px] capitalize"
                    key={id}
                    onClick={() => openMenu(!menu)}
                  >
                    <Link
                      onClick={() => openMenu(!menu)}
                      to={link}
                      smooth
                      duration={2000}
                    >
                      <Fade left>{link}</Fade>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
