<script setup lang="ts">
type Props = {
  modelValue: string;
  type?: 'text' | 'number' | 'password';
  name?: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
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
  error: '',
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
  <div>
    <input
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      autocomplete="off"
      @input="onChange"
    />
    <Text v-if="error" as="span" :size="10" class="error-message">
      {{ error }}
    </Text>
  </div>
</template>

<style scoped>
.error-message {
  color: #f00;
}
</style>
