import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Textarea from "../Textarea";
const Booking = () => {
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(new Date());
  let [userData, setUserData] = useState({
    email: "",
    date: date,
    name: "",
    phone: phone,
    adults: "",
    duration: "",
    children: "",
    description: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setUserData({ ...userData, [event.target.name]: value });
  };
  console.log(userData);
  return (
    <div className="container">
      <h1 className="h-2 headers">Fill in the form bellow to book a safari</h1>
      <form className="row g-3 text-left">
        <div className="col-md-6 form-group">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Phone</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={date}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Duration</label>
          <input
            type="number"
            min={1}
            className="form-control"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Number of adults</label>
          <input
            min={1}
            type="number"
            className="form-control"
            name="adults"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">Number of children</label>
          <input
            type="number"
            className="form-control"
            name="children"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group text-left">
          <fieldset>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="SGR"
                name="mode"
                onChange={handleChange}
              />
              <label className="form-check-label">SGR</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="safari landCruiser"
                name="mode"
                onChange={handleChange}
              />
              <label className="form-check-label">safari landCruiser</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="safari mini-Van"
                name="mode"
                onChange={handleChange}
              />
              <label className="form-check-label">safari mini-van</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="truck"
                name="mode"
                onChange={handleChange}
              />
              <label className="form-check-label">Truck</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="minibus coaster"
                name="mode"
                onChange={handleChange}
              />
              <label className="form-check-label">Minibus coaster</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="flight"
                name="mode"
                onChange={handleChange}
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Flight
              </label>
            </div>
          </fieldset>
        </div>
        <div className="col-md-6 form-group">
          <label className="form-label">More description</label>
          <Textarea limit={500} value={userData.description}/>
          {/* <textarea
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          /> */}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Booking;
