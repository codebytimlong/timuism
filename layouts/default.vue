<script setup lang="ts">
// Shell for the Figma "home-page" design: theme tokens, the sun/moon
// toggle, and a small home link on every page except the homepage.
const route = useRoute()
const theme = useState<'light' | 'dark'>('home-theme', () => 'light')

// The inline script in <head> (below) picks the theme before first paint;
// sync the state to whatever it chose.
onMounted(() => {
    if (document.documentElement.dataset.theme === 'dark') theme.value = 'dark'
})

function toggleTheme() {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem('engineer-site-theme', next) } catch (e) { }
    theme.value = next
}

// Theme lives on <html> so the page background (and color-scheme) covers
// areas outside the layout: iOS overscroll, the notch and toolbar strips.
useHead({
    htmlAttrs: { class: 'home', 'data-theme': theme },
    meta: [{ name: 'theme-color', content: () => theme.value === 'dark' ? '#000000' : '#ffffff' }],
    // Runs before first paint so dark-mode visitors don't see a white
    // flash: saved choice first, then the OS preference.
    script: [{
        key: 'theme-init',
        tagPosition: 'head',
        innerHTML: `(function(){var t;try{t=localStorage.getItem('engineer-site-theme')}catch(e){}if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='dark'?'#000000':'#ffffff'})()`
    }]
})
</script>

<template>
    <div class="relative min-h-dvh text-(--home-text) font-khand leading-[normal] antialiased px-8 pb-48 md:pl-31.25 md:pr-8 md:pt-12.5">
        <div class="sticky top-0 z-10 flex items-center w-full pt-8 pb-4 bg-linear-to-b from-(--home-bg) from-25% to-transparent"
            :class="route.path !== '/' ? 'justify-between' : 'justify-end'">
            <NuxtLink v-if="route.path !== '/'" to="/" aria-label="Home" class="inline-flex p-1 text-(--home-accent)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true">
                    <path d="M3.5 10.5 12 3.5l8.5 7" />
                    <path d="M5.5 9v11h4.5v-6h4v6h4.5V9" />
                </svg>
            </NuxtLink>

            <button type="button"
                class="flex text-(--home-accent) hover:text-(--home-highlight) cursor-pointer bg-transparent border-0 p-1"
                :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
                <!-- sun: shown in dark mode -->
                <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="w-6 h-6" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path
                        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.28 5.28l1.41 1.41M17.31 17.31l1.41 1.41M5.28 18.72l1.41-1.41M17.31 6.69l1.41-1.41" />
                </svg>
                <!-- moon: shown in light mode -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.5" stroke-linejoin="round" class="w-6 h-6" aria-hidden="true">
                    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
                </svg>
            </button>
        </div>

        <div class="max-w-[640px]">
            <slot />
        </div>
    </div>
</template>
