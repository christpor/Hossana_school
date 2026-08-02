import React, { useState } from 'react';
import type { TranslationContent } from '../types';
import { Music, Play, Pause, Volume2, Mic2 } from 'lucide-react';

interface ChoirSpotlightProps {
  t: TranslationContent['choir'];
}

export const ChoirSpotlight: React.FC<ChoirSpotlightProps> = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const activeTrack = t.tracks[selectedTrackIndex];

  return (
    <section id="choir" className="relative border-t border-line bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left — photo + player */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-surface">
                <img
                  src="/images/choir.jpg"
                  alt="Hosanna School Choir Performance"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper/90 to-transparent p-4 pt-16">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-3 py-1.5">
                    <Mic2 className="h-3.5 w-3.5 text-accent" />
                    <span className="eyebrow text-ink">Featured with KESORRR</span>
                  </div>
                </div>
              </div>

              {/* Player bar */}
              <div className="relative -mt-8 ml-auto mr-4 flex w-[calc(100%-2rem)] items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-4 shadow-lg shadow-[#002D62]/5 sm:mr-8 sm:w-[calc(100%-4rem)]">
                <div className="flex min-w-0 items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-deep text-white transition-colors hover:bg-accent"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 fill-current" />
                    ) : (
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    )}
                  </button>
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-ink">
                      {activeTrack.title}
                    </h4>
                    <p className="truncate text-xs text-muted">{activeTrack.artist}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted">
                  <Volume2 className="h-4 w-4 text-accent" />
                  <span>{activeTrack.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy + tracklist */}
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5">
              <span className="eyebrow text-accent">{t.badge}</span>
            </div>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              {t.title}{' '}
              <span className="font-display accent-underline">KESORRR</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              <span className="eyebrow block text-muted">{t.playerTitle}</span>
              {t.tracks.map((track, idx) => {
                const isSelected = selectedTrackIndex === idx;
                return (
                  <div
                    key={track.id}
                    onClick={() => {
                      setSelectedTrackIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      isSelected
                        ? 'border-accent bg-surface shadow-md shadow-[#002D62]/8'
                        : 'border-line bg-surface/50 hover:border-accent/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                            isSelected ? 'bg-deep text-white' : 'bg-paper text-muted'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-bold text-ink">
                            {track.title}
                          </h4>
                          <p className="truncate text-xs text-muted">{track.artist}</p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="font-mono text-xs text-muted">{track.duration}</span>
                        <Music
                          className={`h-4 w-4 ${isSelected ? 'text-accent' : 'text-muted'}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
