'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

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
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <>
      <header
        className={`
          ${styles.header}
          ${scrolled ? styles.scrolled : ''}
        `}
      >
        <div className={styles.inner}>
          {/* LOGO */}
          <Link
            href="/"
            className={styles.logo}
            aria-label="STRATON — Inicio"
          >
            <Image
              src="/logos/straton_dark.svg"
              alt="STRATON — Engineering & Construction"
              width={220}
              height={70}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className={styles.desktopNav}
            aria-label="Navegación principal"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    ${styles.navLink}
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
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <Link
              href="/contacto"
              className={styles.contactButton}
            >
              <span>Hablemos</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
              />
            </Link>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() =>
                setMenuOpen(true)
              }
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
      />
    </>
  );
}