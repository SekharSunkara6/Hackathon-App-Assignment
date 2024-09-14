import React from "react";
import tick from "../assets/icons/tick.svg";
import { Link } from "react-router-dom";
import { useContextdata } from "../context/Context.tsx";

function HackathonCard({
  id,
  hackathonName,
  hackathonStatus,
  color,
  imageURL,
  skill,
  description,
}) {
  const { previousdate, previoustime, days, hours, minutes } = useContextdata();

  return (
    <div className="bg-[#ffffff] rounded-2xl w-fit h-full font-poppins flex flex-col items-center justify-between">
      <img src={imageURL} alt={hackathonName} className="rounded-t-2xl" />
      <div className="w-full flex flex-col items-center justify-center gap-4 py-6 w-fit">
        <div
          className="px-3 py-1 text-[12px] font-semibold font-inter rounded-[5px]"
          style={{ backgroundColor: color }}
        >
          {hackathonStatus}
        </div>
        <div className="text-center text-[16px] font-semibold w-60">
          {hackathonName}
        </div>
        {hackathonStatus ? (
          hackathonStatus === "Upcoming" ? (
            <>
              <span className="font-medium text-[#444444] text-[14px]">
                Starts in
              </span>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {days}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Days
                  </span>
                </div>
                <span className="text-[18px] text-[#454545] font-bold">:</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {hours}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Hours
                  </span>
                </div>
                <span className="text-[18px] text-[#454545] font-bold">:</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {minutes}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Mins
                  </span>
                </div>
              </div>
            </>
          ) : hackathonStatus === "Active" ? (
            <>
              <span className="font-medium text-[#444444] text-[14px]">
                Ends in
              </span>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {days}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Days
                  </span>
                </div>
                <span className="text-[18px] text-[#454545] font-bold">:</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {hours}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Hours
                  </span>
                </div>
                <span className="text-[18px] text-[#454545] font-bold">:</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[18px] text-[#454545] font-semibold">
                    {minutes}
                  </span>
                  <span className="text-[10px] font-medium text-[#4F4F4F] font-inter">
                    Mins
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <span className="font-medium text-[#444444] text-[14px]">
                Ended on
              </span>
              <div className="flex flex-row gap-2 text-[18px] text-[#454545] font-semibold">
                <span>{previousdate}</span>
                <span>{previoustime}</span>
              </div>
            </>
          )
        ) : null}

        <Link
          to="/detail"
          className="bg-[#44924C] px-5 py-2 rounded-[10px] flex flex-row items-center gap-3 text-[#ffffff] text-[14px] font-semibold hover:shadow-shadow"
          state={{
            id,
            hackathonName,
            hackathonStatus,
            imageURL,
            skill,
            description,
          }}
        >
          <img src={tick} alt="tick" />
          Participate Now
        </Link>
      </div>
    </div>
  );
}

export default HackathonCard;
