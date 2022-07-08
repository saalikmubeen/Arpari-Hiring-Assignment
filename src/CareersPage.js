import React from 'react';
import NavBar from "./NavBar";
import SectionHead from "./SectionHead";
import Footer from "./Footer";
import Blank from "./Blank";
import "./careers.css";


const RoleItem = (props) => {
    return (
        <div className="roles-item">
            <div className="role-header">
                <div>
                    <p className="role-name">{props.roleName}</p>
                    <p className="role-loc">{props.roleLoc}</p>
                </div>

                <button className="btn">Apply</button>
            </div>

            <p className="role-desc">{props.roleDesc}</p>

            <div className="horizontal-line" />
        </div>
    );
};


const CareersPage = () => {
  return (
      <div>
          <NavBar />

          <SectionHead title="Careers" motto="Drive, passion and curiosity">
              <p>
                  Arpari is looking for talented, driven people to help build
                  the future of CRE finance. We're a small, growing, NYC-based
                  team.
              </p>
              <p>
                  If you're excited to transform this industry as we are, we'd
                  love to hear from you.
              </p>
          </SectionHead>

          <section className="careers-intro">
              <h3>Our Values</h3>

              <div className="values-list">
                  <div className="value-item">
                      <h1>Customers First</h1>

                      <p>
                          At Arpari, our customers are our #1 priority. We are
                          always thinking of how to better serve CRE owners
                          through expanding our services and providing
                          best-in-class customer experience.
                      </p>
                  </div>

                  <div className="value-item">
                      <h1>Innovative solutions </h1>

                      <p>
                          The core of our product offering is to find creative
                          ways to help CRE owners better manage their
                          portfolios, save money, and gain the best insights. We
                          are here to find new solutions to old industry
                          problems.
                      </p>
                  </div>

                  <div className="value-item">
                      <h1>Best technology</h1>

                      <p>
                          Technology is necessary to properly service our
                          customers. We have a strong engineering team with
                          extensive experience in financial technology.
                      </p>
                  </div>
              </div>

              <button>Learn More</button>
          </section>

          <section className="roles">
              <h3>Open Roles</h3>

              <div className="roles-list">
                  <RoleItem
                      roleName="Senior Engineer"
                      roleLoc="NYC - New York/ Full-time"
                      roleDesc={`Help manage our server infrastructure, databases, and CI/CD tooling.
                      Contribute to and improve data analysis pipeline, including export, transformation, and 
                      dashboarding.`}
                  />
                  <RoleItem
                      roleName="Junior Engineer"
                      roleLoc="NYC - New York/ Full-time"
                      roleDesc={`Help manage our server infrastructure, databases, and CI/CD tooling.
                      Contribute to and improve data analysis pipeline, including export, transformation, and 
                      dashboarding.`}
                  />
                  <RoleItem
                      roleName="Business Coordinator"
                      roleLoc="NYC - New York/ Full-time"
                      roleDesc={`Help manage our server infrastructure, databases, and CI/CD tooling.
                      Contribute to and improve data analysis pipeline, including export, transformation, and 
                      dashboarding.`}
                  />

                  <RoleItem
                      roleName="Jr. Engineer"
                      roleLoc="NYC - New York/ Full-time"
                      roleDesc={`Help manage our server infrastructure, databases, and CI/CD tooling.
                      Contribute to and improve data analysis pipeline, including export, transformation, and 
                      dashboarding.`}
                  />
              </div>
          </section>

          <section className="careers-join">
              <p className="title">Join the journey</p>
              <p>
                  If you are excited about what we're doing here at Arpari, but
                  don't see a role fitting your background or skills, we'd still
                  like to hear from you.
              </p>
              <p>
                  You can send the careers team an email with your CV and what
                  opportunity you are looking for.
              </p>

              <button>Email us</button>
          </section>

          <Blank />
          <Footer />
      </div>
  );
}

export default CareersPage