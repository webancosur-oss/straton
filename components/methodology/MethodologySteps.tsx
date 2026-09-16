'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import styles from './MethodologySteps.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface MethodologyStepsProps {
  steps: Step[];
}

export default function MethodologySteps({
  steps,
}: MethodologyStepsProps) {
  const [active, setActive] = useState(0);

  const current = steps[active];

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        {steps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            className={`
              ${styles.navItem}
              ${active === index ? styles.active : ''}
            `}
            onClick={() => setActive(index)}
          >
            <span>{step.number}</span>

            <strong>{step.title}</strong>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
            />
          </button>
        ))}
      </div>

      <div className={styles.detail}>
        <span className={styles.detailNumber}>
          {current.number}
        </span>

        <div className={styles.detailContent}>
          <h3>{current.title}</h3>

          <p>{current.description}</p>
        </div>

        <div className={styles.detailMark}>
          STRATON
        </div>
      </div>
    </div>
  );
}