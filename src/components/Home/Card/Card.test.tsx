import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { ComponentProps } from "react";

const defaultValues: ComponentProps<typeof Card> = {
  bgImage: "",
  cardRef: null,
  disabled: false,
  onClick: jest.fn(),
};

describe("Card", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  render(<Card {...defaultValues} />);

  it("should render correct values", () => {
    expect(screen.getByTestId("card-back")).toHaveTextContent("Card");
  });

  it("should call onClick", () => {
    render(<Card {...defaultValues} />);
    const card = screen.getByTestId("card");
    card.click();
    expect(defaultValues.onClick).toHaveBeenCalled();
  });

  it("should be non clickable", () => {
    render(<Card {...defaultValues} disabled={true} />);
    expect(screen.getByTestId("card-back")).toHaveStyle("pointer-events: none");
  });

  it("should use correct background", () => {
    render(<Card {...defaultValues} />);
    expect(screen.getByTestId("card-front")).toHaveStyle(
      `background-image: url(${defaultValues.bgImage});`
    );
  });
});
