import React from "react";

export interface UseBottomSheetResult {
  open: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  toggleSheet: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useBottomSheet(initialOpen = false): UseBottomSheetResult {
  const [open, setOpen] = React.useState(initialOpen);

  return {
    open,
    setOpen,
    openSheet: () => setOpen(true),
    closeSheet: () => setOpen(false),
    toggleSheet: () => setOpen((prev) => !prev),
  };
}
