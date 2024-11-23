<script setup lang="ts">
type Props = {
  iconName: string;
  size?: string;
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <NuxtIcon :name="props.iconName" :size="props.size" />
</template>
