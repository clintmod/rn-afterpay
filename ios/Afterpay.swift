import Afterpay

@objc(Afterpay)
class Afterpay: NSObject {
    
    @objc static func requiresMainQueueSetup() -> Bool {
      return true
    }

    @objc(setConfiguration:)
    func setConfigutation(config: NSDictionary) -> Void {
        DispatchQueue.main.async {
            do {
              let configuration = try Configuration(
                minimumAmount: config["minimumAmount"] as? String,
                maximumAmount: config["maximumAmount"] as! String,
                currencyCode: config["currencyCode"] as! String,
                locale: Locale(identifier: "en_US")
              )

              setConfiguration(configuration)
            } catch {
                print("Error: Could not set AfterPay configuration")
            }
        }
    }
}

@objc(AfterpayPriceBreakdownView)
class AfterpayPriceBreakdownView: UIView {
    
    var priceBreadownView: PriceBreakdownView!

    override init(frame: CGRect) {
        super.init(frame: frame)

        priceBreadownView = PriceBreakdownView()
        self.addSubview(priceBreadownView)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc func setTotalAmount(_ totalAmount: NSString) -> Void {
        let formatter = NumberFormatter()
        formatter.numberStyle = NumberFormatter.Style.decimal

        priceBreadownView.totalAmount
            = formatter.number(from: totalAmount as String)?.decimalValue as! Decimal
    }
    
    @objc func setColorScheme(_ colorScheme: NSString) {
        priceBreadownView.badgeColorScheme = ColorSchemeSelector.selector(colorScheme: colorScheme)
    }
    
    override func layoutSubviews() {
       super.layoutSubviews()
       priceBreadownView.frame = self.bounds
    }
}

@objc(AfterpayPriceBreakdown)
class AfterpayPriceBreakdown: RCTViewManager {

    override func view() -> UIView! {
        return AfterpayPriceBreakdownView()
    }

    override static func requiresMainQueueSetup() -> Bool {
      return true
    }
}

@objc(AfterpayPaymentButtonView)
class AfterpayPaymentButtonView: UIView {
    
    var paymentButtonView: PaymentButton!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        paymentButtonView = PaymentButton()
        self.addSubview(paymentButtonView)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc func setColorScheme(_ colorScheme: NSString) -> Void {
        paymentButtonView.colorScheme = ColorSchemeSelector.selector(colorScheme: colorScheme)
    }
    
    override func layoutSubviews() {
       super.layoutSubviews()
       paymentButtonView.frame = self.bounds
    }
    
}

@objc(AfterpayPaymentButton)
class AfterpayPaymentButton: RCTViewManager {

    override func view() -> UIView! {
        return AfterpayPaymentButtonView()
    }

    override static func requiresMainQueueSetup() -> Bool {
      return true
    }
}

class ColorSchemeSelector {
    static func selector(colorScheme: NSString) -> ColorScheme {
        switch colorScheme {
        case "BLACK_ON_WHITE":
            return ColorScheme.static(.blackOnWhite)
        case "WHITE_ON_BLACK":
            return ColorScheme.static(.whiteOnBlack)
        case "BLACK_ON_MINT":
            return ColorScheme.static(.blackOnMint)
        case "MINT_ON_BLACK":
            fallthrough
        default:
            return ColorScheme.static(.mintOnBlack)
        }
    }
}
