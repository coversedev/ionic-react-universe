import type { Meta, StoryObj } from "@storybook/react";
import SubscriptionCard from './SubscriptionCard';
import { setupIonicReact } from "@ionic/react";


setupIonicReact();

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SubscriptionCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cards/SubscriptionCard",
  component: SubscriptionCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SubscriptionCard>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
