import RectangleAnimation from "../../SharedComponents/RectangleAnimation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const assignmentTitle = e.target.title.value;
    const thumbnailUrl = e.target.photourl.value;
    const dueDate = startDate;
    const dificulty = e.target.dificulty.value;
    const mark = e.target.mark.value;
    const description = e.target.description.value;
    console.log(
      assignmentTitle,
      thumbnailUrl,
      dueDate,
      dificulty,
      mark,
      description
    );
  };
  return (
    <div className="md:max-w-[90vw] max-w-[95vw] py-10 mx-auto">
      <RectangleAnimation></RectangleAnimation>

      {/* // forms */}
      <div className="py-10  overflow-hidden">
        <div className=" bg-gradient-to-r rounded from-[#113a31] to-[#ff4e59] max-w-7xl mx-auto ">
          <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Heading */}
            <h2 className="capitalize mb-10 text-center  text-2xl md:text-3xl font-bold underline">
              Create an assignment.
            </h2>
            <form onSubmit={handleSubmitAssignment} className="pb-6">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Assitnment Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Thumbnail Image Url
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="photourl"
                    type="text"
                    name="photourl"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-3">
                <div className="mb-4 ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Due Daate
                  </label>
                  {/* date picker  */}
                  <DatePicker
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="pb-10 w-96 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Dificulty Level{" "}
                  </label>
                  <select
                    className="btn text-white w-full  hover:bg-white hover:text-black bg-[#245d51]"
                    name="dificulty"
                    id="dificulty"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Meidum">Meidum</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mark
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mark"
                    type="number"
                    name="mark"
                    required
                  />
                </div>
              </div>

              <div className="mb-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Assignment Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  required
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Assignment Description "
                ></textarea>
              </div>

              <div className="flex items-center gap-3 justify-between">
                <input
                  className="btn bg-green-600 text-white hover:text-black hover:bg-green-500 transition"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;

// title, description,marks,thumbnail imageurl,assignment dificulty level (easy , medium, hard ) -- use Dropdown , Due date

// a. Assignment creation:
// ● Any logged in user is able to create an assignment for all users.
// ● An assignment will have a title, description, marks, thumbnail
// Image URL, assignment difficulty level(easy, medium, hard) [YOU
// MAY USE DROPDOWN SELECT INPUT FIELD], and due date
// [use this package for selecting date
// “https://www.npmjs.com/package/react-datepicker”] .
// ● A success message will be shown when the assignment will be
// created successfully. [YOU MAY USE TOAST OF MODAL]
