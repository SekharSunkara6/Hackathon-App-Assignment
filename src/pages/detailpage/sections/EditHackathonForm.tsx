import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextdata } from "../../../context/Context.tsx";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function EditHackathonForm() {
  const { hackathonlist, setFullList } = useContextdata();

  const location = useLocation();
  const navigate = useNavigate();

  const { id, hackathonName, skill, description } = location.state || {};

  const [challengeName, setChallengeName] = useState(hackathonName || "");
  const [desc, setDesc] = useState(description || "");
  const [level, setLevel] = useState(skill || "");

  useEffect(() => {
    setChallengeName(hackathonName || "");
    setDesc(description || "");
    setLevel(skill || "");
  }, [hackathonName, description, skill]);

  const handleEdit = () => {
    const updatedList = hackathonlist.map((item) =>
      item.id === id
        ? {
            ...item,
            hackathonName: challengeName,
            description: desc,
            skill: level,
          }
        : item
    );
    setFullList(updatedList);
    navigate("/");
    toast.success("Updated");
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="px-[10%] w-[50%] py-10 flex flex-col gap-8 max-lg:w-[60%] max-md:w-[75%] max-sm:w-full"
    >
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">
          Challenge Name
        </span>
        <input
          type="text"
          className="border border-[#B7B7B7] rounded-[5px] px-2 py-1"
          value={challengeName}
          onChange={(event) => {
            setChallengeName(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Description</span>
        <textarea
          className="border border-[1px] border-[#B7B7B7] rounded-[5px] p-4"
          value={desc}
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Image</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Level Type</span>
        <select
          className="w-fit border border-[#B7B7B7] rounded-[5px] px-4 py-2"
          value={level}
          onChange={(event) => {
            setLevel(event.target.value);
          }}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button
        className="text-[16px] font-inter font-medium px-5 py-2 w-fit bg-[#44924C] rounded-[10px] text-[#ffffff] hover:shadow-shadow"
        onClick={handleEdit}
      >
        Update Challenge
      </button>
    </motion.div>
  );
}

export default EditHackathonForm;
