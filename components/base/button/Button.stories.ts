import type { Meta, StoryObj } from '@nuxtjs/storybook';

import Button, { type Props } from './index.vue';

const meta: Meta<typeof Button> = {
  title: 'base/Button',
  component: Button,
  render: (args: Props) => ({
    components: {
      Button,
    },
    setup() {
      const onClick = () => {
        alert(`onClick Button type: ${args.type}`);
      };

      return {
        args,
        onClick,
      };
    },
    template: `
      <Button v-bind="args" @click="onClick">{{ args.default || 'button' }}</Button>
    `,
  }),
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      description: 'button type',
      options: ['button', 'submit', 'reset'],
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
    disabled: {
      control: {
        type: 'radio',
      },
      description: 'is button disabled',
      options: [true, false],
    },
    default: {
      control: 'text',
      description: 'Slot content',
    },
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
  },
};

export default meta;
