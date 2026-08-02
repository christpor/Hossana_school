import React, { useState } from 'react';
import type { TranslationContent } from '../types';
import { Sparkles, Music, Play, Pause, Disc, Volume2, Mic2 } from 'lucide-react';

interface ChoirSpotlightProps {
  t: TranslationContent['choir'];
}

export const ChoirSpotlight: React.FC<ChoirSpotlightProps> = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const activeTrack = t.tracks[selectedTrackIndex];

  return (
    <section id="choir" className="py-24 relative bg-[#060B14]/90 border-t border-[#0099E5]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-4 border border-[#0099E5]/30 shadow-2xl relative bg-[#0D1B2A]/90">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 mb-4">
                <img
                  src="/images/choir.jpg"
                  alt="Hosanna School Choir Performance"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0099E5]/90 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                    <Mic2 className="w-3.5 h-3.5" />
                    <span>Featured with KESORRR</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="bg-[#060B14]/80 px-2.5 py-1 rounded border border-[#0099E5]/20">
                    Hosanna Student Choir
                  </span>
                  <span className="bg-[#060B14]/80 px-2.5 py-1 rounded border border-[#0099E5]/20">
                    Phnom Penh Music Festival
                  </span>
                </div>
              </div>

              {/* Audio Player Bar */}
              <div className="bg-[#060B14]/90 rounded-2xl p-4 border border-[#0099E5]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0099E5] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#0099E5]/30 border border-[#0099E5]/40"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                  </button>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      {activeTrack.title}
                      {isPlaying && (
                        <span className="flex items-center gap-0.5">
                          <span className="w-1 h-3 bg-[#0099E5] animate-bounce" />
                          <span className="w-1 h-4 bg-[#46B2E6] animate-bounce delay-100" />
                          <span className="w-1 h-2 bg-[#0099E5] animate-bounce delay-200" />
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans">{activeTrack.artist}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <Volume2 className="w-4 h-4 text-[#0099E5]" />
                  <span>{activeTrack.duration}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0099E5]/10 border border-[#0099E5]/30 text-[#0099E5] text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-4">
                {t.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans mb-6">
                {t.subtitle}
              </p>
              <div className="p-4 rounded-xl bg-[#0099E5]/10 border border-[#0099E5]/20 text-xs text-[#46B2E6] font-mono flex items-center gap-2 mb-8">
                <Disc className="w-4 h-4 text-[#0099E5] shrink-0" />
                <span>{t.featText}</span>
              </div>
            </div>

            {/* Tracklist Selector */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                {t.playerTitle}
              </h3>

              {t.tracks.map((track, idx) => {
                const isSelected = selectedTrackIndex === idx;

                return (
                  <div
                    key={track.id}
                    onClick={() => {
                      setSelectedTrackIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0D1B2A] border-[#0099E5] text-slate-100 shadow-md'
                        : 'glass-card border-[#0099E5]/15 hover:border-[#0099E5]/35 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isSelected ? 'bg-[#0099E5] text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{track.title}</h4>
                        <p className="text-xs text-slate-400 font-sans">{track.artist}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400">{track.duration}</span>
                      <Music className={`w-4 h-4 ${isSelected ? 'text-[#0099E5]' : 'text-slate-600'}`} />
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
