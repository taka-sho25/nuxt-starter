<script setup lang="ts">
const { $apiClient } = useNuxtApp();

const { data } = useAsyncData('articles', async () => {
  const res = await $apiClient().articles.$get();
  return res.articles;
});
</script>

<template>
  <div>{{ data }}</div>
</template>
