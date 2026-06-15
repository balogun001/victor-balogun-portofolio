import { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button/Button';
import { FadeIn } from '@/components/FadeIn';
import { Layout } from '@/layout/Layout';

import { NextPageWithLayout } from './_app';

const STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'PWA',
  'Node.js',
  'Docker',
];

const STATS = [
  { label: 'Years experience', num: '5+' },
  { label: 'UI components shipped', num: '80+' },
  { label: 'Companies', num: '4' },
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun — Frontend & Mobile Engineer</title>
      </Head>
      <main className="h-full">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl flex-col items-center px-4 pt-20">
            {/* <p className="mb-3 text-sm text-left font-medium tracking-wider text-gray-500">
              Victor Balogun
            </p> */}

            {/* headline */}
            <h1 className="mb-6 text-4xl font-medium leading-[1.1] tracking-tight text-gray-500 sm:text-6xl">
              Frontend &amp;
              <br />
              <span className="text-gray-400">mobile engineer.</span>
            </h1>

            {/* bio */}
            <p className="mb-10 max-w-lg text-center text-base leading-relaxed text-gray-500">
              I build enterprise-grade web and mobile applications from
              white-label platforms serving global FMCG brands to offline-first
              PWAs across African markets. Five years of shipping things that
              work.
            </p>

            {/* actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projects">
                <Button className="group flex items-center gap-2">
                  View projects
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900">
                    →
                  </span>
                </Button>
              </Link>
            </div>

            {/* divider */}
            <div className="my-10 h-px w-10 bg-gray-200" />

            {/* stats */}
            <div className="mb-8 grid max-w-sm grid-cols-3 gap-3">
              {STATS.map(({ num, label }) => (
                <div className="rounded-lg bg-gray-400 px-3 py-3" key={label}>
                  <p className="text-2xl font-medium text-gray-900">{num}</p>
                  <p className="mt-1 text-xs text-gray-700">{label}</p>
                </div>
              ))}
            </div>

            {/* stack tags */}
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
                  key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
