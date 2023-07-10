"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AfterpayPaymentButton", {
  enumerable: true,
  get: function () {
    return _AfterpayPaymentButton.default;
  }
});
Object.defineProperty(exports, "AfterpayPriceBreakdown", {
  enumerable: true,
  get: function () {
    return _AfterpayPriceBreakdown.default;
  }
});
Object.defineProperty(exports, "AfterpayCheckout", {
  enumerable: true,
  get: function () {
    return _AfterpayCheckout.default;
  }
});
exports.default = exports.AfterpayColorScheme = void 0;

var _reactNative = require("react-native");

var _AfterpayPaymentButton = _interopRequireDefault(require("./AfterpayPaymentButton"));

var _AfterpayPriceBreakdown = _interopRequireDefault(require("./AfterpayPriceBreakdown"));

var _AfterpayCheckout = _interopRequireDefault(require("./AfterpayCheckout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AfterpayColorScheme;
exports.AfterpayColorScheme = AfterpayColorScheme;

(function (AfterpayColorScheme) {
  AfterpayColorScheme["BLACK_ON_WHITE"] = "BLACK_ON_WHITE";
  AfterpayColorScheme["WHITE_ON_BLACK"] = "WHITE_ON_BLACK";
  AfterpayColorScheme["BLACK_ON_MINT"] = "BLACK_ON_MINT";
  AfterpayColorScheme["MINT_ON_BLACK"] = "MINT_ON_BLACK";
})(AfterpayColorScheme || (exports.AfterpayColorScheme = AfterpayColorScheme = {}));

const {
  Afterpay
} = _reactNative.NativeModules;
var _default = Afterpay;
exports.default = _default;
//# sourceMappingURL=index.js.map