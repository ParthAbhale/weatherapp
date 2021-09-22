import React from "react";

const Parameters = (props) => {
  const { whether } = props;

  var date = new Date();
  var hour = (date.getHours() % 12 || 12)
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var time  = hour + ':' + min + ':' + sec 
  

  return (
    <>
      <div
        className={`card text-white bg-${props.bg} text-center my-3 mb-3 mx-2`}
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">
          <h4>{props.head} of <strong>{whether.name}</strong></h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <strong><p className="card-text">{`Today's ${props.head} of ${whether.name}`}</p></strong>
        </div>
        <div className="card-header">
          <h6>Last Upated At: {time}</h6>
        </div>
      </div>
    </>
  );
};

export default Parameters;
