import React from 'react';
import ReactDOM from 'react-dom';

class NumberForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      selectedCategories: [],
      number: "",
      nameError: false,
      numberError: false
    };
    this.categories = [
      "Food",
      "Nightlife",
      "Culture",
      "Sightseeing",
      "Shopping",
      "Events",
      "Other"
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
  render() {
    return(
      <form action={jsRoutes.controllers.RegistrationController.registerNumber().url} method="POST" className="number-form" onSubmit={this.validateForm.bind(this)}>
        <input name="name" type="text" className={"name-input" + (this.state.nameError ? " error" : "")} autoComplete="off" placeholder="Name" value={this.state.name} onChange={this.updateName.bind(this)} />
        <CategoriesSelector categories={this.categories} toggleCategory={this.toggleCategory.bind(this)} />
        <input name="number" type="text" className={"number-input" + (this.state.numberError ? " error" : "")} autoComplete="off" placeholder="Number with country code" value={this.state.number} onChange={this.updateNumber.bind(this)} />
        <input type="submit" className="submit" value="submit" />
      </form>
    );
  }
};

const CategoriesSelector = (props) => {
  var categories = props.categories.map((category, i) => <Category key={i} value={category} toggleCategory={props.toggleCategory} />);
  return (
    <div>
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
    this.props.toggleCategory(e.target.textContent);
  }
  render() {
    return (
      <span className={"category" + (this.state.selected ? " selected" : "")} onClick={this.toggleCategory.bind(this)}>{this.props.value} </span>
    );
  }
}

ReactDOM.render(<NumberForm />, document.getElementById("content"));
