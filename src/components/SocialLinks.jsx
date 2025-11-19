import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={25} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/endrex-akoto-02184b203",
    },
    {
      id: 2,
      icon: <FaGithub size={25} />,
      label: "GitHub",
      href: "https://github.com/EndrexAkoto",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={25} />,
      label: "Mail",
      href: "mailto:martinakoto25@gmail.com",
    },
    {
      id: 4,
      icon: <FaWhatsapp size={25} />,
      label: "WhatsApp",
      href: "https://wa.me/254718424798",
    },
  ];

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul>
          {links.map(({ id, label, icon, href }) => (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black hover:bg-cyan-500 text-white"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                target="_blank"
                rel="noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar for small screens - scrolls with page */}
      <div className="lg:hidden w-full bg-black p-2 flex justify-around items-center text-white rounded-t-md shadow-lg mt-4">
        {links.map(({ id, icon, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
