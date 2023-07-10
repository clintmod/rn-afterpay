"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebview = require("react-native-webview");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ORDER_TOKEN = 'orderToken=';

const AfterpayCheckout = /*#__PURE__*/_react.default.memo(props => {
  const webViewRef = _react.default.useRef(null);

  const loading = () => /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, props.activityIndicatorProps);

  const handleShouldStartLoadWithRequest = event => {
    const {
      url
    } = event;

    if (url.includes('status=SUCCESS')) {
      const tokenIndex = url.indexOf(ORDER_TOKEN);
      props.onSuccess(url.substring(tokenIndex + ORDER_TOKEN.length, url.length));
      return false;
    } else if (url.includes('status=FAILURE')) {
      props.onFailure('Error: Card was not accepted');
      return false;
    } else if (url.includes('status=CANCELLED')) {
      props.onCancel();
      return false;
    } else {
      return true;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, {
    source: {
      uri: props.url
    },
    renderLoading: loading,
    startInLoadingState: true,
    ref: webViewRef,
    onShouldStartLoadWithRequest: handleShouldStartLoadWithRequest,
    style: props.style
  });
});

var _default = AfterpayCheckout;
exports.default = _default;
//# sourceMappingURL=AfterpayCheckout.js.map