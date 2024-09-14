import React from "react";
import aimodel from "../../../assets/icons/Group 1000002515.svg";
import scientist from "../../../assets/icons/Group 1000002516.svg";
import aichallenge from "../../../assets/icons/Group 1000002518.svg";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <section className="flex flex-row justify-between items-center px-[10%] bg-[#002A3B] text-[#ffffff] text-[16px] font-poppins font-medium py-8 max-md:flex-col max-md:items-start max-md:gap-8 max-md:py-16">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex flex-row gap-4"
      >
        <img src={aimodel} alt="aimodel" />
        <div className="flex flex-col">
          <span className="text-[24px] font-bold">100K+</span>
          <div>AI model submissions</div>
        </div>
      </motion.div>
      <motion.span
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="h-10 w-[1px] bg-[#C4C4C4] block max-lg:hidden"
      ></motion.span>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex flex-row gap-4"
      >
        <img src={scientist} alt="scientist" />
        <div className="flex flex-col">
          <span className="text-[24px] font-bold">50K+</span>
          <div>Data Scientists</div>
        </div>
      </motion.div>
      <motion.span
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="h-10 w-[1px] bg-[#C4C4C4] block max-lg:hidden"
      ></motion.span>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex flex-row gap-4"
      >
        <img src={aichallenge} alt="aichallenge" />
        <div className="flex flex-col">
          <span className="text-[24px] font-bold">100+</span>
          <div>AI Challenges hosted</div>
        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;
