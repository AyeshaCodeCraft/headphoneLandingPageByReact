import { UpdateFollower } from "react-mouse-follower";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Shop from "./components/Shop/Shop";
import BannerText from "./components/Shop/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

function App() {
 
  return (
    <>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>

      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
          <Services />
          <Shop/>
          <BannerText/>
          <Blogs/>
          <Footer/>
      </UpdateFollower>
    
    </>
  );
}

export default App;
