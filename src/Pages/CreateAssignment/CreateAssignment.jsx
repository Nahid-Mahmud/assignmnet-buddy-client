import { Link } from "react-router-dom";
import RectangleAnimation from "../../SharedComponents/RectangleAnimation";

const CreateAssignment = () => {
  return (
    <div className="md:max-w-[90vw] max-w-[95vw] py-10 mx-auto">
      <RectangleAnimation></RectangleAnimation>
      {/* Heading */}
      <h2 className="capitalize text-center py-10 text-2xl md:text-3xl font-bold underline">
        Create an assignment.
      </h2>

      {/* // forms */}
      <div>
        <div className="w-full  max-w-7xl mx-auto ">
          <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form className="pb-6">
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
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-3">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Due Daate
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    name="date"
                  />
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
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Assignment Description "
                ></textarea>
              </div>
              <div className="pb-10 ">
                <select
                  className="btn text-white hover:bg-green-500 hover:text-black bg-[#245d51]"
                  name="dificulty"
                  id="dificulty"
                >
                  <option value="Easy">Easy</option>
                  <option value="Meidum">Meidum</option>
                  <option value="Hard">Hard</option>
                </select>
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
