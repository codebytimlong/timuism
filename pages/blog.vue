<script setup lang="ts">
useHead({ title: 'Writing | Timothy Long' })

const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('posts').order('num', 'DESC').all()
)
</script>

<template>
  <div>
    <PageHeader title="writing" />
    <ul class="list-none m-0 p-0 flex flex-col gap-5">
      <li v-for="post in posts" :key="post.path" class="flex flex-col">
        <NuxtLink :to="post.path" class="text-2xl/[normal] font-medium text-[var(--home-accent)]">{{ post.title }}</NuxtLink>
        <span class="font-barlow-condensed text-lg/[normal] opacity-70">{{ post.publishDate }}</span>
      </li>
    </ul>
  </div>
</template>
