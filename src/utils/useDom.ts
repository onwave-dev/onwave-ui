export const useDom = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
