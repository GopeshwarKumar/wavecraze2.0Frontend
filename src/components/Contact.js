import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div viewport={{once:true}} initial={{translateY:100}} whileInView={{translateY:0}} className="footer-container">
      <h3 className="footer-title text-black font-extrabold ">Follow Us</h3>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/radionitroz.nitdgp/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram no-underline"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/radionitroz.nitdgp"
          target="_blank"
          rel="noopener noreferrer"
          className="icon facebook no-underline"
        >
          <FaFacebook className=""/>
        </a>
        <a
          href="https://www.linkedin.com/company/radio-nitroz-nitdgp/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin no-underline"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:info@wavecraze.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin no-underline"
        >
          <MdEmail className="hover:text-rose-600"/>
        </a>
      </div>
      <p className="footer-credit">
        Made by <span className="team-name cursor-pointer">RN @webd team</span>
      </p>
    </motion.div>
  );
};

export default Contact;
