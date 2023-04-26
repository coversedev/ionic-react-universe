import type { Meta, StoryObj } from "@storybook/react";
import PlayStoreButton from "./PlayStoreButton";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PlayStoreButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Buttons/PlayStoreButton",
  component: PlayStoreButton,
  args: {
    children: "Button",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PlayStoreButton>;

export const Raised: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
