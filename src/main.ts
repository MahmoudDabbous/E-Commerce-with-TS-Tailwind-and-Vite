import "./style.css";
import { routes } from "./routes";
import { Router } from "./ts/router";

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router();

  router.addRoutes(routes);

  router.navigate();
});
