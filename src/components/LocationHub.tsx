import React from 'react';
import type { TranslationContent } from '../types';
import { MapPin, Phone, Compass, ExternalLink, Share2 } from 'lucide-react';

interface LocationHubProps {
  t: TranslationContent['location'];
}

export const LocationHub: React.FC<LocationHubProps> = ({ t }) => {
  return (
    <section id="location" className="relative border-t border-line bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5">
            <MapPin className="mr-2 h-3.5 w-3.5 text-accent" />
            <span className="eyebrow text-accent">{t.badge}</span>
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            {t.title}{' '}
            <span className="font-display accent-underline">Pou Senchey</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">{t.address}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left — history + phones + facebook */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-6">
            <div className="editorial-card p-7">
              <div className="mb-3 flex items-center gap-2.5 font-bold text-ink">
                <Compass className="h-5 w-5 text-accent" />
                <h3>{t.historyTitle}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{t.historyText}</p>
              <div className="mt-4 border-t border-line pt-4">
                <span className="eyebrow text-accent">Landmark · {t.landmark}</span>
              </div>
            </div>

            <div className="editorial-card p-7">
              <div className="mb-4 flex items-center gap-2.5 font-bold text-ink">
                <Phone className="h-5 w-5 text-accent" />
                <h3>{t.phonesTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {t.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="flex h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 font-mono text-sm text-ink transition-all hover:border-accent hover:text-accent"
                  >
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://www.facebook.com/hosannaschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card editorial-card-hover flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Share2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Hosanna School Official Facebook Hub</h4>
                  <p className="text-xs text-muted">Thousands of photos, choir videos & classroom updates</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted" />
            </a>
          </div>

          {/* Right — map visual */}
          <div className="lg:col-span-6">
            <div className="editorial-card flex h-full flex-col p-4">
              <div className="relative flex h-80 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface sm:h-96">
                <img
                  src="/images/real-assembly-campus.jpg"
                  alt="Hosanna School campus in Pou Senchey, Phnom Penh"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width={1203}
                  height={900}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="eyebrow rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white backdrop-blur-sm">
                    Phnom Penh · Pou Senchey 12000
                  </span>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                  </span>
                </div>

                <div className="relative z-10 my-auto text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Hosanna School Campus</h4>
                  <p className="eyebrow mt-1 text-white/80">Pou Senchey, Phnom Penh</p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-4 font-mono text-[11px] text-white/70">
                  <span>Lat 11.5651° N</span>
                  <span>Long 104.8514° E</span>
                  <span>Pou Senchey Zone</span>
                </div>
              </div>

              <div className="p-4 text-center">
                <a
                  href="https://maps.app.goo.gl/CwM5fNPkbwsSCpiF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-accent transition-colors hover:text-deep"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
