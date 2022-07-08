import React from 'react';
import message from "./message.svg";

const Blank = () => {
  return (
      <section className="blank">
          <img src={message} alt="message us" />
      </section>
  );
}

export default Blank;