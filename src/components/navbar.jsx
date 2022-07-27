import { social } from "./data";
import logo from "../images/logo.PNG";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="topbar container">
        <div className="col-md-6 left">
          <Link to="mailto:kalboadventures2019@gmail.com">
            kalboadventures2019@gmail.com
          </Link>{" "}
          <span>|</span>
          <Link to="tel:+254720126177">+254720126177</Link>
        </div>
        <div className="col-md-6 right">
          <Link to="/">FAQ</Link> <span>|</span>
          <Link to="/booking">Booking</Link>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg container sticky-top mt-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="120"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"
                  to="packages"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">Packages</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/packages">
                      All packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/safari-packages">
                      Wildlife-park safari-packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/team-building-packages"
                    >
                      Team-building-packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/international-packages"
                    >
                      International packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/domestic-packages">
                      Domestic packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/honeymoon-packages">
                      Honeymoon packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/beach-packages">
                      Beach packages
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/custom-safaris">Custom safaris</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/booking">Online Booking</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact-us">Contacts</Link>
              </li>
            </ul>
            <div className="d-flex icons">
              {social.map(({ id, url, icon }) => {
                return (
                  <Link key={id} to={url}>{icon}</Link>
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
