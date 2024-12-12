<script setup lang="ts">
const { $apiClient } = useNuxtApp();

const { data: articles } = useAsyncData('articles', async () => {
  const res = await $apiClient().articles.$get();
  return res.articles;
});
</script>

<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>image</th>
          <th>created_at</th>
        </tr>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.id }}</td>
          <td>{{ article.title }}</td>
          <td>
            <NuxtImg :src="article.image" />
          </td>
          <td>{{ article.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
