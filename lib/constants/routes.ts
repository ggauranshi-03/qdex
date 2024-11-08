// routes.ts
export interface Route {
  path: string;
  label: string;
}

export const routes: Route[] = [
  { path: "/swap", label: "Swap" },
  { path: "/limit", label: "Limit" },
  { path: "/", label: "Home" },
  { path: "/pool", label: "Pool" },
];
