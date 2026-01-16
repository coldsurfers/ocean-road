import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextArea } from '@coldsurfers/ocean-road';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'base/TextArea',
  component: TextArea,
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Hello, Label',
    noResize: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Required: Story = {
  args: {
    label: 'Hello, Label',
    noResize: false,
    required: true,
  },
};

export const ErrorCase: Story = {
  args: {
    label: 'Hello, Label',
    noResize: false,
    isError: true,
  },
};
