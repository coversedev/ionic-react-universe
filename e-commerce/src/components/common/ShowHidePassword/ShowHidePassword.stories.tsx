import type { Meta, StoryObj } from "@storybook/react";
import ShowHidePassword from "./ShowHidePassword";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ShowHidePassword> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Miscellanies/ShowHidePassword",
  component: ShowHidePassword,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ShowHidePassword>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
