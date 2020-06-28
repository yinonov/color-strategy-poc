class ActionComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
          padding: 5px;
          margin: 5px 0;
          background-color: var(--vvd-action-background-color);
          color: var(--vvd-action-color);
        }

        :host(:not([alternate])) {
          --vvd-action-background-color: var(--vvd-color-base-background);
          --vvd-action-color: var(--vvd-color-base-foreground);
          border:1px solid currentColor;
        }
  
        :host(:not([alternate])[type="success"]) ::slotted(my-button) {
          --vvd-button-background-color: var(--vvd-color-success-background);
          --vvd-button-color: var(--vvd-color-success-foreground);
        }
        
        :host(:not([alternate])[type="warn"]) ::slotted(my-button) {
          --vvd-button-background-color: var(--vvd-color-warn-background);
          --vvd-button-color: var(--vvd-color-warn-foreground);
        }
        
        :host(:not([alternate])[type="error"]) ::slotted(my-button) {
          --vvd-button-background-color: var(--vvd-color-error-background);
          --vvd-button-color: var(--vvd-color-error-foreground);
        }
        

        :host([alternate][type="success"]) {
          --vvd-action-background-color: var(--vvd-color-success-background);
          --vvd-action-color: var(--vvd-color-success-foreground);
        }
  
        :host([alternate][type="warn"]) {
          --vvd-action-background-color: var(--vvd-color-warn-background);
          --vvd-action-color: var(--vvd-color-warn-foreground);
        }
  
        :host([alternate][type="error"]) {
          --vvd-action-background-color: var(--vvd-color-error-background);
          --vvd-action-color: var(--vvd-color-error-foreground);
        }

        /* force button to invert */
        :host([alternate]) ::slotted(my-button) {
          --vvd-button-background-color: var(--vvd-color-base-foreground);
          --vvd-button-color: var(--vvd-color-base-background);
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define("my-action", ActionComponent);
