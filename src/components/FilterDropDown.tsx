import React from "react";
import dropdown from "../assets/icons/dropdown.svg";
import { useContextdata } from "../context/Context.tsx";

const FilterDropdown = () => {
  const { filteropen, setFilterOpen, filterList, setFilterList } =
    useContextdata();

  const handleCheckboxChange = (name: string) => {
    if (filterList.includes(name)) {
      setFilterList(filterList.filter((item) => item !== name));
    } else {
      setFilterList([...filterList, name]);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={() => setFilterOpen(!filteropen)}
        className={`flex flex-row w-fit items-center gap-40 bg-[#ffffff] text-[#000000] px-10 py-3 ${
          filteropen ? "rounded-t-xl" : "rounded-xl"
        } cursor-pointer`}
      >
        <span>Filter</span>
        <img
          src={dropdown}
          alt="dropdown"
          className={`size-3 transition-all duration-300 ease-in-out ${
            filteropen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {filteropen && (
        <div className="absolute flex flex-col gap-2 text-[#000000] bg-[#ffffff] w-full rounded-b-xl px-4 pb-3 text-[14px] font-normal font-inter text-[#858585]">
          <hr className="my-2" />
          <span className="text-[16px] text-[#666666] mb-2">Status</span>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="All"
              name="All"
              onChange={() => handleCheckboxChange("All")}
            />
            <label htmlFor="All">All</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Active"
              name="Active"
              onChange={() => handleCheckboxChange("Active")}
            />
            <label htmlFor="Active">Active</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Upcoming"
              name="Upcoming"
              onChange={() => handleCheckboxChange("Upcoming")}
            />
            <label htmlFor="Upcoming">Upcoming</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Past"
              name="Past"
              onChange={() => handleCheckboxChange("Past")}
            />
            <label htmlFor="Past">Past</label>
          </div>
          <hr className="my-2" />
          <span className="text-[16px] text-[#666666] mb-2">Level</span>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Easy"
              name="Easy"
              onChange={() => handleCheckboxChange("Easy")}
            />
            <label htmlFor="Easy">Easy</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Medium"
              name="Medium"
              onChange={() => handleCheckboxChange("Medium")}
            />
            <label htmlFor="Medium">Medium</label>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              id="Hard"
              name="Hard"
              onChange={() => handleCheckboxChange("Hard")}
            />
            <label htmlFor="Hard">Hard</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
