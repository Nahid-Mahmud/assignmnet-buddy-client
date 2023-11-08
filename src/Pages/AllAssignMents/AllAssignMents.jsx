import axios from "axios";
import ViewAllAssignmentsCard from "./ViewAllAssignmentsCard";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllAssignMents = () => {
  // getting data from server

  // pagination
  const { assignmentCount } = useLoaderData();
  console.log(assignmentCount);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(assignmentCount / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setCurrentPage(0);
    setItemsPerPage(value);
  };

  //pagination ends
  const [value, setvalue] = useState("All");

  const [assignments, setAssignments] = useState([]);
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
        }/allAssignment?status=${value}&page=${currentPage}&size=${itemsPerPage}`,
        { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        setAssignments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value, currentPage, itemsPerPage]);

  return (
    <div className="bg-gradient-to-r from-[#113a31] to-[#ff4e59]">
      <div className="max-w-[95vw] mx-auto md:max-w-[90vw] ">
        {/* // dropwown */}
        <div className="pb-10 w-96 py-10 ">
          <label className=" mb-2 text-2xl font-semibold text-gray-900 ">
            Set Dificulty Level:
          </label>
          <select
            className="btn text-white w-full   hover:bg-white hover:text-black bg-[#245d51]"
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
        <div className="text-center space-x-2">
          <button
            className="btn"
            onClick={() =>
              currentPage > 0
                ? setCurrentPage(currentPage - 1)
                : setCurrentPage(currentPage)
            }
          >
            Previous
          </button>

          {pages.map((pageNumber, index) => {
            return (
              <button
                className={` btn ${
                  currentPage === pageNumber ? "bg-[#ff4e59]" : ""
                } `}
                onClick={() => setCurrentPage(pageNumber)}
                key={index}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() =>
              currentPage < numberOfPages - 1
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(currentPage)
            }
            className="btn"
          >
            Next
          </button>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllAssignMents;
