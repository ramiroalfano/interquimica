import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from '@vis.gl/react-google-maps';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Building2,
  Phone,
  Mail,
  Copy,
  Check,
  Compass,
} from 'lucide-react';

// Exact coordinates for InterQuímica Argentina S.A.
// Planta Central: Independencia 28, Godoy Cruz, Mendoza, Argentina (Zona Carril Rodríguez Peña)
export const INTERQUIMICA_COORDINATES = {
  lat: -32.932824,
  lng: -68.8355,
};

export const INTERQUIMICA_ADDRESS = {
  street: 'Independencia 28',
  zone: 'Zona Industrial Carril Rodríguez Peña',
  city: 'Godoy Cruz',
  province: 'Mendoza',
  country: 'Argentina',
  full: 'Independencia 28, Godoy Cruz, Mendoza, Argentina',
  phone: '+54 9 261 468 1775',
  email: 'cblanco@interquimica.com.ar',
};

interface LocationMapProps {
  className?: string;
  height?: string;
  showCard?: boolean;
  compact?: boolean;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  className = '',
  height = '420px',
  showCard = true,
  compact = false,
}) => {
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hasMapError, setHasMapError] = useState(false);

  // Retrieve API Key from env, fallback to provided key if defined
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    'AIzaSyCJ3d8uuI5Gjqs8PIcHX7dyuZOrgh0gdmA';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INTERQUIMICA_ADDRESS.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#030816] shadow-2xl flex flex-col ${className}`}
    >
      {/* Header bar of map */}
      <div className="px-4 py-3 bg-[#050e21] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5 z-20">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-[#00c8ff]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Planta Central InterQuímica Argentina S.A.
            </h4>
            <span className="text-[11px] text-slate-400">
              {INTERQUIMICA_ADDRESS.street} · {INTERQUIMICA_ADDRESS.city},{' '}
              {INTERQUIMICA_ADDRESS.province}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyAddress}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            title="Copiar dirección"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )}
            <span>{copied ? 'Copiada' : 'Copiar'}</span>
          </button>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors cursor-pointer"
            title="Abrir indicaciones en Google Maps"
          >
            <Navigation className="w-3 h-3" />
            <span>Cómo llegar</span>
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Abrir en Google Maps"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative w-full" style={{ height }}>
        {!hasMapError && apiKey ? (
          <APIProvider
            apiKey={apiKey}
            libraries={['marker']}
            onError={() => setHasMapError(true)}
          >
            <Map
              defaultCenter={INTERQUIMICA_COORDINATES}
              defaultZoom={15}
              mapId="DEMO_MAP_ID"
              gestureHandling="greedy"
              disableDefaultUI={false}
              fullscreenControl={false}
              streetViewControl={true}
              mapTypeControl={true}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Point Marker */}
              <AdvancedMarker
                position={INTERQUIMICA_COORDINATES}
                title="InterQuímica Argentina S.A. - Planta Central"
                onClick={() => setShowInfoWindow(!showInfoWindow)}
              >
                <Pin
                  background="#0284c7"
                  borderColor="#ffffff"
                  glyphColor="#ffffff"
                  scale={1.3}
                />
              </AdvancedMarker>

              {/* Marker InfoWindow */}
              {showInfoWindow && (
                <InfoWindow
                  position={INTERQUIMICA_COORDINATES}
                  onCloseClick={() => setShowInfoWindow(false)}
                  headerContent={
                    <span className="font-bold text-slate-900 text-xs">
                      InterQuímica Argentina S.A.
                    </span>
                  }
                >
                  <div className="p-1 max-w-[240px] text-slate-800 text-[11px] space-y-1.5 leading-snug">
                    <p className="font-semibold text-blue-700">
                      Planta de Fabricación & Laboratorio Central
                    </p>
                    <p className="text-slate-600">
                      {INTERQUIMICA_ADDRESS.street},{' '}
                      {INTERQUIMICA_ADDRESS.city}, {INTERQUIMICA_ADDRESS.province}.
                    </p>
                    <div className="pt-1 flex items-center justify-between border-t border-slate-200">
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        Cómo llegar
                      </a>
                      <span className="text-[10px] text-slate-500 font-mono">
                        ISO 9001
                      </span>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Fallback Map Embed if client API key has billing/auth limitations */
          <div className="w-full h-full relative bg-slate-950 flex flex-col">
            <iframe
              title="Ubicación InterQuímica Argentina"
              src={`https://www.google.com/maps?q=${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng}&hl=es&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1] contrast-[1.05]"
            />
          </div>
        )}

        {/* Floating Location Card Overlay (Bottom Left on Desktop) */}
        {showCard && !compact && (
          <div className="hidden sm:flex absolute bottom-4 left-4 z-10 max-w-sm p-3.5 bg-slate-950/92 backdrop-blur-md border border-slate-800/90 rounded-xl shadow-2xl flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider font-display">
                Operaciones Activas
              </span>
            </div>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div className="flex items-start gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Planta Química, Reactores & Laboratorio de Ensayos Cromatográficos.
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`tel:${INTERQUIMICA_ADDRESS.phone.replace(/\s+/g, '')}`}
                  className="hover:text-blue-400 transition-colors font-mono"
                >
                  {INTERQUIMICA_ADDRESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${INTERQUIMICA_ADDRESS.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {INTERQUIMICA_ADDRESS.email}
                </a>
              </div>
            </div>
            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800">
              <span className="font-mono">
                {INTERQUIMICA_COORDINATES.lat.toFixed(4)}° S,{' '}
                {Math.abs(INTERQUIMICA_COORDINATES.lng).toFixed(4)}° W
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-0.5 font-semibold"
              >
                <span>Ver en Maps</span>
                <Compass className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
