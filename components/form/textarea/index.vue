<script setup lang="ts">
type Props = {
  modelValue: string;
  label?: string;
  name?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
};

interface Emits {
  (eventName: 'update:modelValue', value: string): void;
}

withDefaults(defineProps<Props>(), {
  label: '',
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
    <label v-if="label" :for="name" class="label">{{ label }}</label>
    <textarea
      :id="name"
      :name="name"
      :rows="rows"
      :cols="cols"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="textarea"
      @input="onChange"
    />
    <Text v-if="error" as="span" :size="10" class="error-message">
      {{ error }}
    </Text>
  </div>
</template>

<style scoped>
.label {
  margin-bottom: 4px;
}

.textarea {
  width: 100%;
}

.error-message {
  color: #f00;
}
</style>
