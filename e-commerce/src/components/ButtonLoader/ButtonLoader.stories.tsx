import type { Meta, StoryObj } from "@storybook/react";
import ButtonLoader from "./ButtonLoader";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ButtonLoader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ButtonLoader",
  component: ButtonLoader,
};
export default meta;
type Story = StoryObj<typeof ButtonLoader>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
  },
};

export const Raised: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
    raised: true,
  },
};

export const Disabled: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
    loading: true,
  },
};

export const GlowAnimation: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
    animation: "glow",
  },
};

export const SpinnerAnimation: Story = {
  args: {
    //👇 The args you need here will depend on your component
    onClick: () => console.log("Button clicked"),
    animation: "spinner",
  },
};
