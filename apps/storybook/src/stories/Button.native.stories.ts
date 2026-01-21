import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from '@coldsurfers/ocean-road/native';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'native/base/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Indigo: Story = {
  args: {
    variant: 'indigo',
    children: 'Button',
  },
};

export const Border: Story = {
  args: {
    variant: 'border',
    children: 'Button',
  },
};

export const Pink: Story = {
  args: {
    variant: 'pink',
    children: 'Button',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Button',
  },
};

export const TransparentDarkGray: Story = {
  args: {
    variant: 'transparentDarkGray',
    children: 'Button',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    children: 'Button',
  },
};
