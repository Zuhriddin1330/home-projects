import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import React from "react";

function Home() {
  return <main style={{fontFamily:"system-ui",padding:"2rem"}}><h1>Nestwise Home Projects</h1><p>Router entry is configured.</p></main>;
}
const rootRoute = createRootRoute({ component: Home });
const routeTree = rootRoute.addChildren([createRoute({ getParentRoute: () => rootRoute, path: "/" , component: Home })]);
export const router = createRouter({ routeTree });
export function getRouter() { return router; }
declare module "@tanstack/react-router" { interface Register { router: typeof router } }
