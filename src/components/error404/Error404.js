import React from "react";
import { Alert } from "react-bootstrap";

export default function Error404({ mensaje }) {
  return (
    <div>
      <Alert variant="danger" className="d-flex justify-content-around">
        <h5 className="m-0 pb-0">{mensaje} </h5>
        <img
          style={{ width: "5%" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1200px-Feedbin-Icon-error.svg.png"
          alt="imgs"
        />
      </Alert>
    </div>
  );
}
