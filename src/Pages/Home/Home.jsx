import { useAuth } from "../../Hooks/useAuth";
import NavBar from "../../SharedComponents/NavBar";
import Banner from "./Banner";

const Home = () => {
  const { demoUser } = useAuth();
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
