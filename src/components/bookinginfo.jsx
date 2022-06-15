import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Crumbs from "./crumbs";
export default function BookingInfo(props) {
    const [eventsList, setEventsList] = useState([]);
    const [postContent, setPostContent] = useState({
        id: props.id,
        url: "",
        title: "",
        description: "",
    })
    console.log(props);
    const postsCollectionRef = collection(db, "events");

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(postsCollectionRef);
            setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getEvents()
        .then(
            ()=>{
                for (var i = 0; i < eventsList.length; i++) {
                    var post = eventsList[i];
                    console.log(post)
                    if (post.id === postContent.id) {
                        setPostContent({
                            ...postContent,
                            id: post.id,
                            url: post.url,
                            title: post.title,
                            description: post.description,
                        })
                    }
                }
            }
        )
        .catch(err => console.log(err))
        // for (var i = 0; i < eventsList.length; i++) {
        //     var post = eventsList[i];
        //     console.log(post)
        //     if (post.id === postContent.id) {
        //         setPostContent({
        //             ...postContent,
        //             id: post.id,
        //             url: post.url,
        //             title: post.title,
        //             description: post.description,
        //         })
        //     }
        // }
    }, []);
    return (
        <section className="section section-sm section-first bg-default text-md-left" >
            <div className="container">
                <Crumbs title={postContent.title} />
                <div className="row row-50 align-items-center justify-content-center justify-content-xl-between" key={postContent.id}>
                    <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
                        <img src={postContent.ur} alt="" width="556" height="382" />
                    </div>
                    <div className="col-lg-6 wow "
                        data-aos="fade-down-left" >
                        <div className="box-width-lg-470">
                            <h3 style={
                                { 'color': 'var(--red)' }
                            }>
                                {postContent.title}
                            </h3>
                            <p>{postContent.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}