// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Domains in Demand',
  captionLine: 'From Project Management to AI, see how your skills can help building various applications tailored for a variety of MNCs.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { "label": "Artificial Intelligence & Machine Learning" },
    { "label": "Cloud Computing & DevOps" },
    { "label": "Cybersecurity & Threat Intelligence" },
    { "label": "Blockchain & Web3" },
    { "label": "Quantum Computing" },
    { "label": "Internet of Things (IoT) & Edge Computing" },
    { "label": "Augmented Reality (AR) & Virtual Reality (VR)" },
    { "label": "Natural Language Processing (NLP)" },
    { "label": "Big Data & Data Engineering" },
    { "label": "Computer Vision & Image Processing" },
    { "label": "Autonomous Systems & Robotics" },
    { "label": "Generative AI & Large Language Models" },
    { "label": "Low-Code & No-Code Development" },
    { "label": "AI-Powered Cybersecurity" },
    { "label": "Embedded Systems & Hardware Acceleration" }
]

};
