<script setup lang="ts">
type Props = {
  modelValue?: string | number;
  name?: string;
  options: {
    key: string | number;
    value: string | number;
  }[];
  placeholder?: string;
  disabled?: boolean;
};

interface Emits {
  (eventName: 'update:modelValue' | 'change', value: string): void;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  name: '',
  placeholder: '',
  disabled: false,
});

const emits = defineEmits<Emits>();
const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emits('update:modelValue', target.value);
  emits('change', target.value);
};
</script>

<template>
  <div class="select-wrap">
    <select :value="modelValue" :name="name" :disabled="disabled" as="select" class="select" @change="onChange">
      <option v-if="placeholder" value="0" disabled selected style="display: none">
        {{ placeholder }}
      </option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.key }}
      </option>
    </select>
  </div>
</template>

<style lang="css" scoped>
.select-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.select {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4px 0;
  vertical-align: middle;
  appearance: none;
  background-color: #fff;
  outline: none;
}

.select-wrap:after {
  position: absolute;
  top: 50%;
  right: 0;
  width: 14px;
  height: 8px;
  clip-path: polygon(50% 85%, 0 0, 100% 0);
  content: '';
  background: #858c94;
  transform: translate(-50%, -50%);
}
</style>
