import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import RectangleAnimation from "./RectangleAnimation";
import axios from "axios";
import Swal from "sweetalert2";

const TakeAssignment = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate()

  const handleSubmitAssignmnet = (e) => {
    e.preventDefault();
    const pdfLink = e?.target?.pdfLink?.value;
    const quickNote = e?.target?.quickNote?.value;
    const submittedBy = user?.email;
    const submittedAssignment = {
      pdfLink,
      quickNote,
      submittedBy,
      assignmentTitle: data?.assignmentTitle,
      assignmentMark: data?.mark,
      examineeName: user?.displayName,
    };
    console.log(submittedAssignment);
    const url = `${import.meta.env.VITE_serverUrl}/submittedAssignment`;
    axios.post(url, submittedAssignment).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Assignment Submitted Successfully !",
        });
        navigate('/allAssignments')
      }
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
              Submit Assignment
            </h2>
            <form onSubmit={handleSubmitAssignmnet} className="pb-6">
              <p className="text-xl font-medium">
                {" "}
                Assignment Title: {data?.assignmentTitle}
              </p>
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Assignment Submission Pdf Link
                  </label>
                  <input
                    placeholder="https://drive.google.com/examle "
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="pdfLink"
                    required
                  />
                </div>
              </div>

              <div className="mb-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Assignment Submission Related Note
                </label>
                <textarea
                  id="message"
                  name="quickNote"
                  required
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Assignment Quick Note "
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

export default TakeAssignment;
