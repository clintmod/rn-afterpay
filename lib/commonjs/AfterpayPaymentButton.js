"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AfterpayPaymentButton = /*#__PURE__*/_react.default.memo(props => {
  const {
    onPress,
    ...passProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(RCTAfterpayPaymentButton, _extends({
    style: styles.afterpayPaymentButton
  }, passProps))));
});

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  afterpayPaymentButton: {
    height: 45,
    width: 300
  }
});

const RCTAfterpayPaymentButton = (0, _reactNative.requireNativeComponent)('AfterpayPaymentButton');
var _default = AfterpayPaymentButton;
exports.default = _default;
//# sourceMappingURL=AfterpayPaymentButton.js.map