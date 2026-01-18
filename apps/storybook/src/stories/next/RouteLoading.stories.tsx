import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RouteLoading } from '@coldsurfers/ocean-road/next';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'next/RouteLoading',
  component: RouteLoading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `
    Nextjs에서 <GlobalLink />와 함께 사용하는 Global Route Loading 컴포넌트입니다.

    - 내부적으로 useLinkStore를 사용하여, overlay되는 center indicator를 그려줍니다.
    - 서버 컴포넌트 등을 사용하여, Link를 클릭 후 실제 라우트 이동이 일어나기까지의 비동기성에 대한 UX 향상 목적입니다.
    - nextjs app router 기준, 필요한 페이지의 page.tsx 혹은 layout.tsx에 부모로 그려주거나, app/layout.tsx에 글로벌하게 사용할 수 있습니다.
    - deps prop을 사용하여, 같은 path 파라미터를 가지고 있으면서 search parameter만 바뀔 시 등에 대비하여 무한 로딩을 방지합니다.
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
} satisfies Meta<typeof RouteLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SingleRouteLoading: Story = {
  args: {
    deps: [],
    children: <h1>Hello, RouteLoading</h1>,
  },
};
