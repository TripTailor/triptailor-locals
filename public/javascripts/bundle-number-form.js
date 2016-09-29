(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberForm = function (_React$Component) {
  _inherits(NumberForm, _React$Component);

  function NumberForm(props) {
    _classCallCheck(this, NumberForm);

    var _this = _possibleConstructorReturn(this, (NumberForm.__proto__ || Object.getPrototypeOf(NumberForm)).call(this, props));

    _this.state = {
      name: "",
      selectedCategories: [],
      number: "",
      nameError: false,
      numberError: false
    };
    _this.categories = ["food", "nightlife", "culture", "sightseeing", "shopping", "events", "other"];
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
    value: function validateForm(e) {
      this.setState({ nameError: this.state.name === "" });
      this.setState({ numberError: this.state.number === "" });
      if (this.state.name === "" || this.state.number === "") e.preventDefault();
    }
  }, {
    key: 'toggleCategory',
    value: function toggleCategory(category) {
      var i = this.state.selectedCategories.indexOf(category);
      this.setState({ selectedCategories: i < 0 ? [].concat(_toConsumableArray(this.state.selectedCategories), [category]) : [].concat(_toConsumableArray(this.state.selectedCategories.slice(0, i)), _toConsumableArray(this.state.selectedCategories.slice(i + 1))) });
    }
  }, {
    key: 'display',
    value: function display() {
      this.container.classList.add("visible");
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.container.classList.remove("visible");
      if (typeof mixpanel !== 'undefined') mixpanel.track("Exit Get Started", {
        "NAME": this.state.name,
        "CATEGORY": this.state.selectedCategories,
        "PHONE NUMBER": this.state.number
      });
    }
  }, {
    key: 'stopAtForm',
    value: function stopAtForm(e) {
      e.stopPropagation();
    }
  }, {
    key: 'toggleTooltip',
    value: function toggleTooltip(e) {
      this.tooltip.classList.toggle("tooltip-visible");
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(container) {
            return _this2.container = container;
          }, className: 'number-form-container', onClick: this.props.hideSelf },
        _react2.default.createElement(
          'form',
          { action: jsRoutes.controllers.RegistrationController.registerNumber().url, method: 'POST', className: 'number-form', onSubmit: this.validateForm.bind(this), onClick: this.stopAtForm },
          _react2.default.createElement(
            'div',
            { className: 'mobile-close' },
            'Get Started',
            _react2.default.createElement(
              'div',
              { className: 'mobile-close-x', onClick: this.props.hideSelf },
              'X'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'number-form-header' },
            _react2.default.createElement(
              'strong',
              null,
              'Full Name'
            )
          ),
          _react2.default.createElement('input', { name: 'name', type: 'text', className: "name-input" + (this.state.nameError ? " error" : ""), autoComplete: 'off', placeholder: 'i.e. John Doe', value: this.state.name, onChange: this.updateName.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'number-form-header' },
            _react2.default.createElement(
              'strong',
              null,
              'Interests'
            )
          ),
          _react2.default.createElement(CategoriesSelector, { categories: this.categories, toggleCategory: this.toggleCategory.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'number-form-header' },
            _react2.default.createElement(
              'strong',
              null,
              'Mobile Number'
            ),
            ' (with country code) ',
            _react2.default.createElement('i', { className: 'fa fa-question-circle', 'aria-hidden': 'true', onClick: this.toggleTooltip.bind(this), onMouseEnter: this.toggleTooltip.bind(this), onMouseLeave: this.toggleTooltip.bind(this) }),
            _react2.default.createElement(
              'div',
              { ref: function ref(tooltip) {
                  return _this2.tooltip = tooltip;
                }, className: 'tooltip' },
              'A local will get in touch with you'
            )
          ),
          _react2.default.createElement('input', { name: 'number', type: 'text', className: "number-input" + (this.state.numberError ? " error" : ""), autoComplete: 'off', placeholder: '+1 202 555 0191', value: this.state.number, onChange: this.updateNumber.bind(this) }),
          _react2.default.createElement('input', { type: 'submit', className: 'number-form-submit', value: 'Submit' })
        )
      );
    }
  }]);

  return NumberForm;
}(_react2.default.Component);

exports.default = NumberForm;
;

var CategoriesSelector = function CategoriesSelector(props) {
  var categories = props.categories.map(function (category, i) {
    return _react2.default.createElement(Category, { key: i, value: category, toggleCategory: props.toggleCategory });
  });
  return _react2.default.createElement(
    'div',
    { className: 'categories-container' },
    categories
  );
};

var Category = function (_React$Component2) {
  _inherits(Category, _React$Component2);

  function Category(props) {
    _classCallCheck(this, Category);

    var _this3 = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

    _this3.state = {
      selected: false
    };
    return _this3;
  }

  _createClass(Category, [{
    key: 'toggleCategory',
    value: function toggleCategory(e) {
      this.setState({ selected: !this.state.selected });
      this.props.toggleCategory(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        { className: "category" + (this.state.selected ? " selected" : "") },
        _react2.default.createElement('input', { name: 'categories[]', type: 'checkbox', className: 'category-box', checked: this.state.selected, value: this.props.value, onChange: this.toggleCategory.bind(this) }),
        this.props.value
      );
    }
  }]);

  return Category;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(NumberForm, null), document.getElementById("content"));

},{"../util":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrayToQuery = function arrayToQuery(elements, query) {
  return elements.map(function (element) {
    return query + "[]=" + element;
  }).join("&");
};

exports.arrayToQuery = arrayToQuery;

},{}]},{},[1]);
