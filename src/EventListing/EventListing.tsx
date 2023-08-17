import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import i18next from "i18next";
import { useState } from "react";
import SquareIconButton from "@/ui/SquareIconButton";
import EventGrid from "@/EventListing/EventGrid/EventGrid";

import SearchField from "@/ui/SearchField";
import useEvents from "@/hooks/useEvents";
import EventList from "@/EventListing/EventList/EventList";

enum ViewModes {
  grid = "GRID",
  list = "LIST",
  calendar = "CALENDAR",
}

function EventListing() {
  const [viewMode, setViewMode] = useState(ViewModes.grid);

  const { events, searchTerm: searchterm, setSearchTerm } = useEvents();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h5" component="h2" fontWeight="bold">
          {i18next.t("ticketsFor", { name: "Bootshaus" })}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "18px",
          }}
          alignItems="center"
          alignContent="center"
          flexWrap="wrap"
        >
          <SearchField
            id="search"
            center
            value={searchterm}
            onChange={setSearchTerm}
          />

          <Typography variant="body1" fontFamily="DM Sans">
            {i18next.t("view")}:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1px",
            }}
            flexWrap="wrap"
          >
            <SquareIconButton
              active={viewMode === ViewModes.grid}
              aria-label="select-grid-view"
              onClick={() => setViewMode(ViewModes.grid)}
            >
              <span className="material-symbols-rounded iconMedium">
                grid_view
              </span>
            </SquareIconButton>
            <SquareIconButton
              active={viewMode === ViewModes.list}
              aria-label="select-list-view"
              onClick={() => setViewMode(ViewModes.list)}
            >
              <span className="material-symbols-rounded iconMedium">list</span>
            </SquareIconButton>
            <SquareIconButton
              active={viewMode === ViewModes.calendar}
              aria-label="select-calendar-view"
              onClick={() => setViewMode(ViewModes.calendar)}
            >
              <span className="material-symbols-rounded iconMedium">
                calendar_month
              </span>
            </SquareIconButton>
          </Box>
        </Box>
      </Box>
      <div style={{ marginTop: "32px" }}>
        {viewMode === ViewModes.grid && <EventGrid data={events} />}
        {viewMode === ViewModes.list && <EventList data={events} />}
      </div>
    </Box>
  );
}

export default EventListing;
