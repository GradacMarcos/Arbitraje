import { Grid, TextField } from "@mui/material";
import "./Password.scss";

interface Props {
  label: string;
  onChange: (_value: string) => void;
}
export default function InputPassword(props: Props) {
  const { label } = props;
  return (
    <Grid container className="password">
      <TextField
        color="secondary"
        className="text-password"
        onChange={(event) => props.onChange(event.target.value)}
        id="outlined-password-input"
        label={label}
        type="password"
      />
    </Grid>
  );
}
