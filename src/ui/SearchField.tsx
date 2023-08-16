/* eslint-disable @typescript-eslint/ban-types */
import { styled } from "@mui/material/styles";
import { InputAdornment, TextField } from "@mui/material";

const StyledTextField = styled(TextField)({
  marginTop: 5,
  height: 50,
  "& .MuiInputBase-root": {
    backgroundColor: "#F2F2F2",
    borderRadius: 6,
  },
  "& fieldset": { border: "none" },
  "& .MuiInputBase-input": {
    padding: 8,
  },
});

interface Props {
  center: boolean;
  id: string;
  value?: string;
  onChange?: Function;
}

const SearchField: React.FC<Props> = ({
  center,
  id,
  onChange = () => {},
  ...rest
}) => {
  return (
    <div style={{ maxWidth: 312, marginTop: center ? 5 : 0 }}>
      <StyledTextField
        id={id}
        variant="outlined"
        onChange={(event) => onChange(event?.target?.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span
                className="material-symbols-rounded"
                style={{ color: "black" }}
              >
                search
              </span>
            </InputAdornment>
          ),
          // TODO: icon with shorter handle
        }}
        {...rest}
      />
    </div>
  );
};

export default SearchField;
