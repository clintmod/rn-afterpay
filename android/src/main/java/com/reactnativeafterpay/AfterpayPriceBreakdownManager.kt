package com.reactnativeafterpay

import com.afterpay.android.view.AfterpayColorScheme
import com.afterpay.android.view.AfterpayPriceBreakdown
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp


class AfterpayPriceBreakdownManager: SimpleViewManager<AfterpayPriceBreakdown>() {

    override fun getName(): String {
        return "AfterpayPriceBreakdown"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): AfterpayPriceBreakdown {
        return AfterpayPriceBreakdown(reactContext)
    }

    @ReactProp(name = "totalAmount")
    fun setTotalAmount(view: AfterpayPriceBreakdown, totalAmount: String) {
        view.totalAmount = totalAmount.toBigDecimal()
    }

    @ReactProp(name = "colorScheme")
    fun setColorScheme(view: AfterpayPriceBreakdown, colorScheme: String) {
        when (colorScheme) {
            "BLACK_ON_WHITE" -> view.colorScheme = AfterpayColorScheme.BLACK_ON_WHITE
            "WHITE_ON_BLACK" -> view.colorScheme = AfterpayColorScheme.WHITE_ON_BLACK
            "MINT_ON_BLACK" -> view.colorScheme = AfterpayColorScheme.MINT_ON_BLACK
            "BLACK_ON_MINT" -> view.colorScheme = AfterpayColorScheme.BLACK_ON_MINT
        }
    }
}