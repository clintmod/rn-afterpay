import AfterpayPaymentButton from './AfterpayPaymentButton';
import AfterpayPriceBreakdown from './AfterpayPriceBreakdown';
import AfterpayCheckout from './AfterpayCheckout';
interface AfterpayConfiguration {
    minimumAmount?: string;
    maximumAmount: string;
    currencyCode: string;
}
export declare enum AfterpayColorScheme {
    BLACK_ON_WHITE = "BLACK_ON_WHITE",
    WHITE_ON_BLACK = "WHITE_ON_BLACK",
    BLACK_ON_MINT = "BLACK_ON_MINT",
    MINT_ON_BLACK = "MINT_ON_BLACK"
}
declare type AfterpayType = {
    setConfiguration(configuration: AfterpayConfiguration): void;
};
declare const _default: AfterpayType;
export default _default;
export { AfterpayPaymentButton, AfterpayPriceBreakdown, AfterpayCheckout };
