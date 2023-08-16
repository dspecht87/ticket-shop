import IconButton from "@mui/material/IconButton";

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const SquareIconButton: React.FC<Props> = ({ active, children, ...rest }) => {
  return (
    <IconButton
      style={{
        borderRadius: 8,
        padding: 7,
        ...(active
          ? {
              backgroundColor: "#000",
              color: "#fff",
            }
          : { color: "#000" }),
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

export default SquareIconButton;
