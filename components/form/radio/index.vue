<script setup lang="ts">
type Props = {
  id: string;
  modelValue?: number | string | boolean;
  value: number | string | boolean;
  name?: string;
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
};

interface Emits {
  (eventName: 'onChange' | 'update:modelValue', value: string): void;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  name: '',
  label: '',
  disabled: false,
  errorMessage: '',
});
const emits = defineEmits<Emits>();

const onChange = (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    emits('onChange', target.value);
    emits('update:modelValue', target.value);
  }
};
</script>

<template>
  <div>
    <label class="radio" :for="id">
      <input
        :id="id"
        :name="name"
        type="radio"
        :value="value"
        :disabled="disabled"
        :checked="modelValue === value"
        class="w-full h-11 pl-2 border border-gray-300 rounded"
        @change="onChange"
      />
      <span class="radio-text text-xs">{{ label }}</span>
    </label>
    <p v-show="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
  </div>
</template>

<style lang="css" scoped>
.radio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.radio input[type='radio'] {
  display: none;
}

.radio-text {
  font-size: 14px;
}
.radio-text:before {
  position: relative;
  top: 3px;
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 2px;
  margin-right: 8px;
  content: '';
  background-clip: content-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
}

input[type='radio']:not(:checked) + .radio-text:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text:before {
  background-color: #0396e9;
  border-color: #0396e9;
  border-width: 1px;
}
</style>
