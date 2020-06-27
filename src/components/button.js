class ButtonComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --vvd-button-background-color:var(--vvd-color-primary-background);
          --vvd-button-color:var(--vvd-color-primary-foreground);
        }
      
        :host([inverted]) {
          --vvd-button-background-color: var(--vvd-color-base-foreground);
          --vvd-button-color: var(--vvd-color-base-background);
        }

        button {
          height: 40px;
          border: 0 none;
          border-radius: 2px;
          background-color: var(--vvd-button-background-color);
          color: var(--vvd-button-color);
        }
      </style>
      <button>
        <slot>
        </slot>
      </button>
    `;
  }
}

customElements.define("my-button", ButtonComponent);
