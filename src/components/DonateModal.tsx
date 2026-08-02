import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, ExternalLink, Phone } from 'lucide-react';
import type { Language } from '../types';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(30);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-deep/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-line bg-surface p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Heart className="h-6 w-6 fill-current text-emerald" />
          </div>
          <h3 className="text-2xl font-bold text-ink">
            {lang === 'en' ? 'Sponsor a Student at Hosanna' : 'ឧបត្ថម្ភសិស្សនៅសាលាហូសាណា'}
          </h3>
          <p className="mt-1 text-xs text-muted">
            {lang === 'en'
              ? 'Flatten micro-costs of printing, uniforms & water in Pou Senchey'
              : 'លុបបំបាត់ចំណាយតូចៗលើឯកសណ្ឋាន ទឹកស្អាត និងសន្លឹកកិច្ចការ'}
          </p>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-3">
          {[15, 30, 100].map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`h-12 rounded-2xl border font-mono text-sm font-bold transition-all ${
                selectedAmount === amt
                  ? 'border-deep bg-deep text-white shadow-md'
                  : 'border-line bg-paper text-ink hover:border-accent'
              }`}
            >
              ${amt}/mo
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <a
            href="https://sydneyhosanna.com.au/cambodia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-full items-center justify-between rounded-2xl bg-deep px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald" />
              Donate via Sydney Hosanna (AUD / USD)
            </span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="rounded-2xl border border-line bg-paper p-4 text-left text-xs">
            <span className="eyebrow mb-1 block text-accent">
              Direct Cambodian field office inquiries
            </span>
            <p className="text-muted">
              For local wire transfers or school visits, contact missionaries directly:
            </p>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-ink">
              <a href="tel:+85512203073" className="flex items-center gap-1 transition-colors hover:text-accent">
                <Phone className="h-3 w-3 text-accent" />
                +855 12 203 073
              </a>
              <span className="text-muted">•</span>
              <a href="tel:+85512668077" className="flex items-center gap-1 transition-colors hover:text-accent">
                <Phone className="h-3 w-3 text-accent" />
                +855 12 668 077
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-line pt-4 text-center">
          <button
            onClick={onClose}
            className="font-mono text-xs text-muted underline-offset-2 hover:text-ink hover:underline"
          >
            Close dialog
          </button>
        </div>
      </div>
    </div>
  );
};
