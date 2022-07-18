import { AiOutlineHome } from 'react-icons/ai'
import { BsFillPhoneFill , BsChatSquareDots} from 'react-icons/bs'
export default function Contactinfo() {
    return (
        <section className="section section-sm section-first">
            <div className="container">
                <div className="row row-30 justify-content-center">
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <article className="box-contacts">
                            <div className="box-contacts-body">
                                <div className="box-contacts-icon fl-bigmug-line-cellphone55">
                                    <BsFillPhoneFill />
                                </div>
                                <div className="box-contacts-decor"></div>
                                <p className="box-contacts-link">
                                    <a href="tel:+254720 126177">
                                        +254720 126177
                                    </a>
                                </p>
                                <p className="box-contacts-link">
                                    <a href="https://wa.me/+254782021167">
                                        +254782021167
                                    </a>
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <article className="box-contacts">
                            <div className="box-contacts-body">
                                <div className="box-contacts-icon fl-bigmug-line-up104">
                                    <AiOutlineHome />
                                </div>
                                <div className="box-contacts-decor"></div>
                                <p className="box-contacts-link">
                                    <a href="/kalbo-main-app/Contacts">
                                        nairobi kenya
                                    </a>
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <article className="box-contacts">
                            <div className="box-contacts-body">
                                <div className="box-contacts-icon fl-bigmug-line-chat55">
                                    <BsChatSquareDots/>
                                </div>
                                <div className="box-contacts-decor"></div>
                                <p className="box-contacts-link">
                                    <a href="mailto:kalboadventure2019@gmail.com">
                                        kalboadventure2019@gmail.com
                                    </a>
                                </p>
                                <p className="box-contacts-link">
                                    <a href="mailto:kalboadventure2019@gmail.com">
                                        kalboadventure2019@gmail.com
                                    </a>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}