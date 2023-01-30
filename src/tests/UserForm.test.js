import { getByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test("should find two inputs and one button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs).toHaveLength(2);
  const addBtn = screen.getByRole("button");
  expect(addBtn).toBeInTheDocument();
});

test("call handleAddUser when clicking add button with email and name", () => {
  const mock = jest.fn();
  render(<UserForm handleAddUser={mock} />);
  const usernameInput = screen.getByRole("textbox", { name: /username/i });
  user.click(usernameInput);
  user.keyboard("ahmed");
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  user.click(emailInput);
  user.keyboard("ahmed@gmail.com");
  const addBtn = screen.getByRole("button", { name: /add/i });
  user.click(addBtn);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("ahmed", "ahmed@gmail.com");
});

test("should empty inputs after submitting the form", () => {
  render(<UserForm handleAddUser={() => {}} />);
  const nameInput = screen.getByRole("textbox", { name: /username/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const addBtn = screen.getByRole("button", { name: /add/i });
  user.click(nameInput);
  user.keyboard("ahmed");
  user.click(emailInput);
  user.keyboard("ahmed@gmail.com");
  user.click(addBtn);
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
