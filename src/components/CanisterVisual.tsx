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
    // Industrial multi-ply chemical sack representation (e.g. Bio Det series matching reference image)
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 170 215"
          className="w-full h-full drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`sack-body-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="8%" stopColor="#e5e7eb" />
              <stop offset="25%" stopColor="#f3f4f6" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#f3f4f6" />
              <stop offset="92%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
            <linearGradient id="sack-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.08" />
              <stop offset="85%" stopColor="#000000" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Bottom shadow */}
          <ellipse cx="85" cy="204" rx="60" ry="8" fill="#000000" fillOpacity="0.2" />

          {/* Bag Body with natural folds and gussets */}
          <path
            d="M 32 30 C 30 26 140 26 138 30 L 148 185 C 150 196 136 200 120 200 L 50 200 C 34 200 20 196 22 185 Z"
            fill={`url(#sack-body-${name})`}
            stroke="#9ca3af"
            strokeWidth="1.2"
          />

          {/* Top crimped seal / heat stitch */}
          <path
            d="M 28 26 L 142 26 L 140 33 L 30 33 Z"
            fill="#d1d5db"
            stroke="#6b7280"
            strokeWidth="1"
          />
          <line x1="32" y1="29.5" x2="138" y2="29.5" stroke="#4b5563" strokeWidth="1" strokeDasharray="3 2" />

          {/* Shading creases & volume shadows */}
          <path d="M 28 32 C 32 80 34 140 38 190" stroke="#9ca3af" strokeWidth="2.5" strokeOpacity="0.4" />
          <path d="M 142 32 C 138 80 136 140 132 190" stroke="#6b7280" strokeWidth="2.5" strokeOpacity="0.5" />
          <path d="M 52 35 C 50 90 48 150 56 195" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.8" />
          <path d="M 118 35 C 120 90 122 150 114 195" stroke="#e5e7eb" strokeWidth="2" strokeOpacity="0.6" />

          {/* Product Label (White with red & black branding as in reference) */}
          <g transform="translate(42, 60)">
            {/* Label Base Plate */}
            <rect x="0" y="0" width="86" height="110" rx="2" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.2" />

            {/* Red Header Bar: InterQuímica Argentina */}
            <rect x="0" y="0" width="86" height="16" fill="#dc2626" rx="1" />
            <text x="43" y="11.5" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">
              InterQuímica Argentina
            </text>

            {/* Black / Red Framed Title Box with Product Name */}
            <rect x="4" y="20" width="78" height="18" fill="#111827" rx="2" stroke="#dc2626" strokeWidth="1" />
            <text x="43" y="32.5" textAnchor="middle" fill="#ef4444" fontSize="6.8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.3">
              {name}
            </text>

            {/* Chemical Specification Subtitle */}
            <text x="43" y="44" textAnchor="middle" fill="#1f2937" fontSize="4.2" fontWeight="bold" fontFamily="sans-serif">
              {badge} SÓLIDO
            </text>

            {/* GHS Red Hazard Warning Diamonds */}
            <g transform="translate(23, 49) scale(0.45)">
              <polygon points="12,0 24,12 12,24 0,12" fill="#ffffff" stroke="#dc2626" strokeWidth="2.5" />
              <path d="M 12 5 L 12 13 M 12 16 L 12 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g transform="translate(37, 49) scale(0.45)">
              <polygon points="12,0 24,12 12,24 0,12" fill="#ffffff" stroke="#dc2626" strokeWidth="2.5" />
              <circle cx="12" cy="12" r="4" fill="#111827" />
            </g>
            <g transform="translate(51, 49) scale(0.45)">
              <polygon points="12,0 24,12 12,24 0,12" fill="#ffffff" stroke="#dc2626" strokeWidth="2.5" />
              <path d="M 6 15 L 18 15 M 12 8 L 12 16" stroke="#111827" strokeWidth="2" />
            </g>

            {/* Technical description lines */}
            <line x1="10" y1="68" x2="76" y2="68" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="10" y1="73" x2="72" y2="73" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="78" x2="74" y2="78" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="83" x2="68" y2="83" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="10" y1="88" x2="76" y2="88" stroke="#cbd5e1" strokeWidth="1" />

            {/* Barcode & SENASA reference */}
            <rect x="10" y="94" width="22" height="7" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="0.5" />
            <line x1="13" y1="95" x2="13" y2="100" stroke="#111827" strokeWidth="1" />
            <line x1="16" y1="95" x2="16" y2="100" stroke="#111827" strokeWidth="1" />
            <line x1="18" y1="95" x2="18" y2="100" stroke="#111827" strokeWidth="1.5" />
            <line x1="22" y1="95" x2="22" y2="100" stroke="#111827" strokeWidth="1" />
            <line x1="25" y1="95" x2="25" y2="100" stroke="#111827" strokeWidth="1.5" />
            <line x1="28" y1="95" x2="28" y2="100" stroke="#111827" strokeWidth="1" />

            {/* Bottom Net Weight (30 kg / 25 kg) */}
            <text x="68" y="100" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="bold">
              25 kg
            </text>
          </g>
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
