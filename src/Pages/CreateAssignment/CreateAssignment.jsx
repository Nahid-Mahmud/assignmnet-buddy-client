import { motion, useTime, useTransform } from "framer-motion";
const CreateAssignment = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <div className="md:max-w-[90vw] max-w-[95vw] py-10 mx-auto">
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
      {/* Heading */}
      <h2 className="capitalize text-center py-10 text-2xl md:text-3xl font-bold underline">
        Create an assignment.
      </h2>

      {/* // forms */}
      <div></div>
    </div>
  );
};

export default CreateAssignment;

// title, description,marks,thumbnail,imageurl,assignment dificulty level (easy , medium, hard ) -- use Dropdown , Due date

// a. Assignment creation:
// ● Any logged in user is able to create an assignment for all users.
// ● An assignment will have a title, description, marks, thumbnail
// Image URL, assignment difficulty level(easy, medium, hard) [YOU
// MAY USE DROPDOWN SELECT INPUT FIELD], and due date
// [use this package for selecting date
// “https://www.npmjs.com/package/react-datepicker”] .
// ● A success message will be shown when the assignment will be
// created successfully. [YOU MAY USE TOAST OF MODAL]
