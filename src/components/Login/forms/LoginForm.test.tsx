import LoginForm from "./LoginForm";
import { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

const defaultValues: ComponentProps<typeof LoginForm> = {
  onSubmit: jest.fn(),
  loading: false,
};

describe("LoginForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  render(<LoginForm {...defaultValues} />);
  it("should render correct values", () => {
    expect(screen.getByTestId("login-form")).toHaveTextContent("Username");
  });
});
