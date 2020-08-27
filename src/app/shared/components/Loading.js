import React from "react";
import { MDBSpinner } from "mdbreact";

const Loading = () => {
  return (
    <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div>
        <MDBSpinner green crazy big />
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
