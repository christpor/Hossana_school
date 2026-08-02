import React, { useState } from 'react';
import { X, Heart, ShieldCheck, ExternalLink, Phone } from 'lucide-react';
import type { Language } from '../types';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(30);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B14]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-[#0099E5]/40 shadow-2xl bg-[#0D1B2A]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#060B14] text-slate-400 hover:text-[#0099E5] hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0099E5]/15 border border-[#0099E5]/30 flex items-center justify-center text-[#0099E5] mx-auto mb-3">
            <Heart className="w-6 h-6 fill-current text-[#27AE60]" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100">
            {lang === 'en' ? 'Sponsor a Student at Hosanna' : 'ឧបត្ថម្ភសិស្សនៅសាលាហូសាណា'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            {lang === 'en'
              ? 'Flatten micro-costs of printing, uniforms & water in Mean Chey'
              : 'លុបបំបាត់ចំណាយតូចៗលើឯកសណ្ឋាន ទឹកស្អាត និងសន្លឹកកិច្ចការ'}
          </p>
        </div>

        {/* Amount Selector */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[15, 30, 100].map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`py-3 rounded-2xl border font-mono font-bold text-sm transition-all ${
                selectedAmount === amt
                  ? 'bg-gradient-to-r from-[#0099E5] to-[#002D62] text-white border-[#0099E5] shadow-md'
                  : 'bg-[#060B14] text-slate-300 border-[#0099E5]/20 hover:border-[#0099E5]/40'
              }`}
            >
              ${amt}/mo
            </button>
          ))}
        </div>

        {/* Direct Action Options */}
        <div className="space-y-4">
          
          <a
            href="https://sydneyhosanna.com.au/cambodia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0099E5] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-lg shadow-[#0099E5]/25 border border-[#0099E5]/40 group transition-all"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#27AE60]" />
              <span>Donate via Sydney Hosanna (AUD / USD)</span>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="p-4 rounded-2xl bg-[#060B14]/80 border border-[#0099E5]/20 text-left text-xs space-y-2">
            <span className="font-mono text-[#0099E5] font-bold block">
              Direct Cambodian Field Office Inquiries:
            </span>
            <p className="text-slate-300">
              For local wire transfers or school visits, contact missionaries directly:
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-slate-200">
              <a href="tel:+85512203073" className="flex items-center gap-1 hover:text-[#0099E5]">
                <Phone className="w-3 h-3 text-[#0099E5]" />
                +855 12 203 073
              </a>
              <span>•</span>
              <a href="tel:+85512668077" className="flex items-center gap-1 hover:text-[#0099E5]">
                <Phone className="w-3 h-3 text-[#0099E5]" />
                +855 12 668 077
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 text-center border-t border-[#0099E5]/15 pt-4">
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-slate-200 underline"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
