export default function ContactsForm() {
    return (
        <section className="section section-sm section-last text-left">
            <div className="container">
                <article className="title-classNameic">
                    <div className="title-classNameic-title">
                        <h3 style={{'color':'var(--red)'}}>Get in touch</h3>
                    </div>
                    <div className="title-classNameic-text">
                        <p>If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
                    </div>
                </article>
                <form className="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                    <div className="row row-14 gutters-14">
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input className="form-input" id="contact-your-name-2" type="text" name="name" data-constraints="@Required" />
                                <label className="form-labels" for="contact-your-name-2">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input className="form-input" id="contact-email-2" type="email" name="email" data-constraints="@Email @Required" />
                                <label className="form-labels" for="contact-email-2">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-wrap">
                                <input className="form-input" id="contact-phone-2" type="text" name="phone" data-constraints="@Numeric" />
                                <label className="form-labels" for="contact-phone-2">Phone</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-wrap">
                                <label className="form-labels" for="contact-message-2">Message</label>
                                <textarea className="form-input textarea-lg" id="contact-message-2" name="message" data-constraints="@Required"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="button button-primary button-pipaluk" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}