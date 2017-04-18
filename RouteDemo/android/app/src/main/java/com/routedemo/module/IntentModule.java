package com.routedemo.module;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
/**

 * Created by jiajiewang on 2017/4/17.
 */

public class IntentModule extends ReactContextBaseJavaModule {
    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentModule";
    }

    @ReactMethod
    public void StartActivityFromRN(String name, String params) {
        try {
            Activity activity = getCurrentActivity();
            if (activity != null) {
                Class toClass = Class.forName(name);
                Intent intent = new Intent(activity, toClass);
                intent.putExtra("params", params);
                activity.startActivity(intent);
            }
        } catch (Exception ex) {
            throw new JSApplicationIllegalArgumentException("不能打开Activity " + ex.getMessage());
        }
    }

    @ReactMethod
    public void getDataFromIntent(Callback success, Callback error) {
        try {
            Activity currentActivity = getCurrentActivity();
            String result = currentActivity.getIntent().getStringExtra("result");//会有对应数据放入
            if (!TextUtils.isEmpty(result)) {
                success.invoke(result);
            }
        } catch (Exception ex) {
            error.invoke(ex.getMessage());
        }
    }

}
