package com.antigravity.calculator;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // ── Edge-to-edge: let the app draw behind status & nav bars ──
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);

        // ── Make status bar fully transparent with dark icons ──
        Window window = getWindow();
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(Color.TRANSPARENT);

        // ── Dark status bar icons (since our background is black) ──
        View decorView = window.getDecorView();
        WindowInsetsControllerCompat insetsController =
                new WindowInsetsControllerCompat(window, decorView);
        insetsController.setAppearanceLightStatusBars(false); // white icons on black bg
        insetsController.setAppearanceLightNavigationBars(false);

        // ── Make navigation bar transparent ──
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            window.setNavigationBarColor(Color.TRANSPARENT);
            window.setNavigationBarContrastEnforced(false);
        } else {
            window.setNavigationBarColor(Color.BLACK);
        }

        // ── WebView performance tweaks ──
        WebView webView = getBridge().getWebView();
        WebSettings settings = webView.getSettings();
        settings.setDomStorageEnabled(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);     // GPU rendering
        webView.setBackgroundColor(Color.BLACK);                  // No white flash on load
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);        // No bounce effect
    }

    @Override
    public void onBackPressed() {
        // If the WebView can go back in history, let it navigate back.
        // Otherwise, exit the app normally.
        WebView webView = getBridge().getWebView();
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
