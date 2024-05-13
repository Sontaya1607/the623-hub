import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardTravel } from "../../blocks/card-travel";

const meta = {
  title: "Card/Travel",
  component: CardTravel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardTravel>

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => <CardTravel />,
}
