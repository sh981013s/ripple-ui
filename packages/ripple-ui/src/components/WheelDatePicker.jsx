import React from "react";
import DatePicker from "./DatePicker.jsx";

export default function WheelDatePicker(props) {
  return (
    <DatePicker
      sheetEyebrow="Wheel date picker"
      sheetTitle="Select a date"
      {...props}
    />
  );
}
