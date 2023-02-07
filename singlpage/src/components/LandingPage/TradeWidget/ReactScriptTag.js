import React from "react";

class ReactScriptTag extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = this.props.src;
    script.async = this.props.async;
    script.type = this.props.type;

    Object.entries(this.props.data).forEach(([key, value]) => {
      script[key] = value;
    });

    if (this.props.innerHTML) {
      script.innerHTML = this.props.innerHTML;
    }

    if (this.props.onLoad) {
      script.onload = this.props.onLoad;
    }

    this.instance.appendChild(script);
  }

  componentWillUnmount() {
    this.instance.removeChild(this.instance.lastChild);
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
