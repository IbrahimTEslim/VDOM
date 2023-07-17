console.log("Hello, World! console");

import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";

const createVApp = (count) =>
  createElement(
    "div",
    {
      id: "app",
      dataCount: count,
    },
    [
      createElement("input"),
      String(count),
      createElement("img", {
        src: "https://media.giphy.com/media/IQYfvE9kIIFCiRweFa/giphy.gif",
      }),
    ]
  );

let count = 8;
let vapp = createVApp(count);
let $app = render(vapp);
let $root = mount($app, document.getElementById("app"));

setInterval(() => {
  count++;
  const vNewApp = createVApp(count);
  const patch = diff(vapp, vNewApp);
  $root = patch($root);
  vapp = vNewApp;
}, 1000);
// console.log(vApp);
console.log($app);
