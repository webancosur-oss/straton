'use client';

import { useState } from 'react';

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

  if (!current) {
    return null;
  }

  return (
    <div className={styles.wrapper}>

      {/* Navegación */}
      <div className={styles.navigation}>
        {steps.map((step, index) => (
          <button
            key={`${step.title}-${index}`}
            type="button"
            className={`${styles.navItem} ${
              active === index ? styles.active : ''
            }`}
            onClick={() => setActive(index)}
          >
            <span className={styles.navDot} />

            <strong>{step.title}</strong>
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className={styles.detail}>

        {/* Tipografía decorativa de fondo */}
        <div
          className={styles.backgroundWord}
          aria-hidden="true"
        >
          {current.title}
        </div>

        <div className={styles.detailContent}>

          <h3>{current.title}</h3>

          <p>{current.description}</p>
        </div>

      </div>
    </div>
  );
}