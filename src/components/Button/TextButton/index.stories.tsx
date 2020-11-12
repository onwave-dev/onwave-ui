import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextButton, TextButtonProps } from ".";

export default {
  title: "components/button/TextButton",
  component: TextButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />;

export const SimpleTextButton = Template.bind({});
SimpleTextButton.args = {
  children: "simple",
};
