import { Meta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";
import { TextButton, TextButtonProps } from "../";

export default {
  title: "components/button/TextButton",
  component: TextButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PropsWithChildren<TextButtonProps>> = (args) => (
  <TextButton {...args} />
);

export const SimpleTextButton = Template.bind({});
SimpleTextButton.args = {
  children: "simple",
};
