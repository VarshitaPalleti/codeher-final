// @project
import Other1 from '@/blocks/other/Other1';
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

/***************************  OTHER 1 - DATA  ***************************/

const data = {
  heading: 'Customizable Building Blocks',
  description: 'Kickstart your SaaS landing page design with pre-designed templates featuring versatile components.',
  primaryBtn: { children: 'Explore All Components', href: SECTION_PATH },
  sections: [
    {
      title: 'Wlf Hackathon',
      subTitle: 'For all female participants',
      image: `${imagePrefix}/hero-light.svg`,
      link: PAGE_PATH.hero
    },
    {
      title: 'Google Girl Hackathon',
      subTitle: 'Google is here for all girls to showcase their talent !!',
      image: `${imagePrefix}/cta-light.svg`,
      link: PAGE_PATH.cta
    },
    {
      title: 'Service Now Code to win hackathon',
      subTitle: 'Soon here to apply',
      image: `${imagePrefix}/feature-light.svg`,
      link: PAGE_PATH.feature
    },
    {
      title: 'Smart Idea hackathon',
      subTitle: 'having an Entrepreneurship mindset? Take a step forward now !',
      image: `${imagePrefix}/benefits-light.svg`,
      link: PAGE_PATH.benefit
    },
    {
      title: 'Smart india Hackathon',
      subTitle: 'Boost your thinking skiills step up to solve the problems of the world',
      image: `${imagePrefix}/process-light.svg`,
      link: PAGE_PATH.process
    },
    {
      title: '',
      subTitle: 'Machine Learning Hackathon',
      image: `${imagePrefix}/integration-light.svg`,
      link: PAGE_PATH.integration
    }
  ]
};

/***************************  BLOCK - OTHER 1  ***************************/

export default function BlockOther1() {
  return <Other1 {...data} />;
}
