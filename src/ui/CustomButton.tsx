import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const CutomButton = styled(Button)<ButtonProps>(() => ({
  border: 1,
  borderColor: "#000",
  color: "#FFF",
  backgroundColor: "#000",

  "&:hover": {
    backgroundColor: "#FFF",
    color: "#000",
  },
  fontWeight: "normal",
  fontFamily: "DM Sans",
  textTransform: "none",
  fontSize: 18,
  borderRadius: "8px",
  height: "55px",
  "& .MuiButton-endIcon": {
    marginLeft: "41px",
  },
  paddingTop: "10px",
  paddingLeft: "41px",
}));

export default CutomButton;
