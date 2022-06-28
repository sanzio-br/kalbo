const Details = () => {
  return (
    <div>
      <h5 className="details-header center">Details</h5>
      <div className="underline"></div>
      <div className="depature">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Depature & return</p>
            </div>
          </div>
          <div
            className="col-lg-6 text-center wow "
            data-aos="fade-down-right "
          >
            <ul className="text-start">
              <li>JKIA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="inclusives">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Prices inclusives</p>
            </div>
          </div>
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <ul className="text-start price-list-inclusive">
              <li>Air fares</li>
              <li>3 Nights Hotel Accomodation</li>
              <li>Tour Guide</li>
              <li>Entrance Fees</li>
              <li>All transportation in destination location</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="exclusives">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Prices exclusives</p>
            </div>
          </div>
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <ul className="text-start price-list-exclusive">
              <li>All transportation in destination location</li>
              <li>All transportation in destination location</li>
              <li>All transportation in destination location</li>
              <li>All transportation in destination location</li>
              <li>All transportation in destination location</li>
              <li>All transportation in destination location</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
