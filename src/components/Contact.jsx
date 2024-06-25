import { CONTACT } from "../constants/index.js";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <h1 className=" my-10 text-center text-4xl">Get In Touch</h1>
      <div className=" text-center tracking-tighter">
        <CiMail className="inline mr-1" />
        <a
          href="mailto:nishantxrana@gmail.com"
          className=" underline"
        >
          {CONTACT.email}
        </a>
      </div>
      <div className=" text-center ">
        <a
          href={CONTACT.resume}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-50"
        >
          Resume <FaCloudDownloadAlt className=" inline" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
