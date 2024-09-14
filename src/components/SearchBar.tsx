import React from "react";
import search from "../assets/icons/search.svg";
import { useContextdata } from "../context/Context.tsx";

function SearchBar({ searchinput, setsearchinput }) {
  const { hackathonlist, sethackathonlist, fulllist } = useContextdata();

  const searchhackathon = (event) => {
    const searchValue = event.target.value;
    setsearchinput(searchValue);

    if (searchValue !== "") {
      const updatedhackathonlist = hackathonlist.filter((hackathon) =>
        hackathon.hackathonName
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

      console.log(updatedhackathonlist);
      sethackathonlist(updatedhackathonlist);
    } else {
      sethackathonlist(fulllist);
    }
  };

  return (
    <div className="flex flex-row items-center bg-[#ffffff] px-10 py-3 rounded-lg w-full h-full">
      <img src={search} alt="search" className="mr-3 size-4" />
      <input
        type="text"
        className="h-full bg-transparent focus:outline-none text-[#000000]"
        placeholder="Search"
        value={searchinput}
        onChange={(event) => searchhackathon(event)}
      />
    </div>
  );
}

export default SearchBar;
