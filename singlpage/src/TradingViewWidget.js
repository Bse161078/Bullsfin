import React from "react";

const TradingViewWidget = () => {
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">Markets today</span>
        </a>{" "}
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        async
      >
        {`{
                    "symbols": [
                        {
                            "description": "EURUSD",
                            "proName": "OANDA:EURUSD"
                        },
                        {
                            "description": "GBPUSD",
                            "proName": "OANDA:GBPUSD"
                        },
                        {
                            "description": "USDCAD",
                            "proName": "OANDA:USDCAD"
                        },
                        {
                            "description": "USDJPY",
                            "proName": "OANDA:USDJPY"
                        },
                        {
                            "description": "DOW",
                            "proName": "OANDA:US30USD"
                        },
                        {
                            "description": "NASDAQ",
                            "proName": "CURRENCYCOM:US100"
                        },
                        {
                            "description": "S&P500",
                            "proName": "CURRENCYCOM:US500"
                        },
                        {
                            "description": "Bitcoin",
                            "proName": "BINANCE:BTCUSD"
                        },
                        {
                            "description": "Ethereum",
                            "proName": "BINANCE:ETHUSDT"
                        },
                        {
                            "description": "WTI",
                            "proName": "OANDA:WTICOUSD"
                        }
                    ],
                    "showSymbolLogo": true,
                    "colorTheme": "dark",
                    "isTransparent": false,
                    "displayMode": "adaptive",
                    "locale": "en"
                }`}
      </script>
    </div>
  );
};

export default TradingViewWidget;
