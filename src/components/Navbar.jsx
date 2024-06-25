import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { CONTACT } from "../constants/index";

import logo from "../assets/nrLogo.png";

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className=" mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={CONTACT.github}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={CONTACT.linkedin}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={CONTACT.twitter}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href={CONTACT.resume}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocumentDownload />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
