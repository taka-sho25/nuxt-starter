<template>
  <div>
    <ul>
      <li>
        <div class="item">
          <Icon icon-name="material-symbols:data-table" />
          <NuxtLink to="/form"> Form </NuxtLink>
        </div>
      </li>
      <li>
        <div class="item">
          <Icon icon-name="material-symbols:360" />
          <NuxtLink to="/api"> Api </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.item {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
