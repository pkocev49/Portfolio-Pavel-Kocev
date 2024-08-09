import React from "react";
import SocialButtonsContainer from "react-social-media-buttons"; // Make sure the import is correct
import { SocialIcon } from "react-social-icons";

// Define the Contact component
const Contact = () => (
  <footer name="contact" className=" bg-myBlue text-white py-5 ">
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
      <SocialButtonsContainer
        links={[
          "https://www.linkedin.com/in/pavel-kocev-010775269/",
          "https://github.com/pkocev49",
          "https://www.instagram.com/kocev.pavel/",
        ]}
        buttonStyle={{
          width: "31px",
          height: "31px",
          margin: "0px 5px",
          backgroundColor: "#cce7ff",
          borderRadius: "30%",
        }}
        iconStyle={{ color: "#134d8b" }}
        openNewTab={true}
      />
    </div>
  </footer>
);

export default Contact;
