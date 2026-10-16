<script setup lang="ts">
useHead({ title: 'Projects | Timothy Long' })

const groups = [
  { title: 'client work', items: clientWork },
  { title: 'personal', items: personalProjects }
]
</script>

<template>
  <div>
    <PageHeader title="projects" />
    <div class="flex flex-col gap-20">
      <HomeSection v-for="g in groups" :key="g.title" :title="g.title">
        <ul class="list-none m-0 p-0 flex flex-col gap-6">
          <li v-for="p in g.items" :key="p.name" class="flex flex-col gap-1">
            <a v-if="p.href" :href="p.href" target="_blank" rel="noopener"
              class="text-2xl/[normal] font-medium text-[var(--home-accent)]">{{ p.name }}</a>
            <span v-else
              class="text-2xl/[normal] font-medium text-[var(--home-accent)] underline decoration-from-font [text-underline-position:from-font]">{{ p.name }}</span>
            <p v-if="p.blurb" class="m-0 text-xl/[normal]">{{ p.blurb }}</p>
          </li>
        </ul>
      </HomeSection>
    </div>
  </div>
</template>
