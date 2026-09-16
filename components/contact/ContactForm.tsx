'use client';

import { ArrowUpRight } from 'lucide-react';

import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

import styles from './ContactForm.module.css';

const services = [
  'Ingeniería',
  'Construcción',
  'Gestión de proyectos',
  'Supervisión',
  'Consultoría',
  'Otro',
];

const WHATSAPP_NUMBER = '51904239657';

export default function ContactForm() {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const whatsappMessage = [
      'Hola STRATON, quiero realizar una consulta.',
      '',
      'DATOS DEL CONTACTO',
      `Nombre: ${name}`,
      `Empresa: ${company || 'No especificada'}`,
      `Correo: ${email}`,
      `Teléfono: ${phone || 'No especificado'}`,
      '',
      'REQUERIMIENTO',
      `Servicio: ${service || 'No especificado'}`,
      `Mensaje: ${message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <Reveal>
              <p className={styles.eyebrow}>Cuéntanos</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>
                Empecemos una
                <span> conversación.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className={styles.description}>
                Déjanos algunos detalles sobre tu proyecto y
                nuestro equipo podrá entender mejor cómo podemos
                ayudarte.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className={styles.note}>
                Los campos marcados con * son obligatorios.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.row}>
                <label>
                  <span>Nombre *</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Empresa</span>

                  <input
                    type="text"
                    name="company"
                    placeholder="Nombre de empresa"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className={styles.row}>
                <label>
                  <span>Correo electrónico *</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="nombre@empresa.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>Teléfono</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+51"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label>
                <span>¿Qué necesitas?</span>

                <select
                  name="service"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Mensaje *</span>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Cuéntanos brevemente sobre tu proyecto..."
                  required
                />
              </label>

              <div className={styles.bottom}>
                <p>
                  Al enviar, se abrirá WhatsApp para continuar
                  la conversación con nuestro equipo.
                </p>

                <button
                  type="submit"
                  className={styles.submit}
                >
                  <span>Enviar</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}