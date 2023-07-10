import React from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import { AfterpayColorScheme } from '.';

interface AfterpayPaymentButtonProps extends ViewProps {
  colorScheme: AfterpayColorScheme;
  onPress?: () => void;
}

const AfterpayPaymentButton = React.memo(
  (props: AfterpayPaymentButtonProps) => {
    const { onPress, ...passProps } = props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <RCTAfterpayPaymentButton
            style={styles.afterpayPaymentButton}
            {...passProps}
          />
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  afterpayPaymentButton: {
    height: 45,
    width: 300,
  },
});

const RCTAfterpayPaymentButton = requireNativeComponent<
  AfterpayPaymentButtonProps
>('AfterpayPaymentButton');

export default AfterpayPaymentButton;
