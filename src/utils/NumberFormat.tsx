import React from "react";
import { NumericFormat as ReactNumericFormat } from "react-number-format";

interface Props {
  value: number;
  displayType?: "text" | "input";
  thousandSeparator?: boolean;
  prefix?: string;
}

export default function NumberFormat(props: Props) {
  const {
    value,
    displayType = "text",
    thousandSeparator = true,
    prefix = "$",
  } = props;

  return (
    <ReactNumericFormat
      value={value}
      displayType={displayType}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      decimalScale={2}
    />
  );
}
