package com.reactnativeafterpay

import com.afterpay.android.view.AfterpayColorScheme
import com.afterpay.android.view.AfterpayPaymentButton
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class AfterpayPaymentButtonManager: SimpleViewManager<AfterpayPaymentButton>() {

    override fun getName(): String {
        return "AfterpayPaymentButton"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): AfterpayPaymentButton {
        return AfterpayPaymentButton(reactContext)
    }

    @ReactProp(name = "colorScheme")
    fun setColorScheme(view: AfterpayPaymentButton, colorScheme: String) {
        when (colorScheme) {
            "BLACK_ON_WHITE" -> view.colorScheme = AfterpayColorScheme.BLACK_ON_WHITE
            "WHITE_ON_BLACK" -> view.colorScheme = AfterpayColorScheme.WHITE_ON_BLACK
            "MINT_ON_BLACK" -> view.colorScheme = AfterpayColorScheme.MINT_ON_BLACK
            "BLACK_ON_MINT" -> view.colorScheme = AfterpayColorScheme.BLACK_ON_MINT
        }
    }
}