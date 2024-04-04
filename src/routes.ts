import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";

export const routes = [
  { path: "/", component: "home-page", componentClass: HomePage },
  { path: "/about", component: "about-page", componentClass: AboutPage },
];
