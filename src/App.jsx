import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Logo from "./sections/Logo";
import Showcase from "./sections/Showcase";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <Logo />
      <FeatureCards />
    </>
  );
};

export default App;
