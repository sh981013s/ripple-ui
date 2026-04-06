export type SafeAreaEdge = "top" | "right" | "bottom" | "left";

export function safeAreaInset(edge: SafeAreaEdge, fallback = 0) {
  return `max(env(safe-area-inset-${edge}), ${fallback}px)`;
}

export default safeAreaInset;
