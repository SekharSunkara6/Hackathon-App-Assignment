import React from "react";
import upload from "../../../assets/icons/bxs_cloud-upload.svg";
import arrowright from "../../../assets/icons/arrowright.svg";
import challengeImage from "../../../assets/icons/bi_image-fill.svg";
import { useContextdata } from "../../../context/Context.tsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HackathonForm() {
  const {
    image,
    setImage,
    challengeName,
    setChallengeName,
    startdate,
    setStartDate,
    starttime,
    setStartTime,
    enddate,
    setEndDate,
    endtime,
    setEndTime,
    setDescription,
    description,
    level,
    setLevel,
    handleImageChange,
    hackathonlist,
    setFullList,
    starttimer,
  } = useContextdata();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let imageURL = "";
    if (image) {
      imageURL = URL.createObjectURL(image);
    }

    const newChallengeData = {
      id: hackathonlist.length + 1,
      hackathonName: challengeName,
      hackathonStatus: "Active",
      description: description,
      color: "#44924C3D",
      imageURL: imageURL,
      skill: level,
      hackathonenddate: enddate,
      hackathonendtime: endtime,
    };

    setChallengeName("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndDate("");
    setEndTime("");
    setDescription("");
    setImage("");

    setFullList((prevList) => [...prevList, newChallengeData]);
    starttimer(enddate, endtime);
    navigate("/");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.form
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="px-[10%] w-[50%] py-10 flex flex-col gap-8 max-lg:w-[60%] max-md:w-[75%] max-sm:w-full"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">
          Challenge Name
        </span>
        <input
          type="text"
          className="border border-[#B7B7B7] rounded-[5px] px-2 py-1"
          value={challengeName}
          onChange={(event) => setChallengeName(event.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Start Date</span>
        <div className="border border-[#B7B7B7] rounded-[5px] p-1">
          <input
            type="date"
            className="bg-transparent mr-2 ml-4 cursor-pointer"
            value={startdate}
            onChange={(event) => setStartDate(event.target.value)}
            min={today}
            required
          />
          <input
            type="time"
            className="bg-transparent ml-2 mr-4 cursor-pointer"
            value={starttime}
            onChange={(event) => setStartTime(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">End Date</span>
        <div className="border border-[#B7B7B7] rounded-[5px] p-1">
          <input
            type="date"
            className="bg-transparent mr-2 ml-4 cursor-pointer"
            value={enddate}
            onChange={(event) => setEndDate(event.target.value)}
            min={today}
            required
          />
          <input
            type="time"
            className="bg-transparent ml-2 mr-4 cursor-pointer"
            value={endtime}
            onChange={(event) => setEndTime(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Description</span>
        <textarea
          className="border border-[1px] border-[#B7B7B7] rounded-[5px] p-4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Image</span>
        {image ? (
          <div className="bg-[#F8F9FD] rounded-[10px] border border-[#F8F9FD] p-4 flex flex-col gap-6">
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="rounded-[10px]"
            />
            <label className="flex flex-row gap-2 items-center cursor-pointer">
              <img src={challengeImage} alt="challengeImage" />
              <span className="text-[14px] font-medium font-inter text-[#44924C]">
                Change image
              </span>
              <img src={arrowright} alt="arrowright" />
              <input
                type="file"
                onChange={(event) => handleImageChange(event)}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <label className="flex flex-col gap-2 items-start bg-[#F4F4F4] border border-[#D9D9D9] w-fit px-8 py-2 rounded-[5px] cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <span>Upload</span>
              <div>
                <img src={upload} alt="upload" />
                <input
                  type="file"
                  onChange={(event) => handleImageChange(event)}
                  className="hidden"
                  required
                />
              </div>
            </div>
            <span className="text-[14px] font-medium font-inter text-[#D22B2B]">
              Image is Required
            </span>
          </label>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Level Type</span>
        <select
          className="w-fit border border-[#B7B7B7] rounded-[5px] px-4 py-2"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button className="text-[16px] font-inter font-medium px-5 py-2 w-fit bg-[#44924C] rounded-[10px] text-[#ffffff] hover:shadow-shadow">
        Create Challenge
      </button>
    </motion.form>
  );
}

export default HackathonForm;
