export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

//Local storage functions
export const fetchData = (key) => {
  // localStorage.setItem("userName", JSON.stringify("Yudhajit"));
  return JSON.parse(localStorage.getItem(key));
};

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpense = fetchData("Expense") ?? [];
  return localStorage.setItem(
    "Expense",
    JSON.stringify([...existingExpense, newItem])
  );
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
