<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
  zod.object({
    text: zod.string({ required_error: 'This is required' }).min(1, { message: 'This is required' }),
    freeText: zod.string().optional(),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: text } = useField<string>('text');
const { value: freeText } = useField<string>('freeText');

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
});
</script>

<template>
  <div class="form-wrapper">
    <form @submit="onSubmit">
      <TextField v-model="text" name="text" type="text" placeholder="text" :error="errors.text" />
      <Textarea v-model="freeText" name="freeText" placeholder="free text" :error="errors.freeText" />
      <Button type="submit">submit</Button>
    </form>
  </div>
</template>
