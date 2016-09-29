import React from 'react';
import ReactDOM from 'react-dom';

const NavBar = (props) => (
  <div className="locals-navbar">
    {/* <div className="navbar-link"><a href={jsRoutes.controllers.HomeController.numberForm().url}>Get Started</a></div> */}
    {/* <div className="navbar-link">Contact Us</div> */}
    <div className="brand"><a href={jsRoutes.controllers.HomeController.index().url}>contact<span className="brand-locals">locals</span>.com</a></div>
  </div>
);

ReactDOM.render(<NavBar />, document.getElementById("header"));

const Footer = (props) => (
  <div className="footer">© Contact Locals 2016.</div>
);

ReactDOM.render(<Footer />, document.getElementById("footer"));
