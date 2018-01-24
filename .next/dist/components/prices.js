'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rojas/Desktop/next-crash-course/components/prices.js';


var Prices = function (_Component) {
  (0, _inherits3.default)(Prices, _Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currency: 'USD'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prices, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var bitcoin = this.props.bpi;

      var list = '';

      if (this.state.currency === 'USD') {
        list = _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, 'Bitcoin rate price'), bitcoin.bpi.USD.description, ':', _react2.default.createElement('span', { className: 'tag is-success', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, bitcoin.bpi.USD.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, bitcoin.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, 'Bitcoin rate price'), bitcoin.bpi.GBP.description, ':', _react2.default.createElement('span', { className: 'tag is-success', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, bitcoin.bpi.GBP.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, bitcoin.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, 'Bitcoin rate price'), bitcoin.bpi.EUR.description, ':', _react2.default.createElement('span', { className: 'tag is-success', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, bitcoin.bpi.EUR.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, bitcoin.bpi.EUR.rate));
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, list), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement('div', { className: 'select', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('select', { onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('option', { value: 'USD', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'EUR'))));
    }
  }]);

  return Prices;
}(_react.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJpY2VzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJpY2VzIiwic3RhdGUiLCJjdXJyZW5jeSIsImJpdGNvaW4iLCJwcm9wcyIsImJwaSIsImxpc3QiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs7Ozs0TUFDSixBO2dCLEFBQVEsQUFDSTtBQURKLEFBQ047Ozs7OzZCQUVPO21CQUNQOztVQUFNLFVBQVUsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLEFBRTNCOztVQUFJLE9BQUosQUFBVyxBQUVYOztVQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEyQixPQUFPLEFBQ2hDOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0w7QUFESztBQUFBLFNBQUEsa0JBQ0wsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREssQUFDTCxBQUNDLCtCQUFBLEFBQVEsSUFBUixBQUFZLElBRlIsQUFFWSxhQUNoQixxQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFDRTtBQURGO21CQUNFLEFBQVEsSUFBUixBQUFZLElBSlYsQUFHSixBQUNrQixBQUVuQix1QkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNHO0FBREg7QUFBQSxtQkFDRyxBQUFRLElBQVIsQUFBWSxJQVBqQixBQUFPLEFBTUwsQUFDbUIsQUFHdEI7QUFYRCxpQkFXUyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTyxBQUN0QzsrQkFBTyxjQUFBOztzQkFBQTt3QkFBQSxBQUNMO0FBREs7QUFBQSxTQUFBLGtCQUNMLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURLLEFBQ0wsQUFDQywrQkFBQSxBQUFRLElBQVIsQUFBWSxJQUZSLEFBRVksYUFDaEIscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQ0U7QUFERjttQkFDRSxBQUFRLElBQVIsQUFBWSxJQUpWLEFBR0osQUFDa0IsQUFFbkIsdUJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRztBQURIO0FBQUEsbUJBQ0csQUFBUSxJQUFSLEFBQVksSUFQakIsQUFBTyxBQU1MLEFBQ21CLEFBR3RCO0FBWEssT0FBQSxNQVdBLElBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFkLEFBQTJCLE9BQU8sQUFDdEM7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUEsQUFDTDtBQURLO0FBQUEsU0FBQSxrQkFDTCxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FESyxBQUNMLEFBQ0MsK0JBQUEsQUFBUSxJQUFSLEFBQVksSUFGUixBQUVZLGFBQ2hCLHFCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNFO0FBREY7bUJBQ0UsQUFBUSxJQUFSLEFBQVksSUFKVixBQUdKLEFBQ2tCLEFBRW5CLHVCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLG1CQUNHLEFBQVEsSUFBUixBQUFZLElBUGpCLEFBQU8sQUFNTCxBQUNtQixBQUd0QjtBQUVEOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLFNBREYsQUFDRSxBQUdBOztvQkFBQTtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsWUFBUSxVQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBakMsQUFBSyxBQUFjLEFBQXFCO0FBQTFEO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVZSLEFBQ0UsQUFLRSxBQUNFLEFBR0UsQUFLVDs7Ozs7QUEzRGtCLEEsQUE2RHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6InByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9qYXMvRGVza3RvcC9uZXh0LWNyYXNoLWNvdXJzZSJ9