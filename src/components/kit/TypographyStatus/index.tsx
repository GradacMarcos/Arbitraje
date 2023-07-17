import { Grid, Typography } from '@mui/material';
import './TypographyStatus.scss';

interface Props {
  color: "success" | "error" | "warning";
  text: string;
}

export default function TypographyStatus(props: Props) {

  return (
    <Grid container className='TypographyStatus'>
      <Typography className={`TypographyStatus-border-color-${props.color}`}>
        {props.text}
      </Typography>
  </Grid>
  );
};