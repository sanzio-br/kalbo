import { nanoid } from "nanoid";
import { GiAchievement } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
const Choise = () => {
  const data = [
    {
      id: nanoid(),
      icon: <GiAchievement />,
      title: "Wide Variety of Tours",
      text: "We offer a wide variety of personally picked tours with destinations all over the globe.",
    },
    {
      id: nanoid(),
      icon: <GiWorld />,
      title: "Personalized Matching",
      text: "Our unique matching system lets you find just the tour you want for your next holiday.",
    },
    {
      id: nanoid(),
      icon: <BiSupport />,
      title: "24/7 Support",
      text: "You can always get professional support from our staff 24/7 and ask any question you have.",
    },
    {
      id: nanoid(),
      icon: <AiFillFire />,
      title: "Handpicked hotels",
      text: "Our team offers only the best selection of affordable and luxury hotels to our clients.",
    },
    
  ];
  return (
    <div className="choise">
      <h1 className="h-2 headers mt-2">Why People Choose Us</h1>
      <div className="container">
        <div className="row clearfix">
          {data.map(
            ({ id, icon, text, title }) => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-12" key={id}>
                  <div className="boxs project_widget">
                    <div className="pw_content">
                      <div className="pw_header">
                          <span>{icon}</span>
                          <p>{title}</p>
                      </div>
                      <div className="pw_meta">
                          <p>{text}</p>
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

export default Choise;
