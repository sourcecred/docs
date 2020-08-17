import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import { HeroLogo } from '../components/HeroLogo';

const features = [
  {
    title: <>Learn About SourceCred</>,
    imageUrl: 'img/logo_variants/1.svg',
    linkUrl: 'docs/beta/introduction',
    description: (
      <>
      An intro manifesto on SourceCred.
      </>
    ),
  },
  {
    title: <>Get Involved</>,
    imageUrl: 'img/logo_variants/2.svg',
    linkUrl: 'docs/beta/get-involved',
    description: (
      <>
      Find out how to join our community and start contributing.
      </>
    ),
  },
  {
    title: <>Setting Up SourceCred</>,
    imageUrl: 'img/logo_variants/3.svg',
    linkUrl: 'docs/beta/setup-guide',
    description: (
      <>
      How to setup your own SourceCred instance.
      </>
    ),
  },
  {
    title: <>Explore Our Cred</>,
    imageUrl: 'img/logo_variants/4.svg',
    linkUrl: 'http://cred.sourcecred.io',
    description: (
      <>
      See SourceCred's own Cred and Grain.
      </>
    ),
  },
  {
    title: <>New Contributor Resources</>,
    imageUrl: 'img/logo_variants/5.svg',
    linkUrl: 'docs/beta/best-resources-for-new-contributors',
    description: (
      <>
      Some starting resources for new contributors.
      </>
    ),
  },
  {
    title: <>SourceCred Intro Video</>,
    imageUrl: 'img/logo_variants/6.svg',
    linkUrl: 'https://www.youtube.com/watch?v=3ZBDiNvddG4',
    description: (
      <>
      An intro video for SourceCred.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, linkUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
    <Link to={linkUrl}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
    </Link>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <HeroLogo />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
