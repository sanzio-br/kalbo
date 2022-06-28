import img from "../../images/Kalbo Adventures Karuru Experience 2021-193.jpg";
import Carousel from "react-bootstrap/Carousel";
import {IoMdPhotos} from 'react-icons/io'
const Photos = () => {
  return (
      <div className="article-img">
          <h5 className="details-header text-start">
          <IoMdPhotos/>
          <span className="my-5">Photos</span>
          </h5>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default Photos;
