import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders posts if post req succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem"); //default wait 1 second
    expect(listItemElements).not.toHaveLength(0);
  });
});
