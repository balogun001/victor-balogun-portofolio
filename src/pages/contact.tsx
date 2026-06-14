import { ReactElement } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';

import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { Layout } from '@/layout/Layout';
import { socialProfile } from '@/lib/Social-Profile';

import { NextPageWithLayout } from './_app';

export function Border({
  className,
  position = 'top',
  invert = false,
  as: Component = 'div',
  ...props
}: any) {
  return (
    <Component
      className={classNames(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-gray-500 after:bg-muted',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'
      )}
      {...props}
    />
  );
}

function ContactDetails() {
  return (
    <FadeIn>
      <div className="">
        <h2 className="font-display text-base font-semibold">Personal Info</h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'balogunmoyinoluwa@gmail.com', 'mailto'],
            ['Telephone', '+2348088988560', 'tel'],
          ].map(([label, value, type]) => (
            <div key={value}>
              <dt className="font-semibold">{label}</dt>
              <dd>
                <Link
                  className="text-muted hover:text-white"
                  href={`${type}:${value}`}>
                  {value}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold">Follow me</h2>
        <ul
          className={classNames('mt-6 flex gap-x-10 text-gray-600')}
          role="list">
          {socialProfile.map((socialMediaProfile) => (
            <li key={socialMediaProfile.link}>
              <Link
                // aria-label={socialMediaProfile}
                className={classNames('transition')}
                href={socialMediaProfile.link}>
                <socialMediaProfile.icon className="h-6 w-6 fill-current" />
              </Link>
            </li>
          ))}
        </ul>
      </Border>
    </FadeIn>
  );
}

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact Balogun Victor - Software Developer</title>
      </Head>
      <div className="mt-16 sm:mt-32">
        <PageIntro eyebrow="Contact me" title="Let’s work together">
          <p>I can’t wait to hear from you.</p>
        </PageIntro>

        <div className="mt-24 sm:mt-32 lg:mt-40">
          <div className="max-w-[540px]">
            <ContactDetails />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
