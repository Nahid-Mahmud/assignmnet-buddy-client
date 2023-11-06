import { useLoaderData } from "react-router-dom";
import RectangleAnimation from "./RectangleAnimation";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth";

const UpdateAssignment = () => {
  const data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  console.log(data);
  const {
    assignmentTitle,
    createdBy,
    description,
    difficulty,
    dueDate,
    mark,
    _id,
    thumbnailUrl,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    // getting all form data
    const assignmentTitle = e.target.title.value;
    const thumbnailUrl = e.target.photourl.value;
    // making due date sting and getting only date thhrough slice
    const dueDate = startDate.toISOString().slice(0, 10);
    const dificulty = e.target.dificulty.value;
    const mark = e.target.mark.value;
    const description = e.target.description.value;
    const createdBy = user.email;
    // creating assignment object for post method
    const assignment = {
      assignmentTitle,
      thumbnailUrl,
      dueDate,
      dificulty,
      mark,
      description,
      createdBy,
    };
    // import.meta.env.VITE_serverUrl
    // post using axios
    const url = `${import.meta.env.VITE_serverUrl}/addAssignment/update/${_id}`;
    console.log(url);
    axios
      .put(url, assignment)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Assignment Added Successfully !",
          });
        }
      })
      .then((err) => {
        console.log(err);
      });
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
            <form onSubmit={handleUpdate} className="pb-6">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Assitnment Title
                  </label>
                  <input
                  defaultValue={assignmentTitle}
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
                  defaultValue={thumbnailUrl}
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
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    {" "}
                    Dificulty Level{" "}
                  </label>
                  <select
                  defaultValue={difficulty}
                    className="btn text-white w-full  hover:bg-white hover:text-black bg-[#245d51]"
                    name="dificulty"
                    id="dificulty"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mark
                  </label>
                  <input
                  defaultValue={mark}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mark"
                    type="number"
                    name="mark"
                    required
                  />
                </div>
              </div>

              <div className="mb-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Assignment Description
                </label>
                <textarea
                defaultValue={description}
                  id="message"
                  name="description"
                  required
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Assignment Description "
                ></textarea>
              </div>

              <div className="flex items-center gap-3 justify-between">
                <input
                  className="btn bg-green-600 text-white hover:text-black hover:bg-green-500 transition"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
