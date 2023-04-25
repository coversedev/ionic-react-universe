import type { Meta, StoryObj } from "@storybook/react";
import ButtonLoader from "./ButtonLoader";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ButtonLoader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Buttons/ButtonLoader",
  component: ButtonLoader,
  args: {
    children: 'Button'
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ButtonLoader>;

export const Raised: Story = {
  args: {
    //👇 The args you need here will depend on your component
    raised: true,
  },
};

export const Disabled: Story = {
  args: {
    //👇 The args you need here will depend on your component
    disabled: true,
  },
};

export const LoadingGlowAnimation: Story = {
  args: {
    //👇 The args you need here will depend on your component
    loading: true,
    animation: "glow",
  },
};

export const LoadingSpinnerAnimation: Story = {
  args: {
    //👇 The args you need here will depend on your component
    loading: true,
    animation: "spinner",
  },
};
