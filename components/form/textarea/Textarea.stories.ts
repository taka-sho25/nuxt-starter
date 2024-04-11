import type { Meta, StoryObj } from '@storybook/vue3';

import Textarea from './index.vue';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const inputText = ref('');

      return {
        inputText,
      };
    },
    template: `
      <Textarea v-model="inputText" placeholder="placeholder" />
    `,
  }),
};
