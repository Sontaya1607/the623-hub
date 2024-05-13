import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardYoutubeMusic } from "./";

const meta = {
  title: "Card/Youtube Music",
  component: CardYoutubeMusic,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardYoutubeMusic>

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => <CardYoutubeMusic />,
}
