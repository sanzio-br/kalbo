import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {
    const [phone, setPhone] = useState()
    const [date, setDate] = useState(new Date());
    let [userData, setUserData] = useState({
        email: '',
        date: date,
        name: '',
        phone: phone,
        adults:'',
        duration:'',
        children:''

    })
    const handleChange = (event) => {
        event.preventDefault()
        const value = event.target.value
        setUserData({ ...userData, [event.target.name]: value });
    }
    console.log(userData)
    return (
        <div className="container mt-0">
            <div className="form">
                <h5>Fill in your details bellow</h5>
                <div className="inputs">
                    <label>Full name</label>
                    <input type="text" placeholder="Full Name" name='name' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label>Email</label>
                    <input type="email" placeholder="example@gmail.com" name='email' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label>Phone number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone} />
                </div>
                <div className="inputs">
                    <label>Number of Adults</label>
                    <input type="number" min={1} placeholder="Enter No of adults" name='adults' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label>Number of children</label>
                    <input type="number" min={0} placeholder="Enter no if children" name='children' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label>Date of travel</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        minDate={date}
                    />
                </div>
                <div className="inputs">
                    <label>Duration</label>
                    <input type="number" min={1} placeholder="Enter number of days" name='days' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label>Destination</label>
                    <input type="text" placeholder="Preferer destination" name='destination' onChange={handleChange} />
                </div>
                <div className="inputs">
                    <fieldset>
                        <legend>Preferred mode of transport</legend>
                        <label>
                            <input type="radio" name="mode" value="create" />
                            <i>Standard gauge railway (SGR)</i>
                        </label>
                        <label>
                            <input type="radio" name="mode" value="create" />
                            <i>Flight</i>
                        </label>
                        <label>
                            <input type="radio" name="mode" value="create" />
                            <i>Safari min-Van</i>
                        </label>
                        <label>
                            <input type="radio" name="mode" value="create" />
                            <i>Safari LandCruiser</i>
                        </label>
                    </fieldset>
                </div>
                <div className="inputs">
                    <label>More description</label>
                    <textarea name="description" id="" ></textarea>
                </div>
                <button>submit</button>
            </div>
        </div>
    )
}
export default Booking;