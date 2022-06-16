import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/aboutpage/about";
import Booking from "./components/booking/booking";
import BlogPage from "./components/blogspage/Blogspage";
import Contactpage from "./components/Contactspage/Contactpage";
import Events from "./components/eventspage/EventsPage";
import Footer from "./components/footer";
import Home from "./components/mainpage/Home";
import Custom from "./components/custom-safaris/custom";
import BookingInfo from "./components/bookinginfo";
import Navbar from "./components/navbar";
import Hire from './components/carhire/Hire'
import AOS from 'aos'
import Foot from "./components/foot";
import Footee from "./components/footer";
function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/kalbo" element={<Home />} />
        <Route exact path="/kalbo/about" element={<About />} />
        <Route exact path="/kalbo/booking" element={<Booking />} />
        <Route exact path="/kalbo/safari-packages" element={<Events />} />
        <Route
          exact
          path="/kalbo/safari-packages/:id"
          element={<BookingInfo />}
        />
        <Route exact path="/kalbo/contact-us" element={<Contactpage />} />
        <Route exact path="/kalbo/hire-ride" element={<Hire />} />
        <Route exact path="/kalbo/blogs" element={<BlogPage />} />
        <Route exact path="/kalbo/custom-safaris" element={<Custom />} />
      </Routes>
      <Footee/>
      {/* <Footer /> */}
      {/* <Foot/> */}
    </div>
  );
}

export default App;
