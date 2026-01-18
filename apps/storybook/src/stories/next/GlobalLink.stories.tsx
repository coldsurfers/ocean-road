import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlobalLink } from '@coldsurfers/ocean-road/next';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'next/GlobalLink',
  component: GlobalLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `
            Nextjs에서 <RouteLoading />과 함께 사용하는 GlobalLink 컴포넌트입니다.

    - 내부적으로 useLinkStore를 사용합니다. 또한 <RouteLoading />과 연관되어 비동기적인 라우트 이동 시 로딩 인디케이터를 보여줍니다.
    - Nextjs의 Link 대신 사용할 수 있습니다.
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
  args: { onClick: fn() },
} satisfies Meta<typeof GlobalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: <p>Hello, GlobalLink</p>,
    href: '/href-to-navigate',
  },
};
