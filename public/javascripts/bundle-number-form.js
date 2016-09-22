(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberForm = function (_React$Component) {
  _inherits(NumberForm, _React$Component);

  function NumberForm() {
    _classCallCheck(this, NumberForm);

    var _this = _possibleConstructorReturn(this, (NumberForm.__proto__ || Object.getPrototypeOf(NumberForm)).call(this));

    _this.state = {
      name: "",
      selectedCategories: [],
      number: ""
    };
    _this.categories = ["Food", "Nightlife", "Culture", "Sightseeing", "Shopping", "Events", "Other"];
    return _this;
  }

  _createClass(NumberForm, [{
    key: 'updateName',
    value: function updateName(e) {
      this.setState({ name: e.target.value });
    }
  }, {
    key: 'updateNumber',
    value: function updateNumber(e) {
      this.setState({ number: e.target.value });
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {}
  }, {
    key: 'toggleCategory',
    value: function toggleCategory(category) {
      var i = this.state.selectedCategories.indexOf(category);
      this.setState({ selectedCategories: i < 0 ? [].concat(_toConsumableArray(this.state.selectedCategories), [category]) : [].concat(_toConsumableArray(this.state.selectedCategories.slice(0, i)), _toConsumableArray(this.state.selectedCategories.slice(i + 1))) });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: jsRoutes.controllers.RegistrationController.registerNumber().url, method: 'POST', className: 'number-form', onSubmit: this.validateForm.bind(this) },
        _react2.default.createElement('input', { name: 'name', type: 'text', className: 'name-input', autoComplete: 'off', placeholder: 'Name', value: this.state.name, onChange: this.updateName.bind(this) }),
        _react2.default.createElement(CategoriesSelector, { categories: this.categories, toggleCategory: this.toggleCategory.bind(this) }),
        _react2.default.createElement('input', { name: 'number', type: 'text', className: 'number-input', autoComplete: 'off', placeholder: 'Number with country code', value: this.state.number, onChange: this.updateNumber.bind(this) }),
        _react2.default.createElement('input', { type: 'submit', className: 'submit', value: 'submit' })
      );
    }
  }]);

  return NumberForm;
}(_react2.default.Component);

;

var CategoriesSelector = function CategoriesSelector(props) {
  var categories = props.categories.map(function (category, i) {
    return _react2.default.createElement(Category, { key: i, value: category, toggleCategory: props.toggleCategory });
  });
  return _react2.default.createElement(
    'div',
    null,
    categories
  );
};

var Category = function (_React$Component2) {
  _inherits(Category, _React$Component2);

  function Category(props) {
    _classCallCheck(this, Category);

    var _this2 = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

    _this2.state = {
      selected: false
    };
    return _this2;
  }

  _createClass(Category, [{
    key: 'toggleCategory',
    value: function toggleCategory(e) {
      this.setState({ selected: !this.selected });
      this.props.toggleCategory(e.target.textContent);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'category', onClick: this.toggleCategory.bind(this) },
        this.props.value,
        ' '
      );
    }
  }]);

  return Category;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(NumberForm, null), document.getElementById("content"));

},{"react":"react","react-dom":"react-dom"}]},{},[1]);
