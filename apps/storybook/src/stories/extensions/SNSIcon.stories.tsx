import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SNSIcon, semantics } from '@coldsurfers/ocean-road';
import styled from '@emotion/styled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/SNSIcon',
  component: SNSIcon,
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
} satisfies Meta<typeof SNSIcon>;

const StyledAppLogo = styled(SNSIcon)`
    width: 120px;
    height: 120px;
    fill: ${semantics.color.foreground[1]};
`;

StyledAppLogo.displayName = 'SNSIcon';

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Facebook: Story = {
  args: {
    social: 'facebook',
  },
  render: (args) => {
    return <StyledAppLogo {...args} />;
  },
};

export const Instagram: Story = {
  args: {
    social: 'instagram',
  },
  render: (args) => {
    return <StyledAppLogo {...args} />;
  },
};

export const X: Story = {
  args: {
    social: 'x',
  },
  render: (args) => {
    return <StyledAppLogo {...args} />;
  },
};

export const Youtube: Story = {
  args: {
    social: 'youtube',
  },
  render: (args) => {
    return <StyledAppLogo {...args} />;
  },
};
