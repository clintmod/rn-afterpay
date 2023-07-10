import React from 'react';
import { ViewProps } from 'react-native';
import { AfterpayColorScheme } from '.';
interface AfterpayPaymentButtonProps extends ViewProps {
    colorScheme: AfterpayColorScheme;
    onPress?: () => void;
}
declare const AfterpayPaymentButton: React.MemoExoticComponent<(props: AfterpayPaymentButtonProps) => JSX.Element>;
export default AfterpayPaymentButton;
