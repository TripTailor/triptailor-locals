(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(NavBar, null),
    _react2.default.createElement(Hero, null),
    _react2.default.createElement(HIW, null),
    _react2.default.createElement(Testimonials, null),
    _react2.default.createElement(Locals, null)
  );
};

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'locals-navbar' },
    _react2.default.createElement(
      'div',
      { className: 'navbar-link' },
      'Get Started'
    ),
    _react2.default.createElement(
      'div',
      { className: 'navbar-link' },
      'Contact Us'
    ),
    _react2.default.createElement(
      'div',
      { className: 'brand' },
      'Ambassadors'
    )
  );
};

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hero' },
    _react2.default.createElement(
      'div',
      { className: 'hero-subheader' },
      'Get recommendations of restaurants, bars and more in Guadalajara'
    ),
    _react2.default.createElement(
      'div',
      { className: 'hero-header' },
      'Chat with a local to make it happen'
    ),
    _react2.default.createElement(
      'button',
      { className: 'cta' },
      'Get started'
    )
  );
};

var HIW = function HIW(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hiw' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      'Get the local insights of Guadalajara'
    ),
    _react2.default.createElement(
      'div',
      { className: 'subheader' },
      'Ask anything you want to a local expert'
    ),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          'Tell us what your interests are'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          'Chat with a local to get recommendations'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          'Happy? Leave an optional tip'
        )
      )
    )
  );
};

var Testimonials = function Testimonials(props) {
  return _react2.default.createElement('div', { className: 'testimonials' });
};

var Locals = function Locals(props) {
  return _react2.default.createElement(
    'div',
    { className: 'locals' },
    _react2.default.createElement(
      'div',
      { className: 'subheader' },
      'Meet some of our ambassadors'
    ),
    _react2.default.createElement(
      'div',
      { className: 'header' },
      'We\'re a community of travelers that want you to discover the city the way we know it'
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("content"));

},{"react":"react","react-dom":"react-dom"}]},{},[1]);
