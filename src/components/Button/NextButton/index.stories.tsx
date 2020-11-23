import { Meta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";
import { NextButton, NextButtonProps } from "../NextButton";

export default {
  title: "components/button/NextButton",
  component: NextButton,
  argTypes: {
    href: { conrol: "string" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PropsWithChildren<NextButtonProps>> = (args) => (
  <NextButton {...args} />
);

export const SimpleNextButton = Template.bind({});
SimpleNextButton.args = {
  href: "hello",
  children: "simple",
};

export const RedNextButton = Template.bind({});
RedNextButton.args = {
  href: "hello",
  children: "simple",
  color: "white",
  backgroundColor: "red",
};
