import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  href = '/servicios',
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={styles.card}
    >
      <div className={styles.top}>
        <span className={styles.number}>
          {number}
        </span>

        <ArrowUpRight
          className={styles.arrow}
          size={22}
          strokeWidth={1.5}
        />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className={styles.line} />
    </Link>
  );
}