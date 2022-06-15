import main from "../../images/wildlife/pexels-pixabay-247376.jpg";
import lion from "../../images/wildlife/pexels-iurii-ivashchenko-3498323.jpg";
import elph from "../../images/wildlife/pexels-pixabay-70080.jpg";
import gir from "../../images/wildlife/pexels-magda-ehlers-1319515.jpg";
import lie from "../../images/wildlife/pexels-charl-durand-6436445.jpg";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const Featured = () => {
    const [eventsList, setEventsList] = useState([]);
  const postsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(postsCollectionRef);
      setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  const title = eventsList.title;
  return (
    <div className="featured">
        <h1 className="h-2 headers">Upoming safaris</h1>
      <div className="container profile">
        <div className="profile-img-list">
          <div className="profile-img-list-item main with-number">
            <a href="/" className="profile-img-list-link">
              <span className="profile-img-content">
                <img src={elph} alt="" />
              </span>
              <div className="profile-img-number">{title}</div>
            </a>
          </div>
          <div className="profile-img-list-item with-number">
            <a href="/" className="profile-img-list-link">
              <span className="profile-img-content">
                <img src={main} alt="" />
              </span>
              <div className="profile-img-number">{title}</div>
            </a>
          </div>
          <div className="profile-img-list-item with-number">
            <a href="/" className="profile-img-list-link">
              <span className="profile-img-content">
                <img src={lion} alt="" />
              </span>
              <div className="profile-img-number">{title}</div>
            </a>
          </div>
          <div className="profile-img-list-item with-number">
            <a href="/" className="profile-img-list-link">
              <span className="profile-img-content">
                <img src={lie} alt="" />
              </span>
              <div className="profile-img-number">{title}</div>
            </a>
          </div>
          <div className="profile-img-list-item with-number">
            <a href="/" className="profile-img-list-link">
              <span className="profile-img-content">
                <img src={gir} alt="" />
              </span>
              <div className="profile-img-number">{title}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
