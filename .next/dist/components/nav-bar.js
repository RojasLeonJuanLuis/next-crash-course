'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar() {
  return _react2.default.createElement('div', { className: 'hero is-primary', 'data-jsx': 2984308797
  }, _react2.default.createElement('div', { className: 'hero-body', 'data-jsx': 2984308797
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    'data-jsx': 2984308797
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', {
    'data-jsx': 2984308797
  }, 'About'))), _react2.default.createElement(_style2.default, {
    styleId: 2984308797,
    css: 'a[data-jsx="2984308797"]{font-size:18px;color:#000;margin-right:20px;text-decoration:none}'
  }));
};
exports.default = NavBar;