import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export type ToastProps = {
  color?: string;
  backgroundColor?: string;
  message: string;
  dismiss?: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  color,
  backgroundColor,
  message,
  dismiss,
}) => {
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    const unmountAnimationTimeout = setTimeout(() => {
      setUnmount(true);
    }, 4500);

    if (dismiss) {
      // setTimeout(dismiss, 5000);
    } else {
      throw Error("No dismiss prop!");
    }
    return () => {
      clearTimeout(unmountAnimationTimeout);
      setUnmount(false);
    };
  }, []);

  return (
    <UnmountAnimation unmount={unmount}>
      <Container color={color} backgroundColor={backgroundColor}>
        <Message>{message}</Message>
      </Container>
    </UnmountAnimation>
  );
};

const fadeOutKeyFrames = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideDownKeyFrames = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 20px;
  }
`;

const unmountAnimationCss = css`
  animation: ${fadeOutKeyFrames} 0.2s;
`;

const unmountedCss = css`
  opacity: 0;
`;

const UnmountAnimation = styled.div<{ unmount: boolean }>`
  ${(props) => props.unmount && unmountAnimationCss}
  ${(props) => props.unmount && unmountedCss}
`;

const Container = styled.div<{ color?: string; backgroundColor?: string }>`
  min-width: 280px;
  max-width: 612px;
  border-radius: 3px;
  padding: 14px 16px;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor ?? "#1b1c1d"};
  color: ${(props) => props.color ?? "white"};
  margin-top: 20px;
  margin-bottom: 0;
  animation: ${slideDownKeyFrames} 0.1s ease-out;
`;

const Message = styled.span`
  margin-right: 12px;
  white-space: pre-wrap;
  word-break: break-all;
`;
