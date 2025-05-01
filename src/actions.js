import { redirect } from "react-router-dom";
import { deleteItem } from "./helpers";
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
  const formData = Object.fromEntries(data);
  try {
    // throw new Error();
    localStorage.setItem("userName", JSON.stringify(formData.userName));
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
