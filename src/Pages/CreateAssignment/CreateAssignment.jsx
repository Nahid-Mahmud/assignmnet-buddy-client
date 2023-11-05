import { motion, useTime, useTransform } from "framer-motion";
const CreateAssignment = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <div className="md:max-w-[90vw] max-w-[95vw] py-10 mx-auto">
      <div className="flex justify-center">
        <motion.div
          style={{ rotate }}
          className="bg-[#ff4e59] rounded-[2rem] w-36 h-36"
        ></motion.div>
        <motion.div
          style={{ rotate }}
          className="bg-[#245d51] rounded-[2rem] w-36 h-36"
        ></motion.div>
        <motion.div
          style={{ rotate }}
          className="bg-[#ff4e59] rounded-[2rem] w-36 h-36"
        ></motion.div>
      </div>
      <p className="capitalize text-center py-10 text-2xl md:text-3xl font-bold underline">
        Creaate an assignment.
      </p>
    </div>
  );
};

export default CreateAssignment;
