import image from "../../images/SSI_0898.jpg";
export default function Hire() {
  return (
    <section className="section section-sm section-first bg-default text-md-left container mt-2">
      <div className="container">
        <div className="row row-50 justify-content-center align-items-xl-center">
          <div className="col-md-10 col-lg-5 col-xl-6">
            <img src={image} alt="" width="519" height="564" />
          </div>
          <div className="col-md-10 col-lg-7 col-xl-6">
            <h1 className="h-2 headers">Car Hire services</h1>
            <p className="describe">
              We are a world class travel agency that offers wide variety of
              services as listed below.
            </p>
            <ul className="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary service-list">
                <li>11 seater matatu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
