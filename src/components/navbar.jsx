import { social } from "./data";
import logo from "../images/logo.PNG";
import { FaBars } from "react-icons/fa";
const Navbar= () => {
  return (
    <>
      <div className="topbar container">
        <div className="left">
          <a href="mailto:kalboadventures2019@gmail.com">kalboadventures2019@gmail.com</a> <span>|</span>
          <a href="tel:+254720126177">+254720126177</a>
        </div>
        <div className="right">
              <a href="/kalbo">FAQ</a> <span>|</span> 
              <a href="/kalbo/booking">Booking</a>
          </div>
      </div>
      <nav className="navbar navbar-expand-lg container sticky-top mt-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/kalbo">
            <img
              src={logo}
              alt=""
              width="120"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kalbo/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/kalbo/safari-packages"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/kalbo/safari-packages">
                      Hire Ride
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo/safari-packages">
                      Team building
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo/safari-packages">
                      City excusion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo/safari-packages">
                      Beach safaris
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo/safari-packages">
                      Hotel reservation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo/custom-safaris"
                >
                  Custom safaris
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo/blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo/booking"
                >
                  Online Booking
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo/contact-us"
                >
                  Contacts
                </a>
              </li>
            </ul>
            <div className="d-flex icons">
              {social.map(({ id, url, icon }) => {
                return (
                  <a key={id} href={url}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
