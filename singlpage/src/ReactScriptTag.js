import React from "react";

class ReactScriptTag extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = this.props.src;
    script.async = this.props.async;
    script.type = this.props.type;
    script.innerHTML = `
      new TradingView.TickerTapeWidget(
        {
          symbols: ${JSON.stringify(this.props.data.symbols)},
          showSymbolLogo: ${this.props.data.showSymbolLogo},
          colorTheme: "${this.props.data.colorTheme}",
          isTransparent: ${this.props.data.isTransparent},
          displayMode: "${this.props.data.displayMode}",
          locale: "${this.props.data.locale}"
        }
      );
    `;
    this.instance.appendChild(script);
  }

  render() {
    return (
      <div
        ref={(el) => {
          this.instance = el;
        }}
      />
    );
  }
}

export default ReactScriptTag;
