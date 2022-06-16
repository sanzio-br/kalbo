import {Link} from 'react-router-dom'
const Footee =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <h5 className="footer-header">
                        Packages
                    </h5>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <h5 className="footer-header">
                        Blogs
                    </h5>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <h5 className="footer-header">Quick Links</h5>
                    <ul>
                        <li>
                            <Link to="/kalbo/about">About</Link>
                        </li>
                        <li>
                            <Link to="/kalbo/safari-packages">Packages</Link>
                        </li>
                        <li>
                            <Link to="/kalbo/"></Link>
                        </li>
                        <li>
                            <Link to=""></Link>
                        </li>
                        <li>
                            <Link to="/kalbo/contact-us"> Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <h5 className="footer-header">
                        Direct Contacts
                    </h5>
                </div>
            </div>
        </div>
    )
}
export default Footee;