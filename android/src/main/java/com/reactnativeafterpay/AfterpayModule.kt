package com.reactnativeafterpay

import com.afterpay.android.Afterpay
import com.facebook.react.bridge.*

class AfterpayModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Afterpay"
    }

    @ReactMethod
    fun setConfiguration(configuration: ReadableMap) {
        UiThreadUtil.runOnUiThread {
            if (configuration.hasKey("maximumAmount")
                && configuration.hasKey("currencyCode")) {
                Afterpay.setConfiguration(
                    configuration.getString("minimumAmount"),
                    configuration.getString("maximumAmount")!!,
                    configuration.getString("currencyCode")!!
                )
            }
        }
    }

    
}
