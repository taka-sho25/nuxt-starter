import type { Meta, StoryObj } from '@storybook/vue3';

import TextField from './index.vue';

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => ({
    components: { TextField },
    setup() {
      const inputText = ref('');

      return {
        inputText,
      };
    },
    template: `
      <TextField v-model="inputText" type="text" placeholder="placeholder" />
    `,
  }),
};
