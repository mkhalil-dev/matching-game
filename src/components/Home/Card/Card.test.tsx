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

  const { getByTestId } = render(<Card {...defaultValues} />);
  it("should render correct values", () => {
    expect(getByTestId("card-back")).toHaveTextContent("Card");
  });

  it("should call onClick", () => {
    const { getByTestId } = render(<Card {...defaultValues} />);
    const card = getByTestId("card");
    card.click();
    expect(defaultValues.onClick).toHaveBeenCalled();
  });

  it("should be non clickable", () => {
    const { getByTestId } = render(<Card {...defaultValues} disabled={true} />);
    expect(getByTestId("card-back")).toHaveStyle("pointer-events: none");
  });

  it("should use correct background", () => {
    const { getByTestId } = render(<Card {...defaultValues} />);
    expect(getByTestId("card-front")).toHaveStyle(
      `background-image: url(${defaultValues.bgImage});`
    );
  });
});
