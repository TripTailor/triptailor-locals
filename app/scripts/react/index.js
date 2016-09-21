import React from 'react';
import ReactDOM from 'react-dom';

const Index = (props) => (
  <div>
    <NavBar />
    <Hero />
    <HIW />
    <Testimonials />
    <Locals />
    <Footer />
  </div>
);

const NavBar = (props) => (
  <div className="locals-navbar">
    <div className="navbar-link">Get Started</div>
    <div className="navbar-link">Contact Us</div>
    <div className="brand">Contact Locals</div>
  </div>
);

const Hero = (props) => (
  <div className="hero">
    <div className="hero-subheader">Get recommendations of restaurants, bars and more in Guadalajara</div>
    <div className="hero-header">Chat with a local to make it happen</div>
    <button className="cta">Get started</button>
  </div>
);

const HIW = (props) => (
  <div className="hiw">
    <div className="hiw-header">Get the local insights of Guadalajara</div>
    <div className="hiw-subheader">Ask anything you want to a local expert</div>
    <div className="container-fluid hiw-steps">
      <div className="row">
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-hand-o-up" aria-hidden="true"></i>
          <div className="hiw-step-text">Tell us what your interests are</div>
        </div>
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <div className="hiw-step-text">Chat with a local to get recommendations</div>
        </div>
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <div className="hiw-step-text">Happy? Leave an optional tip</div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = (props) => (
  <div className="testimonials">
    <div className="quote-symbol">"</div>
    <div className="quote">Luis was a huge help in discovering the local sweet spots in Guadalajara. From craft beer and street tacos to house music and underground clubs...</div>
    <div className="user">
      <div className="user-info">
        <div className="user-name">Alexander Logan</div>
        <div className="user-location">Reno, Nevada</div>
      </div>
      <img className="user-img" src={jsRoutes.controllers.Assets.versioned("images/alex.jpg").url} />
    </div>
  </div>
);

const Locals = (props) => (
  <div className="locals">
    <div className="locals-subheader">meet some of our ambassadors</div>
    <div className="locals-header">we're a community of travelers that want you to discover the city the way we know it</div>   
    <div className="container-fluid local-profiles">
      <div className="row">
        <div className="col-md-4 local-profile">
          <img className="local-img" />
          <div className="local-name">Luis Galeana</div>
          <div className="local-categories">party, beer & technology</div>
        </div>
        <div className="col-md-4 local-profile">
          <img className="local-img" />
          <div className="local-name">Serguei Orozco</div>
          <div className="local-categories">architecture, beer & running</div>
        </div>
        <div className="col-md-4 local-profile">
          <img className="local-img" />
          <div className="local-name">Lorena Moreno</div>
          <div className="local-categories">art, fashion & dancing</div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = (props) => (
  <div className="footer">© Contact Locals 2016. The Apple, and Messenger logos are trademarks of their respective owners.</div>
);

ReactDOM.render(<Index />, document.getElementById("content"));
