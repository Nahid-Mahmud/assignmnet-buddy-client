import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WelcomeImage from "../../assets/images/Welcome.png";
const Banner = () => {
  return (
    <div className="hero min-h-[70vh] flex flex-col lg:flex-row justify-center items-center ">
      <div>
        <img className="lg:h-[35rem]" src={WelcomeImage} alt="" />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotateX: 360, scale: 1 }}
        transition={{ type: "tween", duration: 2 }}
        className="hero-content text-center text-black"
      >
        <div className="max-w-3xl">
          <h1 className="lg:text-5xl text-2xl lg:font-bold font-semibold ">
            Welcome to Assignment Buddy - Your Ultimate Study Companion!
          </h1>
          <p className="py-6">
            At Assignment Buddy, we believe that learning becomes more enjoyable and effective when it's a collaborative
            effort. That's why we've created the perfect online platform for you and your friends to embark on a journey
            of shared knowledge and academic excellence.
          </p>
          <Link to={"/allAssignments"}>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "tween" }}
              className="btn bg-[#ff4e59] hover:bg-red-600 text-white"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
