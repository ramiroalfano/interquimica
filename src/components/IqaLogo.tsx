import React from 'react';

interface IqaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showEmblem?: boolean;
  showText?: boolean;
}

export const IqaLogo: React.FC<IqaLogoProps> = ({
  className = '',
  variant = 'white',
  size = 'md',
  showEmblem = true,
  showText = true,
}) => {
  const isDarkText = variant === 'dark';
  const primaryTextColor = isDarkText ? 'text-slate-900' : 'text-white';
  const secondaryTextColor = isDarkText ? 'text-slate-600' : 'text-slate-300';
  const dividerColor = isDarkText ? 'bg-slate-400' : 'bg-white/80';
  const logoSrc = isDarkText ? '/images/logo_iqa_dark.png' : '/images/logo_iqa_white.png';

  const sizeConfig = {
    sm: {
      imgHeight: 'h-6 sm:h-7',
      dividerHeight: 'h-6 sm:h-7',
      interSize: 'text-xs sm:text-[13px] font-bold',
      argSize: 'text-[7.5px] sm:text-[8.5px] tracking-[0.24em] font-medium',
      gap: 'gap-2 sm:gap-2.5',
    },
    md: {
      imgHeight: 'h-8 sm:h-9',
      dividerHeight: 'h-7 sm:h-8',
      interSize: 'text-sm sm:text-[15px] font-bold',
      argSize: 'text-[9px] sm:text-[10px] tracking-[0.25em] font-medium',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      imgHeight: 'h-10 sm:h-12',
      dividerHeight: 'h-9 sm:h-11',
      interSize: 'text-lg sm:text-xl font-bold',
      argSize: 'text-xs tracking-[0.25em] font-medium',
      gap: 'gap-3.5 sm:gap-4',
    },
    xl: {
      imgHeight: 'h-14 sm:h-16',
      dividerHeight: 'h-12 sm:h-14',
      interSize: 'text-2xl sm:text-3xl font-bold',
      argSize: 'text-sm tracking-[0.28em] font-medium',
      gap: 'gap-4 sm:gap-5',
    },
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none ${sizeConfig.gap} ${className}`}
      aria-label="INTERQUÍMICA ARGENTINA"
    >
      {/* Official IQA Emblem (without white background) */}
      {showEmblem && (
        <img
          src={logoSrc}
          alt="IQA Logo"
          className={`${sizeConfig.imgHeight} w-auto object-contain shrink-0`}
        />
      )}

      {/* Vertical divider line matching user's original nav design */}
      {showEmblem && showText && (
        <div
          className={`w-[1.5px] ${sizeConfig.dividerHeight} ${dividerColor} opacity-90 shrink-0 rounded-full`}
        />
      )}

      {/* Stacked Brand Wordmark: INTERQUIMICA / ARGENTINA */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`uppercase tracking-wider leading-tight ${sizeConfig.interSize} ${primaryTextColor}`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            INTERQUIMICA
          </span>
          <span
            className={`uppercase leading-tight opacity-95 ${sizeConfig.argSize} ${secondaryTextColor}`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            ARGENTINA
          </span>
        </div>
      )}
    </div>
  );
};
