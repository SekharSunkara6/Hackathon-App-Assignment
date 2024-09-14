import React from "react";

function BenefitCard({ title, description, imageURL }) {
  return (
    <div className="px-8 py-10 rounded-[20px] bg-[#F8F9FD] font-poppins flex flex-col gap-4 h-full w-full">
      <img src={imageURL} alt={title} className="size-8" />
      <div className="text-[24px] text-[#000000] font-semibold">{title}</div>
      <p className="text-[16px] text-[#64607D] font-medium">{description}</p>
    </div>
  );
}

export default BenefitCard;
