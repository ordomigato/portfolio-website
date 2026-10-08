export type ProjectType = 'Web App' | 'Website' | 'Design'

export interface Project {
  title: string
  year: number
  type: ProjectType
  tech: string[]
  image: string
  website?: string
  code?: string
  external?: { label: string; href: string }
  /** YouTube id, for projects that were never deployed and can only be shown as a recording. */
  video?: string
  note?: string
}

export const projects: Project[] = [
  {
    title: 'GameShelf',
    year: 2020,
    type: 'Web App',
    tech: ['Nuxt', 'Firebase', 'Node.js', 'Heroku', 'Vuex', 'Tailwind', 'Axios', 'SASS'],
    image: '/projects/gameshelf-thumb.png',
    code: 'https://github.com/ordomigato/game-shelf',
    note: 'No longer hosted as Heroku retired its free tier 😔',
  },
  {
    title: 'SecurePark',
    year: 2020,
    type: 'Web App',
    tech: ['Go', 'Fiber', 'Vue', 'Postgres', 'JWT', 'bcrypt'],
    image: '/projects/parking-app-thumb.png',
    code: 'https://github.com/ordomigato/parking-app',
    video: 'SCixTRwwc_g',
    note: 'Not deployed, so here it is on video',
  },
  {
    title: 'Skyview Security Website',
    year: 2020,
    type: 'Website',
    tech: ['WordPress', 'Elementor Pro', 'Digital Ocean'],
    image: '/projects/skyview-thumb.png',
    website: 'https://skyviewsecurity.ca/',
    note: 'Since updated by others, so the live site no longer reflects my original build',
  },
  {
    title: 'Message App',
    year: 2021,
    type: 'Web App',
    tech: ['React', 'Material UI', 'Node.js', 'Express', 'Sequelize', 'Socket.io'],
    image: '/projects/messenger-thumb.png',
    code: 'https://github.com/ordomigato/message-app',
    note: 'No live demo',
  },
  {
    title: 'Travel Odyssey',
    year: 2023,
    type: 'Design',
    tech: ['Adobe XD', 'Material UI'],
    image: '/projects/travel-app/landing-page.png',
    external: { label: 'View on Behance', href: 'https://www.behance.net/gallery/169097717/Travel-Odyssey' },
  },
  {
    title: 'Floor ORG',
    year: 2024,
    type: 'Web App',
    tech: ['TypeScript', 'Vue', 'Pinia', 'Firebase', 'Netlify'],
    image: '/projects/floor-thumb.jpg',
    website: 'https://floor-game.netlify.app',
    code: 'https://github.com/ordomigato/floor',
  },
  {
    title: 'Icon Set (1)',
    year: 2024,
    type: 'Design',
    tech: ['Adobe Illustrator'],
    image: '/projects/icon-set.png',
    note: 'Personal project, no link',
  },
]
