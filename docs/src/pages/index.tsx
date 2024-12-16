import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Deploy Grant Agent
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Autonomous  Grant Operators`}
      description="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments..">
      <Head>
        <meta property="og:title" content="GRANTS.FUN - Autonomous Grant Operators" />
        <meta property="og:description" content="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.grants.fun" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GRANTS.FUN - AI Grant Operators" />
        <meta name="twitter:description" content="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments." />
        <meta name="keywords" content="grants, fun, ai, grant operators, autonomous, agents, tokens, socials, on-chain payments, pump.fun, near protocol, vvaifu.fun, daos.fun, AI grants, AI-PGF, retropgf, potlock, virtuals, vaderai, pumpdotfun, daosdotfun" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
