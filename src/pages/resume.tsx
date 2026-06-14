import { ReactElement } from 'react';
import Head from 'next/head';

import { FadeIn } from '@/components/FadeIn';
import { PageIntro } from '@/components/PageIntro';
import { PdfPreview } from '@/components/pdf-preview';
import { Layout } from '@/layout/Layout';

import { NextPageWithLayout } from './_app';

const resume_url =
  process.env.NEXT_PUBLIC_URL + '/victor-balogun-software-developer-resume.pdf';

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Victor Balogun Resume - Software Developer</title>
      </Head>
      <FadeIn>
        <PageIntro eyebrow="Resume" title="My resume reflects me.">
          <p>
            My resume provides a comprehensive overview of my skills,
            experience, and qualifications.
          </p>
        </PageIntro>
        <div className="mt-24 ">
          <PdfPreview src={resume_url} />
        </div>
      </FadeIn>
    </>
  );
};

Resume.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Resume;
