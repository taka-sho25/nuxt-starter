<script setup lang="ts">
  type Props = {
    as: 'div' | 'p' | 'span' | 'label';
    size?: number;
    weight?: 'light' | 'medium' | 'bold';
    lineClamp?: number;
  };

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  size: 14,
  weight: 'medium',
  lineClamp: 0,
});

const tag = computed(() => props.as);

const lineClamp = computed(() => {
  return props.lineClamp
    ? {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: props.lineClamp,
      }
    : {};
});
</script>

<template>
  <component
    :is="tag"
    :class="['text', `text-${weight}`]"
    :style="{ ...lineClamp, fontSize: `${props.size}px` }"
  >
    <slot />
  </component>
</template>

<style scoped>
  .text {
    line-height: 1.4;
  }

  .text-light {
    font-weight: 300;
  }

  .text-medium {
    font-weight: 500;
  }

  .text-bold {
    font-weight: 700;
  }
</style>
