import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
const Footer = () => {
  const [state, setState] = useState({
    eventsList: [],
    blogsList: [],
  });
  const blogsCollectionRef = collection(db, "posts");
  const eventsCollectionRef = collection(db, "events");
  useEffect(() => {
    const getPosts = async () => {
      const eventsData = await getDocs(eventsCollectionRef);
      const blogsData = await getDocs(blogsCollectionRef);
      setState(() => {
        return {
          eventsList: eventsData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
          blogsList: blogsData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        };
      });
    };

    getPosts();
  }, []);
  const events = state.eventsList;
  const blogs = state.blogsList;
  return (
    <footer className="footer container">
      <div className="container footer-top">
        <div className="row mt-3">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h5 className="footer-header">Packages</h5>
            <ul className="footer-link">
              {events.map(({ title }) => {
                return <li className="footer-link-item">{title}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h5 className="footer-header">Blogs</h5>
            <ul className="footer-link">
              {blogs.map(({ title, id }) => {
                return (
                  <li key={id} className="footer-link-item">
                    <Link to={`id`}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h5 className="footer-header">Quick Links</h5>
            <ul className="footer-link">
              <li className="footer-link-item">
                <Link to="/kalbo/about">About</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/kalbo/safari-packages">Packages</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/kalbo/custom-safaris">Custom safaris</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/kalbo/blogs">Blogs</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/kalbo/contact-us"> Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <h5 className="footer-header">Direct Contacts</h5>
            <ul className="footer-link">
              <li className="footer-link-item">
                <AiFillPhone />
                <Link to="tel:+254720 126177">+254720 126177</Link>
              </li>
              <li className="footer-link-item">
                <FaFacebookF />
                <Link to="/">kalboadventure</Link>
              </li>
              <li className="footer-link-item">
                <FiInstagram />
                <Link to="/">Kalbo adventures</Link>
              </li>
              <li className="footer-link-item">
                <GoLocation />
                <Link to="/">Nairobi,kenya</Link>
              </li>
                <ul className="social-icons">
                  <li>
                    <FiInstagram />
                  </li>
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <IoLogoWhatsapp />
                  </li>
                  <li>
                    <MdOutgoingMail/>
                  </li>
                </ul>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="footer-corporate-bottom-panel"
        style={{ backgroundColor: "var(--red)" }}
      >
        <div className="container">
          <div className="row justfy-content-xl-space-berween row-10 align-items-md-center2">
            <div className="col-sm-6 col-md-4 text-sm-right text-md-center">
              <div>
                <ul className="list-inline list-inline-sm footer-social-list-2">
                  <li>
                    <Link to="">
                      <AiFillPhone />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/https://wa.me/+254720 126177">
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 order-sm-first">
              <p className="rights">
                <span>&copy;&nbsp;</span>
                <span className="copyright-year"></span>
                <span>&nbsp;</span>
                <span>Kalbo adventures</span>. All Rights Reserved.
              </p>
            </div>
            <div className="col-sm-6 col-md-4 text-md-right">
              <p className="rights">
                <a href="/">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
