<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const Fish = ['Salmon', 'Tuna', 'Trout'] as const;
type FishType = (typeof Fish)[number];

const validationSchema = toTypedSchema(
  zod.object({
    text: zod.string({ required_error: 'This is required' }).min(1, { message: 'This is required' }),
    freeText: zod.string().optional(),
    checkbox: zod.enum(Fish).array().optional().default([]),
    radio: zod.enum(Fish).optional(),
    select: zod.enum(Fish).optional(),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: text } = useField<string>('text');
const { value: freeText } = useField<string>('freeText');
const { value: checkbox } = useField<FishType[]>('checkbox');
const { value: radio } = useField<FishType>('radio');
const { value: select } = useField<FishType>('select');

const selectOptions = computed(() => {
  return Fish.map((v) => {
    return {
      key: v,
      value: v,
    };
  });
});

const isFishType = (value: string): value is FishType => {
  return ['Salmon', 'Tuna', 'Trout'].includes(value);
};

const checkFishMethod = (checked: boolean, value: string) => {
  if (!isFishType(value)) {
    console.error(`Invalid value: ${value}`);
    return;
  }

  if (checked) {
    checkbox.value = [...new Set<FishType>([...checkbox.value, value])];
  } else {
    checkbox.value = checkbox.value.filter((method) => method !== value);
  }
};

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
});
</script>

<template>
  <div class="form-wrapper">
    <form @submit="onSubmit">
      <TextField
        v-model="text"
        label="Text"
        name="text"
        type="text"
        placeholder="text"
        :error="errors.text"
        class="text"
      />
      <Textarea
        v-model="freeText"
        label="Free Text"
        name="freeText"
        placeholder="free text"
        :error="errors.freeText"
        class="free-text"
      />
      <div class="content">
        <Text>Checkbox</Text>
        <template v-for="item in Fish" :key="item">
          <Checkbox :value="item" name="fish-item-checkbox" :label="item" @change="checkFishMethod" />
        </template>
      </div>
      <div class="content">
        <Text>Radio</Text>
        <template v-for="item in Fish" :key="item">
          <Radio :id="item" v-model="radio" :value="item" name="fish-item-radio" :label="item" />
        </template>
      </div>
      <div class="content">
        <Text>Select</Text>
        <Select v-model="select" :options="selectOptions" />
      </div>
      <Button type="submit">submit</Button>
    </form>
  </div>
</template>

<style lang="css" scoped>
.form-wrapper {
  width: 80%;
  margin: 20px auto;
}

.content {
  margin: 8px 0;
}

.text,
.free-text {
  margin-bottom: 4px;
}
</style>
