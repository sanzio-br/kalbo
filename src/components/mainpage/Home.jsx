import Banner from "./banner";
import Bookpage from "./bookpage";
import Choise from "./choise";
import Featured from "./featured";
import Hero from "./hero";
import Offers from "./offers";
import Testimonies from "./testimonies";

const Home = ()=>{
    return(
        <>
        <Hero/>
        <div className="container">
            <Banner/>
            <Offers/>
            <Choise/>
            <Featured/>
            <Bookpage/>
            <Testimonies/>
        </div>
        </>
    )
}
export default Home;