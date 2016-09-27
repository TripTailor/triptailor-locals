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
    _react2.default.createElement(Locals, null),
    _react2.default.createElement(Footer, null)
  );
};

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'locals-navbar' },
    _react2.default.createElement(
      'div',
      { className: 'brand' },
      _react2.default.createElement(
        'a',
        { href: jsRoutes.controllers.HomeController.index().url },
        'contact',
        _react2.default.createElement(
          'span',
          { className: 'brand-locals' },
          'locals'
        ),
        '.com'
      )
    )
  );
};

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
            'a',
            { href: jsRoutes.controllers.HomeController.numberForm().url, className: 'cta' },
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
            { className: 'local-categories' },
            'party, beer & technology'
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
            { className: 'local-categories' },
            'architecture, food & running'
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
            { className: 'local-categories' },
            'coffee, local design & kitsch'
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
            { className: 'local-categories' },
            'food, music & art'
          )
        )
      )
    )
  );
};

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    '© Contact Locals 2016.'
  );
};

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("content"));

},{"react":"react","react-dom":"react-dom"}]},{},[1]);
