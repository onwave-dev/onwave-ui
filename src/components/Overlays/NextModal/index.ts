import dynamic from "next/dynamic";

export const NextModal = dynamic(async () => (await import("../Modal")).Modal, {
  ssr: false,
});
