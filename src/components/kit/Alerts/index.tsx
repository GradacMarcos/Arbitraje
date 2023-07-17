import { Alert, AlertColor, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./Alert.scss";
import { DesktopContext } from "../../../pages/App";
export type AlertType = "noProcess" | "success" | "error";
interface Props {
  setAlertStatus: React.Dispatch<React.SetStateAction<AlertType>>;
  severity: AlertColor;
  message: string;
}

export default function Alerts(props: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
      props.setAlertStatus("noProcess");
    }, 4000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <DesktopContext.Consumer>
      {(isDesktop) => (
        <Grid className={`alert-styles-${isDesktop ? "desktop" : "mobile"}`}>
          {show && (
            <Alert variant="filled" className="alert" severity={props.severity}>
              {props.message}
            </Alert>
          )}
        </Grid>
      )}
    </DesktopContext.Consumer>
  );
}
