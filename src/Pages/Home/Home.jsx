import { useAuth } from "../../Hooks/useAuth";
import Banner from "./Banner";
import Features from "./Features";

const Home = () => {
  const { demoUser } = useAuth();
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
};

export default Home;
