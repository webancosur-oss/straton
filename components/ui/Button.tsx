import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'light' | 'dark';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;

  const content = (
    <>
      <span className={styles.label}>{children}</span>

      <span className={styles.icon}>
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}