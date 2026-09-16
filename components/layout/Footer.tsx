import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';

const navigation = [
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
    label: 'Contacto',
    href: '/contacto',
  },
];

const services = [
  'Ingeniería',
  'Construcción',
  'Gestión de proyectos',
  'Supervisión',
  'Consultoría',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* TOP */}

        <div className={styles.top}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="STRATON — Inicio"
            >
              <Image
                src="/logos/straton_logo.svg"
                alt="STRATON"
                width={220}
                height={70}
                className={styles.logoImage}
                priority
              />
            </Link>

            <p className={styles.tagline}>
              Ingeniería, construcción y gestión
              <br />
              para proyectos que trascienden.
            </p>
          </div>

          <div className={styles.contact}>
            <span className={styles.contactLabel}>
              Contacto
            </span>

            <a href="mailto:ancosur@gmail.com">
              ancosur@gmail.com
            </a>

            <a
              href="https://wa.me/51904239657"
              target="_blank"
              rel="noopener noreferrer"
            >
              +51 904 239 657
            </a>
          </div>
        </div>

        {/* CONTENT */}

        <div className={styles.content}>

          {/* EMPRESA */}

          <div className={styles.column}>
            <p className={styles.heading}>
              Empresa
            </p>

            <nav aria-label="Navegación de empresa">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICIOS */}

          <div className={styles.column}>
            <p className={styles.heading}>
              Servicios
            </p>

            <div className={styles.list}>
              {services.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACTO */}

          <div className={styles.column}>
            <p className={styles.heading}>
              Escríbenos
            </p>

            <div className={styles.contactDetails}>
              <a href="mailto:ancosur@gmail.com">
                ancosur@gmail.com
              </a>

              <a
                href="https://wa.me/51904239657"
                target="_blank"
                rel="noopener noreferrer"
              >
                +51 904 239 657
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} STRATON
          </span>

          <span>
            Todos los derechos reservados
          </span>

          <Link href="/contacto">
            Contacto
          </Link>
        </div>

      </div>
    </footer>
  );
}