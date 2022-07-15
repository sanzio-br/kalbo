import image from "../../images/SSI_0898.jpg"
export default function Custom() {
    return (
        <section className="section section-sm section-first bg-default text-md-left container mt-0">
            <div className="container">
                <div className="row row-50 justify-content-center align-items-xl-center">
                    <div className="col-md-10 col-lg-5 col-xl-6"><img src={image} alt="" width="519" height="564" />
                    </div>
                    <div className="col-md-10 col-lg-7 col-xl-6">
                        <h3 className="text-spacing-25 font-weight-normal title-opacity-9 titles" style={{'color':'var(--red)'}}>Why choose us</h3>
                        {/* <!-- Bootstrap tabs--> */}
                        <p className="describe">We are a world class travel agency that offers wide variety of services as listed below.</p>
                        <ul className="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary service-list">
                        <li>Hotel bookings </li>
                        <li>Budget camping and lodge safari</li>
                        <li>Private tours</li>
                        <li>City tours</li>
                        <li>Group tours</li>
                        <li>Corporate team building</li>
                        <li>Hotel & airport transfers</li>
                        <li>Game drives</li>
                        <li>Indoor and outdoor team building</li>
                        <li>Honeymoon packages</li>
                        <li>Vacation packages</li>
                        <li>Mountain climbing</li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}