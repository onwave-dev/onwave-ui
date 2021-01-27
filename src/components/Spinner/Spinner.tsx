import styled from "@emotion/styled";
import React from "react";

type Props = {
  size: number;
};
export const Spinner = React.memo<Props>(({ size }) => {
  return (
    <Container>
      <SpinnerContainer>
        <SpinnerAnimation>
          <svg
            height={size}
            width={size}
            viewBox="0 0 100 100"
            strokeWidth={strokeWidth}
          >
            <SpinnerTrack d={SPINNER_TRACK} />
            <SpinnerHead
              d={SPINNER_TRACK}
              pathLength={PATH_LENGTH}
              strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
              strokeDashoffset={strokeOffset}
            />
          </svg>
        </SpinnerAnimation>
      </SpinnerContainer>
    </Container>
  );
});

const SPINNER_TRACK =
  "M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89";
const PATH_LENGTH = 280;
const STROKE_WIDTH = 4;

const strokeWidth = (STROKE_WIDTH * 100) / 50;
const strokeOffset = PATH_LENGTH - PATH_LENGTH * 0.25;

const SpinnerHead = styled.path`
  transform-origin: center;
  transition: stroke-dashoffset 2s cubic-bezier(0.4, 1, 0.75, 0.9);
  stroke: #3e4042;
  stroke-linecap: round;
`;

const SpinnerTrack = styled.path`
  stroke: rgba(0, 0, 0, 0.07);
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  vertical-align: middle;
  svg {
    display: block;
  }
  path {
    fill-opacity: 0;
  }
`;

const SpinnerAnimation = styled.span`
  @keyframes pt-spinner-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: pt-spinner-animation 0.8s linear infinite;
`;

const Container = styled.div`
  display: inline-block;
`;
