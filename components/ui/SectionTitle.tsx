interface SectionTitleProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

import styles from './SectionTitle.module.css';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  return (
    <div
      className={`
        ${styles.wrapper}
        ${light ? styles.light : ''}
        ${align === 'center' ? styles.center : ''}
        ${className}
      `}
    >
      <span className={styles.eyebrow}>
        {eyebrow}
      </span>

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}