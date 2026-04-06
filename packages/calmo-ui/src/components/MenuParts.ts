export function MenuTrigger(props = {}) {
  return { ...props };
}

export function MenuHeader(props = {}) {
  return { type: "header", ...props };
}

export function MenuDropdownItem(props = {}) {
  return { type: "item", ...props };
}

export function MenuDropdownCheckItem(props = {}) {
  return { type: "item", checked: false, ...props };
}

export function MenuDropdownIcon(icon, props = {}) {
  return { icon, ...props };
}
