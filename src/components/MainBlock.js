// Dependencies
import React from 'react';

// Styles
import './../styles/MainBlock.css';

const MainBlock = (props) => {
  return (
    <section className="main-block">
      <div>
        <h2>{props.title}</h2>
        <br />
        {/* 
          props.type === 'friendslist' ? <List />
          : props.type === 'info' ? <Info />
          : props.type === 'infoform' ? <Form />
        */}
      </div>
    </section>
  );
}

export default MainBlock;