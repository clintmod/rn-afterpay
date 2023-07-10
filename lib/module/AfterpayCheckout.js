import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
const ORDER_TOKEN = 'orderToken=';
const AfterpayCheckout = /*#__PURE__*/React.memo(props => {
  const webViewRef = React.useRef(null);

  const loading = () => /*#__PURE__*/React.createElement(ActivityIndicator, props.activityIndicatorProps);

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

  return /*#__PURE__*/React.createElement(WebView, {
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
export default AfterpayCheckout;
//# sourceMappingURL=AfterpayCheckout.js.map