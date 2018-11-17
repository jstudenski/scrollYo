import React from 'react';
import './Section.css';


const Section = (props) => {
  return (
    <section
      style={{
        backgroundColor: props.background
      }}
      id={props.id}
      className={props.class}
    >
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}

export default Section;
