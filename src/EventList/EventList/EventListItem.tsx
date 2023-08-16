/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDateString, getDateTime } from "@/EventList/EventGrid/util.js";
import Grid from "@mui/material/Grid";
import IconLabel from "@/ui/IconLabel";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import i18next from "i18next";
import CutomButton from "@/ui/CustomButton";

function EventListItem({ event, bg2 }: { event: any; bg2: boolean }) {
  return (
    <Grid
      container
      columnSpacing={6}
      justifyItems="center"
      alignContent="center"
      sx={{
        padingLeft: "32px",
        paddingRight: "30px",
        height: { lg: "88px", xs: "auto" },
        backgroundColor: bg2 ? "#F2F2F2" : "white",
      }}
    >
      <Grid item xs={12} lg={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ textAlign: "left" }}
            variant="body1"
            fontWeight="bold"
          >
            {event.title}
          </Typography>
          <IconLabel
            iconIdentifier="location_on"
            label="Bootshaus, K&ouml;ln"
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ textAlign: "left" }} variant="body1">
            {i18next.t("at")} {getDateString(new Date(event.startDate))}
          </Typography>
          <Typography sx={{ textAlign: "left" }} variant="body1">
            {i18next.t("starting")} {getDateTime(new Date(event.startDate))}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ textAlign: "left" }} variant="body1">
            {i18next.t("ticketPriceFirstLine")}
          </Typography>
          {event.priceFrom !== 0 ? (
            <Typography
              sx={{ textAlign: "left" }}
              variant="body1"
              fontWeight="bold"
            >
              {i18next.t("ticketPriceSecLine", {
                price: event.priceFrom.toFixed(2),
              })}
            </Typography>
          ) : (
            <Typography sx={{ textAlign: "left" }} variant="body1">
              -
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "527px",
              lg: "273px",
              flex: 1,
            },
          }}
        >
          <CutomButton
            variant="contained"
            fullWidth
            height="46px"
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
      </Grid>
    </Grid>
  );
}

export default EventListItem;
