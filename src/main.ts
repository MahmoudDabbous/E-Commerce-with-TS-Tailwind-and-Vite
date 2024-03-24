import "./style.css";
// import { AppLayout } from "./layout/app.js";

// new AppLayout([]).render();
document.querySelector<HTMLDivElement>("#app")!.outerHTML = /* html */ `
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>`;
