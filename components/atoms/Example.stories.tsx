import type { Meta, StoryObj } from "@storybook/react";

import Example from "./Example";

const meta = {
  title: "Atoms/Example",
  component: Example,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
