(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _numberForm = require('./number-form.js');

var _numberForm2 = _interopRequireDefault(_numberForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));
  }

  _createClass(Index, [{
    key: 'showForm',
    value: function showForm() {
      this.form.display();
      document.body.classList.add("no-scroll");
    }
  }, {
    key: 'hideForm',
    value: function hideForm() {
      this.form.hide();
      document.body.classList.remove("no-scroll");
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Hero, { showForm: this.showForm.bind(this) }),
        _react2.default.createElement(HIW, null),
        _react2.default.createElement(Testimonials, null),
        _react2.default.createElement(Locals, null),
        _react2.default.createElement(_numberForm2.default, { ref: function ref(form) {
            return _this2.form = form;
          }, hideSelf: this.hideForm.bind(this) })
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

;

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hero' },
    _react2.default.createElement('div', { className: 'hero-layer' }),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid hero-content' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(
            'div',
            { className: 'hero-subheader' },
            'Ask for restaurants, bars, anything in Guadalajara'
          ),
          _react2.default.createElement(
            'div',
            { className: 'hero-header' },
            'Chat with a local to make it happen'
          ),
          _react2.default.createElement(
            'button',
            { className: 'cta', onClick: props.showForm },
            'Get started'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-whatsapp' },
          _react2.default.createElement('img', { src: jsRoutes.controllers.Assets.versioned("images/whatsapp.gif").url, className: 'whatsapp' })
        )
      )
    )
  );
};

var HIW = function HIW(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hiw' },
    _react2.default.createElement(
      'div',
      { className: 'hiw-header' },
      'How it works'
    ),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid hiw-steps' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 hiw-step-col' },
          _react2.default.createElement('i', { className: 'fa fa-hand-o-up', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'div',
            { className: 'hiw-step-text' },
            'Tell us your interests and get assigned a local'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 hiw-step-col' },
          _react2.default.createElement('i', { className: 'fa fa-comment-o', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'div',
            { className: 'hiw-step-text' },
            'Chat with the local to get the best insights'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 hiw-step-col' },
          _react2.default.createElement('i', { className: 'fa fa-heart-o', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'div',
            { className: 'hiw-step-text' },
            'Happy? Leave an optional tip to the local'
          )
        )
      )
    )
  );
};

var Testimonials = function Testimonials(props) {
  return _react2.default.createElement(
    'div',
    { className: 'testimonials' },
    _react2.default.createElement(
      'div',
      { className: 'quote-symbol' },
      _react2.default.createElement('i', { className: 'fa fa-quote-left', 'aria-hidden': 'true' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'quote' },
      'Luis was a huge help in discovering the local sweet spots in Guadalajara. From craft beer and street tacos to house music and underground clubs...'
    ),
    _react2.default.createElement(
      'div',
      { className: 'user' },
      _react2.default.createElement(
        'div',
        { className: 'user-info' },
        _react2.default.createElement(
          'div',
          { className: 'user-name' },
          'Alexander Logan'
        ),
        _react2.default.createElement(
          'div',
          { className: 'user-location' },
          'Reno, Nevada'
        )
      ),
      _react2.default.createElement('img', { className: 'user-img', src: jsRoutes.controllers.Assets.versioned("images/alex.jpg").url })
    )
  );
};

var Locals = function Locals(props) {
  return _react2.default.createElement(
    'div',
    { className: 'locals' },
    _react2.default.createElement(
      'div',
      { className: 'locals-subheader' },
      'meet some of our locals'
    ),
    _react2.default.createElement(
      'div',
      { className: 'locals-header' },
      'we\'re a community of travelers that want you to discover the city the way we know it'
    ),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid local-profiles' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-3 local-profile' },
          _react2.default.createElement('img', { src: jsRoutes.controllers.Assets.versioned("images/photo-luis.png").url, className: 'local-img' }),
          _react2.default.createElement(
            'div',
            { className: 'local-name' },
            'Luis Galeana'
          ),
          _react2.default.createElement(
            'div',
            { className: 'local-description' },
            'Aside from traveling, you can usually find Luis drinking craft beer or dancing at House music venues.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-3 local-profile' },
          _react2.default.createElement('img', { src: jsRoutes.controllers.Assets.versioned("images/photo-cheky.png").url, className: 'local-img' }),
          _react2.default.createElement(
            'div',
            { className: 'local-name' },
            'Serguei Orozco'
          ),
          _react2.default.createElement(
            'div',
            { className: 'local-description' },
            'Serguei has combined his interest in Design and good food to always know the most delightful places to eat.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-3 local-profile' },
          _react2.default.createElement('img', { src: jsRoutes.controllers.Assets.versioned("images/photo-lore.png").url, className: 'local-img' }),
          _react2.default.createElement(
            'div',
            { className: 'local-name' },
            'Lorena Moreno'
          ),
          _react2.default.createElement(
            'div',
            { className: 'local-description' },
            'Whenever someone wants to get a good authentic coffee, they go to Lorena to hear the best options.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-3 local-profile' },
          _react2.default.createElement('img', { src: jsRoutes.controllers.Assets.versioned("images/photo-gus.png").url, className: 'local-img' }),
          _react2.default.createElement(
            'div',
            { className: 'local-name' },
            'Gustavo Dávila'
          ),
          _react2.default.createElement(
            'div',
            { className: 'local-description' },
            'As a member of a couple of local music bands, Gustavo is always up to date with the trendiest places.'
          )
        )
      )
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("content"));

},{"./number-form.js":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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
      if (this.state.name === "" || this.state.number === "") e.preventDefault();else if (mixpanel) mixpanel.track("Submit Form", {
        "NAME": this.state.name,
        "CATEGORY": this.state.selectedCategories,
        "PHONE NUMBER": this.state.number
      });
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
      if (mixpanel) mixpanel.track("Get Started");
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.container.classList.remove("visible");
      if (mixpanel) mixpanel.track("Exit Get Started", {
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
    key: 'toggleBlankSpace',
    value: function toggleBlankSpace() {
      if (window.innerWidth < 500) {
        this.blankSpace.classList.toggle("visible");
        this.form.scrollTop = 340;
      }
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
          { ref: function ref(form) {
              return _this2.form = form;
            }, action: jsRoutes.controllers.RegistrationController.registerNumber().url, method: 'POST', className: 'number-form', onSubmit: this.validateForm.bind(this), onClick: this.stopAtForm },
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
          _react2.default.createElement('input', { name: 'number', type: 'text', className: "number-input" + (this.state.numberError ? " error" : ""), autoComplete: 'off', placeholder: '+1 202 555 0191', value: this.state.number, onChange: this.updateNumber.bind(this), onFocus: this.toggleBlankSpace.bind(this), onBlur: this.toggleBlankSpace.bind(this) }),
          _react2.default.createElement('input', { type: 'submit', className: 'number-form-submit', value: 'Submit' }),
          _react2.default.createElement('div', { ref: function ref(div) {
              return _this2.blankSpace = div;
            }, className: 'blank-space' })
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

},{"../util":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
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
