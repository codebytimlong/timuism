<script setup lang="ts">
useHead({ title: 'Work History | Timothy Long' })

// A highlight is plain text, or a list of text/link parts for inline links.
type Part = string | { text: string, href: string }

interface Job {
  role: string
  company: string
  dates: string
  highlights: (string | Part[])[]
}

const jobs: Job[] = [
  {
    role: 'Software Engineer (User Interface Developer)',
    company: 'Johns Hopkins University Applied Physics Laboratory',
    dates: '2021—present',
    highlights: [
      [
        'Led development for the lab’s high-profile external ',
        { text: 'Annual', href: 'https://jhuapl.edu/2021-Annual-Report' },
        ' and ',
        { text: 'DE&I', href: 'https://jhuapl.edu/Diversity-Inclusion-Annual-Report-2021' },
        ' interactive reports'
      ],
      'Led front-end development on an internal campus maps application',
      'Converted a department’s internal knowledge base from a list of PowerPoints into a searchable app with a CMS',
      [
        'Served as the technical consultant on the team in charge of working with an agency hired to redesign the ',
        { text: 'lab’s external website', href: 'https://www.jhuapl.edu' }
      ],
      'Performed UI audits for a high-profile external website for NASA’s DART mission',
      'Worked on a team to develop a user interface for a phylogenetic and genomic pipeline application'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Blue Ocean Ideas',
    dates: '2017—2021',
    highlights: [
      'Led front-end development for multiple features for the company’s hero “software as a service”, including a user forum, e-learning platform, webinar, account settings, page builder for marketing pages, site menu builder, site search and premium member subscriptions',
      'Improved the designer-to-developer hand-off experience by working closely with designers to create best practices and guides'
    ]
  },
  {
    role: 'Mac Technician',
    company: 'Apple Inc',
    dates: '2009—2019',
    highlights: [
      'Assisted with market-wide technician training multiple times and served as a mentor for prospective and new technicians',
      'Worked as an Apple Certified Macintosh Technician and repaired all non-vintage/obsolete Macs and iPhone devices',
      'Maintained some of the highest net-promoter scores while having the most reservations taken for multiple years in a row',
      'Facilitated market-wide training for prospective technicians'
    ]
  }
]
</script>

<template>
  <div>
    <PageHeader title="work history" />
    <ol class="list-none m-0 p-0 flex flex-col gap-14">
      <li v-for="job in jobs" :key="job.role" class="flex flex-col gap-1">
        <h2 class="m-0 text-2xl/[normal] font-medium text-[var(--home-accent)]">{{ job.role }}</h2>
        <p class="m-0 font-barlow-condensed text-xl/[normal]">
          {{ job.company }} <span class="opacity-70">· {{ job.dates }}</span>
        </p>
        <ul class="mt-4 pl-5 list-disc marker:text-[var(--home-accent)] flex flex-col gap-3 font-sans text-lg leading-relaxed">
          <li v-for="(h, i) in job.highlights" :key="i">
            <template v-if="typeof h === 'string'">{{ h }}</template>
            <template v-else>
              <template v-for="(part, j) in h" :key="j">
                <template v-if="typeof part === 'string'">{{ part }}</template>
                <a v-else :href="part.href" target="_blank" rel="noopener" class="text-[var(--home-accent)]">{{ part.text }}</a>
              </template>
            </template>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>
