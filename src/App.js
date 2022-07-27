import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/aboutpage/about";
import Booking from "./components/booking/booking";
import BlogPage from "./components/blogspage/Blogspage";
import Contactpage from "./components/Contactspage/Contactpage";
import Events from "./components/eventspage/EventsPage";
import Home from "./components/mainpage/Home";
import Custom from "./components/custom-safaris/custom";
import BookingInfo from "./components/packages/bookinginfo";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Beach from "./components/beachsafaris/beach";
import { Safari } from "./components/eventspage/packagetypes/Safari";
import { International } from "./components/eventspage/packagetypes/International";
import { Domestic } from "./components/eventspage/packagetypes/Domestic";
import { HoneyMoon } from "./components/eventspage/packagetypes/HoneyMoon";
import { Gallery } from "./components/Gallery/Gallery";
import { Building } from "./components/eventspage/packagetypes/Building";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/packages" element={<Events />} />
        <Route
          exact
          path="/packages/:id"
          element={<BookingInfo />}
        />
        <Route exact path="/contact-us" element={<Contactpage />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/custom-safaris" element={<Custom />} />
        <Route exact path='/safari-packages' element={<Safari/>}/>
        <Route exact path='/international-packages' element={<International/>}/>
        <Route exact path='/domestic-packages' element={<Domestic/>}/>
        <Route exact path='/honeymoon-packages' element={<HoneyMoon/>}/>
        <Route exact path='/beach-packages' element={<Beach/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/team-building-packages' element={<Building/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
