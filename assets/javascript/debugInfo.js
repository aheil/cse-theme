class DebugInfo extends HTMLDivElement {
  constructor() {
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
    const wrapper = document.createElement("div");
    wrapper.setAttribute("markdown", "1");
    shadow.appendChild(wrapper);
  }
}

window.customElements.define("debug-info", DebugInfo);
