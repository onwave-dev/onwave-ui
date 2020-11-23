import { useWindowSize } from "./useWindowSize";

export const useBreakPoints = () => {
  const { width } = useWindowSize();

  return width
    ? {
        isMobile: width <= 481,
        isTablet: 481 < width && width <= 768,
        isDesktop: 768 < width,
      }
    : {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
      };
};
