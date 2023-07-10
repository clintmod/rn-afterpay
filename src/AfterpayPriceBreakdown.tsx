import React from 'react';
import {
  StyleSheet,
  requireNativeComponent,
  View,
  ViewProps,
} from 'react-native';
import { AfterpayColorScheme } from '.';

interface AfterpayPriceBreakdownProps extends ViewProps {
  colorScheme: AfterpayColorScheme;
  totalAmount: string;
}

const AfterpayPriceBreakdown = React.memo(
  (props: AfterpayPriceBreakdownProps) => {
    return (
      <View style={styles.container}>
        <RCTAfterpayPriceBreakdown
          style={styles.afterpayPriceBreadown}
          {...props}
        />
      </View>
    );
  }
);

const RCTAfterpayPriceBreakdown = requireNativeComponent<
  AfterpayPriceBreakdownProps
>('AfterpayPriceBreakdown');

export default AfterpayPriceBreakdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  afterpayPriceBreadown: {
    height: '100%',
    width: '100%',
  },
});
