<script setup lang="ts">
definePageMeta({ layout: 'home' })

useHead({ title: 'Writing | Timothy Long' })
</script>

<template>
  <HomeSection title="writing" as="h1">
    <ContentList :query="{ path: 'posts', sort: [{ num: -1 }] }" v-slot="{ list }">
      <ul class="list-none m-0 p-0 flex flex-col gap-5">
        <li v-for="post in list" :key="post._path" class="flex flex-col">
          <NuxtLink :to="post._path" class="text-2xl/[normal] font-medium text-[var(--home-accent)]">{{ post.title }}</NuxtLink>
          <span class="font-barlow-condensed text-lg/[normal] opacity-70">{{ post.publishDate }}</span>
        </li>
      </ul>
    </ContentList>
  </HomeSection>
</template>
