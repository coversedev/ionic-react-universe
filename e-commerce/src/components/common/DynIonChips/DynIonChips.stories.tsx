import type { Meta, StoryObj } from "@storybook/react";
import DynIonChips from "./DynIonChips";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

const chips = [
  {
    id: 1,
    name: "Chip 1",
    value: { data: "foo" },
  },
  {
    id: 2,
    name: "Chip 2",
    value: { data: "bar" },
  },
  {
    id: 3,
    name: "Chip 3",
    value: { data: "baz" },
  },
];

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DynIonChips> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Chips/DynIonChips",
  component: DynIonChips,
  args: {
    chipValues: chips,
    onRemoveChipHandler: (id: any) =>
      console.log(`Removing chip with ID ${id}`),
    activatedChipHandler: (chip: any) => console.log(`Activating chip`, chip),
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DynIonChips>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: -1,
  },
};

export const Activated: Story = {
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: 1,
  },
};

export const CustomColor: Story = {
  args: {
    //👇 The args you need here will depend on your component
    activatedChipId: -1,
    color: "tertiary",
  },
};
