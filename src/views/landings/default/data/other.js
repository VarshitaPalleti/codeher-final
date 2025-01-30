// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';

export const other = {
  heading: `${branding.brandName} Blocks `,
  description: 'Explore a wide range of ready-made blocks—from Hero to CTA, Features, and more to speed up your design process.',
  primaryBtn: { children: 'Explore all Blocks', href: SECTION_PATH },
  sections: [
    {
      "animationDelay": 0.2,
      "title": "WLF Hackathon",
      "subTitle": "For all female participants",
      "image": `${imagePrefix}/hero-light.svg`,
      "link": PAGE_PATH.hero
    },
    {
      "animationDelay": 0.3,
      "title": "Google Girl Hackathon",
      "subTitle": "Google is here for all girls to showcase their talent!!",
      "image": `${imagePrefix}/cta-light.svg`,
      "link": PAGE_PATH.cta
    },
    {
      "animationDelay": 0.4,
      "title": "ServiceNow Code to Win Hackathon",
      "subTitle": "Soon here to apply",
      "image": `${imagePrefix}/feature-light.svg`,
      "link": PAGE_PATH.feature
    },
    {
      "animationDelay": 0.2,
      "title": "Smart Idea Hackathon",
      "subTitle": "Having an entrepreneurship mindset? Take a step forward now!",
      "image": `${imagePrefix}/benefits-light.svg`,
      "link": PAGE_PATH.benefit
    },
    {
      "animationDelay": 0.3,
      "title": "Smart India Hackathon",
      "subTitle": "Boost your thinking skills—step up to solve the problems of the world!",
      "image": `${imagePrefix}/process-light.svg`,
      "link": PAGE_PATH.process
    },
    {
      "animationDelay": 0.4,
      "title": "Machine Learning Hackathon",
      "subTitle": "Dive into AI & ML challenges to showcase your skills!",
      "image": `${imagePrefix}/integration-light.svg`,
      "link": PAGE_PATH.integration
    }
]
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};
