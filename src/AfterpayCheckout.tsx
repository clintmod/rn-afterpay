import React from 'react';
import { StyleProp, ViewStyle, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';

interface AfterpayCheckoutProps {
  url: string;
  onSuccess: (data: string) => void;
  onFailure: (data: string) => void;
  onCancel: () => void;
  style?: StyleProp<ViewStyle>;
  activityIndicatorProps?: ActivityIndicatorProps
}

const ORDER_TOKEN = 'orderToken=';

const AfterpayCheckout = React.memo((props: AfterpayCheckoutProps) => {
  const webViewRef = React.useRef<WebView>(null);
  const loading = () => <ActivityIndicator {...props.activityIndicatorProps} />;
  const handleShouldStartLoadWithRequest = (
    event: WebViewNavigation
  ): boolean => {
    const { url } = event;
    if (url.includes('status=SUCCESS')) {
      const tokenIndex = url.indexOf(ORDER_TOKEN);
      props.onSuccess(
        url.substring(tokenIndex + ORDER_TOKEN.length, url.length)
      );
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

  return (
    <WebView
      source={{ uri: props.url }}
      renderLoading={loading}
      startInLoadingState={true}
      ref={webViewRef}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      style={props.style}
    />
  );
});

export default AfterpayCheckout;
