import ReactPlayer from 'react-player/youtube'
export default function About() {
  return (
    <section className="section section-sm section-first bg-default text-md-left" >
      <div className="container">
      <h1 className="h-2 headers">About to Kalbo Adventures</h1>
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow "
            data-aos="fade-down-left" >
            <div className="box-width-lg-470">
              <p>
              We are a Tours and Travel Company based in Nairobi Kenya whose main interest is to change the face of travel in Africa by creating an authentic sustainable travel experience like the world has never experienced before. We design customized trips in Kenya and East Africa at large. Whether you are on a high or a low budget,we will work within your budget to give you a quality luxury time.
              </p>
              <p>
              Unsure about travelling now or in the near future? We have a flexible and risk-free booking policy, which also allows you to pay for your trip in installments.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <ReactPlayer 
            controls= {true}
            width='100%'
            height='100%'
            url="https://www.youtube.com/watch?v=YZTmOVcPYIA"/>
          </div>
        </div>
      </div>
    </section>
  )
}