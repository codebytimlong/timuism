<script setup lang="ts">
// Page title with the short green rule under it, matching the homepage
// header. The default slot holds an optional line below (e.g. a date).
defineProps<{ title: string }>()
</script>

<template>
  <header class="flex flex-col gap-2.5 mb-10 md:mb-14">
    <h1 class="m-0 text-5xl/[normal] font-normal">{{ title }}</h1>
    <span class="block w-[90px] h-px bg-[var(--home-accent)]" aria-hidden="true"></span>
    <slot />
  </header>
</template>
