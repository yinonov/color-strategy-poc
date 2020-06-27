
class ActionComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>

        :host([type="success"]) {
          --vvd-action-background-color: var(--vvd-color-success-background);
          --vvd-action-color: var(--vvd-color-success-foreground);
        }
  
        :host([type="warn"]) {
          --vvd-action-background-color: var(--vvd-color-warn-background);
          --vvd-action-color: var(--vvd-color-warn-foreground);
        }
  
        :host([type="error"]) {
          --vvd-action-background-color: var(--vvd-color-error-background);
          --vvd-action-color: var(--vvd-color-error-foreground);
        }
  
        :host{
          display:block;
          background-color: var(--vvd-action-background-color);
          color: var(--vvd-action-color);
        }

        /* force button to invert */
        ::slotted(my-button) {
          --vvd-button-background-color: var(--vvd-action-color);
          --vvd-button-color: var(--vvd-action-background-color);
        }
      </style>
      <slot></slot>
    `;
  }
}
     
customElements.define('my-action', ActionComponent);