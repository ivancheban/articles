import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Litakcent Articles',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Here you can find a collection of articles, 
        published at litakcent.com from 2012 to 2018.
      </>
    ),
  },
  {
    title: 'Bukvoid',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Here you can also find a collection of articles, 
        published at bukvoid.com from 2008 to 2012.
      </>
    ),
  },
  {
    title: 'Kyiv Daily',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Here you can also find a collection of articles, 
        published at Kyiv Daily from 2019 to 2021.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
