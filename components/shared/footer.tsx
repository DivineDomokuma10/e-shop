import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

import { NAV_LINKS, SOCIAL_MEDIAS } from "@/lib/constants";

const Footer = () => {
  const socialMediaIcons = [
    <FaFacebook
      key="fb"
      className="text-2xl md:text-3xl hover:text-gray-300"
    />,
    <FaGithub key="gh" className="text-2xl md:text-3xl hover:text-gray-300" />,
    <FaLinkedin
      key="ln"
      className="text-2xl md:text-3xl hover:text-gray-300"
    />,
    <FaTelegram
      key="tg"
      className="text-2xl md:text-3xl hover:text-gray-300"
    />,
    <FaInstagram
      key="ig"
      className="text-2xl md:text-3xl hover:text-gray-300"
    />,
  ];

  return (
    <footer className="w-full h-[70dvh] flex flex-col items-center justify-center space-y-16 bg-[#111827] md:space-y-20">
      <div className="flex space-x-5 text-sm text-gray-400 md:space-x-12 md:text-lg">
        {NAV_LINKS.map(({ path, text }) => (
          <Link key={text} href={path} className="hover:text-[#ff6f61]">
            {text}
          </Link>
        ))}
      </div>

      <div className="flex space-x-8 text-gray-600 md:space-x-12">
        {SOCIAL_MEDIAS.map(({ link, text }, i) => (
          <a key={text} href={link}>
            {socialMediaIcons[i]}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        © 2024 Your E-Shop, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
