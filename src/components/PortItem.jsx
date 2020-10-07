import React from 'react';

const PortItem = props => {
  return (
    <div className="bg-bright_white w-1/4 min-w-100 text-center rounded shadow-md">
      <a href={props.site}>
        <h3 className="font-semibold text-lg mt-1 mb-5">{props.title}</h3>
        <img className="center w-11/12 m-auto" src={props.src} alt={props.title} />
      </a>
    </div>
  );
};

export default PortItem;
