import type { Meta, StoryObj } from "@storybook/react";
import SubscriptionCard2 from './SubscriptionCard2';
import { setupIonicReact } from "@ionic/react";


setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SubscriptionCard2> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cards/SubscriptionCard2",
  component: SubscriptionCard2,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SubscriptionCard2>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
