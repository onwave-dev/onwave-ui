import { TOptionsEvents as KeenSliderOptions } from "keen-slider";

export type SwiperOptions = KeenSliderOptions & {
  autoplay?: boolean;
  delay?: number;
};
