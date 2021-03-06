'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _prices = require('../components/prices');

var _prices2 = _interopRequireDefault(_prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Home = function Home(props) {
  return _react2.default.createElement(_layout2.default, null, _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Welcome to BitzPrice'), _react2.default.createElement('p', null, 'Check current Bitcoin price'), _react2.default.createElement(_prices2.default, { bpi: props.bpi })));
};

Home.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            bpi: data
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

exports.default = Home;