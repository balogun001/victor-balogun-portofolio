import { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout/Layout';

import { NextPageWithLayout } from './_app';

const MOBILE_PROJECTS: Project[] = [
  {
    description:
      'A platform that connects users with empathetic listeners, offering a safe space to share thoughts and feelings anytime.',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/ng/app/looseapp/id6504262165',
      },
    ],
    role: 'React Native Developer',
    tag: 'React Native',
    title: 'Loose',
  },
  {
    description:
      'A platform to save, invest, and access expert financial advice seamlessly.',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/ng/app/halo-invest/id1600227757',
      },
    ],
    role: 'Intern Mobile Developer',
    tag: 'React Native',
    title: 'Halo Invest',
  },
  {
    description:
      'A construction software that streamlines operations by solving key industry challenges, helping businesses run more efficiently.',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/ng/app/trade-soft-app/id1670764985',
      },
    ],
    role: 'Mobile Developer',
    tag: 'React Native',
    title: 'Trade Soft',
  },
  {
    description:
      'An auction app for cars. Features include live bidding timers, buy now, dealer registration, Carfax document uploads, and simultaneous bid support.',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/clockwork-auto/id6569255332',
      },
    ],
    role: 'React Native Developer',
    tag: 'React Native',
    title: 'Clockwork Auto',
  },
  {
    description:
      'Send social media post links to friends, view their posts without opening the app, and follow up to like them. Continuously upgraded to enhance user experience.',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/b2b-old/id6444623495',
      },
    ],
    role: 'Mobile Developer',
    tag: 'React Native',
    title: 'B2B OLD',
  },
];

const WEB_PROJECTS: Project[] = [
  {
    description:
      'Multi-tenant B2B distribution platform serving Guinness, Lush, PureFlour, MCPL, IPS & Summit across African markets.',
    links: [
      { label: 'Guinness', url: 'https://guinness.omniretail.africa' },
      { label: 'Lush', url: 'https://lush.omniretail.africa' },
      { label: 'OmniHub', url: 'https://omnihub.omniretail.africa' },
      { label: 'Summit', url: 'https://summit.omniretail.africa' },
      { label: 'IPS', url: 'https://ips.omniretail.africa' },
      { label: 'PureFlour', url: 'https://pureflour.omniretail.africa' },
      { label: 'MCPL', url: 'https://mcpl.omniretail.africa' },
    ],
    role: 'PWA Frontend Engineer',
    tag: 'React· PWA',
    title: 'OmniRetail Platform',
  },
  {
    description:
      'An all-in-one platform simplifying virtual consultations — scheduling, video calls, payments, and meeting insights in one flow.',
    links: [{ label: 'airtym.com', url: 'https://airtym.com' }],
    role: 'Frontend Engineer',
    tag: 'Next.js · TypeScript',
    title: 'Airtym',
  },
  {
    description:
      'Smart POS, inventory, CRM/HRM, and e-commerce solutions. Manage sales, track stock, and grow with a seamless all-in-one system.',
    links: [
      {
        label: 'oneflaretechsolutions.com',
        url: 'https://www.oneflaretechsolutions.com',
      },
    ],
    role: 'Frontend Developer',
    tag: 'Next.js · Node.js',
    title: 'Oneflare',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-[#E8E8E8] bg-white p-5 transition-colors hover:border-[#ABABAB]">
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-md border border-[#E8E8E8] bg-[#F1F1F1] px-2.5 py-1 text-xs text-[#696969]">
          {project.tag}
        </span>
      </div>

      <div>
        <p className="text-sm font-medium text-[#102028]">{project.title}</p>
        <p className="mt-0.5 text-xs text-[#828282]">{project.role}</p>
      </div>

      <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-[#696969]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 pt-1">
        {project.links.map(({ label, url }) => (
          <Link
            className="group flex items-center gap-1 text-xs text-[#828282] transition-colors hover:text-[#102028]"
            href={url}
            key={url}
            rel="noopener noreferrer"
            target="_blank">
            {label}
            <span className="inline-block text-[#828282] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 mt-8 text-xs uppercase tracking-widest text-[#828282]">
      {children}
    </p>
  );
}

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun — Projects</title>
      </Head>
      <FadeIn>
        <PageIntro
          eyebrow="Projects"
          title="My journey in the realm of Software Development">
          <p>
            An overview of projects that I have worked on, to get a glimpse of
            my professional journey.
          </p>
        </PageIntro>

        <div className="pb-24 pt-10">
          <SectionLabel>Mobile apps</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MOBILE_PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <SectionLabel>Web platforms</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

type Project = {
  title: string;
  role: string;
  description: string;
  tag: string;
  links: { label: string; url: string }[];
};

Projects.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Projects;
