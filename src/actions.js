import { redirect } from "react-router-dom";
import { createBudget, deleteItem } from "./helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
  console.log("User logged out");
  deleteItem({ key: "userName" });
  toast.success("😒 Sorry To See You Go, Your Account is Deleted.", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    progress: undefined,
    theme: "dark",
  });
  return redirect("/");
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action == "newUser") {
    try {
      // throw new Error();
      localStorage.setItem("userName", JSON.stringify(values.userName));
      toast.success("🦄 You've created your account", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        theme: "dark",
      });
      return redirect("/");
    } catch (e) {
      toast.success("🥲 Sorry Something Went Wrong", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        theme: "dark",
      });
      throw new Error("There was a problem creating your account");
    }
  }
  if (_action == "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget Created!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (e) {
      throw new Error("There was a problem creating your budget");
    }
  }
}
