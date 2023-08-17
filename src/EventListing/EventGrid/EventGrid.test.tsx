/* eslint-disable @typescript-eslint/no-explicit-any */
import EventGrid from "./EventGrid";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the EventCard component
// jest.mock("@/EventListing/EventGrid/EventCard", () => {
//   return function MockEventCard(props: any) {
//     return <div data-testid="mock-event-card">{props.event.title}</div>;
//   };
// });

describe("EventGrid", () => {
  it("renders events correctly", () => {
    const eventData = [{ title: "Event 1" }, { title: "Event 2" }];

    const { getAllByTestId } = render(<EventGrid data={eventData} />);

    const eventCards = getAllByTestId("event-card");
    expect(eventCards).toHaveLength(eventData.length);

    eventData.forEach((event, index) => {
      expect(eventCards[index]).toHaveTextContent(event.title);
    });
  });

  it("renders no events when data is empty", () => {
    const { queryByTestId } = render(<EventGrid data={[]} />);
    const eventCards = queryByTestId("mock-event-card");
    expect(eventCards).toBeNull();
  });
});
