import axios from "axios";
import ViewAllAssignmentsCard from "./ViewAllAssignmentsCard";
import { useEffect, useState } from "react";

const AllAssignMents = () => {
  // getting data from server

  const [value, setvalue] = useState("All");

  const [assignments, setAssignments] = useState(null);
  console.log(value);
  // console.log("data from server", assignments);

  const handleOptionChange = (e) => {
    setvalue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_serverUrl
        }/allAssignment?status=${value.toString()}`
      )
      .then((res) => {
        const data = res.data;
        setAssignments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

  return (
    <div className="bg-gradient-to-r from-[#113a31] to-[#ff4e59]">
      <div className="max-w-[95vw] mx-auto md:max-w-[90vw] ">
        {/* // dropwown */}
        <div className="pb-10 w-96 py-10 ">
          <label className=" mb-2 text-2xl font-semibold text-gray-900 ">
            Set Dificulty Level:
          </label>
          <select
            className="btn text-white w-full  hover:bg-white hover:text-black bg-[#245d51]"
            name="dificulty"
            id="dificulty"
            onChange={handleOptionChange}
            value={value}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="min-h-[60vh] grid gap-5 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 py-16 ">
          {assignments?.map((assignment, index) => (
            <ViewAllAssignmentsCard
              key={index}
              assignment={assignment}
            ></ViewAllAssignmentsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAssignMents;
