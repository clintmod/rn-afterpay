import { NativeModules } from 'react-native';
import AfterpayPaymentButton from './AfterpayPaymentButton';
import AfterpayPriceBreakdown from './AfterpayPriceBreakdown';
import AfterpayCheckout from './AfterpayCheckout';

interface AfterpayConfiguration {
  minimumAmount?: string;
  maximumAmount: string;
  currencyCode: string;
}

export enum AfterpayColorScheme {
  BLACK_ON_WHITE = 'BLACK_ON_WHITE',
  WHITE_ON_BLACK = 'WHITE_ON_BLACK',
  BLACK_ON_MINT = 'BLACK_ON_MINT',
  MINT_ON_BLACK = 'MINT_ON_BLACK',
}

type AfterpayType = {
  setConfiguration(configuration: AfterpayConfiguration): void;
};

const { Afterpay } = NativeModules;

export default Afterpay as AfterpayType;
export { AfterpayPaymentButton, AfterpayPriceBreakdown, AfterpayCheckout };
