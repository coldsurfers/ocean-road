import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AppLogo } from '@coldsurfers/ocean-road';
import styled from '@emotion/styled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/AppLogo',
  component: AppLogo,
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
} satisfies Meta<typeof AppLogo>;

const StyledAppLogo = styled(AppLogo)`
    width: 120px;
    height: 120px;
`;

StyledAppLogo.displayName = 'AppLogo';

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Transparent: Story = {
  args: {
    type: 'round',
    logoTheme: 'transparent',
  },
  render: (args, ctx) => {
    return <StyledAppLogo {...args} />;
  },
};

export const Christmas: Story = {
  args: {
    type: 'round',
    logoTheme: 'christmas',
  },
  render: (args, ctx) => {
    return <StyledAppLogo {...args} />;
  },
};

export const WhiteBackground: Story = {
  args: {
    type: 'round',
    logoTheme: 'white-background',
  },
  render: (args, ctx) => {
    return <StyledAppLogo {...args} />;
  },
};
