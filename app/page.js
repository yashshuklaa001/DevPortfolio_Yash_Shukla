'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/homepage/hero-section'), { ssr: false });
const AboutSection = dynamic(() => import('./components/homepage/about'), { ssr: false });
const Education = dynamic(() => import('./components/homepage/education'), { ssr: false });
const Skills = dynamic(() => import('./components/homepage/skills'), { ssr: false });
const Projects = dynamic(() => import('./components/homepage/projects'), { ssr: false });
const ContactSection = dynamic(() => import('./components/homepage/contact'), { ssr: false });
// const Experience = dynamic(() => import('./components/homepage/experience'), { ssr: false });

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Education />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <ContactSection />
    </>
  );
}
