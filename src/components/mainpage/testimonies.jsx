import ReactStars from "react-rating-stars-component";
const Testimonies = () => {
  return (
    <div className="testimonies">
      <h1 className="h-2 headers">Customer testimonies</h1>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="boxs project_widget">
              <div className="pw_content">
                <div className="pw_header">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value={4.5}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="pw_meta">
                  <p>
                    wow! its was such an amazing experience to travel with kalbo
                    adventures, the team is so fantastic, the price is quit
                    affordable, I mean every cent you remove be sure of spending
                    well.for every fan you require don't hesitate to contact k
                    albo adventures they won't fail you.
                  </p>
                  <small className="text-danger">Klary Samokoth</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="boxs project_widget">
              <div className="pw_content">
                <div className="pw_header">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value={4}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="pw_meta">
                  <p>
                    Kalbo is the best tour company. I absolutely love their
                    services. I have enjoyed all my trips with kalbo.
                  </p>
                  <small className="text-danger">Joseph G</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="boxs project_widget">
              <div className="pw_content">
                <div className="pw_header">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value={3.5}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="pw_meta">
                  <p>
                    Kalbo adventures is the best traveling company I would
                    recommend to all my friends. The experience I had with you
                    was superb. Thank you Kalbo adventures you the best! I'll
                    keep on choosing you!
                  </p>
                  <small className="text-danger">Elizabeth</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="boxs project_widget">
              <div className="pw_content">
                <div className="pw_header">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    value={5}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="pw_meta">
                  <p>
                    I Loved how the tour guides were so warm,hospitable and very
                    comforting to be around.also very energetic from the driver
                    to the photographer and the tour guides were very
                    amazing,I'll definitely go again with yuh to any other
                    adventures.
                  </p>
                  <small className="text-danger">Zipporah</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
