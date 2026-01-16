import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { GridCardList, semantics } from '@coldsurfers/ocean-road';
import styled from '@emotion/styled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/GridCardItem',
  component: GridCardList.Item,
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
  args: { onClick: fn() },
} satisfies Meta<typeof GridCardList.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

const StyledThumbnail = styled.img`
  width: 10vw;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50%;
  border-radius: 12px;
  background-color: ${semantics.color.background[3]};
`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Item: Story = {
  args: {
    bottomText: '목요일 오후 7시 30분, 6월 25일',
    isSubscribed: false,
    thumbnailUrl:
      'https://images.unsplash.com/photo-1515333437113-6464312e1885?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titleText: 'COLDSURF Festival Vol.1',
    subText: 'COLDSURF 스테이지',
    renderThumbnail: (url) => <StyledThumbnail src={url} />,
  },
};
