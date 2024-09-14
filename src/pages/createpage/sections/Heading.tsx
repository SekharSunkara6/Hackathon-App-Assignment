import React from "react";
import { motion } from "framer-motion";

function Heading() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="font-bold text-[24px] font-inter bg-[#F8F9FD] px-[10%] py-10"
    >
      Challenge Details
    </motion.div>
  );
}

export default Heading;
