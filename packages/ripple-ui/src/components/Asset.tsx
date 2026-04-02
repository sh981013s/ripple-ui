import React from "react";
import { cx } from "../utils/cx.js";

export interface AssetBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface AssetLottieProps extends AssetBaseProps {
  size?: number;
}

export function AssetContentIcon({ className = "", children, ...props }: AssetBaseProps) {
  return (
    <div className={cx("rpl-asset-content", "rpl-asset-content-icon", className)} {...props}>
      {children}
    </div>
  );
}

export function AssetContentLottie({ className = "", children, ...props }: AssetBaseProps) {
  return (
    <div className={cx("rpl-asset-content", "rpl-asset-content-lottie", className)} {...props}>
      {children}
    </div>
  );
}

export function AssetLottieCore({ size = 72, className = "", ...props }: AssetLottieProps) {
  return (
    <div
      className={cx("rpl-asset-lottie-core", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <span className="rpl-asset-lottie-orb" />
    </div>
  );
}

export function AssetLottie({ size = 72, className = "", children, ...props }: AssetLottieProps) {
  return (
    <div className={cx("rpl-asset-lottie", className)} style={{ width: size, height: size }} {...props}>
      {children ?? <AssetLottieCore size={size} />}
    </div>
  );
}

export interface AssetNamespace {
  ContentIcon: typeof AssetContentIcon;
  ContentLottie: typeof AssetContentLottie;
  Lottie: typeof AssetLottie;
  LottieCore: typeof AssetLottieCore;
}

const Asset: AssetNamespace = {
  ContentIcon: AssetContentIcon,
  ContentLottie: AssetContentLottie,
  Lottie: AssetLottie,
  LottieCore: AssetLottieCore,
};

export default Asset;
