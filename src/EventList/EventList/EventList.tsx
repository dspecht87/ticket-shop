/* eslint-disable @typescript-eslint/no-explicit-any */
import EventListItem from "@/EventList/EventList/EventListItem";
import Box from "@mui/material/Box";

function EventList({ data }: { data: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: { lg: "strech", xs: "none" },
      }}
    >
      {data?.length &&
        data.map((event: any, i: number) => (
          <EventListItem key={i} event={event} bg2={!(i % 2)} />
        ))}
    </Box>
  );
}

export default EventList;
