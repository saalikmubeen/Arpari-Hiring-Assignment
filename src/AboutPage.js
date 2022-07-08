import office from "./office.jpg";
import technology from "./technology.svg";
import service from "./service.svg";
import solution from "./solution.svg";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./App.css";
import SectionHead from "./SectionHead";
import Blank from "./Blank";
import "./about.css";

function AboutPage() {
    return (
        <div className="App">
            <NavBar />

            <SectionHead
                title="Our Company"
                motto="Where CRE finance needs come together"
            >
                <p>
                    Arpari was built to change how CRE owners interact with
                    their banks. We’ve seen from the inside how the banking
                    industry underserves the CRE industry and, through
                    technology and a new ideas, are working to provide a
                    world-class CRE financial experience.
                </p>
                <p>
                    At the core of our platform is the idea that banking and
                    finance-related tools should be integrated on one platform.
                    Our platform aims to provide a full-service and integrated
                    experience.
                </p>

                <p>
                    We were founded in New York by a team with extensive
                    experience of CRE and banking technology.
                </p>
            </SectionHead>

            <section className="about-2">
                <div className="office-img">
                    <img src={office} alt="office" />
                </div>

                {/* <img src={office} alt="office" className="office-img" /> */}

                <div className="about-approach">
                    <h3>Our Approach</h3>
                    <p>
                        Whether you’re a finanial sponsor, family office,
                        syndicator, or individual investor, we’re here for you.
                        Real estate is a relationship-driven business and we
                        drive the best results for our customers when we’re with
                        them at every step.
                    </p>

                    <p>
                        Changing how you manage your portfolio finances can be
                        complicated, that’s why we assign each customer a
                        dedicted success manager. Our account managers are able
                        to assist with all elements of our product.
                    </p>

                    <button>Explore features</button>
                </div>
            </section>

            <section className="mission">
                <h3>Our Mission</h3>

                <div className="mission-list">
                    <div className="mission-item mission-tech">
                        <h1>
                            <img src={technology} alt="" />
                            Technology-first
                        </h1>

                        <p>
                            Technology-first We do not rely on a legacy
                            technology. We utilize leading technology to improve
                            the user experience at every step.
                        </p>
                    </div>

                    <div className="mission-item mission-service">
                        <h1>
                            <img src={service} alt="" />
                            Certainty of Service
                        </h1>

                        <p>
                            Certainty of service Unlike your bank branch, we’re
                            always open, with account managers available 24/7.
                        </p>
                    </div>

                    <div className="mission-item mission-solution">
                        <h1>
                            <img src={solution} alt="" />
                            Practical solution
                        </h1>

                        <p>
                            Practical solutions We’re constantly working to
                            expand and optimize our offering for the needs of
                            CRE owners.
                        </p>
                    </div>

                    <div className="mission-item mission-portfolio">
                        <h1>
                            <img src={service} alt="" />
                            Portfolio-view
                        </h1>

                        <p>
                            Portfolio-view We understand that CRE owners need
                            banking solutions for both the individual property
                            and the portfolio as a whole. We recognize this
                            distinction and have built our platform around this
                            principle.
                        </p>
                    </div>
                </div>

                <button className="btn">Explore Features</button>
            </section>

            <Blank />

            <Footer />
        </div>
    );
}

export default AboutPage;
