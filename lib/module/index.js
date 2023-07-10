import { NativeModules } from 'react-native';
import AfterpayPaymentButton from './AfterpayPaymentButton';
import AfterpayPriceBreakdown from './AfterpayPriceBreakdown';
import AfterpayCheckout from './AfterpayCheckout';
export let AfterpayColorScheme;

(function (AfterpayColorScheme) {
  AfterpayColorScheme["BLACK_ON_WHITE"] = "BLACK_ON_WHITE";
  AfterpayColorScheme["WHITE_ON_BLACK"] = "WHITE_ON_BLACK";
  AfterpayColorScheme["BLACK_ON_MINT"] = "BLACK_ON_MINT";
  AfterpayColorScheme["MINT_ON_BLACK"] = "MINT_ON_BLACK";
})(AfterpayColorScheme || (AfterpayColorScheme = {}));

const {
  Afterpay
} = NativeModules;
export default Afterpay;
export { AfterpayPaymentButton, AfterpayPriceBreakdown, AfterpayCheckout };
//# sourceMappingURL=index.js.map