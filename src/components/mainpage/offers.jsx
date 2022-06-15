import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import BookButton from "../BookBtn";
// import { Link, Route, Routes } from "react-router-dom";
const Offers = () => {
  const [eventsList, setEventsList] = useState([]);
  const postsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(postsCollectionRef);
      setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  const size = 4;
  const newEventsList = eventsList.slice(0, size);
  return (
    <div>
      <h1 className="h-2 headers">Top safaris</h1>
      <div className="container">
        <div className="row clearfix">
          {newEventsList.map(
            ({ url, id, title, days, destination, price, date }) => {
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
                        <span>ksh : {price}</span>
                        <small className="text-muted">{date}</small>
                        <BookButton
                          price={price}
                          destination={destination}
                          title={title}
                        />
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
