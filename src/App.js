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
import Hire from './components/carhire/Hire'
import Footer from "./components/footer";
import Beach from "./components/beachsafaris/beach";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/safari-packages" element={<Events />} />
        <Route
          exact
          path="/safari-packages/:id"
          element={<BookingInfo />}
        />
        <Route exact path="/contact-us" element={<Contactpage />} />
        <Route exact path="/safari-packages/beach-safaris" element={<Beach />} />
        <Route exact path="/hire-ride" element={<Hire />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/custom-safaris" element={<Custom />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
