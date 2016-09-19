import React from 'react';
import ReactDOM from 'react-dom';

const Index = (props) => (
  <div>
    <Hero />
    <HIW />
    <Testimonials />
    <Locals />
  </div>
);

const Hero = (props) => (
  <div className="hero">
    <div className="hero-subheader">Get recommendations of restaurants, bars and more in Guadalajara</div>
    <div className="hero-header">Chat with a local to make it happen</div>
    <Cta />
  </div>
);

const HIW = (props) => (
  <div className="hiw">
    <div className="header">Get the local insights of Guadalajara</div>
    <div className="subheader">Ask anything you want to a local expert</div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">Tell us what your interests are</div>
        <div className="col-md-4">Chat with a local to get recommendations</div>
        <div className="col-md-4">Happy? Leave an optional tip</div>
      </div>
    </div>
  </div>
);

const Testimonials = (props) => (
  <div className="testimonials">
    <div className="subheader">Meet some of our ambassadors</div>
    <div className="header">We're a community of travelers that want you to discover the city the way we know it</div>   
  </div>
);

const Locals = (props) => (
  <div className="locals">
     <div className="header">We're a community of travelers that want you to discover the city the way we know it</div>   
  </div>
);

const Cta = (props) => (
  <button className="cta">Get started</button>
);

ReactDOM.render(<Index />, document.getElementById("content"));
