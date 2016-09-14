import React from 'react';
import ReactDOM from 'react-dom';

const Index = (props) => (
  <div>
    <Hero />
    <HIW />
    <Testimonials />
    <Locals />
    <LastCTA />
  </div>
);

const Hero = (props) => (
  <div className="hero">
    <div className="hero-sub-header">Subheader</div>
    <div className="hero-header">Header</div>
    <Cta />
  </div>
);

const HIW = (props) => (
  <div className="hiw">
    <div className="header">How it works</div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">Step 1</div>
        <div className="col-md-4">Step 2</div>
        <div className="col-md-4">Step 3</div>
      </div>
    </div>
  </div>
);

const Testimonials = (props) => (
  <div className="testimonials">
     <div className="header">Testimonials</div>   
  </div>
);

const Locals = (props) => (
  <div className="locals">
     <div className="header">Locals</div>   
  </div>
);

const LastCTA = (props) => (
  <div className="last-cta">
    <Cta />
  </div>
);

const Cta = (props) => (
  <button className="cta">Sign up - it's free</button>
);

ReactDOM.render(<Index />, document.getElementById("content"));
