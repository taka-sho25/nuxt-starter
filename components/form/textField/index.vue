<script setup lang="ts">
  type Props = {
    modelValue: string;
    type: 'text' | 'number' | 'password';
    name?: string;
    placeholder: string;
    disabled?: boolean;
  };

  interface Emits {
    (eventName: 'update:modelValue', value: string): void;
  }

  withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    name: '',
    placeholder: '',
    disabled: false,
  });
  const emits = defineEmits<Emits>();

  const onChange = (event: Event) => {
    event.preventDefault();
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      emits('update:modelValue', target.value);
    }
  };
</script>

<template>
  <input
    :name="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onChange"
  />
</template>
