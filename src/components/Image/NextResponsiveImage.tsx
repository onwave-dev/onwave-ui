import dynamic from "next/dynamic";

export const ResponsiveImage = dynamic(() => import("./RawResponsiveImage"), {
  ssr: false,
});
