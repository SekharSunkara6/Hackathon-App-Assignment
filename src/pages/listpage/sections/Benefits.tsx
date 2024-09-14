import React from "react";
import notebook from "../../../assets/icons/carbon_notebook-reference.svg";
import people from "../../../assets/icons/Vector.svg";
import robot from "../../../assets/icons/Robot.svg";
import IdentificationCard from "../../../assets/icons/IdentificationCard.svg";
import BenefitCard from "../../../components/BenefitCard.tsx";
import { motion } from "framer-motion";

function Benefits() {
  const list = [
    {
      id: 1,
      title: "Prove your skills",
      description:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
      imageURL: notebook,
    },
    {
      id: 2,
      title: "Learn from community",
      description:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
      imageURL: people,
    },
    {
      id: 3,
      title: "Challenge yourself",
      description:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
      imageURL: robot,
    },
    {
      id: 4,
      title: "Earn recognitions",
      description:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
      imageURL: IdentificationCard,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="px-[10%] py-20">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[32px] font-semibold font-poppins pb-10 w-full text-center"
      >
        Why Participate in{" "}
        <span className="text-[#44924c]">AI Challenges?</span>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-2 gap-8 max-md:grid-cols-1"
      >
        {list.map((item) => {
          const { id, title, description, imageURL } = item;
          return (
            <motion.div variants={itemVariants} key={id}>
              <BenefitCard {...{ title, description, imageURL }} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Benefits;
