import { Meta, Story } from "@storybook/react";
import React, { PropsWithChildren } from "react";
import { ModalBottomSheet, ModalBottomSheetProps } from ".";

export default {
  title: "components/overlays/ModalBottomSheet",
  component: ModalBottomSheet,
  argTypes: {},
} as Meta;

const Template: Story<PropsWithChildren<ModalBottomSheetProps>> = (args) => (
  <ModalBottomSheet {...args} />
);

export const SimpleModalBottomSheet = Template.bind({});
SimpleModalBottomSheet.args = {
  title: "hello",
  opener: <button>hello</button>,
  children: (
    <div>
      hello<h3>helloo</h3>
    </div>
  ),
};
