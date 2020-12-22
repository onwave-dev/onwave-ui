import styled from "@emotion/styled";
import { Meta } from "@storybook/react";
import React from "react";
import { Swiper } from ".";
import { Color, typography } from "../../core";
import { Slide } from "../Slide";

export default {
  title: "components/Swiper",
  component: Swiper,
} as Meta;

export const BasicUsage: React.FC = () => (
  <Swiper>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const LoopMode: React.FC = () => (
  <Swiper loop>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const AutoPlay: React.FC = () => (
  <Swiper loop autoplay delay={2000}>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const MultipleSlides: React.FC = () => (
  <Swiper loop slidesPerView={2}>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const Spacing: React.FC = () => (
  <Swiper loop slidesPerView={3} spacing={12}>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const FreeMode: React.FC = () => (
  <Swiper loop slidesPerView={3} spacing={12} mode="free">
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const CenteredSlides1: React.FC = () => (
  <Swiper slidesPerView={2} spacing={12} centered>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

export const CenteredSlides2: React.FC = () => (
  /* const WithPaddingSwiper = styled(Swiper)`
      padding: 0 32px;
  `; */
  <WithPaddingSwiper spacing={12}>
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </WithPaddingSwiper>
);

export const BreakPoints: React.FC = () => (
  <Swiper
    loop
    spacing={12}
    breakpoints={{
      "(min-width: 1024px) and (max-width: 1440px)": {
        slidesPerView: 2,
      },
      "(max-width: 1023px)": {
        slidesPerView: 3,
      },
    }}
  >
    <Box backgroundColor={Color.Red900}>1</Box>
    <Box backgroundColor={Color.Orange900}>2</Box>
    <Box backgroundColor={Color.Green500}>3</Box>
    <Box backgroundColor={Color.Blue900}>4</Box>
    <Box backgroundColor={Color.Gray900}>5</Box>
  </Swiper>
);

const Box = styled(Slide)<{ backgroundColor: string }>`
  ${typography.heading2};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 180px;
  background-color: ${(props) => props.backgroundColor};
`;

const WithPaddingSwiper = styled(Swiper)`
  padding: 0 32px;
`;
