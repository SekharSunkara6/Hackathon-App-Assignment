import React from "react";
import time from "../../../assets/icons/time.svg";
import level from "../../../assets/icons/carbon_skill-level-basic.svg";
import back from "../../../assets/icons/back.svg";
import { Link } from "react-router-dom";
import { useContextdata } from "../../../context/Context.tsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HackathonDescription({
  id,
  hackathonName,
  hackathonStatus,
  imageURL,
  skill,
  description,
}) {
  const { sethackathonlist, hackathonlist } = useContextdata();

  const navigate = useNavigate();

  const hackathonListUpdated = (id) => {
    const updatedList = hackathonlist.filter((item) => item.id !== id);
    sethackathonlist(updatedList);
    navigate("/");
  };
  return (
    <>
      {hackathonlist.some((item) => item.id === id) ? (
        <>
          <div className="px-[10%] py-20 font-poppins bg-[#003145] text-[#ffffff]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-8"
            >
              <Link to="/" className="flex flex-row items-center gap-4">
                <img src={back} alt="back" className="size-8" />
                Back
              </Link>
              <div className="flex flex-row items-center gap-2 text-[14px] text-[#000000] font-inter font-semibold bg-[#FFCE5C] pl-4 pr-12 py-1 rounded-[5px] w-fit">
                <img src={time} alt="time" />
                Starts on 17th Jun'22 09:00 PM (India Standard Time)
              </div>
              <div className="flex flex-row max-lg:flex-col justify-between items-center max-lg:items-start max-lg:gap-10">
                <div>
                  <div className="text-[40px] font-semibold">
                    {hackathonName}
                  </div>
                  <div className="text-[18px] font-inter font-medium">
                    Identify the class to which each butterfly belongs to
                  </div>
                </div>
                <img
                  src={imageURL}
                  alt={hackathonName}
                  className="rounded-3xl"
                />
              </div>
              <div className="flex flex-row gap-4">
                <div className="text-[#003145] text-[14px] bg-[#F8F9FD] font-semibold font-inter w-fit flex flex-row gap-2 rounded-[5px] px-4 py-2">
                  <img src={level} alt="level" />
                  {skill}
                </div>
                <div className="text-[#003145] text-[14px] bg-[#F8F9FD] font-semibold font-inter w-fit flex flex-row gap-2 rounded-[5px] px-4 py-2">
                  {hackathonStatus}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="px-[10%] py-4 shadow-custom flex flex-row justify-between"
          >
            <button className="text-[18px] font-inter text-[#000000] font-bold border-b-4 border-[#44924C] h-full">
              Overview
            </button>
            <div className="flex flex-row gap-4 max-sm:flex-col">
              <Link
                to="/edit"
                state={{
                  id,
                  hackathonName,
                  hackathonStatus,
                  imageURL,
                  skill,
                  description,
                }}
                className="bg-[#44924C] text-[#ffffff] rounded-[10px] px-8 py-1 hover:shadow-shadow"
              >
                Edit
              </Link>
              <button
                className="border border-[#DC1414] bg-[#ffffff] text-[#DC1414] rounded-[10px] px-4 py-1 hover:shadow-shadow"
                onClick={() => hackathonListUpdated(id)}
              >
                Delete
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="px-[10%] py-20"
          >
            <p className="text-[18px] font-medium text-[#64607D] mr-60 max-md:mr-28 max-sm:mr-0">
              {description}
            </p>
          </motion.div>
        </>
      ) : null}
    </>
  );
}

export default HackathonDescription;
