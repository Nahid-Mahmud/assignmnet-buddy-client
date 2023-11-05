import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh]  bg-gradient-to-r from-[#113a31] to-[#ff4e59]">
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">
            Welcome to Assignment Buddy - Your Ultimate Study Companion!
          </h1>
          <p className="py-6">
            At Assignment Buddy, we believe that learning becomes more enjoyable
            and effective when it's a collaborative effort. That's why we've
            created the perfect online platform for you and your friends to
            embark on a journey of shared knowledge and academic excellence.
          </p>
          <Link to={"/allAssignments"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
