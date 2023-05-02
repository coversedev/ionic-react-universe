import type { Meta, StoryObj } from "@storybook/react";
import MobileCardCTA from "./MobileCardCTA";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MobileCardCTA> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cards/MobileCardCTA",
  component: MobileCardCTA,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MobileCardCTA>;

export const Raised: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
