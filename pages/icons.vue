<script setup lang="ts">
const iconName = ref('material-symbols:10k');
</script>

<template>
  <div class="icons">
    <Text as="p">Icon Name</Text>
    <TextField v-model="iconName" name="text" type="text" placeholder="text" class="icon-name-input" />
    <Text as="p">Icon Sample</Text>
    <Icon :icon-name="iconName" size="48px" />
    <Text as="p">Icon List iframe</Text>
    <iframe
      src="https://icon-sets.iconify.design/"
      width="100%"
      height="500px"
      allow="clipboard-read; clipboard-write"
    />
  </div>
</template>

<style lang="css" scoped>
.icon-name-input {
  width: 300px;
}
</style>
