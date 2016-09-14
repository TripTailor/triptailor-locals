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
    _react2.default.createElement(Hero, null),
    _react2.default.createElement(HIW, null),
    _react2.default.createElement(Testimonials, null),
    _react2.default.createElement(Locals, null),
    _react2.default.createElement(LastCTA, null)
  );
};

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hero' },
    _react2.default.createElement(
      'div',
      { className: 'hero-sub-header' },
      'Subheader'
    ),
    _react2.default.createElement(
      'div',
      { className: 'hero-header' },
      'Header'
    ),
    _react2.default.createElement(Cta, null)
  );
};

var HIW = function HIW(props) {
  return _react2.default.createElement(
    'div',
    { className: 'hiw' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      'How it works'
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
          'Step 1'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          'Step 2'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          'Step 3'
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
      { className: 'header' },
      'Testimonials'
    )
  );
};

var Locals = function Locals(props) {
  return _react2.default.createElement(
    'div',
    { className: 'locals' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      'Locals'
    )
  );
};

var LastCTA = function LastCTA(props) {
  return _react2.default.createElement(
    'div',
    { className: 'last-cta' },
    _react2.default.createElement(Cta, null)
  );
};

var Cta = function Cta(props) {
  return _react2.default.createElement(
    'button',
    { className: 'cta' },
    'Sign up - it\'s free'
  );
};

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("content"));

},{"react":"react","react-dom":"react-dom"}]},{},[1]);
