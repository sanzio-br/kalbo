import Accordance from "./accordances";
import BreadcrumbsBlogs from "./breadcrumbs";

const About = () => {
    return (
        <div className="about-page container mt-0">
            <BreadcrumbsBlogs/>
            <h1 className="h-2 headers">About</h1>
            <div className="about">
                <p className="mt-2">
                    We are a Tours and Travel Company based in Nairobi Kenya whose main interest is to change the face of travel in Africa by creating an authentic sustainable travel experience like the world has never experienced before. We design customized trips in Kenya and East Africa at large. Whether you are on a high or a low budget,we will work within your budget to give you a quality luxury time.
                </p>
                <p className="mt-2">
                    Our trips include Beach tours, Camping, Mountain climbing, park drives, Zip-lining and cycling tours that take in awe-inspiring scenery and breath-taking wildlife encounters.
                </p>
                <p className="mt-2">
                    We have adventure holidays designed specifically for Families, mixed activity holidays and seasonal getaways, perfect for those interested in private tours.
                </p>
                <p className="mt-2">
                    We have unforgettable experiences in our top destinations. A journey of discovery with Kalbo Adventures is just some of the memories waiting to be made.
                </p>
                <p className="mt-2">
                    We also have a collection of holidays for 30s to 40s to help busy professionals maximize their annual leave.  Join us now for the adventure holiday of a life time.
                </p>
            </div>
            <Accordance/>
        </div>
    )
}
export default About;