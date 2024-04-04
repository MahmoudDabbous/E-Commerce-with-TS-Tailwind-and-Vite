export class Router {
  private routesMap: Route[] | undefined;
  private root: HTMLElement | null | undefined;

  constructor() {
    window.addEventListener("popstate", this.navigate.bind(this));
  }

  navigate() {
    const path = window.location.pathname;
    const route = this.routesMap?.find((route) => route.path === path);
    if (route) {
      this.root!.innerHTML = `<${route.component}></${route.component}>`;
    } else {
      this.root!.innerHTML = "<page-not-found></page-not-found>";
    }
  }

  addRoutes(routes: Route[]) {
    this.routesMap = routes;
    this.root = document.getElementById("app");
    routes.forEach((route) =>
      customElements.define(route.component, route.componentClass)
    );
  }
}
