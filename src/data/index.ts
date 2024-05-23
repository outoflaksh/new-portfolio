import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Lakshya Malik',
  initials: 'LM'
}

export const ABOUT = {
  title: `Backend & ML Engineer`,
  description: `Creating software that creatively solves the world's problems.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/outoflaksh',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/lakshya-malik',
    icon: LinkedInIcon
  },
  {
    title: 'Resume',
    url: 'https://read.cv/outoflaksh',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:officiallakshya@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://linktr.ee/lakshya',
    icon: LinkIcon
  }
]

export const CONTACT = [
  {
    label: 'Email',
    prefix: 'mailto:',
    value: 'officiallakshya@gmail.com'
  }
]

export const CAREER = [
  {
    company: 'Dell Technologies',
    link: 'https://dell.com',
    badges: ['Bengaluru, India'],
    title: 'Software Engineer (Intern)',
    start: 'May, 2023',
    end: 'Present',
    description:
      'Spearheading implementations of AI-enabled features on internal tooling to enhance team member experience.'
  },
  {
    company: 'AutoProd Tech',
    link: '',
    badges: ['Remote'],
    title: 'Backend & ML Developer (Intern)',
    start: 'Jan, 2023',
    end: 'Mar, 2023',
    description: 'Built optimized user flows for the backend API.'
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'Porcupyne - OCR API',
    tags: [
    ],
    description:
      'Image-to-text microservice to easily and effectively extract text from a given image. Built with Tesseract, FastAPI & Docker.',
      link: {
        github: 'https://github.com/outoflaksh/porcupyne',
        preview: 'https://porcupyne.onrender.com/'
      },
    image: '/images/basehub-nextjs-blog.png'
  },
  {
    title: 'Nutshell - AI summary for videos',
    tags: [
    ],
    description: 'Summarise the contents your recorded online video lectures in a few minutes. Built with SOTA deep learning and machine learning services using FastAPI & React. 🛸',
    link: {
      github: 'https://github.com/outoflaksh/nutshell',
      preview: ''
    },
    image: '/images/basement-challenge.png'
  } 
]