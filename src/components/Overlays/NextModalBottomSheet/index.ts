import dynamic from "next/dynamic";

export const NextModalBottomSheet = dynamic(
  async () => (await import("../ModalBottomSheet")).ModalBottomSheet,
  {
    ssr: false,
  }
);
