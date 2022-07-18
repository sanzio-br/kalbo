import React, { useEffect, Suspense } from "react";
import Breadcrumbs from "./crubs";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/features/eventsfeature";
import { AiOutlineCalendar } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";
import { BsPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../mainpage/button";
export default function Events() {
  const dispatch = useDispatch();
  const eventsListState = useSelector((store) => {
    return store["events"];
  });
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const { events } = eventsListState;
  return (
    <section style={{ textAlign: "center" }} className="container mt-0">
      <Breadcrumbs />
      <h1 className="h-2 headers">All available Tour packages</h1>
      <div className="container mt-3">
        <div className="row clearfix">
          {events.map(({ title, packageData, id, url }) => {
            return (
              <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                <div className="boxs project_widget">
                  <div className="pw_img">
                    <Suspense fallback={<div>Loading...</div>}>
                      <img className="img-responsive" src={url} alt="img" />
                    </Suspense>
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <Link to={`/packages/${id}`}>
                        <h6>{title}</h6>
                      </Link>
                      <small className="text-muted">
                        {packageData ? packageData.destination : ""}
                      </small>
                    </div>
                    <div className="pw_meta">
                      {packageData ? (
                        packageData.startDate && packageData.endDate ? (
                          <>
                            <span>
                              <AiOutlineCalendar className="card-icon" />
                              {packageData
                                ? `${packageData.startDate} to ${packageData.endDate}`
                                : ""}
                            </span>
                          </>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <span>
                        <WiDaySunny className="card-icon" />
                        {packageData ? packageData.days : ""}
                      </span>
                      <span>
                        <BsFillPersonFill className="card-icon" />
                        {packageData ? packageData.minPeople : ""}
                        <BsPeopleFill className="card-icon" />
                        {packageData ? packageData.maxPeople : ""}
                      </span>
                      <Link to={`/packages/${id}`}>
                        <Button id={id} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
