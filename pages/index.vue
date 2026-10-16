<script setup lang="ts">
definePageMeta({ layout: 'home' })

useHead({
  title: 'Timothy Long | Software Engineer',
  meta: [
    { name: 'description', content: 'Timothy Long — software engineer designing and developing web sites & applications.' }
  ]
})

const years = new Date().getFullYear() - 2017

const socials = [
  { name: 'GitHub', href: 'https://github.com/codebytimlong' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/timothyjosephlong' }
]
</script>

<template>
  <div>
    <header class="flex flex-col gap-5 max-w-[402px]">
      <div class="flex flex-col gap-2.5">
        <h1 class="m-0 text-5xl/[normal] font-normal">timothy</h1>
        <span class="block w-[90px] h-px bg-[var(--home-accent)]" aria-hidden="true"></span>
        <p class="m-0 text-2xl/[normal]">
          I am a software engineer with more than<br class="hidden sm:inline">
          {{ years }} years of experience designing and developing web sites &amp; applications
        </p>
      </div>
      <nav class="flex items-center gap-[33px] font-barlow-condensed text-2xl/[normal] text-[var(--home-accent)]">
        <a v-for="s in socials" :key="s.name" :href="s.href" target="_blank" rel="noopener">{{ s.name }}</a>
      </nav>
    </header>

    <div class="flex flex-col gap-20 mt-20 md:mt-[113px]">
      <HomeSection title="recent work">
        <ul class="list-none m-0 p-0 flex flex-col gap-5 text-2xl/[normal] font-medium text-[var(--home-accent)]">
          <li v-for="w in clientWork" :key="w.name">
            <a v-if="w.href" :href="w.href" target="_blank" rel="noopener">{{ w.name }}</a>
            <span v-else class="underline decoration-from-font [text-underline-position:from-font]">{{ w.name }}</span>
          </li>
        </ul>
        <NuxtLink to="/projects" class="inline-block mt-6 font-barlow-condensed text-xl/[normal] text-[var(--home-text)]">all projects &rarr;</NuxtLink>
      </HomeSection>

      <HomeSection title="recent writing">
        <ContentList :query="{ path: 'posts', sort: [{ num: -1 }], limit: 3 }" v-slot="{ list }">
          <ul class="list-none m-0 p-0 flex flex-col gap-5">
            <li v-for="post in list" :key="post._path" class="flex flex-col">
              <NuxtLink :to="post._path" class="text-2xl/[normal] font-medium text-[var(--home-accent)]">{{ post.title }}</NuxtLink>
              <span class="font-barlow-condensed text-lg/[normal] opacity-70">{{ post.publishDate }}</span>
            </li>
          </ul>
        </ContentList>
        <NuxtLink to="/blog" class="inline-block mt-6 font-barlow-condensed text-xl/[normal] text-[var(--home-text)]">all posts &rarr;</NuxtLink>
      </HomeSection>
    </div>
  </div>
</template>
