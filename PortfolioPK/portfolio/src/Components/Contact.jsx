import React from "react";
import { Fade } from "react-reveal";
import { SocialIcon } from "react-social-icons";
const Contact = () => (
  <footer name="contact" className=" bg-aboutMeBG text-white py-4">
    <Fade bottom>
      <div className="container  text-center mx-auto">
        <p className="font-semibold text-lg ">
          Get in Touch:{" "}
          <a
            href="mailto:pkocev83@gmail.com"
            className="text-blue-400 hover:underline"
          >
            pkocev83@gmail.com
          </a>
        </p>
      </div>
      <div className="flex justify-center">
        <SocialIcon
          url="https://www.linkedin.com/in/pavel-kocev-010775269/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://github.com/pkocev49"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.instagram.com/kocev.pavel"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </Fade>
  </footer>
);

export default Contact;
