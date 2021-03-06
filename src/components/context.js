class ContextComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>

        /* vwc-app */
        :host {
            --vvd-color-base-background: #e8e8e8;
            --vvd-color-base-foreground: black;
            --vvd-color-base-dim: #bbbbbb;
          
            --vvd-color-surface-background: #c0c0c0;
            --vvd-color-surface-foreground: black;
          
            --vvd-color-primary-background: #433099;
            --vvd-color-primary-foreground: white;
          
            --vvd-color-secondary-background: #254edb;
            --vvd-color-secondary-foreground: white;
          
            --vvd-color-success-background: #14804d;
            --vvd-color-success-foreground: white;
          
            --vvd-color-warn-background: #f5f237;
            --vvd-color-warn-foreground: rgb(19, 14, 14);
          
            --vvd-color-error-background: #db2525;
            --vvd-color-error-foreground: white;
          }
          
          /* vwc-app[alternate], all optional */
          :host([alternate]) {
            --vvd-color-base-background: black;
            --vvd-color-base-foreground: #e8e8e8;
            --vvd-color-base-dim: #bbbbbb;
          
            --vvd-color-surface-background: #c0c0c0;
            --vvd-color-surface-foreground: black;
          
            --vvd-color-primary-background: #7d448f;
            --vvd-color-primary-foreground: white;
          
            --vvd-color-secondary-background: #254edb;
            --vvd-color-secondary-foreground: white;
          
            /* 
            --vvd-color-success-background: #254edb;
             --vvd-color-success-foreground: white;
          
             --vvd-color-warn-background: #254edb;
             --vvd-color-warn-foreground: white;
          
             --vvd-color-error-background: #254edb;
             --vvd-color-error-foreground: white;
            */
          }


          /*
          // vwc-surface component
        //  :host([context="success"]) {
        //    background-color: var(--vvd-color-success-background);
        //    color: var(--vvd-color-success-foreground);
        //  }
          
        
          
           ripple should be the main color mixed with background
        */
        
        :host {
          background-color:var(--vvd-color-base-background);
          color:var(--vvd-color-base-foreground);
        }
      </style>
      <slot>
      </slot>
    `;
  }
}

customElements.define("my-context", ContextComponent);
