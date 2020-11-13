import styled from "@emotion/styled";
import React from "react";

type Props = {
  strokeColor?: string;
  backgroundColor?: string;
  percent: number;
};
export const ProgressBar: React.FC<Props> = ({
  strokeColor,
  backgroundColor,
  percent,
}) => {
  return (
    <Wrapper>
      <Container color={backgroundColor}>
        <Filler color={strokeColor} percent={percent} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div<{ color: string }>`
  background-color: ${({ color }) => color ?? "#fff"};
  padding: padding;
  width: 100%;
  height: 10px;
  border-radius: 50px;
`;

const Filler = styled.div<{ percent: number; color?: string }>`
  width: ${({ percent }) => (percent > 100 ? `100%` : `${percent}%`)};
  height: 10px;
  background-color: ${({ color }) => color ?? "#fe8c6a"};
  transition: width 1s ease-in-out;
  border-radius: inherit;
  display: flex;
  align-items: center;
`;
