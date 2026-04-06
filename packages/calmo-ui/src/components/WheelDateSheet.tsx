import React, { useMemo, useState } from "react";
import BottomSheet from "./BottomSheet.js";
import Button from "./Button.js";
import Inline from "../primitives/Inline.js";
import Text from "./Text.js";
import Wheel from "./Wheel.js";

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value?: string) {
  if (!value) return new Date();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export interface WheelDateSheetProps {
  open: boolean;
  onClose?: () => void;
  value?: string;
  defaultValue?: string;
  onChange?: (event: { target: { value: string }; currentTarget: { value: string } }) => void;
  minYear?: number;
  maxYear?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export default function WheelDateSheet({
  open,
  onClose,
  value,
  defaultValue,
  onChange,
  minYear = 2000,
  maxYear = 2035,
  title = "Choose a date",
  description = "Pick year, month, and day.",
}: WheelDateSheetProps) {
  const [draft, setDraft] = useState(parseDate(value ?? defaultValue));

  React.useEffect(() => {
    if (open) {
      setDraft(parseDate(value ?? defaultValue));
    }
  }, [open, value, defaultValue]);

  const years = useMemo(
    () => Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index),
    [minYear, maxYear],
  );
  const days = useMemo(
    () => Array.from({ length: new Date(draft.getFullYear(), draft.getMonth() + 1, 0).getDate() }, (_, index) => index + 1),
    [draft],
  );

  const updatePart = (part: "year" | "month" | "day", nextValue: string | number) => {
    const next = new Date(draft);
    const numeric = Number(nextValue);
    if (part === "year") next.setFullYear(numeric);
    if (part === "month") next.setMonth(numeric - 1);
    if (part === "day") next.setDate(numeric);
    setDraft(next);
  };

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      header={<Text variant="title">{title}</Text>}
      description={<Text variant="caption">{description}</Text>}
      footer={
        <Inline gap={10}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              const nextValue = formatDate(draft);
              onChange?.({ target: { value: nextValue }, currentTarget: { value: nextValue } });
              onClose?.();
            }}
          >
            Apply
          </Button>
        </Inline>
      }
    >
      <div className="rpl-wheel-date-sheet">
        <Wheel
          options={years.map((year) => ({ label: year, value: year }))}
          value={draft.getFullYear()}
          onChange={(nextValue) => updatePart("year", nextValue)}
        />
        <Wheel
          options={monthLabels.map((month, index) => ({ label: month, value: index + 1 }))}
          value={draft.getMonth() + 1}
          onChange={(nextValue) => updatePart("month", nextValue)}
        />
        <Wheel
          options={days.map((day) => ({ label: day, value: day }))}
          value={draft.getDate()}
          onChange={(nextValue) => updatePart("day", nextValue)}
        />
      </div>
    </BottomSheet>
  );
}
