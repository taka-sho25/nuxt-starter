<script setup lang="ts">
  type Props = {
    modelValue: string;
    name?: string;
    rows?: number;
    cols?: number;
    placeholder: string;
    disabled?: boolean;
    error?: string;
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
    error: '',
  });
  const emits = defineEmits<Emits>();

  const onChange = (event: Event) => {
    event.preventDefault();
    const { target } = event;
    if (target instanceof HTMLTextAreaElement) {
      emits('update:modelValue', target.value);
    }
  };
</script>

<template>
  <div>
    <textarea
      :name="name"
      :rows="rows"
      :cols="cols"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onChange"
    />
    <Text v-if="error" as="span" :size="10" class="error-message">
      {{ error }}
    </Text>
  </div>
</template>
