import { describe, test, expect } from 'vitest';
import { renderSuspended } from '@nuxt/test-utils/runtime';

import Button from './index.vue';

describe('Button test', () => {
  test('default snapshot', async () => {
    const render = await renderSuspended(Button, {
      props: {
        type: 'button',
      },
      slots: {
        default: 'slot default',
      },
    });
    expect(render.html()).toMatchSnapshot();
  });
});
