(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterConfirmation = function RegisterConfirmation(props) {
  return _react2.default.createElement(
    'div',
    { className: 'confirmation-container' },
    _react2.default.createElement(
      'div',
      { className: 'thanks' },
      'Thanks for registering!'
    ),
    _react2.default.createElement(
      'div',
      { className: 'title' },
      'A local will be assigned and will get in touch with you soon.'
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(RegisterConfirmation, null), document.getElementById("content"));

},{"react":"react","react-dom":"react-dom"}]},{},[1]);
