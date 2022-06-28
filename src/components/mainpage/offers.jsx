import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getEvents } from '../../redux/features/eventsfeature'
import Button from "./button";
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {MdOutlineNightsStay} from 'react-icons/md'
// import { Link, Route, Routes } from "react-router-dom";
const Offers = () => {
  const dispatch = useDispatch();
  const eventsListState = useSelector((store)=>{
      return store['events']
  })
  useEffect(()=>{
      dispatch(getEvents())
  },[dispatch])
  const {loading, events, errorMessage} = eventsListState;
  console.log(events)
  const newEventsList = events.slice(0, 4);
  return (
    <div>
      <h1 className="h-2 headers">Top safaris</h1>
      <div className="container">
        <div className="row clearfix">
          {newEventsList.map(
            ({ url, id, title,numOfDays, destination, price, date }) => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                  <div className="boxs project_widget">
                    <div className="pw_img">
                      <img className="img-responsive" src={url} alt="img" />
                    </div>
                    <div className="pw_content">
                      <div className="pw_header">
                        <h6>{title}</h6>
                        <small className="text-muted">{destination}</small>
                      </div>
                      <div className="pw_meta">
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
                        <Link to={`/kalbo/safari-packages/${id}`}>
                        <Button id={id}/>
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
