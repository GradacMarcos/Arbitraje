import React, { useState } from "react";
import {
  Accordion as ReactAccordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.scss";

interface Props {
  accordionHead: React.ReactNode;
  accordionContent: React.ReactNode;
}

export default function Accordion(props: Props) {
  const { accordionHead, accordionContent } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <Grid className="Accordion" container>
      <ReactAccordion
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
        sx={{ width: "100%" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {accordionHead}
        </AccordionSummary>
        <AccordionDetails>
          {accordionContent}
        </AccordionDetails>
      </ReactAccordion>
    </Grid>
  );
}
