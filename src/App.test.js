import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("should see one row when adding a user", () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", { name: /username/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const addBtn = screen.getByRole("button", { name: /add/i });
  user.click(nameInput);
  user.keyboard("ahmed");
  user.click(emailInput);
  user.keyboard("ahmed@gmail.com");
  user.click(addBtn);
  const name = screen.getByRole("cell", { name: "ahmed" });
  const email = screen.getByRole("cell", { name: "ahmed@gmail.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
