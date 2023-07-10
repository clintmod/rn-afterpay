#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(Afterpay, NSObject)

RCT_EXTERN_METHOD(setConfiguration:(NSDictionary)config)

@end

@interface RCT_EXTERN_MODULE(AfterpayPriceBreakdown, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(totalAmount, NSString)
RCT_EXPORT_VIEW_PROPERTY(colorScheme, NSString)

@end

@interface RCT_EXTERN_MODULE(AfterpayPaymentButton, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(colorScheme, NSString)

@end
