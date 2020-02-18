// Import your web-ready dependencies
import { h, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";
import get from "/web_modules/lodash.js";

const fakeData = { sw: 1, x: { y: 1, z: { zz: 2 } } };
const s = get(fakeData, "sw");
console.log(s);
const html = htm.bind(h);
// Create your main app component
function SomePreactComponent(props) {
  return html`
    <h1 style="color: red">Hello, World!</h1>
  `;
}
// Inject your application into the an element with the id `app`.
render(
  html`
    <${SomePreactComponent} />
  `,
  document.getElementById("app")
);
