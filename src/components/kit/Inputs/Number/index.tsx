import { Grid, TextField } from "@mui/material";

interface Props {
  value?: string | number;
  label: string;
  onChange: (_value: number) => void;
}

export default function NumberInput(props: Props) {
  return (
    <Grid container>
      <TextField
        value={props.value}
        color="secondary"
        id="standard-number"
        label={props.label}
        onChange={(event) => props.onChange(parseInt(event.target.value))}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
}
