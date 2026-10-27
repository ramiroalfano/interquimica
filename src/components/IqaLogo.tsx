import React from 'react';

interface IqaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showEmblem?: boolean;
}

export const IqaLogo: React.FC<IqaLogoProps> = ({
  className = '',
  variant = 'white',
  size = 'md',
  showEmblem = true,
}) => {
  // Text colors based on variant
  const textColor = variant === 'dark' ? 'text-slate-900' : 'text-white';
  const dividerColor = variant === 'dark' ? 'bg-slate-900' : 'bg-white';

  // Size scalers
  const sizeConfig = {
    sm: {
      emblemSize: 'w-7 h-7',
      iqaSize: 'text-2xl',
      dividerHeight: 'h-7',
      dividerWidth: 'w-[1.5px]',
      interSize: 'text-[9.5px]',
      argSize: 'text-[9px]',
      gap: 'gap-2.5',
      textGap: 'gap-0.5',
    },
    md: {
      emblemSize: 'w-9 h-9 sm:w-10 sm:h-10',
      iqaSize: 'text-3xl sm:text-4xl',
      dividerHeight: 'h-9 sm:h-10',
      dividerWidth: 'w-[2px]',
      interSize: 'text-[11px] sm:text-[13px]',
      argSize: 'text-[10px] sm:text-[12px]',
      gap: 'gap-3 sm:gap-3.5',
      textGap: 'gap-1',
    },
    lg: {
      emblemSize: 'w-14 h-14 sm:w-16 sm:h-16',
      iqaSize: 'text-5xl sm:text-6xl',
      dividerHeight: 'h-14 sm:h-16',
      dividerWidth: 'w-[2.5px]',
      interSize: 'text-[16px] sm:text-[19px]',
      argSize: 'text-[14px] sm:text-[17px]',
      gap: 'gap-4 sm:gap-5',
      textGap: 'gap-1.5',
    },
    xl: {
      emblemSize: 'w-18 h-18 sm:w-20 sm:h-20',
      iqaSize: 'text-6xl sm:text-7xl',
      dividerHeight: 'h-18 sm:h-20',
      dividerWidth: 'w-[3px]',
      interSize: 'text-[20px] sm:text-[24px]',
      argSize: 'text-[18px] sm:text-[22px]',
      gap: 'gap-5 sm:gap-6',
      textGap: 'gap-2',
    },
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none ${sizeConfig.gap} ${className}`}
      style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
      aria-label="IQA | INTERQUIMICA ARGENTINA"
    >
      {/* Official Company Hexagonal Emblem */}
      {showEmblem && (
        <img
          src="/images/logo_interquimica.png"
          alt="InterQuímica Logo"
          className={`${sizeConfig.emblemSize} object-contain shrink-0`}
        />
      )}

      {/* Monogram IQA */}
      <span
        className={`font-black tracking-tight leading-none ${sizeConfig.iqaSize} ${textColor}`}
        style={{
          fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
          letterSpacing: '-0.02em',
        }}
      >
        IQA
      </span>

      {/* Vertical Rule Divider */}
      <div
        className={`${sizeConfig.dividerWidth} ${sizeConfig.dividerHeight} ${dividerColor} opacity-90 shrink-0`}
        aria-hidden="true"
      />

      {/* Stacked Company Name: INTERQUIMICA / ARGENTINA */}
      <div
        className={`flex flex-col justify-center leading-none ${sizeConfig.textGap} ${textColor}`}
        style={{ fontFamily: "'Cinzel', 'Plus Jakarta Sans', serif" }}
      >
        <span
          className={`font-extrabold uppercase ${sizeConfig.interSize}`}
          style={{ letterSpacing: '0.08em' }}
        >
          INTERQUIMICA
        </span>
        <span
          className={`font-semibold uppercase opacity-95 ${sizeConfig.argSize}`}
          style={{ letterSpacing: '0.24em' }}
        >
          ARGENTINA
        </span>
      </div>
    </div>
  );
};
