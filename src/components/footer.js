import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { GoLocation } from 'react-icons/go'
import { AiFillPhone } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="section footer-corporate container " style={{ 'backgroundColor': 'var(--red)',
        'color':'#ffffff' }} >
            <div className="footer-corporate-inset" data-aos="fade-up" >
                <div className="container">
                    <div className="row row-40 justify-content-lg-between">
                        <div className="col-sm-6 col-md-12 col-lg-3 col-xl-4" >
                            <div className="oh-desktop">
                                <div className="wow slideInRight" data-wow-delay="0s">
                                    <h6 className="text-spacing-100 text-uppercase">
                                        Contact us
                                    </h6>
                                    <ul className="footer-contacts d-inline-block d-sm-block">
                                        <li>
                                            <div className="unit">
                                                <div className="unit-left">
                                                    <span className="icon">
                                                        <AiFillPhone />
                                                    </span>
                                                </div>
                                                <div className="unit-body">
                                                    <a className="link-phone" href="tel:+254720126177">
                                                        +254720 126177
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="unit">
                                                <div className="unit-left">
                                                    <span className="icon fa fa-envelope"></span>
                                                </div>
                                                <div className="unit-body">
                                                    <a className="link-aemail" href="mailto:kalboadventure@gmail.com">
                                                        kalboadventure@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="unit">
                                                <div className="unit-left">
                                                    <span className="icon">
                                                        <GoLocation />
                                                    </span>
                                                </div>
                                                <div className="unit-body">
                                                    <a className="link-location" href="https://www.google.com/maps/place/Kalbo+adventures/@-4.2419959,24.4750732,4z/data=!3m1!4b1!4m5!3m4!1s0x182f19f16292a4dd:0x87ad24eb954e914c!8m2!3d-4.4703932!4d42.9039724">
                                                        Nairobi, Kenya
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-3 col-xl-4">
                            <div className="oh-desktop">
                                <div className="wow slideInDown" data-wow-delay="0s">
                                    <h6 className="text-spacing-100 text-uppercase">
                                        Popular Blogs
                                    </h6>
                                    <article className="post post-minimal-2">
                                        <p className="post-minimal-2-title">
                                            <a href="/Blogs">
                                                Your Personal Guide to 5 Best Places to Visit on Earth
                                            </a>
                                        </p>
                                        <div className="post-minimal-2-time">
                                            <time dateTime="2019-05-04">
                                                May 04, 2019
                                            </time>
                                        </div>
                                    </article>
                                    <article className="post post-minimal-2">
                                        <p className="post-minimal-2-title">
                                            <a href="/Blogs">
                                                Top 10 Hotels: Rating by Kalbo adventures Experts
                                            </a>
                                        </p>
                                        <div className="post-minimal-2-time">
                                            <time dateTime="2019-05-04">
                                                May 04, 2019
                                            </time>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-11 col-md-7 col-lg-5 col-xl-4" >
                            <div className="oh-desktop">
                                <div className="wow slideInLeft" data-wow-delay="0s">
                                    <h6 className="text-spacing-100 text-uppercase">
                                        Quick links
                                    </h6>
                                    <ul className="row-6 list-0 list-marked list-marked-md list-marked-secondary list-custom-2">
                                        <li><a href="/kalbo-main-app/About">About us</a></li>
                                        <li><a href="/kalbo-main-app/Events">Our Tours</a></li>
                                        <li><a href="/kalbo-main-app/Blogs">Blog</a></li>
                                        <li><a href="/kalbo-main-app/Contacts">Contacts</a></li>
                                    </ul>
                                    <div className="group-md group-middle justify-content-sm-start">
                                        <a className="button button-lg button-primary button-ujarak" href="/Contacts">
                                            Get in
                                            touch
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-corporate-bottom-panel" style={{
                'backgroundColor': 'var(--red)',
                'color': '#ffffff'
            }}>
                <div className="container">
                    <div className="row justfy-content-xl-space-berween row-10 align-items-md-center2">
                        <div className="col-sm-6 col-md-4 text-sm-right text-md-center">
                            <div>
                                <ul className="list-inline list-inline-sm footer-social-list-2">
                                    <li><Link to=""><AiFillPhone /></Link></li>
                                    <li><Link to="/"><FiInstagram /></Link></li>
                                    <li><Link to="/"><FaFacebookF /></Link></li>
                                    <li><Link to="/https://wa.me/+254720 126177"><IoLogoWhatsapp /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 order-sm-first">
                            <p className="rights">
                                <span>&copy;&nbsp;</span><span className="copyright-year"></span><span>&nbsp;</span><span>Kalbo adventures</span>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-4 text-md-right">
                            <p className="rights">
                                <a href="/">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}