import { useLoaderData } from "react-router-dom";
import RectangleAnimation from "./RectangleAnimation";

const GiveMark = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="py-10 max-w-[95vw] md:max-w-[90vw] mx-auto">
      <RectangleAnimation></RectangleAnimation>

      <div className="py-10  overflow-hidden">
        <div className=" bg-gradient-to-r rounded from-[#113a31] to-[#ff4e59] max-w-7xl mx-auto ">
          <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Heading */}

            <h2 className="capitalize mb-10 text-center  text-2xl md:text-3xl font-bold underline">
              Mark Assignment
            </h2>
            <form className="pb-6">
              <p>
                {" "}
                <span className="text-xl font-medium">
                  Assignment Title
                </span>: {data?.assignmentTitle}
              </p>
              <div>
                <span className="text-xl font-medium">Submitted Pdf Link : </span>{" "}
                <a className="text-blue-500" href={data?.pdfLink}>
                  {" "}
                  {data?.pdfLink}{" "}
                </a>
              </div>{" "}
              <p>
                <span className="text-xl font-medium"> Quick Note </span>:{" "}
                {data?.quickNote}
              </p>
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Give mark
                  </label>
                  <input
                    placeholder={`Out of ${data.assignmentMark}`}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    name="givenMark"
                    required
                  />
                </div>
              </div>
              <div className="mb-10">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Give Feedback
                </label>
                <textarea
                  id="message"
                  name="giveFeedback"
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

export default GiveMark;
