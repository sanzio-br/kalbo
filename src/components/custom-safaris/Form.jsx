import { AiOutlineInfoCircle } from "react-icons/ai";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const CustomForm = () => {
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjm4ahq",
        "template_73iyzz6",
        form.current,
        "_9R-p5JFQqxdXNgvk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
    setState({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  };
  return (
    <div className="container">
      <article className="title-classNameic">
        <div className="title-classNameic-title">
          <h1 className="h-2 headers">Fill the form bellow</h1>
        </div>
        <div className="title-classNameic-text">
          <p>
            To get a custom safari organised for you, fill in accurate details
            bellow for your tour organisation process to begin.
          </p>
        </div>
      </article>
      <form
        ref={form}
        className="rd-form rd-form-variant-2 rd-mailform"
        data-form-output="form-output-global"
        data-form-type="contact"
        onSubmit={sendEmail}
      >
        <div className="row row-14 gutters-14">
          <div className="col-md-4">
            <div className="form-wrap">
              <label className="form-label" for="contact-your-name-2">
                Your Name
              </label>
              <input
                className="form-input"
                id="contact-your-name-2"
                type="text"
                value={state.name}
                name="name"
                data-constraints="@Required"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-wrap">
              <label className="form-label" for="contact-email-2">
                E-mail
              </label>
              <input
                className="form-input"
                id="contact-email-2"
                type="email"
                value={state.email}
                name="email"
                data-constraints="@Email @Required"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-wrap">
              <label className="form-label" for="contact-phone-2">
                Phone
              </label>
              <input
                className="form-input"
                id="contact-phone-2"
                type="text"
                name="phone"
                value={state.phone}
                data-constraints="@Numeric"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-wrap">
              <label className="form-label" for="contact-message-2">
                Tour description
              </label>
              <p className="alert alert-warning">
                <AiOutlineInfoCircle className="m-2" />
                please mention (destination, price , number of people and days,
                mode of transport and budget)
              </p>
              <textarea
                className="form-input textarea-lg"
                id="contact-message-2"
                name="description"
                value={state.description}
                placeholder="Descripe your ideal type of tour"
                data-constraints="@Required"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className="button button-primary button-pipaluk"
          type="submit"
          onClick={sendEmail}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
