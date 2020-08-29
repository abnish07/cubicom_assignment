import React from "react";
import "./Dashboard.css";

// Reusable component for booking box

function BookingCard(props) {
  const { number, iconImage, title, noOfWays } = props;

  return (
    <>
      <div className="box firstBox">
        <div className="insideBox">
          <div className="number">{number}</div>
          <span className="topRightCircle">
            <img src={iconImage} className="icon" />
          </span>
        </div>
        <p className="bookingWord">{title}</p>

        <small className="ways">{noOfWays}</small>
      </div>
    </>
  );
}

export default BookingCard;
