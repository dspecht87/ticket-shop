/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDateString, getTimeString } from "@/util/util";
import Grid from "@mui/material/Grid";
import IconLabel from "@/ui/IconLabel";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import i18next from "i18next";
import CutomButton from "@/ui/CustomButton";

function EventCard({ event }: { event: any }) {
  return (
    <Grid
      container
      columnSpacing={6}
      justifyItems="center"
      data-testid="event-card"
    >
      <Grid item xs={12} lg={4}>
        <div style={{ margin: "auto" }} className="event-image-container">
          <img src={event.imageUrl} alt={event.title} />
        </div>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignContent: "start",
            margin: "auto",
            maxWidth: { xs: "527px", lg: "none" },
          }}
        >
          <Typography sx={{ textAlign: "left" }} variant="h6">
            {event.title}
          </Typography>
          <Box
            sx={{
              marginTop: "21px",
              flexDirection: "column",
              display: "flex",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {event.startDate && (
                <>
                  <IconLabel
                    iconIdentifier="calendar_month"
                    label={getDateString(new Date(event.startDate))}
                  />
                  <IconLabel
                    iconIdentifier="schedule"
                    label={getTimeString(new Date(event.startDate))}
                  />
                </>
              )}
            </Box>
            <IconLabel
              iconIdentifier="location_on"
              label="Bootshaus, K&ouml;ln"
            />

            {event.priceFrom !== 0 && (
              <IconLabel
                iconIdentifier="confirmation_number"
                label={i18next.t("ticketPrice", {
                  price: event.priceFrom?.toFixed(2),
                })}
              />
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            marginTop: { xs: 0, ls: "60px" },
            display: "flex",
            justifyContent: { xs: "start", lg: "end" },
            flex: 1,
            margin: "auto",
            maxWidth: { xs: "527px", lg: "none" },
          }}
        >
          <Box sx={{ maxWidth: { xs: "527px", lg: "273px", flex: 1 } }}>
            <CutomButton
              variant="contained"
              fullWidth
              endIcon={
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: "32px", marginTop: "-3px" }}
                >
                  chevron_right
                </span>
              }
            >
              Zu den Tickets
            </CutomButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default EventCard;
