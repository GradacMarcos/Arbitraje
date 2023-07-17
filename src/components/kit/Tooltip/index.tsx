import { Grid, Tooltip, Typography } from "@mui/material";

interface Props {
    children: React.ReactElement;
    description: string;
}
export default function ComponentTooltip(props: Props) {
    return (
        <Grid container>
            <Tooltip followCursor arrow color="secondary"
                title={
                    <Typography variant="h6">{props.description}</Typography>
                }>
                {props.children}
            </Tooltip>
        </Grid>

    )
}