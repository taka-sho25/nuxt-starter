<script setup lang="ts">
export type Props = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

interface Emits {
  (eventName: 'onClick'): void;
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
});

const emits = defineEmits<Emits>();

const onClick = (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLButtonElement) {
    emits('onClick');
  }
};
</script>

<template>
  <button :type="type" :disabled="disabled" class="button" @click="onClick">
    <slot />
  </button>
</template>
