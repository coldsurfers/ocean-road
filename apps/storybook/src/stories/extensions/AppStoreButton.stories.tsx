import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AppStoreButton } from '@coldsurfers/ocean-road';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/AppStoreButton',
  component: AppStoreButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `
          source: https://simpleicons.org
        `,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
} satisfies Meta<typeof AppStoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AppleAppStore: Story = {
  args: {
    store: 'app-store',
    url: 'https://apps.apple.com/kr/app/coldsurf-%EA%B3%B5%EC%97%B0-%EC%B6%94%EC%B2%9C-%ED%8B%B0%EC%BC%93-%EC%B6%94%EC%B2%9C-%EC%84%9C%EB%B9%84%EC%8A%A4/id1632802589',
  },
  render: (args) => {
    return <AppStoreButton {...args} />;
  },
};

export const GooglePlayStore: Story = {
  args: {
    store: 'google-play',
    url: 'https://play.google.com/store/apps/details?id=com.fstvllife.android',
  },
  render: (args) => {
    return <AppStoreButton {...args} />;
  },
};
