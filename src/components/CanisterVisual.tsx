import React from 'react';

interface CanisterVisualProps {
  color?: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  className?: string;
  isBag?: boolean;
}

export const CanisterVisual: React.FC<CanisterVisualProps> = ({
  color = '#2563eb',
  name,
  badge = 'ALCALINO',
  className = 'w-48 h-56',
  isBag = false,
}) => {
  if (isBag) {
    // Industrial multi-ply chemical sack representation (e.g. Bio Det series)
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 160 200"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bag Body */}
          <path
            d="M 28 35 L 132 35 L 140 185 L 20 185 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          {/* Top seal stitching */}
          <rect x="25" y="28" width="110" height="10" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="28" y1="33" x2="132" y2="33" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />

          {/* Shading creases */}
          <path d="M 28 35 L 36 185" stroke="#e2e8f0" strokeWidth="3" />
          <path d="M 132 35 L 124 185" stroke="#cbd5e1" strokeWidth="3" />
          <path d="M 50 185 L 60 45" stroke="#f1f5f9" strokeWidth="2" />
          <path d="M 110 185 L 100 45" stroke="#e2e8f0" strokeWidth="2" />

          {/* Label area */}
          <rect x="42" y="65" width="76" height="85" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Brand header */}
          <rect x="42" y="65" width="76" height="16" fill="#0f172a" rx="2" />
          <text x="57" y="76.5" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="'Cinzel', 'Playfair Display', Georgia, serif">
            IQA
          </text>
          <line x1="73" y1="68" x2="73" y2="79" stroke="#ffffff" strokeWidth="1" />
          <text x="77" y="72" fill="#ffffff" fontSize="4.2" fontWeight="bold" fontFamily="'Cinzel', sans-serif" letterSpacing="0.4">
            INTERQUIMICA
          </text>
          <text x="77" y="77" fill="#cbd5e1" fontSize="3.6" fontWeight="semibold" fontFamily="'Cinzel', sans-serif" letterSpacing="0.8">
            ARGENTINA
          </text>

          {/* Color band */}
          <rect x="42" y="81" width="76" height="5" fill={color} />

          {/* Product Name */}
          <text x="80" y="104" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="sans-serif">
            {name}
          </text>
          <text x="80" y="114" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="600" fontFamily="sans-serif">
            {badge} SÓLIDO
          </text>

          {/* Technical icon lines */}
          <line x1="50" y1="125" x2="110" y2="125" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="50" y1="130" x2="95" y2="130" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="50" y1="135" x2="105" y2="135" stroke="#cbd5e1" strokeWidth="1" />

          {/* Bottom net weight */}
          <text x="80" y="145" textAnchor="middle" fill="#0f172a" fontSize="6" fontWeight="bold">
            CONT. NETO 25 KG
          </text>
        </svg>
      </div>
    );
  }

  // Industrial HDPE Chemical Canister (Bidón 20 Kg)
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full drop-shadow-2xl transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-body-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b1728" />
            <stop offset="25%" stopColor={color} />
            <stop offset="65%" stopColor={color} />
            <stop offset="100%" stopColor="#08101e" />
          </linearGradient>
          <linearGradient id={`grad-highlight-${name}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Canister Cap & Spout */}
        <rect x="35" y="18" width="22" height="14" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x="33" y="14" width="26" height="6" rx="2" fill="#1e293b" />
        {/* Anti-tamper ring lines */}
        <line x1="37" y1="23" x2="55" y2="23" stroke="#475569" strokeWidth="1" />
        <line x1="37" y1="27" x2="55" y2="27" stroke="#475569" strokeWidth="1" />

        {/* Canister Handle */}
        <path
          d="M 68 28 C 68 15 110 15 110 28 L 106 38 C 106 28 72 28 72 38 Z"
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Canister Shoulder & Main Body */}
        <path
          d="M 28 46 C 28 36 40 34 50 34 L 110 34 C 120 34 132 36 132 46 L 136 180 C 136 188 126 192 116 192 L 44 192 C 34 192 24 188 24 180 Z"
          fill={`url(#grad-body-${name})`}
          stroke="#1e293b"
          strokeWidth="1.5"
        />

        {/* Molded structural indentations & ribs */}
        <rect x="27" y="55" width="106" height="5" rx="2" fill="#000000" fillOpacity="0.2" />
        <rect x="27" y="172" width="106" height="5" rx="2" fill="#000000" fillOpacity="0.25" />

        {/* Specular lighting sheen */}
        <path
          d="M 32 48 L 42 48 L 42 186 L 32 182 Z"
          fill="#ffffff"
          fillOpacity="0.18"
        />

        {/* Chemical Label Panel */}
        <rect x="36" y="68" width="88" height="96" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

        {/* Label Header */}
        <rect x="36" y="68" width="88" height="16" rx="3" fill="#0b172a" />
        <text x="52" y="80" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="'Cinzel', 'Playfair Display', Georgia, serif">
          IQA
        </text>
        <line x1="72" y1="71" x2="72" y2="81.5" stroke="#ffffff" strokeWidth="1" />
        <text x="76.5" y="75.5" fill="#ffffff" fontSize="4.6" fontWeight="bold" fontFamily="'Cinzel', sans-serif" letterSpacing="0.4">
          INTERQUIMICA
        </text>
        <text x="76.5" y="81" fill="#cbd5e1" fontSize="4" fontWeight="semibold" fontFamily="'Cinzel', sans-serif" letterSpacing="0.8">
          ARGENTINA
        </text>

        {/* Color category stripe on label */}
        <rect x="36" y="84" width="88" height="4" fill={color} />

        {/* Product Name Title */}
        <text x="80" y="110" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="900" fontFamily="sans-serif">
          {name}
        </text>

        {/* Category badge on label */}
        <rect x="52" y="115" width="56" height="10" rx="3" fill="#0f172a" />
        <text x="80" y="122.5" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="bold" letterSpacing="0.5">
          {badge}
        </text>

        {/* Chemical hazard symbol diamonds */}
        <g transform="translate(62, 131) scale(0.6)">
          <polygon points="12,0 24,12 12,24 0,12" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M 12 5 L 12 14 M 12 17 L 12 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(80, 131) scale(0.6)">
          <polygon points="12,0 24,12 12,24 0,12" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" fill="#ffffff" />
        </g>

        {/* Volume indication */}
        <text x="80" y="156" textAnchor="middle" fill="#64748b" fontSize="6" fontWeight="bold">
          CONT. NETO: 20 KG
        </text>
      </svg>
    </div>
  );
};
