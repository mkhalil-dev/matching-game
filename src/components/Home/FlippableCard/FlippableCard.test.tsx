import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import FlippableCard from "./FlippableCard";

const defaultValues: ComponentProps<typeof FlippableCard> = {
  selectedCards: [],
  card: {
    value: 0,
    isFlipped: false,
    index: 0,
  },
  handleClick: jest.fn(),
};

describe("Card", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  render(<FlippableCard {...defaultValues} />);
  it("should render a card", () => {
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
