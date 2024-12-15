import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Deploy Agents',
    image: require('@site/static/img/docs-tracking.png').default,
    description: (
      <>
        Create a grant operator agent with a single click with type of projects and approriate filter for program.
      </>
    ),
  },
  {
    title: 'Set Reviewers',
    image: require('@site/static/img/docs-puzzle.png').default,
    description: (
      <>
        Set reviewers that can evaluate a projects effectiveness via comments on twitter. 
      </>
    ),
  },
  {
    title: 'Easy Onboarding From Twitter',
    image: require('@site/static/img/docs-mlm.png').default,
    description: (
      <>
        Use twitter social graph and other socials to accept grantees and then onboard them to claim payouts via Twitter-Auth claim links.
      </>
    ),
  },
  {
    title: 'On-Chain Payouts',
    image: require('@site/static/img/docs-stakeslash.png').default,
    description: (
      <>
        Integrated into on-chain actions for payouts and multichain token support.
      </>
    ),
  },
  {
    title: 'Replenish Agent Wallet',
    image: require('@site/static/img/docs-security.png').default,
    description: (
      <>
        Top up payouts from treasury for weekly payouts automation
      </>
    ),
  },
  {
    title: 'Token Integration',
    image: require('@site/static/img/docs-toolbox.png').default,
    description: (
      <>
       Directly buy grant operator agent tokens. 
      </>
    ),
  },
  {
    title: 'See How Much Capital is Deployed',
    image: require('@site/static/img/docs-api.png').default,
    description: (
      <>
        Easily see how much capital has been deployed trhough grant operators
      </>
    ),
  },
  {
    title: 'Open Source MIT License',
    image: require('@site/static/img/docs-boilerplate.png').default,
    description: (
      <>
        Built on the Eliza framework, we believe in open source and have completely open soruced our front ends.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
