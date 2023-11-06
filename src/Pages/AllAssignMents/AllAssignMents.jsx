import axios from "axios";

import ViewAllAssignmentsCard from "./ViewAllAssignmentsCard";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const AllAssignMents = () => {
  // getting data from server

  const [value, setvalue] = useState("All");

  const [assignments, setAssignments] = useState(null);
  console.log(value);
  console.log("data from server", assignments);

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
    <>
      <div>AllAssignMents</div>
      {/* // dropwown */}
      <div className="pb-10 w-96 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {" "}
          Dificulty Level{" "}
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
      {/* <div>
        {assignments?.map((assignment, index) => (
          <ViewAllAssignmentsCard
            key={index}
            assignment={assignment}
          ></ViewAllAssignmentsCard>
        ))}
      </div> */}
    </>
  );
};

export default AllAssignMents;
