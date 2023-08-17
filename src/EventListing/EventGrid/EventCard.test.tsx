/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventCard from "./EventCard";

describe("EventCard", () => {
  const mockEvent = {
    imageUrl: "mockImageUrl",
    title: "Mock Event Title",
    startDate: new Date().toString(),
    priceFrom: 9.99,
  };

  it("renders event details correctly", () => {
    const { getByText, getByAltText, debug } = render(
      <EventCard event={mockEvent} />
    );

    debug();

    const titleElement = getByText(mockEvent.title);
    expect(titleElement).toBeInTheDocument();

    const imageElement = getByAltText(mockEvent.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockEvent.imageUrl);
  });
});
