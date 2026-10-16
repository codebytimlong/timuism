<script setup lang="ts">
const route = useRoute()

const { data: doc } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({ title: () => `${doc.value?.title} | Timothy Long`, description: () => doc.value?.description })
</script>

<template>
  <article v-if="doc" class="post-content">
    <PageHeader :title="doc.title">
      <span class="font-barlow-condensed text-xl/[normal] opacity-70">{{ doc.publishDate }}</span>
    </PageHeader>
    <div class="post-md">
      <ContentRenderer :value="doc" />
    </div>
  </article>
</template>

<style>
@reference "../assets/css/main.css";

/* Long-form text uses Barlow (the regular-width sibling of the Figma
   design's Barlow Condensed); headings stay in Khand. */
.post-content .post-md {
  @apply font-sans text-lg leading-relaxed;
}

.post-content .post-md > div > * + *:not(pre) {
  @apply mt-6;
}

.post-content .post-md h2 {
  @apply font-khand text-4xl/[normal] font-semibold mt-12;
}

.post-content .post-md h3 {
  @apply font-khand text-2xl/[normal] font-semibold mt-10;
}

/* Layered so the global link hover color in home-theme.css wins. */
@layer components {
  .post-content .post-md a {
    color: var(--home-accent);
  }
}

.post-content img {
  @apply max-w-full mx-auto my-4;
}

.post-content code {
  @apply bg-black text-[#2aff00] text-sm px-1 py-0.5 rounded overflow-x-auto;
}

.post-content table {
  @apply border border-[var(--home-accent)] my-4;
}

.post-content th {
  @apply text-left p-2;
}

.post-content table td {
  @apply p-2 border border-[var(--home-accent)];
}

pre.shiki {
  @apply bg-black block w-full px-3 py-2 my-6 text-xs rounded-md overflow-x-auto md:text-sm;
}

pre.shiki code {
  @apply p-0 bg-transparent text-inherit;
}

.post-content ul,
.post-content ol {
  @apply pl-6 marker:text-[var(--home-accent)];
}

.post-content ul {
  @apply list-disc;
}

.post-content ol {
  @apply list-decimal;
}

/* Nuxt Content wraps headings in self-links; keep them looking like headings. */
.post-content .post-md :is(h2, h3) a {
  color: inherit;
  text-decoration: none;
}
</style>
