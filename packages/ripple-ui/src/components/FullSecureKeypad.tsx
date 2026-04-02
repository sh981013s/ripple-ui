import React from "react";
import { cx } from "../utils/cx.js";
import NumberKeypad from "./NumberKeypad.js";
import Text from "./Text.js";

function shuffle(source: string[]) {
  const array = [...source];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [array[index], array[target]] = [array[target]!, array[index]!];
  }
  return array;
}

export interface FullSecureKeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  title?: React.ReactNode;
  masked?: boolean;
}

export default function FullSecureKeypad({
  value = "",
  onChange,
  maxLength = 6,
  title = "Enter secure code",
  masked = true,
  className = "",
  ...props
}: FullSecureKeypadProps) {
  const [order, setOrder] = React.useState(() => shuffle(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]));

  const displayed = masked ? "•".repeat(value.length) : value;

  return (
    <div className={cx("rpl-full-secure-keypad", className)} {...props}>
      <Text variant="label">{title}</Text>
      <div className="rpl-full-secure-keypad-display">{displayed || "••••••"}</div>
      <div className="rpl-keypad rpl-keypad-number">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="rpl-keypad-row">
            {order.slice(row * 3, row * 3 + 3).map((key) => (
              <button
                key={key}
                type="button"
                className="rpl-keypad-key"
                onClick={() => {
                  if (value.length < maxLength) onChange?.(`${value}${key}`);
                }}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        <div className="rpl-keypad-row">
          <button type="button" className="rpl-keypad-key rpl-keypad-key-utility" onClick={() => setOrder(shuffle(order))}>
            Shuffle
          </button>
          <button
            type="button"
            className="rpl-keypad-key"
            onClick={() => {
              if (value.length < maxLength) onChange?.(`${value}${order[0] ?? "0"}`);
            }}
          >
            {order[0] ?? "0"}
          </button>
          <button type="button" className="rpl-keypad-key rpl-keypad-key-utility" onClick={() => onChange?.(value.slice(0, -1))}>
            ⌫
          </button>
        </div>
      </div>
      <NumberKeypad value="" style={{ display: "none" }} />
    </div>
  );
}
