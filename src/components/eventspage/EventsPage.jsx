import React, { useEffect } from "react";
import Breadcrumbs from "./crubs";
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../redux/features/eventsfeature'
import {AiOutlineCalendar} from 'react-icons/ai'
import {WiDaySunny} from 'react-icons/wi'
import {MdOutlineNightsStay} from 'react-icons/md'
import { Link } from "react-router-dom";
import Button from "../mainpage/button";
export default function Events() {
  const dispatch = useDispatch();
    const eventsListState = useSelector((store)=>{
        return store['events']
    })
    useEffect(()=>{
        dispatch(getEvents())
    },[dispatch])
    const {loading, events, errorMessage} = eventsListState;
  return (
    <section style={{'textAlign':'center'}} className="container mt-0">
      <Breadcrumbs/>
      <h3 style={{
        'color': 'var(--red)',
        "margin":"5px auto"
        }}>
        Available Tours
        </h3>
      <div className="container mt-3">
        <div className="row clearfix">
        {
          events.map(({ title, destination, numOfDays, price, id, url,date }) => {
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
            )
          })}
      </div>
      </div>
    </section>
  )
}