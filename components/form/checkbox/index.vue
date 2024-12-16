<script setup lang="ts">
import { useField } from 'vee-validate';

type Props = {
  value: number | string | boolean;
  label?: string;
  name?: string;
  disabled?: boolean;
  isChecked?: boolean;
};

interface Emits {
  (eventName: 'change', checked: boolean, value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  name: '',
  disabled: false,
  isChecked: false,
});
const emits = defineEmits<Emits>();

const { checked, handleChange } = useField(props.name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});

const onChange = (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    const checked = target.checked;
    handleChange(checked);
    emits('change', checked, `${target.value}`);
  }
};
</script>

<template>
  <div class="checkbox">
    <input
      :id="`${name}-${value}`"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="isChecked ?? checked"
      :disabled="disabled"
      class="input-checkbox"
      @change="onChange"
    />
    <label :for="`${name}-${value}`" class="label" :class="{ disabled }">{{ label }}</label>
  </div>
</template>

<style lang="css" scoped>
.checkbox {
  display: flex;
  align-items: center;
}

.input-checkbox {
  position: relative;
  margin-right: 4px;
  vertical-align: middle;
}
</style>
