import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GridCardList, semantics } from '@coldsurfers/ocean-road';
import styled from '@emotion/styled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/GridCardList',
  component: GridCardList.List,
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
} satisfies Meta<typeof GridCardList.List>;

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
export const List: Story = {
  args: {
    items: [
      {
        bottomText: '목요일 오후 7시 30분, 6월 25일',
        isSubscribed: false,
        thumbnailUrl:
          'https://images.unsplash.com/photo-1515333437113-6464312e1885?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titleText: 'COLDSURF Festival Vol.1',
        subText: 'COLDSURF 스테이지',
        renderThumbnail: (url) => <StyledThumbnail src={url} />,
      },
      {
        bottomText: '목요일 오후 7시 30분, 6월 25일',
        isSubscribed: false,
        thumbnailUrl:
          'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfDJ8MHx8fDI%3D',
        titleText: 'COLDSURF Festival Vol.1',
        subText: 'COLDSURF 스테이지',
        renderThumbnail: (url) => <StyledThumbnail src={url} />,
      },
      {
        bottomText: '목요일 오후 7시 30분, 6월 25일',
        isSubscribed: false,
        thumbnailUrl:
          'https://images.unsplash.com/photo-1695277715416-e225cf09d70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHwyfDB8fHwy',
        titleText: 'COLDSURF Festival Vol.2',
        subText: 'COLDSURF 스테이지',
        renderThumbnail: (url) => <StyledThumbnail src={url} />,
      },
      {
        bottomText: '목요일 오후 7시 30분, 6월 25일',
        isSubscribed: false,
        thumbnailUrl:
          'https://images.unsplash.com/photo-1545867454-7b0a30dfce8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmNlcnR8ZW58MHwyfDB8fHwy',
        titleText: 'COLDSURF Festival Vol.3',
        subText: 'COLDSURF 스테이지',
        renderThumbnail: (url) => <StyledThumbnail src={url} />,
      },
      {
        bottomText: '목요일 오후 7시 30분, 6월 25일',
        isSubscribed: false,
        thumbnailUrl:
          'https://images.unsplash.com/photo-1515333437113-6464312e1885?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titleText: 'COLDSURF Festival Vol.4',
        subText: 'COLDSURF 스테이지',
        renderThumbnail: (url) => <StyledThumbnail src={url} />,
      },
    ],
    renderItem: (item) => <GridCardList.Item {...item} />,
    onLoadMore: () => console.log('onLoadMore'),
    keyExtractor: (item, index) => `${item.titleText}-${index}`,
  },
};
