import React from 'react';
import ReactDOM from 'react-dom';

const Index = (props) => (
  <div>
    <NavBar />
    <Hero />
    <HIW />
    <Testimonials />
    <Locals />
  </div>
);

const NavBar = (props) => (
  <div className="locals-navbar">
    <div className="navbar-link">Get Started</div>
    <div className="navbar-link">Contact Us</div>
    <div className="brand">Ambassadors</div>
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
  </div>
);

const Locals = (props) => (
  <div className="locals">
    <div className="locals-subheader">Meet some of our ambassadors</div>
    <div className="locals-header">We're a community of travelers that want you to discover the city the way we know it</div>   
  </div>
);

ReactDOM.render(<Index />, document.getElementById("content"));
