import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/features/eventsfeature";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Crumbs from "./crumbs";
import BookButton from "./BookBtn";
import Details from "./details";
import Photos from "./photos";
import Itinerary from "./Itinerary";
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {MdOutlineNightsStay} from 'react-icons/md'
import Faq from "./Faq";
export default function BookingInfo(props) {
  const [postContent, setPostContent] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventsListState = useSelector((store) => {
    return store["events"];
  });
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const { loading, events, errorMessage } = eventsListState;
  useEffect(() => {
    for (var i = 0; i < events.length; i++) {
      var post = events[i];
      console.log(post);
      if (post.id === id) {
        setPostContent(post);
      }
    }
  }, []);
  const { url, description, title, price, numOfDays, destination , date} =
    postContent;
  console.log(postContent);
  return (
    <section className="section section-sm section-first bg-default text-md-left container mt-0">
      <div className="container mt-0">
        <Crumbs title={postContent.title} />
        <div className="booking m-2">
          <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
            <div className="col-lg-6 wow " data-aos="fade-down-left">
              <div className="box-width-lg-470">
                <img src={url} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 text-center wow "
              data-aos="fade-down-right"
            >
              <div className="product-details">
                <h4>{title}</h4>
                <span className="id number">{id}</span>
                <div className="days-details">
                <span>
                          <AiOutlineCalendar className="card-icon"/>
                          {date}
                        </span>
                        <span>
                          <WiDaySunny className="card-icon"/>
                          {2}
                          <MdOutlineNightsStay className="card-icon"/>
                          {1}
                        </span>
                </div>
                <div className="details">
                  <span>Description</span>
                  <p>
                  This is a luxurious package special for people with less time to spend in the wild safari features the famous Serengeti National park in the Central part of the park. With the fly-in-fly-out safari travel in custom-designed 4×4 safari vehicles with open roofs for game viewing.
                    </p>
                    <BookButton title={title} price={price} destination={destination}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-single gray-bg">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-8 m-15px-tb">
              <div className="underline mt-5"></div>
                <Details />
                <div className="underline mt-5"></div>
                <Photos />
                <div className="underline mt-5"></div>
                <Itinerary/>
                <div className="underline mt-5"></div>
                <Faq/>
              </div>
              <div
                className="col-lg-4 m-15px-tb blog-aside"
                data-aos="fade-left"
              >
                <div className="widget widget-latest-post">
                  <div className="widget-title">
                    <h3>Why choose us ?</h3>
                  </div>
                  <div className="widget-body">
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <p>Personalized Matching</p>
                        </div>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <p>Handpicked hotels</p>
                        </div>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <p>Wide Variety of Tours</p>
                        </div>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <p>24/7 Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
