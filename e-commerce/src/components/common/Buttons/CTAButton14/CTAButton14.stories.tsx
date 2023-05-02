import type { Meta, StoryObj } from "@storybook/react";
import CTAButton14 from "./CTAButton14";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CTAButton14> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Buttons/CTAButton14",
  component: CTAButton14,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CTAButton14>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
