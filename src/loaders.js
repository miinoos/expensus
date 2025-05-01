import { fetchData } from "./helpers";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}
