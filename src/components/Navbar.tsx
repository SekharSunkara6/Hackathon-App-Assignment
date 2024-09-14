import React from "react";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{
        once: true,
      }}
    >
      <Link to="/">
        <div className="px-[10%] py-4 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
      </Link>
    </motion.div>
  );
}

export default Navbar;
