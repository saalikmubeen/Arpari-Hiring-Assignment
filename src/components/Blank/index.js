import React from 'react';
import message from "../../images/message.svg";
import "./styles.css";

const Blank = () => {
  return (
      <section className="blank">
          <img src={message} alt="message us" />
      </section>
  );
}

export default Blank;