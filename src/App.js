import Carousel from "./components/Caurosel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollTop";
import About from "./pages/About";
import CarRent from "./pages/CarRent";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import TourPackages from "./pages/TourPackages";

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <About/>
      <TourPackages/>
      <Destinations/>
      <CarRent/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
