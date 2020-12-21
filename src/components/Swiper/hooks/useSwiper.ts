import KeenSlider, { useKeenSlider } from "keen-slider/react.esm";
import { RefObject, useState } from "react";
import { SwiperOptions } from "../types";
import { useAutoPlay } from "./useAutoPlay";

interface ReturnValue {
  sliderRef: RefObject<HTMLDivElement>;
  slider: KeenSlider;
}

export const useSwiper = (options: SwiperOptions): ReturnValue => {
  const { autoplay, delay } = options;

  const [shouldPauseSwiper, setShouldPauseSwiper] = useState(false);
  const toggleShouldPauseSwiper = (): void => {
    setShouldPauseSwiper((value) => !value);
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    ...options,
    ...(autoplay && {
      dragStart: toggleShouldPauseSwiper,
      dragEnd: toggleShouldPauseSwiper,
    }),
  });
  useAutoPlay({ slider, autoplay, delay, shouldPauseSwiper });

  return { sliderRef, slider };
};
