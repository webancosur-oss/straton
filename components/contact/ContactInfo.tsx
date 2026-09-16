import { Mail, MapPin, Phone } from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './ContactInfo.module.css';

const contactItems = [
  {
    icon: MapPin,
    label: 'Oficina',
    value: 'Huancayo - Junín, Perú',
    detail: 'Atención previa coordinación',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+51 904 239 657',
    detail: 'Lunes a Sabado',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'ancosur@gmail.com',
    detail: 'Respondemos a la brevedad',
  },
];

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  <div>
                    <p className={styles.label}>{item.label}</p>
                    <p className={styles.value}>{item.value}</p>
                    <p className={styles.detail}>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}