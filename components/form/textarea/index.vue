<script setup lang="ts">
  type Props = {
    modelValue: string;
    name?: string;
    rows?: number;
    cols?: number;
    placeholder: string;
    disabled?: boolean;
  };

  interface Emits {
    (eventName: 'update:modelValue', value: string): void;
  }

  withDefaults(defineProps<Props>(), {
    modelValue: '',
    name: '',
    rows: 2,
    cols: 20,
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
  <textarea
    :name="name"
    :rows="rows"
    :cols="cols"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onChange"
  />
</template>
