import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button, ColorSchemeToggle, MenuItem } from '@coldsurfers/ocean-road';
import { AppHeader } from '@coldsurfers/ocean-road/next';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'next/AppHeader.FullScreenMobileDrawer',
  component: AppHeader.FullScreenMobileDrawer,
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
} satisfies Meta<typeof AppHeader.FullScreenMobileDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ColorSchemeToggleComponent: <ColorSchemeToggle />,
    isOpen: true,
    renderMenuList: ({ isOpen, close }) => (
      <>
        <MenuItem>Hello, MenuItem</MenuItem>
        <MenuItem>Hello, MenuItem</MenuItem>
      </>
    ),
    standalone: true,
    zIndex: 99,
    onClickClose: () => console.log('close'),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { openMobileMenu, closeMobileMenu, isMobileMenuOpen } = AppHeader.useIsMobileMenuOpen();
    return (
      <>
        <Button onClick={openMobileMenu}>Open Drawer</Button>
        <AppHeader.FullScreenMobileDrawer
          {...args}
          standalone
          isOpen={isMobileMenuOpen}
          onClickClose={closeMobileMenu}
        />
      </>
    );
  },
};
