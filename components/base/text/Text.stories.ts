import type { Meta, StoryObj } from '@storybook/vue3';

import Text from './index.vue';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => ({
    components: { Text },
    template: `
      <Text as="p">Text Component</Text>
    `,
  }),
};
