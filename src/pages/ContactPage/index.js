import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Blank from "../../components/Blank";
import map from "../../images/map.jpg";
import "./styles.css";

function ContactPage() {
    return (
        <>
            <NavBar />
            <section className="contact">
                <h3>Get in touch</h3>

                <main className="contact-main">
                    <div className="map">
                        <img src={map} alt="our location on map" />

                        <p>60 W 20TH STREET, SUITE 5G,</p>
                        <p>NEW YORK, NY 10011</p>
                    </div>

                    <div className="contact-info">
                        <div>
                            <p className="contact-key">General questions</p>
                            <p className="contact-value">hello@arpari.com</p>
                        </div>

                        <div>
                            <p className="contact-key">24/7 Customer support</p>
                            <p className="contact-value">support@arpari.com</p>
                        </div>

                        <div>
                            <p className="contact-key">Partnerships</p>
                            <p className="contact-value">
                                partnerships@arpari.com
                            </p>
                        </div>

                        <div>
                            <p className="contact-key">Careers</p>
                            <p className="contact-value">careers@arpari.com</p>
                        </div>

                        <button>+1-855-222-4995</button>
                    </div>
                </main>
            </section>

            <Blank />
            <Footer />
        </>
    );
}

export default ContactPage;
