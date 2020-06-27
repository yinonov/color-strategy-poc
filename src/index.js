import "./styles.scss";
import "./components/button.js";
import "./components/action.js";

document.getElementById("app").innerHTML = `
<h1>Main body context</h1>
<my-button>Hey</my-button>
<my-button inverted>Inverted</my-button>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<my-action type="success">
  <h2>Action Success</h2>
  <my-button>Hey</my-button>
  <my-button inverted>Inverted</my-button>
</my-action>

<my-action type="warn">
  <h2>Action Warn</h2>
  <my-button>Hey</my-button>
</my-action>

<my-action type="error">
  <h2>Action Error</h2>
  <my-button>Hey</my-button>
</my-action>

<hr>
<hr>
<hr>
<div class="context-alternate">
  <h1>Alternate context (toolbar, sidenav etc'...)</h1>
  <my-button>Hey</my-button>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  
  <my-action type="success">
    <h2>Action Success</h2>
    <my-button>Hey</my-button>
  </my-action>
  
  <my-action type="warn">
    <h2>Action Warn</h2>
    <my-button>Hey</my-button>
  </my-action>
  
  <my-action type="error">
    <h2>Action Error</h2>
    <my-button>Hey</my-button>
  </my-action>
</div>
`;
