import React from 'react';
import ReactDOM from 'react-dom';
import * as util from '../util';

export default class NumberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      selectedCategories: [],
      number: "",
      nameError: false,
      numberError: false
    };
    this.categories = [
      "food",
      "nightlife",
      "culture",
      "sightseeing",
      "shopping",
      "events",
      "other"
    ]
  }
  updateName(e) {
    this.setState({name: e.target.value});
  }
  updateNumber(e) {
    this.setState({number: e.target.value});
  }
  validateForm(e) {
    this.setState({nameError: this.state.name === ""});
    this.setState({numberError: this.state.number === ""});
    if(this.state.name === "" || this.state.number === "")
      e.preventDefault();
  }
  toggleCategory(category) {
    var i = this.state.selectedCategories.indexOf(category);
    this.setState({selectedCategories: i < 0 ? [...this.state.selectedCategories, category] : [...this.state.selectedCategories.slice(0, i), ...this.state.selectedCategories.slice(i + 1)]});
  }
  display() {
    this.container.classList.add("visible");
  }
  hide() {
    this.container.classList.remove("visible");
    if(typeof mixpanel !== 'undefined')
      mixpanel.track("Exit Get Started", {
        "NAME": this.state.name,
        "CATEGORY": this.state.selectedCategories,
        "PHONE NUMBER": this.state.number
      });
  }
  stopAtForm(e) {
    e.stopPropagation();
  }
  toggleTooltip(e) {
    this.tooltip.classList.toggle("tooltip-visible");
  }
  toggleBlankSpace() {
    if(window.innerWidth < 500) {
      this.blankSpace.classList.toggle("visible");
      this.form.scrollTop = 340;
    }
  }
  render() {
    return(
      <div ref={(container) => this.container = container} className="number-form-container" onClick={this.props.hideSelf}>
        <form ref={(form) => this.form = form} action={jsRoutes.controllers.RegistrationController.registerNumber().url} method="POST" className="number-form" onSubmit={this.validateForm.bind(this)} onClick={this.stopAtForm}>
          <div className="mobile-close">Get Started<div className="mobile-close-x" onClick={this.props.hideSelf}>X</div></div>
          <div className="number-form-header"><strong>Full Name</strong></div>
          <input name="name" type="text" className={"name-input" + (this.state.nameError ? " error" : "")} autoComplete="off" placeholder="i.e. John Doe" value={this.state.name} onChange={this.updateName.bind(this)} />
          <div className="number-form-header"><strong>Interests</strong></div>
          <CategoriesSelector categories={this.categories} toggleCategory={this.toggleCategory.bind(this)} />
          <div className="number-form-header"><strong>Mobile Number</strong> (with country code) <i className="fa fa-question-circle" aria-hidden="true" onClick={this.toggleTooltip.bind(this)} onMouseEnter={this.toggleTooltip.bind(this)} onMouseLeave={this.toggleTooltip.bind(this)}></i><div ref={(tooltip) => this.tooltip = tooltip} className="tooltip">A local will get in touch with you</div></div>
          <input name="number" type="text" className={"number-input" + (this.state.numberError ? " error" : "")} autoComplete="off" placeholder="+1 202 555 0191" value={this.state.number} onChange={this.updateNumber.bind(this)} onFocus={this.toggleBlankSpace.bind(this)} onBlur={this.toggleBlankSpace.bind(this)} />
          <input type="submit" className="number-form-submit" value="Submit" />
          <div ref={(div) => this.blankSpace = div} className="blank-space"></div>
        </form>
      </div>
    );
  }
};

const CategoriesSelector = (props) => {
  var categories = props.categories.map((category, i) => <Category key={i} value={category} toggleCategory={props.toggleCategory} />);
  return (
    <div className="categories-container">
      {categories}
    </div>
  );
};

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
  }
  toggleCategory(e) {
    this.setState({selected: !this.state.selected});
    this.props.toggleCategory(e.target.value);
  }
  render() {
    return (
      <label className={"category" + (this.state.selected ? " selected" : "")}><input name="categories[]" type="checkbox" className="category-box" checked={this.state.selected} value={this.props.value} onChange={this.toggleCategory.bind(this)} />{this.props.value}</label>
    );
  }
}

ReactDOM.render(<NumberForm />, document.getElementById("content"));
