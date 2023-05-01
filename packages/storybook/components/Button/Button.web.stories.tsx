// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ColorSchemeProvider} from '@coldsurfers/ocean-road';

import {MyButton} from './Button';

export default {
  title: 'components/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = args => (
  <ColorSchemeProvider colorScheme="dark">
    <MyButton {...args} />
  </ColorSchemeProvider>
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
