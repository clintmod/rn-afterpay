function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyleSheet, requireNativeComponent, View } from 'react-native';
const AfterpayPriceBreakdown = /*#__PURE__*/React.memo(props => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(RCTAfterpayPriceBreakdown, _extends({
    style: styles.afterpayPriceBreadown
  }, props)));
});
const RCTAfterpayPriceBreakdown = requireNativeComponent('AfterpayPriceBreakdown');
export default AfterpayPriceBreakdown;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  afterpayPriceBreadown: {
    height: '100%',
    width: '100%'
  }
});
//# sourceMappingURL=AfterpayPriceBreakdown.js.map