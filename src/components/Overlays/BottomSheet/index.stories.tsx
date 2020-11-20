import { Meta, Story } from "@storybook/react";
import React from "react";
import { BottomSheet, BottomSheetProps } from ".";

export default {
  title: "components/overlays/BottomSheet",
  component: BottomSheet,
  argTypes: {},
} as Meta;

const Template: Story<BottomSheetProps> = (args) => <BottomSheet {...args} />;

export const SimpleBottomSheet = Template.bind({});
SimpleBottomSheet.args = {
  title: "헬로우",
  renderContent: (
    <ul style={{ margin: 0 }}>
      <li>Item</li>
    </ul>
  ),
};
