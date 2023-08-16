import { Box } from "@mui/material";
import BootshausLogo from "./assets/bootshaus_logo.png";

function Header() {
  return (
    <Box
      sx={{
        marginLeft: { xs: 0, lg: "-70px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "col",
          placeItems: "end",
          justifyContent: "center",
          height: { xs: "auto", lg: "231px" },
        }}
      >
        <div style={{ maxWidth: 551 }}>
          <img src={BootshausLogo} alt="Bootshaus Cologne" />
        </div>
      </Box>
    </Box>
  );
}

export default Header;
