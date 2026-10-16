// Shared by the homepage ("recent work") and /projects.
// An empty href renders the title without a link.

export interface Project {
  name: string
  href: string
  blurb: string
}

export const clientWork: Project[] = [
  {
    name: 'APL’s Interactive Annual Report',
    href: 'https://secwww.jhuapl.edu/2023-Annual-Report/',
    blurb: 'Interface and content management for the Applied Physics Laboratory’s Annual and Diversity, Equity & Inclusion reports.'
  },
  {
    name: 'Into Vanishing Ice',
    href: 'https://secwww.jhuapl.edu/johns-hopkins-apl-arctic-climate-research/',
    blurb: 'A 4-part scrollytelling website about Arctic research done by JHU APL. Built with Vue.'
  },
  {
    name: 'DART One Year: From Impact to Innovation',
    href: 'https://secwww.jhuapl.edu/dart-one-year-anniversary/',
    blurb: 'An interactive site built with another developer, tag-teaming GSAP timelines with Nuxt.'
  },
  {
    name: 'A Star Explored',
    href: 'https://secwww.jhuapl.edu/Parker-Solar-Probe-Closest-Flyby/',
    blurb: ''
  }
]

export const personalProjects: Project[] = [
  {
    name: 'Torch',
    href: 'https://torchfitness.app',
    blurb: 'A web app for capturing, logging and sharing strength training workouts.'
  },
  {
    name: 'Torc',
    href: 'https://github.com/timuism/torc',
    blurb: 'Capture workout data from text using a simple syntax.'
  },
  {
    name: 'Vida',
    href: 'https://github.com/timuism/vida',
    blurb: 'A todo app based around walking you through personal sprints.'
  }
]
