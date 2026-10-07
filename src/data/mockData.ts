import {
  Product,
  Industry,
  InteractiveScene,
  AcademyCourse,
  Certificate,
  TrainingLiveEvent,
} from '../types.ts';

// Image paths generated from prompt references (optimized lightweight WebP)
export const IMAGES = {
  banner1: '/src/assets/images/banner1.webp', // Frigorífico / Cold room
  banner2: '/src/assets/images/banner2.webp', // Bodega / Wine barrels
  banner3: '/src/assets/images/banner3.webp', // Olivícola / Olive oil bottling line
  banner4: '/src/assets/images/banner4.webp', // Línea de jugos / Juice bottling line
  banner5: '/src/assets/images/banner5.webp', // Operario espuma / Foam sanitizing
  banner6: '/src/assets/images/banner6.webp', // Cervecería / Brewery cellar
  heroBreweryCellar: '/src/assets/images/banner6.webp',
  operatorFoam: '/src/assets/images/banner5.webp',
  bottlingConveyor: '/src/assets/images/banner4.webp',
  frigorificoCold: '/src/assets/images/banner1.webp',
  oliveOilFacility: '/src/assets/images/banner3.webp',
  wineCellar: '/src/assets/images/banner2.webp',
};

export const PRODUCTS: Product[] = [
  {
    id: 'na45',
    name: 'Na45',
    code: 'IQA-NA45-PRO',
    category: 'alcalinos',
    categoryLabel: 'Alcalino',
    badge: 'ALCALINO',
    badgeColor: 'bg-blue-600',
    canisterColor: '#1d4ed8',
    title: 'Detergente alcalino concentrado para limpieza CIP',
    tagline: 'Máxima eficacia en remoción de residuos orgánicos y grasas',
    description:
      'Formulado para la remoción de residuos orgánicos, grasas, aceites y sedimentos en sistemas de limpieza CIP. Ideal para la industria alimentaria, bebidas, lácteos y más.',
    features: [
      'Alta alcalinidad formulada',
      'Alto poder desengrasante',
      'Libre de fosfatos',
      'Fácil enjuague y enjuagabilidad',
      'Uso en sistemas CIP automáticos',
    ],
    applications: [
      'Tanques y depósitos',
      'Cañerías y bombas',
      'Intercambiadores de calor',
      'Líneas de llenado',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,5%', temperature: '50 - 60 °C', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '1,5% - 2%', temperature: '60 - 70 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '2% - 3%', temperature: '70 - 80 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-NA45' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-NA45' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-NA45' },
    ],
    benefits: [
      'Reduce hasta un 35% los tiempos de recirculación CIP',
      'Evita la re-deposición de materia saponificada',
      'No genera espuma excesiva en conducciones de alta turbulencia',
      'Seguro sobre aceros inoxidables AISI 304 y 316',
    ],
    compatibility: [
      'Apto: Acero inoxidable (304, 316, 316L), Teflón, EPDM, Viton, Vidrio borosilicato',
      'No compatible: Aluminio no pasivado, zinc, cobre, galvanizados',
    ],
    technicalData: {
      pH: '13.5 ± 0.5 (puro)',
      density: '1.28 g/cm³ a 20°C',
      appearance: 'Líquido límpido ámbar claro',
      solubility: '100% miscible en agua a cualquier temperatura',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'k45',
    name: 'K45',
    code: 'IQA-K45-CHL',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Clorado',
    badge: 'ALCALINO CLORADO',
    badgeColor: 'bg-emerald-600',
    canisterColor: '#059669',
    title: 'Detergente alcalino clorado de alta alcalinidad',
    tagline: 'Desinfección y limpieza profunda con cloro activo estabilizado',
    description:
      'Soluciones para limpieza CIP, equipos, cañerías y fermentadores. Combina el poder saponificante de la soda cáustica con el poder blanqueador y desinfectante del hipoclorito estabilizado.',
    features: [
      'Cloro activo estabilizado (mín. 4.5% p/p)',
      'Excelente poder de remoción de biofilm',
      'Baja formación de espuma a 55°C',
      'Rápida acción bactericida y fungicida',
    ],
    applications: [
      'Circuitos de ordeñe y tinas queseras',
      'Fermentadores y tanques de cerveza',
      'Mesas de desposte y cintas de transporte',
      'Líneas de jugo y mosto',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,2%', temperature: '45 - 55 °C', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '1,5% - 2%', temperature: '50 - 60 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '2,5% - 3,5%', temperature: '55 - 65 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-K45' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-K45' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-K45' },
    ],
    benefits: [
      'Eliminación de manchas proteicas y taninos',
      'Desinfección de amplio espectro en un solo paso',
      'Fácil dosificación automática por conductividad',
    ],
    compatibility: [
      'Apto: Acero inoxidable AISI 304 / 316 (hasta 60°C), juntas EPDM',
      'Evitar: Bronce, cobre, aluminio, gomas naturales',
    ],
    technicalData: {
      pH: '13.0 ± 0.5',
      density: '1.22 g/cm³',
      appearance: 'Líquido amarillento característico a cloro',
      solubility: '100% soluble en agua',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'na75-plus',
    name: 'Na75 Plus',
    code: 'IQA-NA75P',
    category: 'alcalinos',
    categoryLabel: 'Alcalino',
    badge: 'ALCALINO',
    badgeColor: 'bg-indigo-600',
    canisterColor: '#4f46e5',
    title: 'Detergente alcalino líquido de alto rendimiento para CIP',
    tagline: 'Fórmula reforzada con agentes secuestrantes de dureza cálcica',
    description:
      'Detergente alcalino líquido formulado con potentes tensoactivos y quelantes de dureza que evitan incrustaciones salinas en aguas duras (> 400 ppm CaCO3).',
    features: [
      'Secuestrantes orgánicos biodegradables',
      'Optimizado para aguas duras de Mendoza y cuyo',
      'Previene precipitación de sales cálcicas',
      'Elevada conductividad estable',
    ],
    applications: [
      'Sistemas CIP con agua de pozo de alta dureza',
      'Hervidores y clarificadores cerveceros',
      'Pasteurizadores de leche y jugos',
      'Lavadoras automáticas de botellas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,5%', temperature: '60 - 70 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '2% - 2,5%', temperature: '70 - 75 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '3% - 4%', temperature: '75 - 85 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-NA75P' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-NA75P' },
      { size: '1000 kg', packaging: 'Contenedor IBC', code: 'IBC-NA75P' },
    ],
    benefits: [
      'Mantiene los serpentines limpios sin incrustación salina',
      'Disminuye la frecuencia de lavados ácidos de desincrustación',
      'Fórmula no espumante certificada para CIP',
    ],
    compatibility: [
      'Apto: Acero inoxidable, cerámicas, plásticos industriales',
      'Evitar: Metales no ferrosos blandos',
    ],
    technicalData: {
      pH: '13.8 ± 0.3',
      density: '1.34 g/cm³',
      appearance: 'Líquido denso ámbar translúcido',
      solubility: 'Totalmente miscible',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'acid',
    name: 'Acid',
    code: 'IQA-ACID-PRO',
    category: 'acidos',
    categoryLabel: 'Ácido Desincrustante',
    badge: 'ÁCIDO',
    badgeColor: 'bg-rose-600',
    canisterColor: '#e11d48',
    title: 'Detergente ácido para remoción de sarro e incrustaciones',
    tagline: 'Fórmula sinérgica fosfo-nítrica para pasivación y descalcificación',
    description:
      'Soluciones ácidas de alta concentración desarrolladas para disolver piedra de cerveza (beerstone), piedra de leche (milkstone), bitartratos enológicas e incrustaciones minerales inorgánicas.',
    features: [
      'Mezcla balanceada de ácidos inorgánicos',
      'Capacidad pasivante de superficies de acero inoxidable',
      'Excelente poder de penetración',
      'Libre de cloro y sulfúrico',
    ],
    applications: [
      'Desincrustación periódica de tanques de fermentación',
      'Eliminación de tártaro en piletas y barricas enológicas',
      'Intercambiadores de calor a placas',
      'Centrífugas y clarificadores',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,8% - 1%', temperature: 'Ambiente a 45 °C', contactTime: '10 min' },
      { dirtLevel: 'Media', concentration: '1,5% - 2%', temperature: '50 - 65 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '2,5% - 4%', temperature: '60 - 70 °C', contactTime: '25 - 35 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-ACID' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-ACID' },
      { size: '1000 kg', packaging: 'Contenedor IBC', code: 'IBC-ACID' },
    ],
    benefits: [
      'Restaura el brillo original del acero inoxidable',
      'Disolución inmediata sin vapores molestos en dilución',
      'No ataca juntas ni soldaduras homologadas',
    ],
    compatibility: [
      'Apto: Acero inoxidable 304 y 316, vidrio, PTFE, PVDF',
      'No compatible: Cemento sin recubrir, acero al carbono, mármol, zinc',
    ],
    technicalData: {
      pH: '1.2 ± 0.3 (sol. 1%)',
      density: '1.26 g/cm³',
      appearance: 'Líquido incoloro a ligeramente rosado',
      solubility: 'Instantánea en agua fría o caliente',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'foam-plus',
    name: 'Foam Plus',
    code: 'IQA-FOAM-PL',
    category: 'espumigenos',
    categoryLabel: 'Espumígeno Alcalino',
    badge: 'ESPUMÍGENO',
    badgeColor: 'bg-amber-500',
    canisterColor: '#d97706',
    title: 'Detergente espumígeno para limpieza de superficies exteriores',
    tagline: 'Espuma densa y persistente de máxima adherencia vertical',
    description:
      'Detergente espumante que asegura un contacto prolongado sobre paredes verticales, cintas transportadoras, exteriores de tanques, pisos y salas de desposte o faena.',
    features: [
      'Espuma densa de alta permanencia (hasta 30 minutos)',
      'Penetración en recovecos de difícil acceso mecánico',
      'Disuelve grasas animales y aceites vegetales fríos',
      'Fácil enjuague con agua a media presión',
    ],
    applications: [
      'Paredes y techos de salas de faena y desposte',
      'Exterior de tanques y fermentadores',
      'Cintas transportadoras y tolvas',
      'Pisos industriales y canaletas de desagüe',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2% - 3%', temperature: 'Ambiente - 45 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '3% - 5%', temperature: 'Ambiente - 50 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '5% - 8%', temperature: 'Ambiente - 55 °C', contactTime: '25 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-FOAM' },
      { size: '200 kg', packaging: 'Tambor sellado', code: 'T200-FOAM' },
    ],
    benefits: [
      'Reduce hasta un 40% el consumo de agua por lavado manual',
      'No chorrea inmediatamente de superficies verticales',
      'Compatible con lanzas de espuma y carritos espumadores neumáticos',
    ],
    compatibility: [
      'Apto: Acero inoxidable, resinas epoxi, azulejos sanitarios, PVC',
      'Evitar: Policarbonato sensible a la alcalinidad',
    ],
    technicalData: {
      pH: '12.8 ± 0.5',
      density: '1.18 g/cm³',
      appearance: 'Líquido viscoso ambarino',
      solubility: 'Completa',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'oxi-t',
    name: 'OXI T',
    code: 'IQA-OXI-T',
    category: 'desinfectantes',
    categoryLabel: 'Sanitizante Oxidante',
    badge: 'OXIDANTE',
    badgeColor: 'bg-cyan-600',
    canisterColor: '#0891b2',
    title: 'Limpiador oxidante de alto desempeño para CIP',
    tagline: 'Ácido peracético estabilizado sin enjuague para contacto con alimentos',
    description:
      'Sanitizante líquido a base de ácido peracético y peróxido de hidrógeno en equilibrio químico. Acción microbicida de amplio espectro rápida a bajas temperaturas sin generar residuos tóxicos.',
    features: [
      'Efectivo contra esporas, virus, bacterias y levaduras',
      'No genera subproductos clorados ni organoclorados',
      'Eficaz en agua fría (reduce consumo térmico)',
      'Se descompone en agua, oxígeno y ácido acético',
    ],
    applications: [
      'Sanitización final de líneas de embotellado y llenado',
      'Desinfección de tanques de vino y barricas',
      'Líneas asépticas de jugo y leche',
      'Sanitización de circuitos de recirculación CIP',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,1% - 0,2%', temperature: '10 - 25 °C', contactTime: '5 min' },
      { dirtLevel: 'Media', concentration: '0,2% - 0,3%', temperature: '15 - 30 °C', contactTime: '10 min' },
      { dirtLevel: 'Pesada', concentration: '0,4% - 0,5%', temperature: '20 - 40 °C', contactTime: '15 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón ventilado especial HDPE', code: 'B20-OXIT' },
      { size: '200 kg', packaging: 'Tambor con válvula de despresurización', code: 'T200-OXIT' },
    ],
    benefits: [
      'No requiere enjuague a concentraciones aprobadas SENASA',
      'Excelente poder de penetración en rugosidades microscópicas',
      'Compatible con dióxido de carbono en bodegas y cervecerías',
    ],
    compatibility: [
      'Apto: Acero inoxidable 316 / 304, PTFE, PVDF, Vidrio',
      'Evitar: Cobre, hierro negro, gomas naturales vulnerables',
    ],
    technicalData: {
      pH: '2.5 ± 0.5 (sol. 1%)',
      density: '1.14 g/cm³',
      appearance: 'Líquido incoloro límpido con olor punzante característico',
      solubility: '100% soluble',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'bio-det-duo-plus',
    name: 'BIO DET DÚO PLUS',
    code: 'IQA-BD-DUO',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido',
    badge: 'ALCALINO SÓLIDO',
    badgeColor: 'bg-blue-700',
    canisterColor: '#1e40af',
    title: 'Limpiador y desinfectante alcalino sólido concentrado',
    tagline: 'Fórmula en polvo granular de alto rendimiento y fácil disolución',
    description:
      'Producto alcalino clorado de alto rendimiento. Remueve suciedad orgánica, grasas y proteínas. Ideal para lavado de tanques, cañerías y sistemas CIP en la industria alimenticia.',
    features: [
      'Formato sólido compacto (ahorra hasta 60% en flete y logística)',
      'Rápida disolución sin grumos en agua templada',
      'Agentes quelantes y secuestrantes de calcio y magnesio',
      'Poder bactericida de choque',
    ],
    applications: [
      'Lavado de tanques de fermentación y maceradores',
      'Limpieza de cañerías en plantas lecheras',
      'Desengrase por inmersión de piezas y válvulas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,8% - 1%', temperature: '50 - 65 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '1,2% - 1,8%', temperature: '60 - 70 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '2% - 3%', temperature: '65 - 80 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa triple pliego con liner estanco de PE', code: 'BOL25-BDDUO' },
      { size: '500 kg', packaging: 'Palletizado flejado y termocontraíble', code: 'PAL-BDDUO' },
    ],
    benefits: [
      'Menor peso y volumen en almacenamiento en bodega',
      'Disolución homogénea y controlada',
      'No genera efluentes clorados desbalanceados',
    ],
    compatibility: [
      'Apto: Acero inoxidable, polietileno de alta densidad, juntas estándar',
      'Evitar: Metales no ferrosos',
    ],
    technicalData: {
      pH: '12.9 (sol. 1%)',
      density: '0.98 g/cm³ (aparente)',
      appearance: 'Polvo granular blanco homogéneo',
      solubility: 'Alta solubilidad en agua a partir de 30°C',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'bio-det-k75-plus',
    name: 'BIO DET K 75 PLUS',
    code: 'IQA-BD-K75',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido Clorado',
    badge: 'ALCALINO SÓLIDO',
    badgeColor: 'bg-emerald-700',
    canisterColor: '#047857',
    title: 'Limpiador/desinfectante alcalino sólido clorado',
    tagline: 'Formulación alcalina clorada con secuestrantes y dispersantes de sarro',
    description:
      'Formulación alcalina clorada con secuestrantes y dispersantes. Alta eficacia frente a suciedad persistente. Apto para todo tipo de superficies y sistemas CIP.',
    features: [
      'Cloro activo en polvo micro-encapsulado de liberación sostenida',
      'Acción bactericida y virucida certificada',
      'Remueve velos biológicos y depósitos albuminosos',
    ],
    applications: [
      'Pasteurizadores y placas lecheras',
      'Centrífugas desnatadoras',
      'Líneas de envasado aséptico',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1%', temperature: '50 - 60 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '1,5%', temperature: '55 - 65 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '2,5%', temperature: '60 - 70 °C', contactTime: '25 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa kraft impermeable con sellado térmico', code: 'BOL25-BDK75' },
    ],
    benefits: [
      'Mayor estabilidad del cloro en almacenamiento que líquidos tradicionales',
      'Eficacia comprovada frente a Salmonella, Listeria y E. coli',
    ],
    compatibility: [
      'Apto: Aceros inoxidables 304/316 a temperaturas reglamentarias',
      'Evitar: Aleaciones de cobre y cinc',
    ],
    technicalData: {
      pH: '12.5 (sol. 1%)',
      density: '1.02 g/cm³',
      appearance: 'Granulado blanco con pintas celestes',
      solubility: 'Completa',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'bio-det-na75-plus',
    name: 'BIO DET Na 75 PLUS',
    code: 'IQA-BD-NA75',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido No Clorado',
    badge: 'ALCALINO SÓLIDO',
    badgeColor: 'bg-sky-600',
    canisterColor: '#0284c7',
    title: 'Limpiador alcalino no clorado de alta concentración',
    tagline: 'Ideal para industrias con restricciones de halógenos y membranas',
    description:
      'Producto alcalino no clorado. Ideal para la limpieza de equipos y superficies en la industria alimenticia, asegurando máxima remoción de residuos orgánicos y grasas sin riesgo de corrosión por cloruros.',
    features: [
      '100% libre de cloro y cloruros',
      'Seguro para membranas de ósmosis inversa y ultrafiltración compatibles con pH alcalino',
      'Secuestrantes amigables con el medio ambiente',
    ],
    applications: [
      'Filtros tangenciales y membranas de filtración',
      'Tanques de guarda y maduración de bebidas',
      'Circuitos con efluentes biológicos sensibles a cloro',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,2%', temperature: '50 - 60 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '1,5% - 2%', temperature: '60 - 75 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '2,5% - 3,5%', temperature: '70 - 85 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa hermética de 25 kg', code: 'BOL25-BDNA75' },
    ],
    benefits: [
      'No genera clorofenoles ni olores indeseados en la industria vitivinícola',
      'Prolonga la vida útil de los equipos de acero inoxidable',
    ],
    compatibility: [
      'Apto: Acero inoxidable, membranas poliméricas resistentes a álcalis',
      'Evitar: Aluminio y metales blandos',
    ],
    technicalData: {
      pH: '13.1 (sol. 1%)',
      density: '0.95 g/cm³',
      appearance: 'Polvo blanco fino de alta pureza',
      solubility: 'Rápida solubilidad',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'ac32',
    name: 'AC32',
    code: 'IQA-AC32',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Multifunción',
    badge: 'ALCALINO',
    badgeColor: 'bg-blue-600',
    canisterColor: '#2563eb',
    title: 'Detergente alcalino para limpieza de superficies y equipos',
    tagline: 'Versatilidad y penetración para limpieza manual y por inmersión',
    description:
      'Detergente alcalino formulado con agentes humectantes para limpieza de superficies, transportadores y tanques abiertos. Remueve películas orgánicas rebeldes.',
    features: [
      'Humectación rápida de superficies',
      'Fácil dosificación manual o por dilución automática',
      'Excelente poder desengrasante para grasas de origen vegetal y animal',
    ],
    applications: ['Mesas de trabajo', 'Tinas de lavado', 'Canaletas', 'Cajas plásticas'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 2%', temperature: '30 - 50 °C', contactTime: '10 min' },
      { dirtLevel: 'Media', concentration: '2% - 3%', temperature: '40 - 60 °C', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '3% - 5%', temperature: '50 - 70 °C', contactTime: '20 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico HDPE', code: 'B20-AC32' },
      { size: '200 kg', packaging: 'Tambor 200 kg', code: 'T200-AC32' },
    ],
    benefits: ['Rápido desprendimiento de sólidos', 'Apto para todo operario con EPP estándar'],
    compatibility: ['Acero inoxidable, azulejos, pisos epoxi'],
    technicalData: {
      pH: '12.4 ± 0.3',
      density: '1.16 g/cm³',
      appearance: 'Líquido cristalino',
      solubility: 'Total',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'acid-c30',
    name: 'ACID C30',
    code: 'IQA-ACID-C30',
    category: 'acidos',
    categoryLabel: 'Ácido Concentrado',
    badge: 'ÁCIDO',
    badgeColor: 'bg-red-600',
    canisterColor: '#dc2626',
    title: 'Detergente ácido concentrado para remoción de sarro',
    tagline: 'Disuelve incrustaciones calcáreas persistentes en hervidores y piletas',
    description:
      'Formulado para remover suciedad mineral severa y sarro en calderas, piletas de fermentación, tanques de acero y sistemas CIP de alta exigencia.',
    features: [
      'Acción rápida contra sales de calcio, magnesio y hierro',
      'Inhibidor de corrosión incorporado',
      'No genera vapores asfixiantes',
    ],
    applications: ['Hervidores cerveceros', 'Piletas vinarias', 'Pasterizadores de placas', 'Cañerías con sarro'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,5%', temperature: '50 - 65 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '2% - 3%', temperature: '60 - 75 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '3% - 5%', temperature: '65 - 80 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico HDPE', code: 'B20-ACIDC30' },
      { size: '200 kg', packaging: 'Tambor 200 kg', code: 'T200-ACIDC30' },
    ],
    benefits: ['Restaura el coeficiente de transferencia térmica de intercambiadores'],
    compatibility: ['Acero inoxidable 304/316'],
    technicalData: {
      pH: '1.0 ± 0.2',
      density: '1.30 g/cm³',
      appearance: 'Líquido translúcido rojizo',
      solubility: 'Instantánea',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'sanitex-forte',
    name: 'Sanitex Forte',
    code: 'IQA-SAN-FORTE',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Amplio Espectro',
    badge: 'DESINFECTANTE',
    badgeColor: 'bg-teal-600',
    canisterColor: '#0d9488',
    title: 'Desinfectante catiónico de 5ta generación para superficies',
    tagline: 'Amplo espectro bactericida con efecto residual protector',
    description:
      'Desinfectante a base de amonios cuaternarios de 5ta generación con alta tolerancia a aguas duras y restos de materia orgánica. Deja una película residual biocida en salas blancas.',
    features: [
      'Amplio espectro (Gram+, Gram-, levaduras y hongos)',
      'Efecto residual protector de hasta 48 horas',
      'No es corrosivo sobre metales ni deteriora plásticos',
    ],
    applications: ['Paredes de cámaras de frío', 'Pediluvios sanitarios', 'Cintas de transporte', 'Superficies de empaque'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,2% - 0,5%', temperature: 'Ambiente', contactTime: '10 min' },
      { dirtLevel: 'Media', concentration: '0,5% - 1%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '1% - 2%', temperature: 'Ambiente', contactTime: '20 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico HDPE', code: 'B20-SANFORTE' },
    ],
    benefits: ['No mancha, no corroe, no irrita a dosis de uso'],
    compatibility: ['Apto para todo tipo de metales, gomas y plásticos'],
    technicalData: {
      pH: '7.5 ± 0.5',
      density: '1.01 g/cm³',
      appearance: 'Líquido incoloro aromático suave',
      solubility: '100%',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'bodegas',
    name: 'Vitivinícola / Bodegas',
    shortName: 'Bodegas',
    icon: 'Wine',
    heroImage: IMAGES.banner2,
    description:
      'Productos específicos para la limpieza y desinfección de bodegas, tanques, cañerías y líneas de fraccionamiento.',
    fullDescription:
      'Desarrollamos soluciones químicas y sistemas de limpieza adaptados a cada etapa del proceso enológico, garantizando inocuidad, remoción de bitartratos, control de Brettanomyces y cuidado de las características organolépticas del vino.',
    areas: [
      {
        id: 'tanques-inox',
        name: 'Tanques de acero inoxidable',
        icon: 'Cylinder',
        description: 'Limpieza CIP y pasivación para remover incrustaciones, sarro y residuos orgánicos.',
        details: 'Previene la corrosión y mantiene la calidad del vino protegiendo el pulido sanitario interior.',
        suggestedProductIds: ['na45', 'acid', 'oxi-t'],
      },
      {
        id: 'barricas',
        name: 'Barricas de roble',
        icon: 'Barrel',
        description: 'Productos específicos para la limpieza interna y externa de barricas de roble.',
        details: 'Elimina velos biológicos, residuos de vino, tartratos y previene la proliferación de Brettanomyces sin alterar los tostados de la madera.',
        suggestedProductIds: ['oxi-t', 'bio-det-na75-plus'],
      },
      {
        id: 'linea-fraccionamiento',
        name: 'Línea de fraccionamiento',
        icon: 'Layers',
        description: 'Detergentes y sanitizantes para equipos de llenado, cañerías, tanques pulmón y circuitos.',
        details: 'Garantiza inocuidad microbiológica y el mejor desempeño en ritmos continuos de producción.',
        suggestedProductIds: ['na45', 'oxi-t'],
      },
      {
        id: 'filtros-tangenciales',
        name: 'Filtros tangenciales',
        icon: 'Cpu',
        description: 'Químicos de limpieza especializados para sistemas de micro y ultrafiltración.',
        details: 'Aseguran mayor vida útil de membranas cerámicas y poliméricas manteniendo el caudal de filtrado sin taponamiento.',
        suggestedProductIds: ['bio-det-na75-plus', 'acid'],
      },
      {
        id: 'embotellado',
        name: 'Embotellado y líneas de tapado',
        icon: 'Bottle',
        description: 'Higiene y desinfección de líneas de embotellado, cintas transportadoras y superficies.',
        details: 'Seguridad microbiológica y trazabilidad alimentaria para evitar contaminación cruzada previa al tapado.',
        suggestedProductIds: ['sanitex-forte', 'foam-plus'],
      },
    ],
  },
  {
    id: 'cervecerias',
    name: 'Cervecerías y destilerías',
    shortName: 'Cervecerías',
    icon: 'Beer',
    heroImage: IMAGES.heroBreweryCellar,
    description:
      'Soluciones para la limpieza de equipos, tanques, líneas y sistemas CIP en la industria cervecera y destilerías.',
    fullDescription:
      'Fórmulas especializadas para remover la piedra de cerveza (oxalato cálcico), lúpulo quemado, proteínas y levaduras incrustadas en tanques de fermentación, maduración y líneas de barriles.',
    areas: [
      {
        id: 'sala-coccion',
        name: 'Sala de cocción (Brewhouse)',
        icon: 'Flame',
        description: 'Limpieza alcalina de hervidores, maceradores y tanques Whirlpool.',
        details: 'Disuelve proteínas caramelizadas, azúcares quemados y residuos de malta y lúpulo en hervidores a alta temperatura.',
        suggestedProductIds: ['na45', 'acid-c30'],
      },
      {
        id: 'fermentadores',
        name: 'Fermentadores y tanques cónicos',
        icon: 'Cylinder',
        description: 'Ciclos CIP automáticos para remoción de anillos de levadura (krausen) y lúpulo.',
        details: 'Desinfección oxidante en frío con ácido peracético que no reacciona negativamente con el CO2 remanente.',
        suggestedProductIds: ['na45', 'oxi-t', 'k45'],
      },
      {
        id: 'intercambiadores',
        name: 'Intercambiadores de calor a placas',
        icon: 'Workflow',
        description: 'Recirculación ácida y alcalina en contracorriente para recuperar transferencia térmica.',
        details: 'Evita incrustaciones minerales y taponamiento entre placas corrugadas de acero inoxidable.',
        suggestedProductIds: ['acid-c30', 'na75-plus'],
      },
      {
        id: 'linea-envasado-barriles',
        name: 'Línea de envasado y lavadoras de barriles',
        icon: 'Package',
        description: 'Limpieza por ciclos de inyección de cabezales para barriles y latas.',
        details: 'Sanitización sin enjuague para garantizar estabilidad biológica y preservación de espuma y aroma.',
        suggestedProductIds: ['oxi-t', 'na45'],
      },
    ],
  },
  {
    id: 'frigorificos',
    name: 'Frigorífica y faena',
    shortName: 'Frigoríficos',
    icon: 'Snowflake',
    heroImage: IMAGES.frigorificoCold,
    description:
      'Limpieza y desinfección de instalaciones, equipos y superficies en plantas frigoríficas y salas de procesamiento.',
    fullDescription:
      'Protocolos certificados para remoción de grasa pesada, sangre, proteínas y desinfección de salas de faena, desposte, cámaras de maduración y transportadores bajo normas SENASA.',
    areas: [
      {
        id: 'sala-desposte',
        name: 'Sala de desposte y mesas de corte',
        icon: 'Scissors',
        description: 'Limpieza alcalina clorada espumante para remover materia orgánica y grasas de alta viscosidad.',
        details: 'Control estricto de carga microbiana y prevención de biofilm en mesas de corte y transportadores.',
        suggestedProductIds: ['foam-plus', 'k45', 'sanitex-forte'],
      },
      {
        id: 'camaras-frigorificas',
        name: 'Cámaras frigoríficas y antecámaras',
        icon: 'Snowflake',
        description: 'Desinfección de evaporadores, paredes de paneles aislantes y puertas herméticas.',
        details: 'Control ambiental de mohos psicrófilos y hongos sin condensaciones indeseadas.',
        suggestedProductIds: ['sanitex-forte', 'oxi-t'],
      },
      {
        id: 'pisos-superficies',
        name: 'Pisos y canaletas de desagüe',
        icon: 'Grid',
        description: 'Espuma densa de alto poder desengrasante para canaletas y pisos con grasa animal.',
        details: 'Evita deslizamientos, olores y proliferación bacteriana en rejillas de descarga.',
        suggestedProductIds: ['foam-plus', 'ac32'],
      },
      {
        id: 'cintas-transportadoras',
        name: 'Cintas transportadoras y gancheras aéreas',
        icon: 'RotateCw',
        description: 'Lavado continuo de bandas sanitarias de poliuretano y gancheras de acero.',
        details: 'Desengrase rápido sin atacar lubricantes sanitarios de norias.',
        suggestedProductIds: ['k45', 'oxi-t'],
      },
    ],
  },
  {
    id: 'olivicola',
    name: 'Olivícola y aceiteras',
    shortName: 'Olivícola',
    icon: 'Sparkles',
    heroImage: IMAGES.oliveOilFacility,
    description:
      'Desinfectantes y limpiadores diseñados para almazaras y plantas procesadoras de aceitunas y aceites de oliva.',
    fullDescription:
      'Soluciones formuladas para remover depósitos de pulpa, grasas insaturadas, hojas y películas de aceite de oliva en molinos de martillo, batidoras, decánteres centrífugos y tanques de decantación.',
    areas: [
      {
        id: 'lavado-seleccion',
        name: 'Lavado y selección de aceitunas',
        icon: 'Droplet',
        description: 'Limpieza alcalina de tolvas, cintas de inspección y circuitos de agua de lavado.',
        details: 'Elimina residuos de tierra, hojas y materia orgánica antes del ingreso al molino.',
        suggestedProductIds: ['ac32', 'sanitex-forte'],
      },
      {
        id: 'molinos-batidoras',
        name: 'Molinos y termobatidoras',
        icon: 'RotateCw',
        description: 'Disolución rápida de pastas de aceituna saponificadas en paredes calefaccionadas.',
        details: 'Evita fermentaciones anaeróbicas que alteran la acidez y aromas del aceite virgen extra.',
        suggestedProductIds: ['na45', 'oxi-t'],
      },
      {
        id: 'decanter-centrifugas',
        name: 'Decantación y centrífugas verticales',
        icon: 'Activity',
        description: 'Desengrase y descalcificación de tambores centrífugos de alta velocidad.',
        details: 'Mantiene equilibrado el rotor y previene depósitos que afectan el rendimiento de extracción.',
        suggestedProductIds: ['na75-plus', 'acid'],
      },
      {
        id: 'linea-envasado-aceite',
        name: 'Línea de envasado de botellas y latas',
        icon: 'Package',
        description: 'Limpieza de cabezales de llenado por gravedad o vacío sin dejar velos oleosos.',
        details: 'Asegura botellas libres de trazas exteriores de aceite y listas para etiquetado inmediato.',
        suggestedProductIds: ['ac32', 'oxi-t'],
      },
    ],
  },
  {
    id: 'lactea',
    name: 'Láctea y derivados',
    shortName: 'Láctea',
    icon: 'Milk',
    heroImage: IMAGES.banner5,
    description:
      'Higiene y desinfección para procesos lácteos. Productos seguros que cumplen con normativas alimentarias y SENASA.',
    fullDescription:
      'Tratamiento térmico de leche, suero y quesería. Eliminación garantizada de piedra de leche, proteínas cuajadas y biopelículas de termófilos en pasterizadores y evaporadores.',
    areas: [
      {
        id: 'pasteurizadores-htst',
        name: 'Pasteurizadores de placas HTST',
        icon: 'Workflow',
        description: 'Ciclos automáticos alternados ácido-alcalino para intercambio térmico óptimo.',
        details: 'Disuelve proteínas coaguladas y sales de fosfato cálcico acumuladas en regeneradores.',
        suggestedProductIds: ['na75-plus', 'acid-c30'],
      },
      {
        id: 'tinas-queseras',
        name: 'Tinas queseras y prensas',
        icon: 'Layers',
        description: 'Limpieza suave sin residuos clorados para no inhibir fermentos lácticos.',
        details: 'Desinfección de lienzos, moldes y prensas de acero.',
        suggestedProductIds: ['bio-det-na75-plus', 'oxi-t'],
      },
    ],
  },
  {
    id: 'alimentos-bebidas',
    name: 'Industria alimentaria y bebidas',
    shortName: 'Alimentos y Bebidas',
    icon: 'Apple',
    heroImage: IMAGES.banner4,
    description:
      'Amplia gama de productos para garantizar la inocuidad y limpieza en la industria alimenticia general.',
    fullDescription:
      'Formulaciones integrales para galleterías, jugos cítricos, conservas, panificados y salsas.',
    areas: [
      {
        id: 'llenadoras-rotativas',
        name: 'Llenadoras rotativas y tapadoras',
        icon: 'RotateCw',
        description: 'Sanitización química continua de picos dosificadores de jugos y bebidas.',
        details: 'Elimina azúcares residuales y previene la colonización de mohos y levaduras.',
        suggestedProductIds: ['oxi-t', 'na45'],
      },
    ],
  },
];

export const INTERACTIVE_SCENES: InteractiveScene[] = [
  {
    id: 'cervecerias',
    name: 'Cervecerías y destilerías',
    title: 'Cervecerías y destilerías',
    subtitle: 'Producción de cervezas, spirits y bebidas.',
    bgImage: IMAGES.heroBreweryCellar,
    hotspots: [
      {
        id: 'sala-coccion',
        name: 'Sala de cocción',
        x: 29,
        y: 38,
        code: 'SC-01',
        iconName: 'Flame',
        commonProblem:
          'Acumulación de sarro y depósitos minerales en piletas, hervidores y cañerías, que afectan la transferencia de calor y la calidad del producto terminado.',
        recommendedSolution:
          'Limpieza alcalina formulada para remover residuos orgánicos e inorgánicos, sarro y biofilm. Ideal para CIP y limpieza manual periódica.',
        suggestedProductIds: ['na45', 'acid-c30', 'oxi-t'],
        downloads: [
          { title: 'Protocolo de limpieza CIP – Sala de cocción', type: 'protocol', filename: 'Protocolo_CIP_Coccion.pdf' },
          { title: 'Ficha técnica del proceso de macerado y hervido', type: 'techsheet', filename: 'Ficha_Tecnica_Coccion.pdf' },
        ],
      },
      {
        id: 'intercambiador',
        name: 'Intercambiador de calor',
        x: 26,
        y: 52,
        code: 'HX-04',
        iconName: 'Workflow',
        commonProblem:
          'Pérdida de eficiencia en el enfriamiento del mosto debido a incrustaciones de proteínas coaguladas y sales en placas de acero inoxidable.',
        recommendedSolution:
          'Lavado alcalino en recirculación a 75°C con Na45 o Na75 Plus seguido de neutralización y desincrustación ácida con Acid C30.',
        suggestedProductIds: ['na75-plus', 'acid-c30'],
        downloads: [
          { title: 'Protocolo de lavado de placas en contracorriente', type: 'protocol', filename: 'Protocolo_Placas.pdf' },
        ],
      },
      {
        id: 'fermentadores',
        name: 'Fermentadores cilíndrico-cónicos',
        x: 48,
        y: 37,
        code: 'FV-03',
        iconName: 'Cylinder',
        commonProblem:
          'Presencia de anillo de krausen seco en la cúpula, biofilms microbianos y riesgo de contaminación cruzada por levaduras silvestres.',
        recommendedSolution:
          'Ciclo CIP de 3 pasos: enjuague tibio, recirculación alcalina con Na45 al 2%, y desinfección en frío con sanitizante oxidante OXI T al 0.2% sin enjuague.',
        suggestedProductIds: ['na45', 'oxi-t'],
        downloads: [
          { title: 'Procedimiento operativo estándar CIP Tanques', type: 'protocol', filename: 'POE_CIP_Fermentadores.pdf' },
        ],
      },
      {
        id: 'tanques-guarda',
        name: 'Tanques de guarda (Brite Tanks)',
        x: 67,
        y: 37,
        code: 'BBT-02',
        iconName: 'Cylinder',
        commonProblem:
          'Dificultad para desinfectar bajo atmósfera de CO2 sin despresurizar el tanque.',
        recommendedSolution:
          'Uso de ácido peracético OXI T que no degrada el dióxido de carbono ni pierde efectividad en tanques presurizados.',
        suggestedProductIds: ['oxi-t'],
        downloads: [
          { title: 'Sanitización bajo atmósfera de CO2', type: 'techsheet', filename: 'Sanitizacion_CO2.pdf' },
        ],
      },
      {
        id: 'cip-canerias',
        name: 'CIP y cañerías',
        x: 44,
        y: 57,
        code: 'CIP-LOOP',
        iconName: 'Layers',
        commonProblem:
          'Zonas muertas o codos con turbulencia reducida donde proliferan bacterias lácticas (Lactobacillus/Pediococcus).',
        recommendedSolution:
          'Limpieza a velocidad mínima de 1.5 m/s con detergente alcalino de baja espuma Na45 y control de conductividad.',
        suggestedProductIds: ['na45', 'acid'],
        downloads: [
          { title: 'Cálculo de flujo turbulento en conducciones sanitarias', type: 'techsheet', filename: 'Calculo_Flujo_CIP.pdf' },
        ],
      },
      {
        id: 'linea-envasado',
        name: 'Línea de envasado',
        x: 69,
        y: 52,
        code: 'PKG-01',
        iconName: 'Bottle',
        commonProblem:
          'Carga microbiana en cabezales de llenado y derrames de cerveza en cintas transportadoras generando olores.',
        recommendedSolution:
          'Espumado exterior diario con Foam Plus y desinfección continua de boquillas dosificadoras con OXI T.',
        suggestedProductIds: ['foam-plus', 'oxi-t'],
        downloads: [
          { title: 'Plan de higiene para embotellado y enlatado', type: 'protocol', filename: 'Higiene_Envasado.pdf' },
        ],
      },
    ],
  },
  {
    id: 'frigorificos',
    name: 'Frigoríficos',
    title: 'Frigoríficos',
    subtitle: 'Procesamiento y conservación de carnes.',
    bgImage: IMAGES.frigorificoCold,
    hotspots: [
      {
        id: 'recepcion-carne',
        name: 'Recepción de carne y playa',
        x: 13,
        y: 43,
        code: 'RC-01',
        iconName: 'Truck',
        commonProblem:
          'Alta carga de suciedad exterior, barro, grasa en gancheras y contaminación inicial.',
        recommendedSolution:
          'Desengrasante alcalino de choque AC32 aplicado por rociado y enjuague a alta presión.',
        suggestedProductIds: ['ac32', 'foam-plus'],
        downloads: [
          { title: 'Protocolo de recepción sanitaria', type: 'protocol', filename: 'Protocolo_Recepcion.pdf' },
        ],
      },
      {
        id: 'camaras-frigorificas',
        name: 'Cámaras frigoríficas',
        x: 27,
        y: 50,
        code: 'CF-02',
        iconName: 'Snowflake',
        commonProblem:
          'Desarrollo de hongos psicrófilos en paredes y evaporadores a bajas temperaturas continuas.',
        recommendedSolution:
          'Nebulización y aplicación con Sanitex Forte o OXI T formulados para actuar en frío.',
        suggestedProductIds: ['sanitex-forte', 'oxi-t'],
        downloads: [
          { title: 'Control fúngico en cámaras de frío', type: 'techsheet', filename: 'Control_Fungico.pdf' },
        ],
      },
      {
        id: 'sala-desposte',
        name: 'Sala de desposte',
        x: 43,
        y: 30,
        code: 'SD-01',
        iconName: 'Scissors',
        commonProblem:
          'Acumulación de materia orgánica, grasas y proteínas que favorecen la proliferación bacteriana, generan olores desagradables y riesgo de contaminación cruzada.',
        recommendedSolution:
          'Limpieza alcalina y desinfección de alto desempeño para eliminar residuos, controlar la carga microbiana y asegurar la inocuidad en áreas de contacto con la carne.',
        suggestedProductIds: ['na45', 'sanitex-forte', 'oxi-t'],
        downloads: [
          { title: 'Protocolo de limpieza – Sala de desposte', type: 'protocol', filename: 'Protocolo_Desposte.pdf' },
          { title: 'Ficha técnica del proceso cárnico', type: 'techsheet', filename: 'Ficha_Tecnica_Desposte.pdf' },
        ],
      },
      {
        id: 'lineas-proceso',
        name: 'Líneas de proceso y sierras',
        x: 61,
        y: 37,
        code: 'LP-03',
        iconName: 'Activity',
        commonProblem:
          'Grasa adherida en guías mecánicas y partes móviles que reduce la vida útil de equipos.',
        recommendedSolution:
          'Espuma clorada densa Foam Plus que penetra sin necesidad de fricción manual excesiva.',
        suggestedProductIds: ['foam-plus', 'k45'],
        downloads: [
          { title: 'Limpieza de sierras y despostadoras mecánicas', type: 'protocol', filename: 'Limpieza_Equipos_Corte.pdf' },
        ],
      },
      {
        id: 'cintas-transportadoras',
        name: 'Cintas transportadoras',
        x: 58,
        y: 52,
        code: 'CT-05',
        iconName: 'Layers',
        commonProblem:
          'Manchas de sangre y acumulación de grasa entre eslabones plásticos modulares.',
        recommendedSolution:
          'Detergente alcalino clorado K45 por recirculación o túnel de lavado con enjuague posterior.',
        suggestedProductIds: ['k45', 'sanitex-forte'],
        downloads: [
          { title: 'Higienización de bandas modulares', type: 'protocol', filename: 'Higiene_Bandas.pdf' },
        ],
      },
      {
        id: 'pisos-superficies',
        name: 'Pisos y canaletas',
        x: 37,
        y: 58,
        code: 'PS-04',
        iconName: 'Grid',
        commonProblem:
          'Superficies resbaladizas por sebo animal y estancamiento de efluentes grasos en rejillas.',
        recommendedSolution:
          'Tratamiento alcalino de arrastre con Bio Det Dúo Plus y posterior espumado con Foam Plus.',
        suggestedProductIds: ['bio-det-duo-plus', 'foam-plus'],
        downloads: [
          { title: 'Procedimiento de pisos y rejillas de faena', type: 'protocol', filename: 'Pisos_Frigorifico.pdf' },
        ],
      },
    ],
  },
  {
    id: 'olivicola',
    name: 'Olivícola',
    title: 'Olivícola',
    subtitle: 'Proceso de extracción y elaboración de aceite de oliva.',
    bgImage: IMAGES.oliveOilFacility,
    hotspots: [
      {
        id: 'recepcion-aceitunas',
        name: 'Recepción de aceitunas',
        x: 13,
        y: 47,
        code: 'RA-01',
        iconName: 'Truck',
        commonProblem:
          'Restos de barro, hojas trituradas y polvo acumulado en tolvas receptoras.',
        recommendedSolution:
          'Lavado con solución biodegradable AC32 que desprende películas terrosas.',
        suggestedProductIds: ['ac32'],
        downloads: [
          { title: 'Protocolo de recepción almazara', type: 'protocol', filename: 'Recepcion_Almazara.pdf' },
        ],
      },
      {
        id: 'lavado-seleccion',
        name: 'Lavado y selección',
        x: 26,
        y: 34,
        code: 'LS-02',
        iconName: 'Droplet',
        commonProblem:
          'Acumulación de suciedad orgánica (hojas, tierra, pulpa) en cintas, tanques y canales. Biofilm y olores en circuitos de agua que pueden afectar la calidad del aceite.',
        recommendedSolution:
          'Limpieza alcalina clorada espumante para remover suciedad orgánica y desinfección de líneas y tanques con sanitizante de amplio espectro.',
        suggestedProductIds: ['k45', 'oxi-t', 'ac32'],
        downloads: [
          { title: 'Protocolo de limpieza – Lavado y selección', type: 'protocol', filename: 'Protocolo_Lavado_Oliva.pdf' },
          { title: 'Ficha técnica de productos recomendados', type: 'techsheet', filename: 'Ficha_Productos_Olivicola.pdf' },
        ],
      },
      {
        id: 'molinos-batidoras',
        name: 'Molinos y batidoras',
        x: 40,
        y: 29,
        code: 'MB-03',
        iconName: 'RotateCw',
        commonProblem:
          'Pasta de aceituna reseca y oxidada adherida en paletas y camisas de calefacción.',
        recommendedSolution:
          'Recirculación con Na45 al 2.5% a 60°C para saponificar y disolver los lípidos antes del enjuague.',
        suggestedProductIds: ['na45', 'oxi-t'],
        downloads: [
          { title: 'Desengrase de termobatidoras', type: 'protocol', filename: 'Limpieza_Batidoras.pdf' },
        ],
      },
      {
        id: 'decantacion',
        name: 'Decantación y centrifugación',
        x: 51,
        y: 37,
        code: 'DC-04',
        iconName: 'Activity',
        commonProblem:
          'Depósito de finos y borras en los sinfines del decanter que reducen el rendimiento de extracción.',
        recommendedSolution:
          'Lavado químico CIP con Na75 Plus de alto poder secuestrante.',
        suggestedProductIds: ['na75-plus', 'acid'],
        downloads: [
          { title: 'Lavado periódico de decanters horizontales', type: 'protocol', filename: 'Limpieza_Decanter.pdf' },
        ],
      },
      {
        id: 'linea-envasado-oliva',
        name: 'Línea de envasado',
        x: 70,
        y: 39,
        code: 'ENV-05',
        iconName: 'Bottle',
        commonProblem:
          'Goteo de aceite en boquillas dosificadoras y transportadores de botellas.',
        recommendedSolution:
          'Limpiador desengrasante AC32 y sanitizante volátil que no deja olores.',
        suggestedProductIds: ['ac32', 'sanitex-forte'],
        downloads: [
          { title: 'Guía de envasado y calidad organoléptica', type: 'techsheet', filename: 'Guia_Envasado_Oliva.pdf' },
        ],
      },
      {
        id: 'pisos-superficies-oliva',
        name: 'Pisos y superficies',
        x: 43,
        y: 56,
        code: 'PIS-06',
        iconName: 'Grid',
        commonProblem:
          'Suelos impregnados con alpechín y películas resbaladizas de aceite.',
        recommendedSolution:
          'Aplicación con lanza de espuma de Foam Plus dejando actuar 20 minutos antes de enjuagar.',
        suggestedProductIds: ['foam-plus'],
        downloads: [
          { title: 'Mantenimiento de pisos epoxi en almazaras', type: 'protocol', filename: 'Pisos_Almazaras.pdf' },
        ],
      },
    ],
  },
  {
    id: 'bodegas',
    name: 'Bodegas',
    title: 'Bodegas y vitivinicultura',
    subtitle: 'Proceso de elaboración de vinos finos y espumantes.',
    bgImage: IMAGES.heroBreweryCellar,
    hotspots: [
      {
        id: 'barricas-madera',
        name: 'Barricas de roble',
        x: 10,
        y: 49,
        code: 'BAR-01',
        iconName: 'Barrel',
        commonProblem:
          'Presencia de bitartratos, contaminación por Brettanomyces bruxellensis y acidez volátil.',
        recommendedSolution:
          'Lavado con OXI T en solución fría o templada que penetra en los poros de la madera eliminando levaduras indeseadas sin dañar los aromas del tostado.',
        suggestedProductIds: ['oxi-t', 'bio-det-na75-plus'],
        downloads: [
          { title: 'Protocolo de higiene de barricas de roble', type: 'protocol', filename: 'Protocolo_Barricas.pdf' },
        ],
      },
      {
        id: 'tanques-inox-bodega',
        name: 'Tanques de acero inoxidable',
        x: 35,
        y: 31,
        code: 'TK-INOX',
        iconName: 'Cylinder',
        commonProblem:
          'Costras duras de bitartrato de potasio adheridas tras la estabilización por frío.',
        recommendedSolution:
          'Recirculación por boquilla rotativa CIP de Na45 al 2% o Bio Det Na 75 Plus.',
        suggestedProductIds: ['na45', 'acid', 'bio-det-na75-plus'],
        downloads: [
          { title: 'Desincrustación de tártaros en bodegas', type: 'protocol', filename: 'Desincrustacion_Tartaro.pdf' },
        ],
      },
      {
        id: 'filtros-tangenciales-bodega',
        name: 'Filtros tangenciales',
        x: 49,
        y: 44,
        code: 'FT-02',
        iconName: 'Cpu',
        commonProblem:
          'Colmatación de membranas por polisacáridos y coloides del vino reduciendo el caudal de filtración.',
        recommendedSolution:
          'Lavado suave con Bio Det Na 75 Plus libre de cloro y posterior recuperación con solución ácida regulada.',
        suggestedProductIds: ['bio-det-na75-plus', 'acid'],
        downloads: [
          { title: 'Regeneración de membranas de filtración', type: 'techsheet', filename: 'Membranas_Filtracion.pdf' },
        ],
      },
      {
        id: 'linea-fraccionamiento-bodega',
        name: 'Línea de fraccionamiento',
        x: 29,
        y: 45,
        code: 'LF-03',
        iconName: 'Layers',
        commonProblem:
          'Riesgo de contaminación microbiológica en picos de llenado y taponadoras que afecte la botella comercial.',
        recommendedSolution:
          'Sanitización química con ácido peracético OXI T sin enjuague final justo antes del fraccionamiento.',
        suggestedProductIds: ['oxi-t'],
        downloads: [
          { title: 'Control microbiológico en fraccionamiento', type: 'protocol', filename: 'Fraccionamiento_Vino.pdf' },
        ],
      },
      {
        id: 'embotellado-bodega',
        name: 'Embotellado',
        x: 70,
        y: 44,
        code: 'EMB-04',
        iconName: 'Bottle',
        commonProblem:
          'Biofilm en enjuagadoras de botellas vacías y acumulación de azúcar en transportadores.',
        recommendedSolution:
          'Limpieza alcalina con AC32 y desinfección ambiental con Sanitex Forte.',
        suggestedProductIds: ['ac32', 'sanitex-forte'],
        downloads: [
          { title: 'Protocolo de higiene para línea de botellas', type: 'protocol', filename: 'Higiene_Botellas.pdf' },
        ],
      },
    ],
  },
  {
    id: 'alimentaria',
    name: 'Industria alimentaria',
    title: 'Industria alimentaria',
    subtitle: 'Producción segura de alimentos y bebidas.',
    bgImage: IMAGES.bottlingConveyor,
    hotspots: [
      {
        id: 'tanques-mezcla',
        name: 'Tanques de mezcla y jarabes',
        x: 32,
        y: 35,
        code: 'TM-01',
        iconName: 'Cylinder',
        commonProblem:
          'Residuos pegajosos de jarabes, azúcares caramelizados y aromas residuales cruzados.',
        recommendedSolution:
          'Recirculación CIP con Na45 al 1.5% a 65°C para eliminación total de residuos de sabor.',
        suggestedProductIds: ['na45', 'acid'],
        downloads: [
          { title: 'Cambio de sabor en líneas de bebidas', type: 'protocol', filename: 'Cambio_Sabor.pdf' },
        ],
      },
      {
        id: 'pasteurizador-alimentario',
        name: 'Pasteurizador continuo',
        x: 52,
        y: 28,
        code: 'PST-02',
        iconName: 'Workflow',
        commonProblem:
          'Fouling térmico que incrementa el consumo de vapor y reduce la esterilidad comercial.',
        recommendedSolution:
          'Ciclo automatizado con Na75 Plus y Acid C30.',
        suggestedProductIds: ['na75-plus', 'acid-c30'],
        downloads: [
          { title: 'Recuperación de coeficiente térmico', type: 'techsheet', filename: 'Pasteurizadores.pdf' },
        ],
      },
      {
        id: 'envasadora-aséptica',
        name: 'Envasadora aséptica',
        x: 68,
        y: 46,
        code: 'ENV-AS',
        iconName: 'Bottle',
        commonProblem:
          'Exigencia de cero microorganismos viables sin residuos químicos que alteren el alimento.',
        recommendedSolution:
          'Esterilización de circuitos y boquillas con OXI T validado bajo normas de grado alimentario.',
        suggestedProductIds: ['oxi-t'],
        downloads: [
          { title: 'Validación de esterilidad en empaque aséptico', type: 'protocol', filename: 'Asceptic_Validation.pdf' },
        ],
      },
    ],
  },
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'na45-correcto',
    title: 'Uso correcto de Na45',
    category: 'Químicos CIP',
    industry: 'Generales',
    modulesCount: 5,
    durationMinutes: 25,
    progressPercent: 40,
    status: 'en_progreso',
    image: IMAGES.operatorFoam,
    description: 'Conocé cómo utilizar Na45 de manera segura, eficiente y optimizando tiempos de recirculación.',
    currentLesson: {
      id: 'modulo-2',
      title: 'Preparación de la solución',
      duration: '06:48',
      moduleIndex: 2,
      totalModules: 5,
      learningPoints: [
        'Cómo preparar correctamente la solución de Na45 según volumen del tanque.',
        'La importancia de la temperatura y el tiempo de recirculación.',
        'Qué concentración utilizar según el tipo de suciedad (1% a 3%).',
        'Errores frecuentes en la preparación y medidas de seguridad obligatorias.',
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Llenar el tanque con agua',
          detail: 'Llenar con agua potable a temperatura ambiente hasta el 80% del volumen de trabajo previsto.',
        },
        {
          stepNumber: 2,
          title: 'Agregar Na45 lentamente',
          detail: 'Incorporar el producto químico dosificado suavemente por la boca de adición o sistema de inyección venturi.',
        },
        {
          stepNumber: 3,
          title: 'Mantener agitación durante la disolución',
          detail: 'Activar recirculación o agitador mecánico para homogeneizar y evitar gradientes de densidad.',
        },
        {
          stepNumber: 4,
          title: 'Verificar concentración y temperatura',
          detail: 'Medir conductividad eléctrica o titulación con fenolftaleína y verificar temperatura entre 60°C y 75°C.',
        },
      ],
      downloadableResources: [
        { name: 'Ficha técnica Na45', type: 'PDF', size: '2.4 MB' },
        { name: 'Hoja de seguridad (SDS)', type: 'PDF', size: '1.8 MB' },
        { name: 'Protocolo de uso seguro', type: 'PDF', size: '950 KB' },
        { name: 'Calculadora de dosificación interactiva', type: 'Herramienta', size: 'Online' },
      ],
    },
  },
  {
    id: 'cip-bodegas',
    title: 'Limpieza CIP en bodegas',
    category: 'Vitivinícola',
    industry: 'Bodegas',
    modulesCount: 7,
    durationMinutes: 45,
    progressPercent: 60,
    status: 'en_progreso',
    image: IMAGES.heroBreweryCellar,
    description: 'Aprendé el paso a paso para una limpieza CIP efectiva en tanques, cañerías y bombas enológicas.',
  },
  {
    id: 'limpieza-frigorificos',
    title: 'Limpieza en Frigoríficos',
    category: 'Faena y Desposte',
    industry: 'Frigoríficos',
    modulesCount: 6,
    durationMinutes: 40,
    progressPercent: 0,
    status: 'no_iniciado',
    image: IMAGES.frigorificoCold,
    description: 'Procedimientos de limpieza y desinfección en plantas frigoríficas bajo normativas de inocuidad SENASA.',
  },
  {
    id: 'limpieza-olivicolas',
    title: 'Limpieza en Olivícolas',
    category: 'Almazaras',
    industry: 'Olivícola',
    modulesCount: 5,
    durationMinutes: 35,
    progressPercent: 20,
    status: 'en_progreso',
    image: IMAGES.oliveOilFacility,
    description: 'Soluciones y protocolos para remover grasas vegetales y pulpa en la industria olivícola.',
  },
  {
    id: 'seguridad-quimica',
    title: 'Seguridad Química y Manejo de EPP',
    category: 'Seguridad Industrial',
    industry: 'Generales',
    modulesCount: 4,
    durationMinutes: 30,
    progressPercent: 100,
    status: 'completado',
    image: IMAGES.operatorFoam,
    description: 'Pautas de prevención, manipulación de sustancias corrosivas y protocolos de emergencia.',
  },
  {
    id: 'higiene-cervecerias',
    title: 'Higiene Integral en Cervecerías',
    category: 'Bebidas Fermentadas',
    industry: 'Cervecerías',
    modulesCount: 6,
    durationMinutes: 45,
    progressPercent: 100,
    status: 'completado',
    image: IMAGES.heroBreweryCellar,
    description: 'Control de biofilms, oxalatos y levaduras salvajes en fermentadores y líneas de llenado.',
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    courseTitle: 'Limpieza CIP en bodegas',
    issueDate: '15/04/2026',
    credentialId: 'IQA-CERT-2026-8841',
  },
  {
    id: 'cert-2',
    courseTitle: 'Uso correcto de Na45',
    issueDate: '02/04/2026',
    credentialId: 'IQA-CERT-2026-7910',
  },
  {
    id: 'cert-3',
    courseTitle: 'Seguridad química y manejo de EPP',
    issueDate: '18/03/2026',
    credentialId: 'IQA-CERT-2026-6425',
  },
];

export const LIVE_TRAINING_EVENT: TrainingLiveEvent = {
  id: 'live-cip-mayo',
  title: 'Buenas prácticas de limpieza CIP y ahorro de agua',
  date: 'Jueves 30 de mayo',
  day: '30',
  month: 'MAY',
  time: '16:00 hs (ARG)',
  instructor: 'Ing. Marcos Benítez',
  instructorRole: 'Director de Asistencia Técnica IQA',
  seatsLeft: 14,
};
