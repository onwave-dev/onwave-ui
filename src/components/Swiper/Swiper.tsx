import styled from "@emotion/styled";
import React from "react";
import { useSwiper } from "./hooks/useSwiper";
import { SwiperOptions } from "./types";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Swiper: React.FC<SwiperOptions & Props> = React.memo((props) => {
  const { className, children, ...restProps } = props;
  const { sliderRef } = useSwiper(restProps);

  return (
    <Container className={className}>
      <SwiperContainer ref={sliderRef}>{children}</SwiperContainer>
    </Container>
  );
});

Swiper.defaultProps = {
  slides: ".oui-slide",
  delay: 3000,
};

const Container = styled.div`
  overflow: hidden;
`;

const SwiperContainer = styled.div`
  display: flex;
  position: relative;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  &[data-keen-slider-v] {
    flex-wrap: wrap;
    .oui-slide {
      width: 100%;
    }
  }

  &[data-keen-slider-moves] * {
    pointer-events: none;
  }
`;
