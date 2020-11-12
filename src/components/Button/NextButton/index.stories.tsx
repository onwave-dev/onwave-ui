import React from "react";
import { Story, Meta } from "@storybook/react";
import { NextButton, NextButtonProps } from ".";

export default {
  title: "components/button/NextButton",
  component: NextButton,
  argTypes: {
    href: { conrol: "string" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<NextButtonProps> = (args) => <NextButton {...args} />;

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
