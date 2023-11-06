import { useAuth } from "../../Hooks/useAuth";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";


const Home = () => {
  const { demoUser } = useAuth();
  // console.log(typeof import.meta.env.VITE_serverUrl);
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Faq></Faq>
    
    </div>
  );
};

export default Home;
