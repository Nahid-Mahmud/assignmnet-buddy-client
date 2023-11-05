import { motion, useTime, useTransform } from "framer-motion";

const RectangleAnimation = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4500], [0, 360], { clamp: false });
  return (
    <div className="flex justify-center">
      <motion.div
        style={{ rotate }}
        className="bg-[#ff4e59] rounded-[2rem] md:w-36 md:h-36 h-28 w-20 "
      ></motion.div>
      <motion.div
        style={{ rotate }}
        className="bg-[#245d51] rounded-[2rem] md:w-36 md:h-36 h-28 w-20 "
      ></motion.div>
      <motion.div
        style={{ rotate }}
        className="bg-[#ff4e59] rounded-[2rem] md:w-36 md:h-36 h-28 w-20 "
      ></motion.div>
    </div>
  );
};

export default RectangleAnimation;
