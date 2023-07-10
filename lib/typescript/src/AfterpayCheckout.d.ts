import React from 'react';
import { StyleProp, ViewStyle, ActivityIndicatorProps } from 'react-native';
interface AfterpayCheckoutProps {
    url: string;
    onSuccess: (data: string) => void;
    onFailure: (data: string) => void;
    onCancel: () => void;
    style?: StyleProp<ViewStyle>;
    activityIndicatorProps?: ActivityIndicatorProps;
}
declare const AfterpayCheckout: React.MemoExoticComponent<(props: AfterpayCheckoutProps) => JSX.Element>;
export default AfterpayCheckout;
