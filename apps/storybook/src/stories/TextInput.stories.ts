import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextInput } from '@coldsurfers/ocean-road';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'base/TextInput',
  component: TextInput,
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
  args: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Hello, Label',
  },
};

export const WithLeftPrefix: Story = {
  args: {
    label: 'Hello, Label',
    left: '$',
  },
};

export const WithRightPrefix: Story = {
  args: {
    label: 'Hello, Label',
    right: 'won',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Required: Story = {
  args: {
    label: 'Hello, Label',
    required: true,
  },
};

export const ErrorCase: Story = {
  args: {
    label: 'Hello, Label',
    isError: true,
  },
};
