import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button, Dropdown } from '@coldsurfers/ocean-road';
import { useRef } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/Dropdown.Trigger',
  component: Dropdown.Trigger,
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
} satisfies Meta<typeof Dropdown.Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DropdownWithCustomTrigger: Omit<Story, 'args'> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    return (
      <>
        <Dropdown.Trigger
          triggerRef={triggerRef}
          renderTriggerNode={({ openDropdown }) => (
            <Button ref={triggerRef} onClick={openDropdown}>
              Open dropdown
            </Button>
          )}
          backdrop={false}
        >
          <Dropdown.ResultItem>Hello Dropdown Trigger</Dropdown.ResultItem>
        </Dropdown.Trigger>
      </>
    );
  },
};
