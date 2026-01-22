import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Dropdown, Text } from '@coldsurfers/ocean-road';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'extensions/Dropdown.MenuItem',
  component: Dropdown.MenuItem,
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
} satisfies Meta<typeof Dropdown.MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DropdownWithMenuItemHoverOpen: Story = {
  args: {
    isCurrent: false,
    dropdownData: ['one', 'two', 'three'],
    renderDropdownItem: (item) => (
      <Dropdown.ResultItem>
        <Text>{item as string}</Text>
      </Dropdown.ResultItem>
    ),
    title: 'open dropdown',
    onMouseEnter(e, params) {
      e.stopPropagation();
      params.openDropdown();
    },
    onMouseLeave(e, params) {
      e.stopPropagation();
      params.closeDropdown();
    },
  },
  render: () => {
    return (
      <>
        <Dropdown.MenuItem
          isCurrent={false}
          dropdownData={['one', 'two', 'three']}
          renderDropdownItem={(item) => (
            <Dropdown.ResultItem>
              <Text>{item}</Text>
            </Dropdown.ResultItem>
          )}
          title={'open dropdown'}
          onMouseEnter={(e, params) => {
            e.stopPropagation();
            params.openDropdown();
          }}
          onMouseLeave={(e, params) => {
            e.stopPropagation();
            params.closeDropdown();
          }}
        />
      </>
    );
  },
};

export const DropdownWithMenuItemClickOpen: Story = {
  args: {
    isCurrent: false,
    dropdownData: ['one', 'two', 'three'],
    renderDropdownItem: (item) => (
      <Dropdown.ResultItem>
        <Text>{item as string}</Text>
      </Dropdown.ResultItem>
    ),
    title: 'open dropdown',
    onClick(e, params) {
      e.stopPropagation();
      params.openDropdown();
    },
  },
  render: () => {
    return (
      <>
        <Dropdown.MenuItem
          isCurrent={false}
          dropdownData={['one', 'two', 'three']}
          renderDropdownItem={(item) => (
            <Dropdown.ResultItem>
              <Text>{item}</Text>
            </Dropdown.ResultItem>
          )}
          title={'open dropdown'}
          onClick={(e, { openDropdown }) => {
            e.stopPropagation();
            openDropdown();
          }}
        />
      </>
    );
  },
};
