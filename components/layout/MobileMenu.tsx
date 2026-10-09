'use client';

import Link from 'next/link';
import { ArrowUpRight, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Nosotros',
    href: '/nosotros',
  },
  {
    label: 'Servicios',
    href: '/servicios',
  },
  {
    label: 'Metodología',
    href: '/metodologia',
  },
  {
    label: 'Proyectos',
    href: '/proyectos',
  },
  {
    label: 'Actualidad',
    href: '/actualidad',
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <aside
      id="mobile-navigation"
      className={`
        ${styles.menu}
        ${open ? styles.open : ''}
      `}
      aria-hidden={!open}
    >
      <div className={styles.overlay}>
        <button
          type="button"
          className={styles.overlayButton}
          onClick={onClose}
          aria-label="Cerrar menú"
        />
      </div>

      <div className={styles.panel}>
        <div className={styles.header}>
          <Link
            href="/"
            className={styles.logo}
            onClick={onClose}
          >
            <span>STRATON</span>

            <small>
              Engineering & Construction
            </small>
          </Link>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X
              size={24}
              strokeWidth={1.5}
            />
          </button>
        </div>

        <nav
          className={styles.navigation}
          aria-label="Navegación móvil"
        >
          {navigation.map((item) => {
            const active =
              isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  ${styles.link}
                  ${active ? styles.active : ''}
                `}
                aria-current={
                  active
                    ? 'page'
                    : undefined
                }
              >
                <span>
                  {item.label}
                </span>

                {active && (
                  <span
                    className={styles.current}
                  >
                    Actual
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className={styles.mobileContact}
          onClick={onClose}
        >
          <span>Hablemos</span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </aside>
  );
}