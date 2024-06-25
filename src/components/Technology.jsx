import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNode, FaDocker, FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { animate, motion } from "framer-motion";

function Technology() {
  const iconVariants = (duration) => ({
    intial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <h1 className=" my-20 text-center text-4xl"> Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className=" text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className=" text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className=" text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMysql className=" text-7xl text-sky-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className=" text-7xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initail"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDocker className=" text-7xl text-sky-500" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technology;
