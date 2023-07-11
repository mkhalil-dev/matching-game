import LoginForm from "./LoginForm";
import { ComponentProps } from "react";
import { fireEvent, render } from "@testing-library/react";

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

  const { getByTestId } = render(<LoginForm {...defaultValues} />);
  it("should render correct values", () => {
    expect(getByTestId("login-form")).toHaveTextContent("Username");
  });
});
