import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Test Engine Component", () => {
  test("renders Hello in greeting", () => {
    render(<Greetings />);
    const helloElement = screen.getByText("hello", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });
  test("renders CHanged on click", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("Changed");
    expect(outputElement).toBeInTheDocument();
  });
  test("does not render Greetings on button click", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("greetings", { exact: false });
    expect(outputElement).toBeNull();
  });
});
