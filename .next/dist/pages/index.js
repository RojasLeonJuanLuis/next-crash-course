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

var _jsxFileName = '/Users/rojas/Desktop/next-crash-course/pages/index.js?entry',
    _this = undefined;

var Home = function Home(props) {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Welcome to BitzPrice'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Check current Bitcoin price'), _react2.default.createElement(_prices2.default, { bpi: props.bpi, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmV0Y2giLCJMYXlvdXQiLCJQcmljZXMiLCJIb21lIiwicHJvcHMiLCJicGkiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLE9BQVUsQUFDdEI7eUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EseUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLGdEQUFBLEFBQUMsa0NBQU8sS0FBSyxNQUFiLEFBQW1CO2dCQUFuQjtrQkFMTixBQUNFLEFBQ0UsQUFHRSxBQUlQO0FBSk87O0FBTlI7O0FBWUEsS0FBQSxBQUFLLDJGQUFrQixtQkFBQTtXQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDSCxNQURHLEFBQ0gsQUFBTTs7YUFBbEI7QUFEZSx5QkFBQTswQkFBQTtpQkFFRixJQUZFLEFBRUYsQUFBSTs7YUFBakI7QUFGZSwwQkFBQTs7aUJBQUEsQUFJZCxBQUNBO0FBREEsQUFDTDs7YUFMbUI7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXZCLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JvamFzL0Rlc2t0b3AvbmV4dC1jcmFzaC1jb3Vyc2UifQ==