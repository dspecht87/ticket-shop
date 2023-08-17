/* eslint-disable @typescript-eslint/no-explicit-any */
import EventCard from "@/EventListing/EventGrid/EventCard";
import Box from "@mui/material/Box";

function EventGrid({ data }: { data: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "34px",
        justifyItems: "center",
      }}
      alignItems="strech"
    >
      {data?.length &&
        data.map((event: any, i: number) => (
          <EventCard key={i} event={event} />
        ))}
    </Box>
  );
}

export default EventGrid;
