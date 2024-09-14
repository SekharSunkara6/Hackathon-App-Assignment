import React from "react";
import rocket from "../../../assets/icons/PicsArt_04-14-04.42 1.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainImage() {
  return (
    <>
      <section className="flex flex-row items-center justify-between bg-[#003145] px-[10%] py-10 text-[#ffffff] font-poppins">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-start mr-8 max-lg:mr-0">
            <motion.span
              initial={{ y: 250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="h-28 mt-4 w-4 bg-[#FFCE5C] mr-10 max-[1200px]:h-48 max-[1110px]:h-64 max-lg:h-28 max-[792px]:h-48 max-[655px]:h-64 max-[450px]:h-80"
            ></motion.span>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="flex flex-col items-start gap-8"
            >
              <h1 className="text-[48px] font-semibold">
                Accelerate Innovation with Global AI Challenges
              </h1>
              <p className="text-[18px] font-medium mr-10">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
              <Link
                to="/create"
                className="text-[#003145] font-semibold text-[18px] bg-[#ffffff] px-4 py-1 rounded-[10px] hover:shadow-shadow"
              >
                Create Challenge
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileInView="visible"
          viewport={{
            once: true,
          }}
          src={rocket}
          alt="rocket"
          className="block max-lg:hidden"
        />
      </section>
    </>
  );
}

export default MainImage;
