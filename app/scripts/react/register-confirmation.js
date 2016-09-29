import React from 'react';
import ReactDOM from 'react-dom';

const RegisterConfirmation = (props) => (
  <div className="confirmation-container">
    <div className="thanks">Thanks for registering!</div>
    <div className="title">A local will be assigned and will get in touch with you soon.</div>
  </div>
);


ReactDOM.render(<RegisterConfirmation />, document.getElementById("content"));
