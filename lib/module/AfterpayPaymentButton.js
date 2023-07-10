function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { requireNativeComponent, StyleSheet, TouchableOpacity, View } from 'react-native';
const AfterpayPaymentButton = /*#__PURE__*/React.memo(props => {
  const {
    onPress,
    ...passProps
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(RCTAfterpayPaymentButton, _extends({
    style: styles.afterpayPaymentButton
  }, passProps))));
});
const styles = StyleSheet.create({
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
const RCTAfterpayPaymentButton = requireNativeComponent('AfterpayPaymentButton');
export default AfterpayPaymentButton;
//# sourceMappingURL=AfterpayPaymentButton.js.map