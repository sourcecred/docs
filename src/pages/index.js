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
    title: <>data driven</>,
    imageUrl: 'img/data-driven.svg',
    description: (
      <>
        Scores are calculated using data from a project: forum posts, commits, comments, and more.
      </>
    ),
  },
  {
    title: <>community controlled</>,
    imageUrl: 'img/community-controlled.svg',
    description: (
      <>
        Each project community sets the values, priorities, weights, and norms.
      </>
    ),
  },
  {
    title: <>transparent</>,
    imageUrl: 'img/transparent.svg',
    description: (
      <>
        You can see what every score is, and more importantly, why.
      </>
    ),
  },
  {
    title: <>extensible</>,
    imageUrl: 'img/extensible.svg',
    description: (
      <>
        SourceCred is built around a plugin architecture. You can extend it to track any kind of contribution.
      </>
    ),
  },
  {
    title: <>decentralized</>,
    imageUrl: 'img/decentralized.svg',
    description: (
      <>
        There's no "CredHub"; just an open-source system that anyone can set up and use.
      </>
    ),
  },
  {
    title: <>intersubjective</>,
    imageUrl: 'img/intersubjective.svg',
    description: (
      <>
        Scores are a blend of objective data and subjective judgement.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
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
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to={useBaseUrl('docs/intro/what')}>
              Read The Docs
            </Link>
          </div>
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
