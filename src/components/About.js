
import HeroSection from "./common/HeroSection";
import { useProductContext } from "../context/productContext";

const About = () => {
  const data = {
    title: "Shopsy Ecommerce",
  };
  const { name } = useProductContext();
  return (
    <div>
      {name}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
