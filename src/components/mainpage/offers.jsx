import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getEvents } from '../../redux/features/eventsfeature'
import Button from "./button";
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {BsPeopleFill} from 'react-icons/bs'
// import { Link, Route, Routes } from "react-router-dom";
const Offers = () => {
  const dispatch = useDispatch();
  const eventsListState = useSelector((store)=>{
      return store['events']
  })
  useEffect(()=>{
      dispatch(getEvents())
  },[dispatch])
  const {events} = eventsListState;
  const newEventsList = events.slice(0, 4);
  return (
    <div>
      <h1 className="h-2 headers">Top safaris</h1>
      <div className="container">
        <div className="row clearfix">
          {newEventsList.map(
            ({ title, packageData, id, url}) => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                <div className="boxs project_widget">
                  <div className="pw_img">
                    <img className="img-responsive" src={url} alt="img" />
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <Link to={`/safari-packages/${id}`}>
                        <h6>{title}</h6>
                      </Link>
                      <small className="text-muted">
                        {packageData ? packageData.destination : ""}
                      </small>
                    </div>
                    <div className="pw_meta">
                      <span>
                        <AiOutlineCalendar className="card-icon" />
                        {packageData ? `${packageData.startDate} to ${packageData.endDate}`: ""}
                      </span>
                      <span>
                        <WiDaySunny className="card-icon" />
                        {packageData ? packageData.days : ""} 
                        <BsPeopleFill className="card-icon" />
                        {packageData ? packageData.people : ""}
                      </span>
                      <Link to={`/safari-packages/${id}`}>
                        <Button id={id} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default Offers;
