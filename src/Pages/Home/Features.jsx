import { IoIosCheckbox, IoIosCreate } from "react-icons/io";
import { SiProgress } from "react-icons/si";
import FeatureImage from "../../assets/images/keyfeatures-removebg.png";

const Features = () => {
  return (
    <div id="features" className="flex flex-col lg:flex-row-reverse   justify-center items-center">
      <div>
        <img className="md:h-[35rem]  " src={FeatureImage} alt="" />
      </div>
      <div className="">
        <div>
          <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-md sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white underline py-5">
                  Key features of Assignment Buddy.
                </h2>
                <p className="text-gray-500 sm:text-xl ">
                  Assignment Buddy offers a trio of essential features to enhance your group study experience. Create
                  custom assignments to suit your study goals, collaborate with friends to deepen your understanding of
                  subjects.
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <IoIosCreate className="text-3xl text-[#ff4e59]"></IoIosCreate>
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">Create Assignments</h3>
                  <p className="text-gray-500 ">
                    Craft assignments tailored to your study needs. Share them with your friends, making the learning
                    process highly interactive and structured.
                  </p>
                </div>

                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <IoIosCheckbox className="text-3xl text-[#ff4e59]"></IoIosCheckbox>
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">
                    {/* Enterprise Design */}
                    Complete Assignments
                  </h3>
                  <p className="text-gray-500 ">
                    Work on assignments individually or as a team. Collaborative learning fosters a deeper understanding
                    of the subject matter.
                  </p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <SiProgress className="text-3xl text-[#ff4e59]"></SiProgress>
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">Grade Your Friends Assignments</h3>
                  <p className="text-gray-500 ">
                    Contribute to each other's growth by providing constructive feedback and grading your friends work.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
