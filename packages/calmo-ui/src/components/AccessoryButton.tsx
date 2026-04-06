import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Text from "./Text.js";

export default function AccessoryButton({
  icon,
  title,
  description,
  trailing,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button type={type} className={cx("rpl-accessory-button", className)} {...props}>
      <div className="rpl-accessory-button-main">
        {icon ? (
          <span className="rpl-accessory-button-icon">
            {typeof icon === "string" ? <Icon name={icon} size={16} /> : icon}
          </span>
        ) : null}
        <span className="rpl-accessory-button-copy">
          {title ? <Text as="span" variant="label">{title}</Text> : null}
          {description ? <Text as="span" variant="caption">{description}</Text> : null}
        </span>
      </div>
      <span className="rpl-accessory-button-trailing">
        {trailing ?? <Icon name="chevronRight" size={14} />}
      </span>
    </button>
  );
}
