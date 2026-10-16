<script setup lang="ts">
// Heading + list with the green rule down the left, from the Figma
// "recent work" block. `as` sets the heading level.
withDefaults(defineProps<{ title: string, as?: 'h1' | 'h2' }>(), { as: 'h2' })
</script>

<template>
  <section class="relative pl-[25px] max-w-[560px]">
    <span class="absolute left-0 top-[13px] bottom-0 w-px bg-[var(--home-accent)]" aria-hidden="true"></span>
    <component :is="as" class="m-0 text-4xl/[normal] font-semibold">{{ title }}</component>
    <div class="mt-5">
      <slot />
    </div>
  </section>
</template>
