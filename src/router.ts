import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import React from "react";

function Home() {
  return React.createElement("main", { style: { fontFamily: "system-ui", padding: "2rem" } },
    React.createElement("h1", null, "Nestwise Home Projects"),
    React.createElement("p", null, "Router entry is configured.")
  );
}
const rootRoute = createRootRoute({ component: Home });
const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home })
]);
export const router = createRouter({ routeTree });
export function getRouter() { return router; }
declare module "@tanstack/react-router" { interface Register { router: typeof router } }
