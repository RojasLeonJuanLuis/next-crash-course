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
        list = _react2.default.createElement('div', null, _react2.default.createElement('h3', null, 'Bitcoin rate price'), bitcoin.bpi.USD.description, ':', _react2.default.createElement('span', { className: 'tag is-success' }, bitcoin.bpi.USD.code), _react2.default.createElement('strong', null, bitcoin.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = _react2.default.createElement('div', null, _react2.default.createElement('h3', null, 'Bitcoin rate price'), bitcoin.bpi.GBP.description, ':', _react2.default.createElement('span', { className: 'tag is-success' }, bitcoin.bpi.GBP.code), _react2.default.createElement('strong', null, bitcoin.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = _react2.default.createElement('div', null, _react2.default.createElement('h3', null, 'Bitcoin rate price'), bitcoin.bpi.EUR.description, ':', _react2.default.createElement('span', { className: 'tag is-success' }, bitcoin.bpi.EUR.code), _react2.default.createElement('strong', null, bitcoin.bpi.EUR.rate));
      }

      return _react2.default.createElement('div', null, _react2.default.createElement('div', null, list), _react2.default.createElement('br', null), _react2.default.createElement('div', { className: 'select' }, _react2.default.createElement('select', { onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        } }, _react2.default.createElement('option', { value: 'USD' }, 'USD'), _react2.default.createElement('option', { value: 'GBP' }, 'GBP'), _react2.default.createElement('option', { value: 'EUR' }, 'EUR'))));
    }
  }]);

  return Prices;
}(_react.Component);

exports.default = Prices;