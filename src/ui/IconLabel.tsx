import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  iconIdentifier: string;
  label: React.ReactNode;
}

const IconLabel: React.FC<Props> = ({ iconIdentifier, label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "col",
        gap: "8px",
        justifyContent: "start",
      }}
    >
      <div style={{ marginTop: -2 }}>
        <span className="material-symbols-rounded iconSmall">
          {iconIdentifier}
        </span>
      </div>
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
};

export default IconLabel;
