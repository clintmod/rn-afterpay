import React from 'react';
import { ViewProps } from 'react-native';
import { AfterpayColorScheme } from '.';
interface AfterpayPriceBreakdownProps extends ViewProps {
    colorScheme: AfterpayColorScheme;
    totalAmount: string;
}
declare const AfterpayPriceBreakdown: React.MemoExoticComponent<(props: AfterpayPriceBreakdownProps) => JSX.Element>;
export default AfterpayPriceBreakdown;
