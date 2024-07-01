import { vi, describe, test, expect } from 'vitest';
import { renderSuspended } from '@nuxt/test-utils/runtime';

import Button from './index.vue';

vi.spyOn(console, 'warn').mockImplementation(() => {});

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
