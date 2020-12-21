import KeenSlider from "keen-slider";
import { useEffect } from "react";

type Props = {
  autoplay: boolean | undefined;
  delay: number | undefined;
  slider: KeenSlider;
  shouldPauseSwiper: boolean;
};

export const useAutoPlay = ({
  slider,
  autoplay,
  delay,
  shouldPauseSwiper,
}: Props): void => {
  useEffect(() => {
    if (!(autoplay && slider)) {
      return;
    }
    const intervalId = setInterval(() => {
      if (shouldPauseSwiper) {
        return;
      }
      slider.next();
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, delay, slider, shouldPauseSwiper]);
};
