
export default function Bookpage() {
    return (
      <section className="section bg-default text-center offset-top-50 book" style={{'color':'#000'}}>
        <div className="parallax-container">
          <div className="parallax-content section-xl section-inset-custom-1 context-dark bg-overlay-2-21">
            <div className="container">
              <h2 className="heading-2 oh font-weight-normal wow slideInDow" data-aos="fade-down">
                <span className="d-block font-weight-semi-bold">
                  First-className Impressions
                </span>
                <span className="d-block font-weight-light">
                  are Waiting for You!
                </span>
              </h2>
              <p className="text-width-medium text-spacing-75 wow"
              data-aos="fade-right"
              style={{'color':'#fff'}}>
                Our agency offers travelers various tours and excursions
                with destinations all over the world. Browse our website to find your dream tour!
              </p>
              <a className="button button-secondary button-pipaluk"
                href="/safari-packages" data-aos="fade-up">
                Book a Tour Now
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }