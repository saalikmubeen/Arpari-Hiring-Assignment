import React from 'react';
import "./styles.css"

const SectionHead = (props) => {
  return (
      <section className="section-head">
          <div className="headline">
              <h3>{props.title}</h3>
              <h1>{props.motto}</h1>
          </div>

          <div className="goal">

              {props.children}
          </div>
      </section>
  );
}

export default SectionHead