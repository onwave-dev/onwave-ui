export const useDom = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement &&
    document &&
    document.createElement &&
    document.body
  );
