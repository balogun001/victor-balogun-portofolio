import { ReactElement } from 'react';
import Head from 'next/head';

import { Card } from '@/components/BlogCard';
import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout/Layout';
import { aboutData } from '@/lib/about';

import { NextPageWithLayout } from './_app';

function ToolsSection({ children, title }: any) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 ">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <FadeIn>
          <h2 className="text-sm font-semibold">{title}</h2>
        </FadeIn>
        <div className="md:col-span-3">
          <ul className="space-y-16" role="list">
            {children}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Tool({ title, href, children }: any) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun about - Software Developer</title>
      </Head>
      <PageIntro eyebrow="About me" title="I'm Balogun Victor">
        <p>
          I love using my skill set to simplify work for enterprises.I also like
          sharing content related to the stuff that I have learned over a long
          time in software development so it can offer assistance to other
          individuals in the Dev Community.
        </p>
      </PageIntro>
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-20">
          {aboutData.map(({ items, title }) => (
            <ToolsSection key={title} title={title}>
              {items.map(({ description, subtitle }) => (
                <FadeIn key={subtitle}>
                  <Tool title={subtitle}>{description}</Tool>
                </FadeIn>
              ))}
            </ToolsSection>
          ))}
        </div>
      </div>
    </>
  );
};

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
