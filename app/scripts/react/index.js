import React from 'react';
import ReactDOM from 'react-dom';
import NumberForm from './number-form.js'

class Index extends React.Component {
  constructor () {
    super();
  }
  showForm() {
    this.form.display();
    document.body.classList.add("no-scroll");
  }
  hideForm() {
    this.form.hide();
    document.body.classList.remove("no-scroll");
  }
  render() {
    return (
      <div>
        <Hero showForm={this.showForm.bind(this)} />
        <HIW />
        <Testimonials />
        <Locals />
        <NumberForm ref={(form) => this.form = form} hideSelf={this.hideForm.bind(this)} />
      </div>
    );
  }
};

const Hero = (props) => (
  <div className="hero">
    <div className="hero-layer"></div>
    <div className="container-fluid hero-content">
      <div className="row">
        <div className="col-md-6">
          <div className="hero-subheader">Ask for restaurants, bars, anything in Guadalajara</div>
          <div className="hero-header">Chat with a local to make it happen</div>
          <button className="cta" onClick={props.showForm} >Get started</button>
        </div>
        <div className="col-md-6 col-whatsapp">
          <img src={jsRoutes.controllers.Assets.versioned("images/whatsapp.gif").url} className="whatsapp" />
        </div>
      </div>
    </div>
  </div>
);

const HIW = (props) => (
  <div className="hiw">
    <div className="hiw-header">How it works</div>
    <div className="container-fluid hiw-steps">
      <div className="row">
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-hand-o-up" aria-hidden="true"></i>
          <div className="hiw-step-text">Tell us your interests and get assigned a local</div>
        </div>
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <div className="hiw-step-text">Chat with the local to get the best insights</div>
        </div>
        <div className="col-md-4 hiw-step-col">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <div className="hiw-step-text">Happy? Leave an optional tip to the local</div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = (props) => (
  <div className="testimonials">
    <div className="quote-symbol"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
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
    <div className="locals-subheader">meet some of our locals</div>
    <div className="locals-header">we're a community of travelers that want you to discover the city the way we know it</div>   
    <div className="container-fluid local-profiles">
      <div className="row">
        <div className="col-md-3 local-profile">
          <img src={jsRoutes.controllers.Assets.versioned("images/photo-luis.png").url} className="local-img" />
          <div className="local-name">Luis Galeana</div>
          <div className="local-categories">party, beer & technology</div>
        </div>
        <div className="col-md-3 local-profile">
          <img src={jsRoutes.controllers.Assets.versioned("images/photo-cheky.png").url} className="local-img" />
          <div className="local-name">Serguei Orozco</div>
          <div className="local-categories">architecture, food & running</div>
        </div>
        <div className="col-md-3 local-profile">
          <img src={jsRoutes.controllers.Assets.versioned("images/photo-lore.png").url} className="local-img" />
          <div className="local-name">Lorena Moreno</div>
          <div className="local-categories">coffee, local design & kitsch</div>
        </div>
        <div className="col-md-3 local-profile">
          <img src={jsRoutes.controllers.Assets.versioned("images/photo-gus.png").url} className="local-img" />
          <div className="local-name">Gustavo Dávila</div>
          <div className="local-categories">food, music & art</div>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("content"));
