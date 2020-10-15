import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>
                            Let us handle your <br/>
                            project, professionally.
                        </h3>
                        <p className="mt-4">
                            With well written codes, we build amazing apps for all <br/>
                            platforms, mobile and web apps in general.
                        </p>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-5">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Your email address"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" rows="6" placeholder="Your message"></textarea>
                        </div>
                    <button type="submit" className="btn px-5">Send</button>
                    </form>
                    </div>
                </div>
                <p className="text-center mb-0  mt-5 py-5">Copyright Orange Labs 2020</p>
            </div>
        </div>
    );
};

export default Contact;