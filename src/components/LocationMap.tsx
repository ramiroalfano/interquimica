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
  Layers,
  Image as ImageIcon,
  X,
} from 'lucide-react';

// Exact coordinates for InterQuímica Argentina S.A.
// Independencia 28, M5501 Godoy Cruz, Mendoza, Argentina
// Pointed exactly at the facility on Calle Independencia between DHL depósito / San Francisco del Monte and PRIMUM SA / Tandil
export const INTERQUIMICA_COORDINATES = {
  lat: -32.92405,
  lng: -68.81978,
};

export const INTERQUIMICA_ADDRESS = {
  street: 'Independencia 28',
  zone: 'Distrito San Francisco del Monte',
  postalCode: 'M5501',
  city: 'Godoy Cruz',
  province: 'Mendoza',
  country: 'Argentina',
  full: 'Independencia 28, M5501 Godoy Cruz, Mendoza, Argentina',
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
  height = '440px',
  showCard = true,
  compact = false,
}) => {
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hasMapError, setHasMapError] = useState(false);
  const [isSatellite, setIsSatellite] = useState(true);
  const [showReferenceModal, setShowReferenceModal] = useState(false);

  // Retrieve API Key from env, fallback to provided key if defined
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
    'AIzaSyCJ3d8uuI5Gjqs8PIcHX7dyuZOrgh0gdmA';

  // URLs pointing directly to the exact point in Godoy Cruz
  const googleMapsUrl = `https://www.google.com/maps/place/Independencia+28,+M5501+Godoy+Cruz,+Mendoza/@${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng},17z`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng}`;

  React.useEffect(() => {
    // Catch Google Maps auth or billing failures globally
    const origAuthFailure = (window as any).gm_authFailure;
    (window as any).gm_authFailure = () => {
      setHasMapError(true);
      if (typeof origAuthFailure === 'function') {
        origAuthFailure();
      }
    };
    return () => {
      if ((window as any).gm_authFailure === origAuthFailure) {
        delete (window as any).gm_authFailure;
      }
    };
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INTERQUIMICA_ADDRESS.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps iframe URL with exact coordinates and satellite or standard layer
  // t=k is satellite, t=m is standard map
  const iframeSrc = `https://maps.google.com/maps?q=${INTERQUIMICA_COORDINATES.lat},${INTERQUIMICA_COORDINATES.lng}&hl=es&z=17&t=${isSatellite ? 'k' : 'm'}&output=embed`;

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
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                Planta Central InterQuímica Argentina S.A.
              </h4>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-950/80 text-sky-400 border border-blue-800/60">
                M5501
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              {INTERQUIMICA_ADDRESS.street} · {INTERQUIMICA_ADDRESS.city},{' '}
              {INTERQUIMICA_ADDRESS.province}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Layer switcher: Satélite / Mapa */}
          <button
            onClick={() => setIsSatellite(!isSatellite)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            title={isSatellite ? 'Cambiar a vista de calles' : 'Cambiar a vista satelital'}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>{isSatellite ? 'Satélite' : 'Plano'}</span>
          </button>

          {/* Reference image preview button */}
          <button
            onClick={() => setShowReferenceModal(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            title="Ver imagen satelital de referencia"
          >
            <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>Ubicación exacta</span>
          </button>

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
              defaultZoom={17}
              mapTypeId={isSatellite ? 'hybrid' : 'roadmap'}
              mapId="DEMO_MAP_ID"
              gestureHandling="greedy"
              disableDefaultUI={false}
              fullscreenControl={false}
              streetViewControl={true}
              mapTypeControl={true}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Point Marker at exact building */}
              <AdvancedMarker
                position={INTERQUIMICA_COORDINATES}
                title="InterQuímica Argentina S.A. - Independencia 28"
                onClick={() => setShowInfoWindow(!showInfoWindow)}
              >
                <Pin
                  background="#ef4444"
                  borderColor="#ffffff"
                  glyphColor="#ffffff"
                  scale={1.35}
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
                      {INTERQUIMICA_ADDRESS.street}, {INTERQUIMICA_ADDRESS.city},{' '}
                      {INTERQUIMICA_ADDRESS.province}.
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
                        M5501 · ISO 9001
                      </span>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* High-accuracy Google Maps Satellite / Roadmap Embed */
          <div className="w-full h-full relative bg-slate-950 flex flex-col">
            <iframe
              title="Ubicación InterQuímica Argentina - Independencia 28, Godoy Cruz, Mendoza"
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.05]"
            />
          </div>
        )}

        {/* Floating Location Card Overlay (Bottom Left on Desktop) */}
        {showCard && !compact && (
          <div className="hidden sm:flex absolute bottom-4 left-4 z-10 max-w-sm p-3.5 bg-slate-950/92 backdrop-blur-md border border-slate-800/90 rounded-xl shadow-2xl flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider font-display">
                  Planta Operativa Godoy Cruz
                </span>
              </div>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">
                Independencia 28
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
              <span className="font-mono text-slate-400">
                {INTERQUIMICA_COORDINATES.lat.toFixed(5)}° S,{' '}
                {Math.abs(INTERQUIMICA_COORDINATES.lng).toFixed(5)}° W
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-0.5 font-semibold"
              >
                <span>Abrir Maps</span>
                <Compass className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Reference Satellite Comparison Modal */}
      {showReferenceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-bold text-white">
                  Punto de Referencia Satelital: Independencia 28, Godoy Cruz
                </h3>
              </div>
              <button
                onClick={() => setShowReferenceModal(false)}
                className="p-1 text-slate-400 hover:text-white transition-colors rounded-lg bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex flex-col items-center gap-3">
              <img
                src="/assets/aistudio/image_3e253a15.png"
                alt="Ubicación exacta satelital en Independencia 28, Godoy Cruz"
                className="w-full max-h-[60vh] object-contain rounded-xl border border-slate-800"
              />
              <div className="w-full text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <span>
                  <strong>Coordenadas exactas fijadas:</strong> {INTERQUIMICA_COORDINATES.lat},{' '}
                  {INTERQUIMICA_COORDINATES.lng} (entre DHL depósito y PRIMUM SA)
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
