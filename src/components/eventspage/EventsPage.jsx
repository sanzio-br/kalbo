import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import Breadcrumbs from "./crubs";
import BookButton from "../BookBtn";
export default function Events() {
  const [eventsList, setEventsList] = useState([]);
  const postsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(postsCollectionRef);
      setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  return (
    <section style={{'textAlign':'center'}} className="container mt-0">
      <Breadcrumbs/>
      <h3 style={{
        'color': 'var(--red)',
        "margin":"5px auto"
        }}>
        Available Tours
        </h3>
      <div className="container">
        <div className="row clearfix">
        {
          eventsList.map(({ title, destination, numOfDays, price, id, url,date }) => {
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
                      <small class="text-danger">{numOfDays}</small>
                      <BookButton price={price} destination={destination} title={title}/>
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