import { ReactNode, useEffect, useId, useState } from 'react';
import { HiBars2, HiXMark } from 'react-icons/hi2';
import classNames from 'classnames';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import { Footer } from '@/components/Footer';
// import { socialMediaProfiles } from '@/lib/socialMediaProfiles';
import Navigation from '@/components/Navigation';
import { socialProfile } from '@/lib/Social-Profile';

import { Container } from '../components/Container';
// import { Footer } from './common/Footer';
import { Header } from '../components/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  let panelId = useId();
  const router = useRouter();
  let [expanded, setExpanded] = useState(false);
  let shouldReduceMotion = useReducedMotion();
  const handleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const routerEvent = 'beforeHistoryChange';

    const eventHandler = () => {
      window.scroll(0, 0);
    };

    router.events.on(routerEvent, eventHandler);

    return () => {
      router.events.off(routerEvent, eventHandler);
    };
  }, [router.events]);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <div className="max-w-[2000px] bg-gray-400">
        <header>
          <div
            aria-hidden={expanded ? 'true' : undefined}
            className="absolute left-0 right-0 top-2 z-40 max-w-[2000px] pt-14">
            <Header
              expanded={expanded}
              icon={HiBars2}
              onToggle={handleExpanded}
              panelId={panelId}
            />
          </div>

          <motion.div
            aria-hidden={expanded ? undefined : 'true'}
            className={classNames(
              'relative z-50 !overflow-hidden bg-gray-400 pt-2 md:pt-0',
              {
                'h-0': !expanded,
                'h-auto': expanded,
              }
            )}
            id={panelId}
            layout>
            <motion.div className="bg-gray-400" layout>
              <div className="bg-gray-400 pb-16 pt-14">
                <Header
                  expanded={expanded}
                  icon={HiXMark}
                  invert
                  onToggle={handleExpanded}
                  panelId={panelId}
                />
              </div>
              <Navigation onNavigationItemClick={handleExpanded} />
              <div className="relative bg-gray-400 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gray-400">
                <Container>
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div className="sm:border-l sm:border-transparent">
                      <h2 className="font-display text-base font-semibold text-white">
                        Follow me
                      </h2>

                      <ul
                        className={classNames('mt-6 flex gap-x-10 text-white')}
                        role="list">
                        {socialProfile.map((socialMediaProfile, index) => (
                          <li key={index}>
                            <Link
                              // aria-label={socialMediaProfile.title}
                              className={classNames('transition')}
                              href={socialMediaProfile.link}>
                              <socialMediaProfile.icon className="h-6 w-6 fill-current" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

        <motion.div
          className="relative overflow-hidden !rounded-tl-[40px] !rounded-tr-[40px] md:!rounded-none"
          layout="position">
          <div className="mx-auto min-h-screen max-w-[2000px] border-l border-r bg-black px-0 pt-14">
            <div className="pt-9">
              <main>
                <Container>{children}</Container>
              </main>
              <Footer />
            </div>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};
