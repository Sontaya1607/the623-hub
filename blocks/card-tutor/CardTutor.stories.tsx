import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardTutor } from "../../blocks/card-tutor";

const meta = {
  title: "Card/Tutor",
  component: CardTutor,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardTutor>

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => (
    <div style={{
      width: 340,
      padding: 20,
      maxWidth: "100%",
      resize: "horizontal",
      overflow: "auto",
    }}>
      <CardTutor />
    </div>
  ),
}
