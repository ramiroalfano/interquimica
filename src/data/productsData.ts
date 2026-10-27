import { Product } from '../types.ts';

const BASE_PRODUCTS: Product[] = [
  // =========================================================================
  // 1. BIO FOAM (Espuma Detergente Alcalina) - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-foam',
    image: '/imgprod/bio-foam.jpeg',
    imageUrl: '/imgprod/bio-foam.jpeg',
    name: 'BIO FOAM',
    code: 'IQA-BIO-FOAM',
    category: 'espumigenos',
    categoryLabel: 'Espumígeno Alcalino',
    badge: 'ESPUMA ALCALINA',
    badgeColor: 'bg-blue-600',
    canisterColor: '#1d4ed8',
    isBag: false,
    title: 'Espuma Detergente Alcalina de Alta Adherencia',
    tagline: 'Gran adherencia en superficies verticales para grasas oxidadas y suciedad requemada',
    description:
      'La espuma generada por BIO FOAM proporciona una gran adherencia para facilitar su uso en superficies verticales, aumentando considerablemente el tiempo de contacto del producto con la suciedad y facilitando la limpieza. Se aclara muy fácilmente evitando la acumulación de espuma en desagües. Contiene una combinación de productos alcalinos, secuestrantes y agentes humectantes altamente espumantes que hacen de BIO FOAM un producto muy efectivo contra grasas oxidadas, suciedades difíciles y requemadas, especialmente en la industria alimentaria.',
    features: [
      'Gran adherencia para superficies verticales',
      'Aumenta el tiempo de contacto con la suciedad',
      'Fácil aclarado sin colapsar desagües',
      'Efectivo contra grasas oxidadas y requemadas',
      'Contiene secuestrantes y agentes humectantes',
    ],
    applications: [
      'Limpieza diaria de freidoras y hornos industriales',
      'Suelos, paredes y azulejos con suciedad resistente',
      'Cintas de transporte y mesas de desposte',
      'Aplicación por inmersión en tanques',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3% - 4%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '4% - 6%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '6% - 8%', temperature: 'Ambiente', contactTime: '15 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-BIOFOAM' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-BIOFOAM' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-BIOFOAM' },
    ],
    benefits: [
      'Espuma densa y persistente que no escurre de inmediato',
      'Remueve grasas polimerizadas sin requerir abrasión mecánica agresiva',
      'Excelente enjuagabilidad con agua a presión',
    ],
    compatibility: [
      'Compatible con la mayoría de aceros inoxidables presentes en la industria alimentaria',
      'Compatible con materiales plásticos resistentes a disoluciones alcalinas fuertes',
      'Incompatible con metales no resistentes a álcalis fuertes: aluminio, latón, cobre',
    ],
    technicalData: {
      pH: '> 12',
      density: '1,45 ± 0,05 g/cm³ a 20°C',
      appearance: 'Líquido limpio marrón',
      solubility: 'Totalmente soluble en agua',
      conductivity: '20 mS/cm (solución al 1% a 25°C)',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO FOAM (Espuma Detergente Alcalina)',
      date: '24/02/2026',
      properties:
        'La espuma generada por BIO FOAM proporciona al producto una gran adherencia para facilitar su uso en superficies verticales, ya que aumenta considerablemente el tiempo de contacto del producto con la suciedad, facilitando la limpieza. Se aclara muy fácilmente evitando la acumulación de espuma en los desagües. Contiene una combinación de productos alcalinos, secuestrantes y agentes humectantes altamente espumantes que hacen de BIO FOAM un producto muy efectivo contra grasas oxidadas, suciedades difíciles y requemadas, especialmente en la industria alimentaria.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio marrón' },
        { label: 'pH', value: '> 12' },
        { label: 'pH (5%)', value: '> 12' },
        { label: 'Densidad a 20° C', value: '1,45 ± 0,05 g/cm³' },
        { label: 'Conductividad solución al 1% a 25ºC', value: '20 mS/cm' },
      ],
      applications: [
        'Formulado para ser utilizado con equipos de aplicación por espuma.',
        'Se recomienda en la limpieza diaria de freidoras, hornos y otras superficies con suciedad resistente acumulada como suelos, paredes, cintas de transporte.',
        'Puede ser aplicado por inmersión en tanques.',
      ],
      usageInstructions:
        'Equipos de espuma: Realizar un enjuagado previo de las superficies a limpiar para eliminar restos groseros de suciedad. Aplicar después el producto diluido entre el 3% y el 8% según suciedad presente. Cubrir perfectamente todas las superficies de espuma. Dejar actuar durante unos 15 minutos. Aclarar abundantemente, preferiblemente con agua a presión.',
      materialCompatibility:
        'Producto compatible con la mayoría de los aceros inoxidables presentes en la industria alimentaria. Compatible también con materiales plásticos resistentes a disoluciones alcalinas fuertes. En caso de duda testar cada material por separado antes de su uso. No utilizar con metales no resistentes a soluciones alcalinas fuertes como aluminio, latón, cobre, etc.',
      handlingAndStorage:
        'Conservar en el envase original, evitando la exposición a temperaturas extremas. Conservar a temperatura superior a 7ºC. Consultar la ficha de datos de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg, contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 2. ÁCIDO ACÉTICO GLACIAL - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'acido-acetico-glacial',
    image: '/imgprod/bio-det-acid.jpeg',
    imageUrl: '/imgprod/bio-det-acid.jpeg',
    name: 'Ácido Acético Glacial',
    code: 'IQA-AC-ACET',
    category: 'materia_prima',
    categoryLabel: 'Materia Prima / Ácido',
    badge: 'ÁCIDO ORGÁNICO',
    badgeColor: 'bg-amber-600',
    canisterColor: '#d97706',
    isBag: false,
    title: 'Ácido Acético Glacial - Pureza 98,8% Mínimo',
    tagline: 'Ácido orgánico concentrado para síntesis, textil y formulación de desinfectantes',
    description:
      'Fórmula química CH3COOH. Líquido claro, incoloro y fuertemente ácido, soluble en alcohol y éter, con olor pungente similar al vinagre. Utilizado para la manufactura de acetatos, intermediarios químicos, acidulante textil para regular pH con Clorito de Sodio y elaboración de soluciones desinfectantes.',
    features: [
      'Fórmula: CH3COOH con pureza analítica mínima de 98,8%',
      'Densidad a 15°C: 1.0739 g/cm³ (relativa a 20°C: 1.072 - 1.074)',
      'Color patrón Pt-Co máximo: 15',
      'Contenido de agua en peso < 0,2%',
      'Familia química: Ácido Orgánico',
    ],
    applications: [
      'Manufactura de varios acetatos',
      'Manufactura de colorantes e intermediarios químicos',
      'En el pulido y limpieza de celuloide',
      'Agente acidulante para bajar el pH en procesos textiles de blanqueo con Clorito de Sodio',
      'Fabricación de productos de limpieza y desinfección',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: 'Regulación de pH (0,2 - 0,5%)', temperature: 'Ambiente', contactTime: 'Proceso' },
      { dirtLevel: 'Media', concentration: 'Acidulación textil (0,5 - 1,5%)', temperature: 'Ambiente', contactTime: 'Proceso' },
      { dirtLevel: 'Pesada', concentration: 'Formulación / Síntesis', temperature: 'Controlada', contactTime: 'Reacción' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico de polietileno', code: 'B20-ACET' },
      { size: '200 kg', packaging: 'Tambor de polietileno sellado', code: 'T200-ACET' },
      { size: '1000 kg', packaging: 'Contenedor IBC homologado', code: 'IBC-ACET' },
    ],
    benefits: [
      'Alta pureza certificada de origen',
      'Efectivo descenso de pH sin residuos minerales duros',
      'Materia prima versátil para industrias químicas y alimentarias',
    ],
    compatibility: [
      'Apto: Polietileno, teflón, acero inoxidable AISI 316',
      'Incompatible: Reacciona vigorosamente con materiales oxidantes y álcalis fuertes (sosa o potasa cáustica)',
    ],
    technicalData: {
      pH: '< 2 (concentrado)',
      density: '1.0739 g/cm³ a 15°C (1.072 - 1.074 a 20°C)',
      appearance: 'Líquido claro, incoloro',
      odor: 'Olor pungente similar al vinagre',
      solubility: 'Soluble en agua, alcohol y éter',
      formula: 'CH3COOH',
      purity: '98,8% mínimo',
      waterContent: '< 0,2 %',
      chemicalFamily: 'Ácido Orgánico',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'ÁCIDO ACÉTICO GLACIAL',
      date: '29/12/2025',
      properties:
        'Fórmula: CH3COOH. Apariencia - olor: Líquido incoloro; olor pungente similar al vinagre. Densidad: 1.0739 gr/cm³ a 15 °C. Familia química: Acido Orgánico. Color y propiedades: Líquido claro, incoloro, y fuertemente ácido, soluble en alcohol y éter.',
      physicochemical: [
        { label: 'Fórmula', value: 'CH3COOH' },
        { label: 'Apariencia - olor', value: 'Líquido incoloro; olor pungente similar al vinagre' },
        { label: 'Densidad a 15 °C', value: '1.0739 gr/cm³' },
        { label: 'Densidad relativa a 20 °C', value: '1.072 - 1.074' },
        { label: 'Familia química', value: 'Acido Orgánico' },
        { label: 'Color y propiedades', value: 'Líquido claro, incoloro, y fuertemente ácido, soluble en alcohol y éter' },
        { label: 'Pureza, como Acido Acético', value: '98,8 % mínimo' },
        { label: 'Color patrón Pt-Co', value: '15 máximo' },
        { label: 'Contenido de agua, % en peso', value: '< 0,2 %' },
      ],
      applications: [
        'Manufactura de varios acetatos.',
        'Manufactura de colorantes e intermediarios.',
        'En el pulido y limpieza de celuloide.',
        'Como agente acidulante para bajar el pH en procesos textiles de blanqueo con Clorito de Sodio.',
        'Fabricación productos de limpieza y desinfección.',
      ],
      usageInstructions:
        'Utilizar dosificación acorde a la formulación o proceso específico. Manipular bajo campana de extracción o en áreas bien ventiladas debido a sus vapores pungentes.',
      materialCompatibility:
        'Puede reaccionar vigorosamente con materiales oxidantes y reacciona violentamente con agentes alcalinos fuertes como la sosa cáustica o la potasa cáustica.',
      handlingAndStorage:
        'El material debe almacenarse en un lugar fresco y seco lejos de fuentes de calor. Sus vapores son extremadamente irritantes. El líquido puede causar quemaduras. Use equipo de protección personal para su manejo. Evite el contacto con la piel y los ojos.',
      packaging: 'El producto viene en bidones de polietileno.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 3. ÁCIDO CÍTRICO ANHIDRIDO - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'acido-citrico-anhidrido',
    image: '/imgprod/bio-det-duo-plus.jpeg',
    imageUrl: '/imgprod/bio-det-duo-plus.jpeg',
    name: 'Ácido Cítrico Anhidrido',
    code: 'IQA-AC-CITR',
    category: 'materia_prima',
    categoryLabel: 'Materia Prima / Ácido',
    badge: 'ANTIOXIDANTE NATURAL',
    badgeColor: 'bg-emerald-600',
    canisterColor: '#059669',
    isBag: true,
    title: 'Ácido Cítrico Anhidrido - Limpiador y Desincrustante Orgánico',
    tagline: 'Desincrusta sarro, elimina óxido y abrillanta superficies metálicas sin toxicidad',
    description:
      'Desarrollado como un limpiador desinfectante integral para eliminar eficazmente depósitos de cal, sarro, manchas de agua dura y óxido en equipos, tuberías y superficies, en la industria vitivinícola y alimenticia en general. Excelente antioxidante natural, orgánico y no tóxico, seguro para desincrustar grasa y abrillantar metales.',
    features: [
      'Cristales o polvo traslúcidos incoloros de disolución rápida',
      'Excelente poder antioxidante y secuestrante de iones metálicos',
      'pH débil y seguro para cualquier superficie de metal',
      'No tóxico, 100% biodegradable de origen orgánico',
      'Muy soluble en agua y alcohol',
    ],
    applications: [
      'Eliminación de cal, sarro y manchas de agua dura en tuberías',
      'Abrillantado y pasivación de acero inoxidable y tanques vitivinícolas',
      'Limpieza de serpentines, intercambiadores y filtros',
      'Desincrustación segura en toda superficie metálica',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 2%', temperature: '20 - 50 °C', contactTime: '20 min' },
      { dirtLevel: 'Media', concentration: '2% - 3,5%', temperature: '20 - 60 °C', contactTime: '20 - 25 min' },
      { dirtLevel: 'Pesada', concentration: '4% - 5%', temperature: '50 - 70 °C', contactTime: '25 - 30 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa industrial tricapa sellada', code: 'S25-CITR' },
      { size: '1000 kg', packaging: 'Big Bag con válvula de descarga', code: 'BB-CITR' },
    ],
    benefits: [
      'Abrillanta aceros inoxidables opacados por agua dura',
      'No ataca soldaduras ni sellos de goma elastómeros',
      'Completamente seguro para operarios y medio ambiente',
    ],
    compatibility: [
      'Compatible con todos los metales (acero inoxidable, hierro, cobre, latón)',
      'Seguro sobre cerámicas, plásticos y juntas sanitarias',
    ],
    technicalData: {
      pH: 'Entre 2 y 3,5',
      density: '1,7 ± 0,2 a 100 g/cm³ a 20°C',
      appearance: 'Cristales o polvo traslúcidos incoloros',
      odor: 'Inodoro',
      solubility: 'Muy soluble en alcohol y agua, soluble en éter',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'ÁCIDO CÍTRICO ANHIDRIDO.',
      date: '29/12/2025',
      properties:
        'El Ácido Cítrico desarrollado como un limpiador desinfectante integral para eliminar eficazmente depósitos de cal, sarro, manchas de agua dura y óxido en equipos, tuberías y superficies, en la industria vitivinícola y alimenticia en general. El Ácido Cítrico es un excelente antioxidante natural que se puede emplear para eliminar suciedad. Es un producto seguro, orgánico, que sirve para desincrustar la grasa, abrillantar superficies metálicas. No tóxico.',
      physicochemical: [
        { label: 'Aspecto', value: 'Cristales o polvo traslúcidos, incoloros, no tóxico' },
        { label: 'Olor', value: 'Inodoro' },
        { label: 'pH', value: 'Entre 2 y 3,5' },
        { label: 'Solubilidad', value: 'Muy soluble en alcohol y agua, soluble en éter' },
        { label: 'Densidad', value: '1,7 ± 0,2 a 100 g/cm³ a 20°C' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza donde desee eliminarse sarro o incrustaciones o manchas de los mismos en toda clase superficie.',
        'Su acción de ácido débil permite su utilización en cualquier superficie de metal.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 1 al 5%, disolver el ácido cítrico en la cantidad de agua necesario para llegar a la concentración deseada, lograr la completa disolución y agregar la solución al circuito de limpieza o aplicar sobre la superficie a limpiar. Dejar actuar durante al menos 20 minutos y luego enjuagar con abundante agua. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para cualquier superficie de metal y materiales plásticos.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar seco y fresco, protegido de la humedad.',
      packaging: 'Bolsas de 25 kg y big bags de 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 4. BIO AC32 (Líquido Desinfectante de Superficies) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'ac32',
    image: '/imgprod/bio-det-alka.jpeg',
    imageUrl: '/imgprod/bio-det-alka.jpeg',
    name: 'BIO AC32',
    code: 'IQA-BIO-AC32',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante de Superficies',
    badge: 'OXIDANTE DESINFECTANTE',
    badgeColor: 'bg-cyan-600',
    canisterColor: '#0891b2',
    isBag: false,
    title: 'Líquido Desinfectante de Superficies a base de Peróxido y Cítrico',
    tagline: 'Poder fuertemente oxidante y biocida ecológico que no daña el ambiente',
    description:
      'Líquido ácido a base de Peróxido de Hidrógeno y Ácido Cítrico desarrollado como un limpiador desinfectante integral para ser utilizado en todo tipo de superficies en la industria vitivinícola y alimenticia en general. El ácido cítrico actúa como antioxidante y desincrustante, mientras que el peróxido de hidrógeno aporta un fuerte poder oxidante con propiedades biocidas que descontaminan sin generar residuos nocivos.',
    features: [
      'Combinación sinérgica de Peróxido de Hidrógeno y Ácido Cítrico',
      'Desinfectante ecológico de amplio espectro bactericida y fungicida',
      'Excelente desincrustante de grasas y abrillantador de metales',
      'Líquido incoloro e inodoro, soluble en agua a cualquier temperatura',
      'Densidad: 1,10 – 1,15 g/cm³',
    ],
    applications: [
      'Recomendado para todo tipo de limpieza en general y para toda superficie',
      'Limpieza y desinfección de tanques, cubas y piletas vitivinícolas',
      'Cintas de selección y tolvas de recepción de uva/fruta',
      'Superficies en contacto directo con alimentos y bebidas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,5%', temperature: 'Ambiente', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '0,75%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '1%', temperature: 'Ambiente', contactTime: '15 - 20 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-AC32' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-AC32' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-AC32' },
    ],
    benefits: [
      'Desinfección oxidante que se degrada en agua y oxígeno',
      'No altera perfiles aromáticos en bodegas ni industrias alimentarias',
      'Fácil aplicación por recirculación con dispositivos de limpieza',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304 y 316, plásticos y gomas sanitarias',
      'En metales blandos, respetar tiempos de contacto y enjuagar',
    ],
    technicalData: {
      pH: 'Entre 2 y 3,5',
      density: '1,10 – 1,15 g/cm³',
      appearance: 'Líquido incoloro',
      odor: 'Inodoro',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO AC32 (Líquido Desinfectante de Superficies).',
      date: '29/12/2025',
      properties:
        'Líquido ácido a base de Peróxido de Hidrógeno y Ácido Cítrico desarrollado como un limpiador desinfectante integral para ser utilizado en todo tipo de superficies en la industria vitivinícola y alimenticia en general. El Ácido Cítrico es un excelente antioxidante natural que se puede emplear para eliminar suciedad. Es un producto seguro, orgánico, que sirve para desincrustar la grasa, abrillantar superficies metálicas. El Peróxido de Hidrógeno es utilizado para la desinfección de superficies por su poder fuertemente oxidante, tiene propiedades biocidas que descontaminan superficies y el medio ambiente sin dañarlo.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido incoloro' },
        { label: 'Olor', value: 'Inodoro' },
        { label: 'pH', value: 'Entre 2 y 3,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,10 – 1,15 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general y para toda superficie.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 0,5 al 1%, incorporar la solución al proceso por recirculación con dispositivos de limpieza, dejar unos minutos (Tiempo de contacto entre 10 y 20 minutos) y enjuagar. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de superficies sanitarias e industriales.',
      handlingAndStorage: 'Conservar en envase cerrado al resguardo de fuentes de calor directo.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 5. BIO ACID S (Solución acida para regeneración de resinas) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-acid-s',
    image: '/imgprod/bio-det-acid.jpeg',
    imageUrl: '/imgprod/bio-det-acid.jpeg',
    name: 'BIO ACID S',
    code: 'IQA-ACID-S',
    category: 'acidos',
    categoryLabel: 'Ácido Especializado',
    badge: 'REGENERADOR DE RESINAS',
    badgeColor: 'bg-rose-600',
    canisterColor: '#e11d48',
    isBag: false,
    title: 'Solución Ácida para la Regeneración de Resinas de Intercambio',
    tagline: 'Restaura el poder de intercambio iónico de iones H+ en el tratamiento de vino y agua',
    description:
      'BIO ACID S es una solución a base de ácido sulfúrico con el agregado de un secuestrante, formulada específicamente para la regeneración de resinas de intercambio iónico. Su principio de funcionamiento opera sobre el cambio de iones H+ por los grupos activos sulfónicos de la resina, restableciendo su capacidad operativa cuando se observa disminución en el intercambio con el vino o agua.',
    features: [
      'Formulación a base de ácido sulfúrico con secuestrante activo',
      'Restaura la carga catiónica H+ en resinas de intercambio iónico',
      'Líquido incoloro viscoso con densidad 1,3 ± 0,1 g/cm³ a 20°C',
      'pH en solución al 10%: 1,5 ± 0,5',
      'Optimizado para bodegas y plantas de tratamiento de agua',
    ],
    applications: [
      'Regeneración de resinas de intercambio iónico en bodegas (estabilización tartárica)',
      'Columnas de intercambio en plantas desmineralizadoras de agua',
      'Limpieza y desinfección de lechos de resina',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1,5x volumen de resina', temperature: 'Ambiente (18 - 25 °C)', contactTime: 'Ciclo regeneración' },
      { dirtLevel: 'Media', concentration: '1,75x volumen de resina', temperature: 'Ambiente (18 - 25 °C)', contactTime: 'Ciclo regeneración' },
      { dirtLevel: 'Pesada', concentration: '2,0x volumen de resina', temperature: 'Ambiente (18 - 25 °C)', contactTime: 'Ciclo regeneración' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE reforzado', code: 'B20-ACIDS' },
      { size: '200 kg', packaging: 'Tambor sellado para ácidos concentrados', code: 'T200-ACIDS' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de seguridad', code: 'IBC-ACIDS' },
    ],
    benefits: [
      'Alarga la vida útil de las resinas de intercambio sin degradar la matriz polimérica',
      'Garantiza la correcta remoción de iones potasio y calcio en vino',
      'Previene colmataciones biológicas en las columnas',
    ],
    compatibility: [
      'Compatible con resinas catiónicas de poliestireno sulfonato',
      'Incompatible con materiales atacables por ácido sulfúrico concentrado',
    ],
    technicalData: {
      pH: '1,5 ± 0,5 (solución al 10%)',
      density: '1,3 ± 0,1 g/cm³ a 20°C',
      appearance: 'Líquido incoloro viscoso',
      odor: 'Característico',
      solubility: 'Totalmente miscible en agua',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO ACID S (Solución acida para la regeneración de resinas de intercambió)',
      date: '29/12/2025',
      properties:
        'BIO ACID S, es una solución a base de ácido sulfúrico con el agregado de un secuestrante, esto permite su empleo en la regeneración de resinas de intercambio iónico, el principio de su funcionamiento es sobre el cambio de iones H+ a operar por los grupos activos sulfónico de la resina. Debe ser usado cuando las resinas muestren disminución de su poder de intercambio de iones, es el momento de regenerarlas y ponerlas nuevamente en la condición de cambiar iones H+ con el vino.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido incoloro viscoso' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH solución al 10%', value: '1,5 +/- 0,5' },
        { label: 'Densidad', value: '1,3 +/- 0,1 g/cm³ a 20°C' },
      ],
      applications: [
        'Debe ser usado cuando las resinas muestren disminución de su poder de intercambio de iones, es el momento de regenerarlas y ponerlas nuevamente en la condición de cambiar iones H+ con el vino/agua.',
      ],
      usageInstructions:
        'BIO ACID S, se utiliza en la regeneración, limpieza y desinfección de las resinas de intercambio iónico. La dosis de empleo es de entre 1,5 y 2 veces el volumen de la solucion utilizada para regenerar. Despues de 5 lavados acidos se recomienda un lavado alcalino.',
      materialCompatibility: 'Apto para columnas y tuberías resistentes a soluciones ácidas minerales.',
      handlingAndStorage: 'Conservar en envase original cerrado, en área fresca y ventilada.',
      packaging: 'Bidones de 20 kg, tambores de 200 kg y contenedores IBC.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 6. BIO AP32 (Ácido Peracético - Líquido Desinfectante) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-ap32',
    image: '/imgprod/bio-ap32.jpeg',
    imageUrl: '/imgprod/bio-ap32.jpeg',
    name: 'BIO AP32',
    code: 'IQA-BIO-AP32',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Peracético',
    badge: 'ÁCIDO PERACÉTICO',
    badgeColor: 'bg-teal-600',
    canisterColor: '#0d9488',
    isBag: false,
    title: 'Ácido Peracético - Líquido Desinfectante Integral',
    tagline: 'Desinfectante ecológico de acción instantánea para tanques y filtros tangenciales',
    description:
      'Líquido ácido a base de Ácido Peracético, Ácido Acético y Peróxido de Hidrógeno desarrollado como un limpiador desinfectante integral para ser utilizado en tanques y filtros tangenciales de la industria vitivinícola y alimenticia en general. Desinfectante ecológico con gran poder oxidante que procede efectiva e inmediatamente frente a sustancias líquidas y materias orgánicas, aún en estado de congelación.',
    features: [
      'Equilibrio cuaternario estabilizado de Ácido Peracético, Acético y Peróxido',
      'Acción biocida inmediata contra bacterias, levaduras y esporas',
      'Eficaz incluso a bajas temperaturas y en frío de congelación',
      'No genera espuma y se enjuaga fácilmente sin dejar trazas',
      'pH en solución al 10%: < 1,25 | Densidad: 1,09 ± 0,10 g/cm³',
    ],
    applications: [
      'Sanitización de tanques de fermentación y guarda',
      'Desinfección de filtros tangenciales y membranas de filtración',
      'Circuitos cerrados y cañerías en bodegas y plantas de bebidas',
      'Esterilización de recipientes de envasado aséptico',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,5%', temperature: 'Ambiente o frío', contactTime: '10 min' },
      { dirtLevel: 'Media', concentration: '0,75%', temperature: 'Ambiente o frío', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '1,0%', temperature: 'Ambiente o frío', contactTime: '15 - 20 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE con venteo', code: 'B20-AP32' },
      { size: '200 kg', packaging: 'Tambor ventilado de polietileno', code: 'T200-AP32' },
      { size: '1000 kg', packaging: 'Contenedor IBC ventilado', code: 'IBC-AP32' },
    ],
    benefits: [
      'Se descompone en agua, oxígeno y ácido acético biodegradable',
      'Sin residuos clorados ni riesgo de formación de tricloroanisol (TCA)',
      'Máxima preservación de membranas tangenciales delicadas',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316, PTFE y PVDF',
      'Evitar metales blandos como hierro dulce, bronce y aluminio',
    ],
    technicalData: {
      pH: '< 1,25 (solución al 10%)',
      density: '1,09 ± 0,10 g/cm³',
      appearance: 'Líquido incoloro',
      odor: 'Picante característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO AP32 (Ácido Peracético - Liquido Desinfectante).',
      date: '29/12/2025',
      properties:
        'Líquido ácido a base de Ácido Peracético, Ácido Acético y Peróxido de Hidrógeno desarrollado como un limpiador desinfectante integral para ser utilizado en tanques y filtros tangenciales de la industria vitivinícola y alimenticia en general. El Ácido Peracético es un excelente aliado para la desinfección de superficies, tiene propiedades biocidas que descontaminan superficies y el medio ambiente sin dañarlo por lo que se lo considera un desinfectante ecológico. Posee un gran poder corrosivo, procede efectiva e inmediatamente frente a sustancias líquidas u otras materias orgánicas, aún en estado de congelación, por lo que resulta ser un elemento esencial a la hora de realizar ciertas labores de limpieza en el área industrial.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido incoloro' },
        { label: 'Olor', value: 'Picante' },
        { label: 'pH en sol al 10%', value: '< 1,25' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,09 ± 0,10 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y filtros, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Se debe preparar una solución al 0,5 o 1%, conforme a las necesidades, disolviendo el producto con agua limpia, incorporar la solución al proceso por recirculación con dispositivos de limpieza, dejar actuar (Tiempo de Contacto) de 10 a 20 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility:
        'Apto para tanques y membranas de filtración de acero inoxidable y materiales sintéticos compatibles.',
      handlingAndStorage: 'Conservar en envase cerrado ventilado, alejado de fuentes de calor y materia orgánica.',
      packaging: 'Bidones plásticos con válvula de alivio 20 kg, tambores 200 kg, IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 7. BIO AP32 FORTE - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-ap32-forte',
    image: '/imgprod/bio-ap32-forte.jpeg',
    imageUrl: '/imgprod/bio-ap32-forte.jpeg',
    name: 'BIO AP32 FORTE',
    code: 'IQA-AP32-FORTE',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Oxidante CIP',
    badge: 'PERACÉTICO CIP FORTE',
    badgeColor: 'bg-teal-700',
    canisterColor: '#0f766e',
    isBag: false,
    title: 'Desinfectante Oxidante Basado en Ácido Peracético y Peróxido',
    tagline: 'Gran efectividad para eliminación de hongos y bacterias en sistemas automatizados CIP',
    description:
      'BIO AP32 FORTE es eficaz frente a todo tipo de microorganismos. Producto no espumante con fácil aclarado que se degrada en sustancias inocuas para el tratamiento de efluentes, con reducido impacto ambiental. Desinfectante líquido oxidante a base de ácido peracético apto para su uso en la industria alimentaria, farmacéutica, cosmética y zootécnica.',
    features: [
      'Elimina todo tipo de hongos, bacterias, levaduras y biofilms',
      'No espumante, formulado especialmente para circuitos automatizados CIP',
      'Excelente desodorizante y desmanchante por su alto poder oxidante',
      'Fácil aclarado con degradación en agua y oxígeno ecológico',
      'Conductividad: 29 mS/cm (sol. 1% a 25°C) | Densidad: 1,12 ± 0,01 g/cm³',
    ],
    applications: [
      'Sistemas automatizados CIP en circuitos cerrados (tuberías, depósitos y llenadoras)',
      'Tratamiento de instrumentos, partes desmontables y utensilios por inmersión',
      'Desinfección de moldes y botellas (vidrio y PET) al final del lavado',
      'Instalaciones de ordeño del sector lechero y ganadero',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,2% - 0,5%', temperature: 'Frío o ambiente', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '0,5% - 1,0%', temperature: 'Frío o ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '1,0% - 2,0%', temperature: 'Frío o ambiente', contactTime: '15 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable con tapón desgasificador', code: 'B20-AP32F' },
      { size: '200 kg', packaging: 'Tambor sellado ventilado', code: 'T200-AP32F' },
      { size: '1000 kg', packaging: 'Contenedor IBC ventilado', code: 'IBC-AP32F' },
    ],
    benefits: [
      'Baja conductividad residual y nulo impacto en tratamientos biológicos de efluentes',
      'Control total microbiológico en líneas asépticas de alta velocidad',
      'No requiere agua caliente para actuar con máxima letalidad',
    ],
    compatibility: [
      'Seguro frente al acero inoxidable según concentraciones y temperaturas recomendadas',
      'Incompatible con álcalis, iones metálicos, agentes reductores y sustancias orgánicas',
      'Incompatible con metales pesados y materiales inflamables. No mezclar con otros químicos',
    ],
    technicalData: {
      pH: '< 3 (puro), 3 - 4 (solución al 1%)',
      density: '1,12 ± 0,01 g/cm³',
      appearance: 'Líquido limpio cristalino',
      odor: 'Punzante',
      solubility: 'Totalmente soluble en agua',
      conductivity: '29 mS/cm (solución al 1% a 25°C)',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO AP32 FORTE (Desinfectante oxidante de gran efectividad basado en ácido peracético y peróxido de hidrógeno)',
      date: '24/02/2026',
      properties:
        'Desinfectante de superficies, para la eliminación de hongos y bacterias. BIO AP32 FORTE es eficaz frente todo tipo de microorganismos. Producto no espumante con fácil aclarado. Se degrada en sustancias inocuas para los tratamientos de aguas residuales por lo que es un producto de reducido impacto ambiental. BIO AP32 FORTE es un desinfectante líquido oxidante a base de ácido peracético, apto para su uso en la industria alimentaria, farmacéutica, cosmética y sector zootécnico.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio cristalino' },
        { label: 'Olor', value: 'Punzante' },
        { label: 'pH', value: '< 3' },
        { label: 'pH (1%)', value: '3 - 4' },
        { label: 'Densidad', value: '1,12 ± 0,01 g/cm³' },
        { label: 'Conductividad solución al 1% a 25°C', value: '29 mS/cm' },
      ],
      applications: [
        'Especialmente formulado para uso en sistemas automatizados CIP. Por su alto poder oxidante es un excelente desodorizante con propiedades para la eliminación de manchas. También está recomendado su uso para la desinfección de superficies y utensilios en la industria alimentaria.',
        'Desinfección de circuitos cerrados, (tuberías, depósitos y llenadoras). Tratamiento de instrumentos, partes desmontables y utensilios por inmersión. Desinfección de moldes y botellas (vidrio y PET) al final del lavado. Tratamiento de instalaciones de ordeño del sector ganadero.',
      ],
      usageInstructions:
        'La desinfección por contacto de superficies y equipos, mediante circulación o sistemas CIP, se hace con el producto diluido en agua, del 0,2% al 2% según la necesidad, dejando en contacto o recirculación al menos durante 15 minutos, respetando los tiempos de contacto. Aclarar posteriormente con abundante agua potable.',
      materialCompatibility:
        'Es un producto seguro frente al acero inoxidable presente en la industria alimentaria cuando se aplica según las concentraciones y temperaturas adecuadas de uso. No mezclar con álcalis, iones metálicos, agentes reductores y sustancias orgánicas. Incompatible con metales pesados y materiales inflamables. No mezclar con ningún otro producto químico.',
      handlingAndStorage:
        'Conservar en los envases originales al resguardo de temperaturas extremas. Consultar la ficha de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 8. BIO FOAM CL (Detergente espumante alcalina clorada) - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-foam-cl',
    image: '/imgprod/bio-foam-cl.jpeg',
    imageUrl: '/imgprod/bio-foam-cl.jpeg',
    name: 'BIO FOAM CL',
    code: 'IQA-FOAM-CL',
    category: 'espumigenos',
    categoryLabel: 'Espumígeno Clorado',
    badge: 'ESPUMA ALCALINA CLORADA',
    badgeColor: 'bg-emerald-600',
    canisterColor: '#059669',
    isBag: false,
    title: 'Detergente Espumante Alcalino Clorado de Acción Dual',
    tagline: 'Desengrasa y desinfecta en una sola operación con 600 ppm de cloro activo',
    description:
      'BIO FOAM CL es un producto espumógeno alcalino clorado especialmente formulado para la limpieza y sanitización en industrias procesadoras de alimentos, agroindustrias, cárnicas, pesqueras, conserveras, lácteas, vinícolas, cerveceras y bebidas gaseosas. Para ser usado bajo sistemas por espuma, alta presión y en forma tradicional manual. Desengrasa y desinfecta en una sola operación, eliminando eficazmente grasas animales y vegetales, suciedad proteica y residuos complejos.',
    features: [
      'Desengrasa y desinfecta en una sola operación simultánea',
      'Cloro activo garantizado de 600 ppm en solución al 1%',
      'Elimina grasas animales, vegetales y manchas proteicas difíciles',
      'Apto para cañón de espuma, alta presión o lavado manual',
      'pH > 12 | Densidad: 1,2 ± 0,05 g/cm³ a 20°C',
    ],
    applications: [
      'Desinfección de paredes, suelos y canaletas industriales',
      'Exterior de tanques, autoclaves, líneas y llenadoras',
      'Tablas de corte y cintas transportadoras en frigoríficos y pesqueras',
      'Cámaras frigoríficas y playas de faena',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3% - 4%', temperature: 'Ambiente o tibia', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '4% - 5,5%', temperature: 'Ambiente o tibia', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '5,5% - 7%', temperature: 'Ambiente o tibia', contactTime: '15 - 20 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-FOAMCL' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-FOAMCL' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-FOAMCL' },
    ],
    benefits: [
      'Ahorra un 50% del tiempo de limpieza al unificar desengrase y cloración',
      'Blanquea tablas de teflón y superficies con restos de sangre o pigmentos',
      'Excelente retención en planos verticales y techos',
    ],
    compatibility: [
      'Compatible con la mayoría de los materiales en la industria alimentaria',
      'No utilizar en metales ligeros como aluminio y hierro galvanizado',
    ],
    technicalData: {
      pH: '> 12 (pH 5%: > 12)',
      density: '1,2 ± 0,05 g/cm³ a 20°C',
      appearance: 'Líquido limpio cristalino',
      activeChlorine: '600 ppm en solución del 1%',
      solubility: 'Totalmente soluble en agua',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO FOAM CL (Detergente espumante alcalina clorada)',
      date: '24/02/2026',
      properties:
        'BIO FOAM CL es un producto espumógeno alcalino clorado especialmente formulado para la limpieza y sanitización en industrias procesadores de alimentos, agroindustrias, cárnicas, pesqueras, conserveras, lácteas, vinícolas cerveceras, bebidas gaseosas, etc. Para ser usado bajo sistemas por espuma, alta presión y en forma tradicional manual. Desengrasa y desinfecta en una sola operación. BIO FOAM CL es capaz de eliminar eficazmente diversos tipos de contaminación orgánica como grasas animales y vegetales, la grasa y suciedad proteica y residuos de la elaboración de pescado y de vegetales incluso en zonas muy contaminadas.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio cristalino' },
        { label: 'pH', value: '> 12' },
        { label: 'pH (5%)', value: '> 12' },
        { label: 'Densidad a 20° C', value: '1,2 ± 0,05 g/cm³' },
        { label: 'Cloro activo', value: '600 ppm en solución del 1%' },
      ],
      applications: [
        'BIO FOAM CL se utiliza para la desinfección de paredes, suelos, exterior de equipos y líneas, tablas y cintas transportadoras.',
      ],
      usageInstructions:
        'Equipos generadores de espuma: Aclarar previamente la zona a limpiar con agua a presión para eliminar los restos groseros. Cubrir la zona a limpiar con producto en una proporción entre el 3% y el 7%. Aplicar en forma de espuma, dejar actuar durante un mínimo de 15 minutos y a continuación aclarar bien con abundante agua potable. Evitar contactos muy prolongados (>1 hora)',
      materialCompatibility:
        'Es compatible con la mayoría de los materiales normalmente presentes en la industria alimentaria siempre que sea utilizado según lo indicado por el fabricante. No utilizar en metales ligeros como aluminio y hierro galvanizado.',
      handlingAndStorage:
        'Conservar en el envase original, evitando la exposición a temperaturas extremas. Conservar a temperatura superior a 7ºC. Consultar la ficha de datos de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 9. BIO DET ACID (Desincrustante ácido a base de ácido fosfórico) - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-det-acid',
    image: '/imgprod/bio-det-acid.jpeg',
    imageUrl: '/imgprod/bio-det-acid.jpeg',
    name: 'BIO DET ACID',
    code: 'IQA-DET-ACID',
    category: 'acidos',
    categoryLabel: 'Ácido Desincrustante CIP',
    badge: 'DESINCRUSTANTE FOSFÓRICO',
    badgeColor: 'bg-red-600',
    canisterColor: '#dc2626',
    isBag: false,
    title: 'Desincrustante Ácido a Base de Ácido Fosfórico para CIP',
    tagline: 'Elimina incrustaciones de cal, oxalato cálcico (piedra de cerveza) y almidones',
    description:
      'Es un detergente desincrustante en base a ácido fosfórico, de baja espuma, especialmente formulado para la limpieza periódica de circuitos CIP y máquinas automáticas en la industria. Acción desincrustante y limpiadora que elimina la suciedad de tipo inorgánico. Adecuado para dosificar por conductividad de forma automática, garantizando un control constante del producto.',
    features: [
      'Formulado a base de ácido fosfórico técnico con baja formación de espuma',
      'Remoción completa de oxalato cálcico (beerstone) y depósitos minerales',
      'Dosificable automáticamente por conductividad (10 mS/cm al 5%)',
      'Apto para alta presión y turbulencia en sistemas CIP',
      'pH < 2 | Densidad: 1,30 ± 0,05 g/cm³ a 20°C',
    ],
    applications: [
      'Limpieza ácida periódica de circuitos CIP y pasteurizadores',
      'Hervidores, whirlpools y tanques de fermentación cervecera',
      'Lavadoras automáticas de botellas y barriles',
      'Tuberías de acero inoxidable con deposiciones de cal y almidón',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 2%', temperature: '20 - 50 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Media', concentration: '2% - 3,5%', temperature: '40 - 60 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '3,5% - 5%', temperature: '50 - 70 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-DETACID' },
      { size: '200 kg', packaging: 'Tambor sellado para ácidos minerales', code: 'T200-DETACID' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de seguridad', code: 'IBC-DETACID' },
    ],
    benefits: [
      'Restaura la transferencia térmica en intercambiadores de placas',
      'Disuelve sales complejas sin picar ni atacar el acero inoxidable',
      'Totalmente enjuagable con agua potable',
    ],
    compatibility: [
      'Apto para superficies de acero inoxidable AISI 304, 316 y cerámicas',
      'No apto para metales no resistentes como hierro dulce o aluminio',
    ],
    technicalData: {
      pH: '< 2 (pH 5%: < 2)',
      density: '1,30 ± 0,05 g/cm³ a 20°C',
      appearance: 'Líquido limpio cristalino',
      conductivity: '10 mS/cm (solución al 5% a 25°C)',
      solubility: 'Totalmente soluble en agua',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET ACID (Desincrustante ácido a base de ácido fosfórico)',
      date: '24/02/2026',
      properties:
        'Es un detergente desincrustante en base ácido fosfórico, de baja espuma, especialmente formulado para la limpieza periódica de circuitos CIP y máquinas automáticas en la Industria. Es un detergente de acción desincrustante y limpiadora que elimina la suciedad de tipo inorgánico. Es un producto adecuado para dosificar por conductividad de forma automática lo que asegura un control constante del producto. Al ser un producto no espumante es adecuado para su utilización en los sistemas CIP, donde existen condiciones de alta presión y turbulencia.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio cristalino' },
        { label: 'pH', value: '< 2' },
        { label: 'pH (5%)', value: '< 2' },
        { label: 'Densidad', value: '1,30 ± 0,05 g/cm³' },
        { label: 'Conductividad solución al 5% a 25°C', value: '10 mS/cm' },
      ],
      applications: [
        'Está especialmente indicado para limpieza ácida de todo tipo de circuitos y sistemas de limpiezas CIP. Indicado para la eliminación de incrustaciones de cal origen inorgánico, incluido el oxalato cálcico (piedra de cerveza), suciedades proteicas y almidones. Puede aplicarse sobre superficies de acero inoxidable.',
      ],
      usageInstructions:
        'CIP: Aplicar el producto a una concentración de 1-5% en proporción variable según nivel de incrustación y grado de suciedad.\nMáquinas automáticas: Aplicar el producto a una concentración de 1-5% en proporción variable según nivel de incrustación y grado de suciedad.\nEl formulado se puede utilizar a temperaturas entre 20 y 70ºC. Realizar un enjuagado final completo con agua potable para eliminar cualquier residuo de la solución.',
      materialCompatibility:
        'En la concentración recomendada es compatible con la mayoría de los materiales normalmente presentes en la industria alimenticia.',
      handlingAndStorage:
        'Conservar en los envases originales al resguardo de temperaturas extremas. Consultar la ficha de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 10. BIO DET ACID C30 (Líquido ácido desinfectante) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'acid-c30',
    image: '/imgprod/bio-det-acid-c30.jpeg',
    imageUrl: '/imgprod/bio-det-acid-c30.jpeg',
    name: 'BIO DET ACID C30',
    code: 'IQA-ACID-C30',
    category: 'acidos',
    categoryLabel: 'Ácido Neutralizante',
    badge: 'ÁCIDO CÍTRICO LÍQUIDO',
    badgeColor: 'bg-rose-500',
    canisterColor: '#f43f5e',
    isBag: false,
    title: 'Líquido Ácido Desinfectante a Base de Ácido Cítrico',
    tagline: 'Neutralizante integral para filtros tangenciales en la industria vitivinícola y alimenticia',
    description:
      'Líquido ácido a base de Ácido Cítrico, desarrollado como neutralizante integral para ser utilizado en filtros tangenciales de la industria vitivinícola y alimenticia en general. Gracias a sus propiedades antioxidantes y conservadoras se utiliza como limpiador y neutralizante posterior a lavados alcalinos.',
    features: [
      'Formulación líquida lista para disolución homogénea inmediata',
      'Neutralizante y antioxidante natural de alta pureza',
      'Específicamente desarrollado para membranas de filtros tangenciales',
      'Líquido incoloro e inodoro, soluble en agua a cualquier temperatura',
      'pH: 1,5 ± 0,5 | Densidad: 1,15 ± 0,05 g/cm³',
    ],
    applications: [
      'Neutralización y limpieza ácida en filtros tangenciales vitivinícolas',
      'Limpieza periódica en combinación con bicarbonato de sodio',
      'Protección antioxidante de circuitos cerrados y tanques',
      'Acondicionamiento de membranas sintéticas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '3% - 4%', temperature: 'Ambiente', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '5%', temperature: 'Ambiente', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-ACIDC30' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-ACIDC30' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-ACIDC30' },
    ],
    benefits: [
      'Neutraliza álcalis residuales sin atacar las fibras poliméricas de las membranas',
      'Previene precipitaciones salinas sobre tanques de vino y mosto',
      'Fórmula limpia e inodora apta para certificaciones enológicas',
    ],
    compatibility: [
      'Totalmente compatible con aceros inoxidables AISI 304, 316 y membranas de filtración',
      'Seguro sobre elastómeros y sellos mecánicos',
    ],
    technicalData: {
      pH: '1,5 ± 0,5',
      density: '1,15 ± 0,05 g/cm³',
      appearance: 'Líquido incoloro',
      odor: 'Inodoro',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET ACID C30 (Líquido ácido desinfectante).',
      date: '29/12/2025',
      properties:
        'Líquido ácido a base de Ácido Cítrico, desarrollado como neutralizante integral para ser utilizado en filtros tangenciales de la industria vitivinícola y alimenticia en general. El Ácido Cítrico es un excelente neutralizante para la industria alimenticia. Gracias a sus propiedades de antioxidante y conservador se lo utiliza en la industria alimenticia y también como limpiador al combinarlo con Bicarbonato de Sodio.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido incoloro' },
        { label: 'Olor', value: 'Inodoro' },
        { label: 'pH', value: '1,5 +/- 0,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,15 +/- 0.05 g/cm³' },
      ],
      applications: [
        'Desarrollado como neutralizante integral para ser utilizado en filtros tangenciales de la industria vitivinícola y alimenticia en general.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 2 al 5 %, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar, posteriormente enjuagar.',
      materialCompatibility: 'Apto para todo tipo de membranas de filtración y superficies de acero inoxidable.',
      handlingAndStorage: 'Conservar en envase original cerrado en lugar fresco y seco.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 11. BIO DET ACID N (Desincrustante ácido a base de ácido nítrico) - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-det-acid-n',
    image: '/imgprod/bio-det-acid-n.jpeg',
    imageUrl: '/imgprod/bio-det-acid-n.jpeg',
    name: 'BIO DET ACID N',
    code: 'IQA-ACID-NITR',
    category: 'acidos',
    categoryLabel: 'Ácido Pasivante CIP',
    badge: 'ÁCIDO NÍTRICO CIP',
    badgeColor: 'bg-orange-600',
    canisterColor: '#ea580c',
    isBag: false,
    title: 'Desincrustante Ácido a Base de Ácido Nítrico no Fumante',
    tagline: 'Alto poder desincrustante y pasivante de superficies de acero inoxidable',
    description:
      'BIO DET ACID N es un detergente desincrustante ácido, de baja espuma, especialmente formulado para circuitos CIP. No fumante. Formulación a base de ácido nítrico que permite obtener una solución con alto poder desincrustante para eliminar los residuos inorgánicos de las superficies y actuar como pasivante del acero inoxidable sin generar humos o vapores.',
    features: [
      'Ácido nítrico estabilizado con fórmula no fumante',
      'Pasiva el acero inoxidable regenerando la capa de óxido de cromo',
      'Elimina incrustaciones inorgánicas y oxalato cálcico de cerveza y leche',
      'Dosificable automáticamente por conductividad (29 mS/cm al 1%)',
      'pH < 2 | Densidad: 1,30 ± 0,05 g/cm³ a 20°C',
    ],
    applications: [
      'Pasivado de acero inoxidable en instalaciones nuevas CIP',
      'Lavado ácido en túneles de lavado de botellas',
      'Desincrustación profunda en circuitos cerrados CIP',
      'Eliminación de piedra de leche y oxalato cálcico cervecero',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,5% - 1%', temperature: '20 - 60 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '1% - 2%', temperature: '40 - 65 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '2% - 3%', temperature: '50 - 70 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE reforzado', code: 'B20-ACIDN' },
      { size: '200 kg', packaging: 'Tambor sellado homologado', code: 'T200-ACIDN' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de seguridad', code: 'IBC-ACIDN' },
    ],
    benefits: [
      'No genera vapores nitrosos irritantes durante la dosificación',
      'Restaura la resistencia a la corrosión galvánica del acero inoxidable',
      'Económico y de alta concentración de materia activa',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316, PTFE y PVDF',
      'Incompatible con metales blandos, zinc, hierro y hormigón',
    ],
    technicalData: {
      pH: '< 2 (pH 5%: < 2)',
      density: '1,30 ± 0,05 g/cm³ a 20°C',
      appearance: 'Líquido limpio cristalino',
      conductivity: '29 mS/cm (solución al 1% a 25°C)',
      solubility: 'Totalmente soluble en agua',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET ACID N (Desincrustante ácido a base de ácido nítrico)',
      date: '24/02/2026',
      properties:
        'BIO DET ACID N es un detergente desincrustante ácido, de baja espuma, especialmente formulado para circuitos CIP. No fumante. BIO DET ACID N es una formulación a base de ácido nítrico que permite obtener una solución con alto poder desincrustante para eliminar los residuos inorgánicos de las superficies. También actúa como una pasivante de las superficies de acero inoxidable.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio cristalino' },
        { label: 'pH', value: '< 2' },
        { label: 'pH (5%)', value: '< 2' },
        { label: 'Densidad', value: '1,30 ± 0,05 g/cm³' },
        { label: 'Conductividad solución al 1% a 25°C', value: '29 mS/cm' },
      ],
      applications: [
        'Es un detergente de acción desincrustante y limpiadora que elimina la suciedad de tipo inorgánico. Es un producto adecuado para dosificar por conductividad de forma automática. Indicado para la eliminación de incrustaciones de origen inorgánico, incluido el oxalato cálcico (piedra de cerveza).',
        'Puede utilizarse para pasivar el acero inoxidable en instalaciones nuevas de CIP y lavado de botellas. Al ser un producto no espumante es adecuado para su utilización en los sistemas CIP, donde existen condiciones de alta presión y turbulencia. Ha sido formulado para evitar la formación de humos o vapores.',
      ],
      usageInstructions:
        'CIP: Aplicar el producto a una concentración de 0,5 - 3% en proporción variable según nivel de incrustación y grado de suciedad. Enjuagar con abundante agua potable.',
      materialCompatibility:
        'En la concentración recomendada es compatible con la mayoría de los materiales normalmente presentes en la industria alimenticia.',
      handlingAndStorage:
        'Conservar en los envases originales al resguardo de temperaturas extremas. Consultar la ficha de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 12. BIO DET DUO PLUS (Limpiador desinfectante alcalino solido) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-det-duo-plus',
    image: '/imgprod/bio-det-duo-plus.jpeg',
    imageUrl: '/imgprod/bio-det-duo-plus.jpeg',
    name: 'BIO DET DUO PLUS',
    code: 'IQA-DUO-PLUS',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido',
    badge: 'ALCALINO SÓLIDO POTASIO-SODIO',
    badgeColor: 'bg-blue-700',
    canisterColor: '#1e40af',
    isBag: true,
    title: 'Limpiador Desinfectante Alcalino Sólido Potasio y Sodio',
    tagline: 'Sinergia de sales de potasio y sodio para máxima saponificación en tanques y piletas',
    description:
      'Limpiador sólido alcalino desarrollado a base de sales de potasio y sodio que se utiliza como un limpiador integral en tanques, piletas y vasijas de la industria vitivinícola y alimenticia en general. Los hidróxidos de potasio y de sodio son precursores de los jabones con gran poder desengrasante y saponificante inmediato.',
    features: [
      'Combinación de sales alcalinas de potasio y sodio',
      'Alto poder corrosivo sobre tártaros y residuos grasos orgánicos',
      'Polvo blanco de rápida solubilidad a cualquier temperatura',
      'pH > 12 en disolución | Densidad: 1,25 ± 0,5 g/cm³',
      'Desarrollado para tanques, piletas y vasijas vitivinícolas',
    ],
    applications: [
      'Limpieza integral de tanques, piletas y vasijas de hormigón/inox',
      'Eliminación de tártaros y colorantes en bodegas',
      'Desengrase pesado en pisos y canaletas de faena',
      'Circuitos de desengrase por recirculación',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2%', temperature: 'Ambiente o tibia', contactTime: '5 - 10 min' },
      { dirtLevel: 'Media', concentration: '3% - 4%', temperature: 'Ambiente o tibia', contactTime: '10 min' },
      { dirtLevel: 'Pesada', concentration: '5%', temperature: '40 - 50 °C', contactTime: '10 - 15 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa industrial tricapa hermética', code: 'B25-DUOPLUS' },
      { size: '1000 kg', packaging: 'Big Bag con válvula de descarga', code: 'BB-DUOPLUS' },
    ],
    benefits: [
      'Rápida disolución sin dejar grumos ni sedimentos insolubles',
      'Menor tiempo de recirculación requerido (5 a 10 minutos)',
      'Excelente relación costo-rendimiento por kilo de materia activa',
    ],
    compatibility: [
      'Apto para acero inoxidable, revestimientos epoxi y resinas resistentes',
      'No utilizar en metales blandos o atacables por álcalis',
    ],
    technicalData: {
      pH: '> 12',
      density: '1,25 ± 0,5 g/cm³',
      appearance: 'Polvo blanco',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET DUO PLUS (Limpiador desifectante alcalino solido).',
      date: '29/12/2025',
      properties:
        'Limpiador sólido alcalino desarrollado a base de sales de potasio y sodio que se utiliza como un limpiador integral en tanques, piletas y vasijas de la industria vitivinícola y alimenticia en general. Los Hidróxidos de Potasio y de Sodio son precursores de los jabones, las propiedades corrosivas de ambos hidróxidos los convierten en ingredientes útiles en agentes y preparados que limpian superficies y materiales que pueden resistir por sí mismos la corrosión. Poseen un gran poder corrosivo, procede efectiva e inmediatamente frente a sustancias líquidas u otras materias orgánicas, por lo que resulta ser un elemento esencial a la hora de realizar ciertas labores de limpieza en el área industrial.',
      physicochemical: [
        { label: 'Aspecto', value: 'Polvo blanco' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH', value: '> 12' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,25 +/- 0,5 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques, piletas y vasijas, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución al 2 al 5%, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar por 5 o 10 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para superficies y materiales resistentes a la corrosión alcalina.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar seco y protegido de la humedad ambiental.',
      packaging: 'Bolsas de 25 kg y big bags de 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 13. BIO DET K45 (Limpiador Alcalino Líquido) - FECHA: 01/09/2026
  // =========================================================================
  {
    id: 'k45',
    image: '/imgprod/bio-det-k45.jpeg',
    imageUrl: '/imgprod/bio-det-k45.jpeg',
    name: 'BIO DET K45',
    code: 'IQA-BIO-K45',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Potásico',
    badge: 'HIDRÓXIDO DE POTASIO 29,5%',
    badgeColor: 'bg-blue-600',
    canisterColor: '#2563eb',
    isBag: false,
    title: 'Limpiador Alcalino Líquido a Base de Hidróxido de Potasio (29,5%)',
    tagline: 'Jabones y limpiadores más suaves y de mayor solubilidad para cañerías y filtros',
    description:
      'Limpiador líquido alcalino desarrollado a base de Hidróxido de potasio que se utiliza como un limpiador integral en cañerías y filtros de la industria vitivinícola y alimenticia en general. El Hidróxido de Potasio es un precursor de limpiadores más suaves que los de sodio y con mayor solubilidad, conteniendo mayor cantidad de agentes limpiadores activos.',
    features: [
      'Concentración de Hidróxido de Potasio garantizada: 29,5%',
      'Mayor solubilidad que bases de sodio, requiere menor agua de enjuague',
      'Líquido incoloro e inodoro, soluble en agua a cualquier temperatura',
      'pH (solución al 1%) > 12 | Densidad: 1,25 ± 0,05 g/cm³',
      'Específico para cañerías, tanques y sistemas de filtración',
    ],
    applications: [
      'Limpieza integral de cañerías y circuitos de trasiego de mosto/vino',
      'Filtros de placas y filtros lenticulares',
      'Tanques de acero inoxidable y cubas de fermentación',
      'Circuitos de embotellado y lavado de líneas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2% - 3%', temperature: 'Ambiente o tibia', contactTime: '10 - 20 min' },
      { dirtLevel: 'Media', concentration: '3% - 4%', temperature: 'Ambiente o tibia', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '4% - 5%', temperature: '40 - 55 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-K45' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-K45' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-K45' },
    ],
    benefits: [
      'Menor tendencia a formar depósitos minerales insolubles',
      'Mayor compatibilidad con aguas de alta dureza',
      'Enjuague más rápido y menor consumo hídrico',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316 y gomas sanitarias',
      'Incompatible con aluminio y metales no ferrosos blandos',
    ],
    technicalData: {
      pH: '> 12 (solución al 1%)',
      density: '1,25 ± 0,05 g/cm³',
      appearance: 'Líquido',
      color: 'Característico',
      odor: 'Inodoro',
      activeConcentration: '29,5% Hidróxido de Potasio',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET K45 (Limpiador Alcalino Líquido)',
      date: '01/09/2026',
      properties:
        'Limpiador líquido alcalino desarrollado a base de Hidróxido de potasio que se utiliza como un limpiador integral en cañerías y filtros de la industria vitivinícola y alimenticia en general. El Hidróxido de Potasio es un precursor de los jabones y limpiadores más suaves que los que contienen Hidróxido de Sodio. Debido a su suavidad y mayor solubilidad los jabones y limpiadores a base de Potasio no necesitan mucha agua para licuificarse, lo que hace que contengan mayor cantidad de agentes limpiadores que aquellos que contienen sodio.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido' },
        { label: 'Color', value: 'Característico' },
        { label: 'Olor', value: 'Inoloro' },
        { label: 'Concentración de Hidróxido de Potasio', value: '29,5 %' },
        { label: 'pH (solución al 1%)', value: '> 12' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,25 ± 0,05 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar cañerías y tanques, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 2 al 5%, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar entre 10 a 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para acero inoxidable y superficies industriales resistentes a álcalis.',
      handlingAndStorage: 'Conservar en envases originales al resguardo de temperaturas extremas.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 14. BIO DET K45 LQ (Detergente alcalino liquido) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-det-k45-lq',
    image: '/imgprod/bio-det-k45.jpeg',
    imageUrl: '/imgprod/bio-det-k45.jpeg',
    name: 'BIO DET K45 LQ',
    code: 'IQA-K45-LQ',
    category: 'alcalinos',
    categoryLabel: 'Detergente Alcalino Potásico',
    badge: 'ALCALINO POTÁSICO TENSIOACTIVO',
    badgeColor: 'bg-blue-500',
    canisterColor: '#3b82f6',
    isBag: false,
    title: 'Detergente Alcalino Líquido Potásico con Lauril Etoxi Sulfato',
    tagline: 'Potenciado con tensioactivos para máximo arrastre de grasas y depósitos complejos',
    description:
      'El BIO DET K45 LQ (referenciado también como K 75 LQ) es un detergente líquido alcalino desarrollado a base de Hidróxido de Potasio y el tensioactivo LAURIL ETOXI SULFATO DE SODIO que se utiliza como detergente limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. La combinación potencia la humectación y desprendimiento de suciedad.',
    features: [
      'Sinergia de Hidróxido de Potasio y Lauril Etoxi Sulfato de Sodio',
      'Mayor poder de humectación superficial y penetración en microgrietas',
      'Fácil solubilidad y menor necesidad de agua para licuificarse',
      'Líquido incoloro con pH (sol. 1%) > 12 | Densidad: 1,205 ± 0,10 g/cm³',
      'Ideal para tanques, piletas y cañerías',
    ],
    applications: [
      'Limpieza de tanques de vino, cubas y piletas de fermentación',
      'Cañerías y líneas de llenado de alimentos y bebidas',
      'Lavado de equipos de envasado y cintas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3%', temperature: 'Ambiente o tibia', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '3,5% - 4%', temperature: 'Ambiente o tibia', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '4% - 5%', temperature: '40 - 50 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-K45LQ' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-K45LQ' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-K45LQ' },
    ],
    benefits: [
      'Rompe tensiones superficiales facilitando el desprendimiento de grasa fría',
      'Acción tensioactiva de baja espuma controlada',
      'Rápido enjuague sin dejar velos sobre aceros pulidos',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316 y plásticos',
      'Evitar metales ligeros no resistentes a soluciones alcalinas',
    ],
    technicalData: {
      pH: '> 12 (solución al 1%)',
      density: '1,205 ± 0,10 g/cm³',
      appearance: 'Líquido',
      color: 'Incoloro',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET K45 LQ (Detergente alcalino liquido).',
      date: '29/12/2025',
      properties:
        'El BIO DET K 75 LQ es un detergente líquido alcalino desarrollado a base de Hidróxido de Potasio y un tensioactivo LAURIL ETOXI SULFATO DE SODIO que se utiliza como detergente limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido de Potasio es un precursor de los jabones y detergentes, y al adicionar un tensioactivo, se aumenta su poder limpiador. Debido a su fácil solubilidad no necesitan mucha agua, lo que hace que contengan mayor cantidad de agentes limpiadores.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido' },
        { label: 'Color', value: 'Incoloro' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH (solución al 1%)', value: '> 12' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,205 +/- 0,10 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar cañerías y tanques, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 3 al 5 %, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar entre 10 y 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de tanques y cañerías de acero inoxidable.',
      handlingAndStorage: 'Conservar en envase cerrado al resguardo de fuentes de calor directo.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 15. BIO DET K75 PLUS (Limpiador alcalino solido) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-det-k75-plus',
    image: '/imgprod/bio-det-k75-plus.jpeg',
    imageUrl: '/imgprod/bio-det-k75-plus.jpeg',
    name: 'BIO DET K75 PLUS',
    code: 'IQA-K75-PLUS',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido Potásico',
    badge: 'POTÁSICO SÓLIDO EN ESCAMAS',
    badgeColor: 'bg-indigo-600',
    canisterColor: '#4f46e5',
    isBag: true,
    title: 'Limpiador Alcalino Sólido en Perlas y Escamas de Potasio',
    tagline: 'Sales de potasio puras de máxima solubilidad y poder saponificante en seco',
    description:
      'Limpiador sólido alcalino desarrollado a base de sales de potasio que se utiliza como un limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido y Carbonato de Potasio son precursores de jabones más suaves y de mayor solubilidad que los de sodio, no requiriendo tanta agua para licuificarse.',
    features: [
      'Presentación sólida en polvo, perlas y escamas blancas',
      'Formulado a base de sales de potasio de altísima reactividad',
      'Densidad aparente: 2,15 ± 0,05 g/cm³ | pH (solución al 10%) > 12',
      'Disolución instantánea exotérmica en agua fría o tibia',
      'Desarrollado para tanques y piletas de gran volumen',
    ],
    applications: [
      'Remoción de tártaros pesados en tanques de fermentación y guarda',
      'Piletas de hormigón con revestimientos de pintura epoxi alimentaria',
      'Circuitos de desengrase térmico por recirculación',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2%', temperature: 'Ambiente', contactTime: '20 min' },
      { dirtLevel: 'Media', concentration: '3% - 4%', temperature: 'Ambiente o tibia', contactTime: '20 - 25 min' },
      { dirtLevel: 'Pesada', concentration: '5%', temperature: '45 - 60 °C', contactTime: '25 - 30 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa plástica tricapa hermética', code: 'B25-K75PLUS' },
      { size: '1000 kg', packaging: 'Big Bag con válvula inferior', code: 'BB-K75PLUS' },
    ],
    benefits: [
      'Menos residuos cáusticos insolubles en comparación con la soda cáustica convencional',
      'Excelente poder de arrastre sobre materia tartárica seca',
      'Transporte y estibaje compacto sin derrames de líquido',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304 y 316 y cerámicas',
      'No compatible con aluminio, estaño, plomo ni zinc',
    ],
    technicalData: {
      pH: '> 12 (solución al 10%)',
      density: '2,15 ± 0,05 g/cm³',
      appearance: 'Polvo en perlas y escamas',
      color: 'Blanco',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET K75 PLUS (Limpiador alcalino solido).',
      date: '29/12/2025',
      properties:
        'Limpiador sólido alcalino desarrollado a base de sales de potasio que se utiliza como un limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido de Potasio y el Carbonato de Potasio son precursores de los jabones y limpiadores más suaves que los que contienen Hidróxido de Sodio. Debido a su suavidad y mayor solubilidad los jabones y limpiadores a base de Potasio no necesitan mucha agua para licuificarse, lo que hace que contengan mayor cantidad de agentes limpiadores que aquellos que contienen sodio.',
      physicochemical: [
        { label: 'Aspecto', value: 'Polvo en perlas y escamas' },
        { label: 'Color', value: 'Blanco' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH (solución al 10%)', value: '> 12' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '2,15 +/- 0,05 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y piletas, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 2 al 5 %, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar entre 20 y 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de tanques y piletas resistentes a álcalis.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar seco y fresco.',
      packaging: 'Bolsas de 25 kg y big bags de 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 16. BIO DET Na45 (Limpiador liquido alcalino) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'na45',
    image: '/imgprod/bio-det-na45.jpeg',
    imageUrl: '/imgprod/bio-det-na45.jpeg',
    name: 'BIO DET Na45',
    code: 'IQA-BIO-NA45',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sódico Líquido',
    badge: 'ALCALINO SÓDICO LÍQUIDO',
    badgeColor: 'bg-blue-600',
    canisterColor: '#1d4ed8',
    isBag: false,
    title: 'Limpiador Líquido Alcalino a Base de Sales de Sodio',
    tagline: 'Máxima eficacia en remoción de residuos orgánicos, grasas y sedimentos en cañerías y filtros',
    description:
      'Limpiador líquido alcalino desarrollado a base de sales de sodio que se utiliza como un limpiador integral en cañerías y filtros de la industria vitivinícola y alimenticia en general. El Hidróxido de Sodio es precursor de jabones y detergentes con gran potencia saponificante para disolver materia grasa y orgánica sedimentada.',
    features: [
      'Formulado a base de sales de sodio de alta pureza técnica',
      'Gran poder saponificante y desengrasante para grasas y aceites',
      'pH (solución al 10%): 12,7 ± 0,5 | Densidad: 1,27 ± 0,1 g/cm³',
      'Disolución inmediata en agua a cualquier temperatura',
      'Uso en sistemas de recirculación con boquillas rotativas',
    ],
    applications: [
      'Cañerías, mangueras y filtros en bodegas e industrias de bebidas',
      'Tanques de maceración y clarificadores',
      'Intercambiadores de calor y pasteurizadores',
      'Líneas automáticas de llenado',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3%', temperature: '50 - 60 °C', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '4%', temperature: '60 - 70 °C', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '5%', temperature: '70 - 80 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-NA45' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-NA45' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-NA45' },
    ],
    benefits: [
      'Reduce tiempos de recirculación CIP en hasta un 35%',
      'Evita la re-deposición de materia saponificada',
      'Seguro sobre aceros inoxidables AISI 304 y 316',
    ],
    compatibility: [
      'Apto: Acero inoxidable, teflón, EPDM, viton y vidrio borosilicato',
      'Incompatible: Aluminio, zinc, cobre y galvanizados',
    ],
    technicalData: {
      pH: '12,7 ± 0,5 (solución al 10%)',
      density: '1,27 ± 0,1 g/cm³',
      appearance: 'Líquido',
      color: 'Incoloro',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET Na45 (Limpiador liquido alcalino).',
      date: '29/12/2025',
      properties:
        'Limpiador líquido alcalino desarrollado a base de sales de sodio que se utiliza como un limpiador integral en cañerías y filtros de la industria vitivinícola y alimenticia en general. El Hidróxido de Sodio es un precursor de los jabones y detergentes, más a efectivo que el Hidróxido de Potasio. Debido a su solubilidad los jabones y limpiadores a base de Sodio no necesitan mucha agua para licuificarse, lo que hace que contengan mayor cantidad de agentes limpiadores.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido' },
        { label: 'Color', value: 'Incoloro' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH (solución al 10%)', value: '12,7 +/- 0,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,27 +/- 0,1 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y piletas, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 3 al 5%, disolviendo el producto con agua limpia, incorporar la solución al proceso por recirculación con dispositivos de limpieza (en casos muy severos, usar menos diluido), dejarlo en contacto con la superficie a limpiar entre 10 y 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para acero inoxidable y superficies industriales resistentes a álcalis.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar seco y fresco.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 17. BIO DET Na 75 LQ (Detergente Líquido Alcalino) - FECHA: 17/09/2026
  // =========================================================================
  {
    id: 'bio-det-na75-lq',
    image: '/imgprod/bio-det-na-75-lq.jpeg',
    imageUrl: '/imgprod/bio-det-na-75-lq.jpeg',
    name: 'BIO DET Na 75 LQ',
    code: 'IQA-NA75-LQ',
    category: 'alcalinos',
    categoryLabel: 'Detergente Alcalino Sódico',
    badge: 'ALCALINO SÓDICO REFORZADO',
    badgeColor: 'bg-sky-600',
    canisterColor: '#0284c7',
    isBag: false,
    title: 'Detergente Líquido Alcalino con Lauril Etoxi Sulfato de Sodio',
    tagline: 'Tensioactivo potenciador de detergencia para tanques y piletas vitivinícolas',
    description:
      'El BIO DET Na 75 LQ es un detergente líquido alcalino desarrollado a base de Hidróxido de sodio y un tensioactivo LAURIL ETOXI SULFATO DE SODIO que se utiliza como detergente limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. Al adicionar el tensioactivo, se incrementa notablemente el poder limpiador y la capacidad humectante.',
    features: [
      'Sinergia de Hidróxido de Sodio con Lauril Etoxi Sulfato',
      'Desprende rápidamente películas oleosas y materia orgánica adherida',
      'Líquido incoloro con pH (solución al 1%): 12,7 ± 0,5',
      'Densidad a 20°C: 1,25 ± 0,10 g/cm³',
      'Fácil solubilidad que reduce el consumo de agua',
    ],
    applications: [
      'Limpieza en tanques y piletas de fermentación',
      'Cañerías, bombas y colectores de vendimia',
      'Superficies con presencia de grasa animal y vegetal',
      'Lavado de cajas cosecheras y bandejas plásticas',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3%', temperature: 'Ambiente o tibia', contactTime: '10 - 15 min' },
      { dirtLevel: 'Media', concentration: '3,5% - 4%', temperature: 'Ambiente o tibia', contactTime: '15 - 20 min' },
      { dirtLevel: 'Pesada', concentration: '4% - 5%', temperature: '45 - 60 °C', contactTime: '20 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-NA75LQ' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-NA75LQ' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de descarga', code: 'IBC-NA75LQ' },
    ],
    benefits: [
      'Penetra bajo la capa de biofilm acelerando el desprendimiento',
      'Deja superficies brillantes sin residuos blanquecinos',
      'Efectivo a temperatura ambiente o con leve calentamiento',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316 y plásticos resistentes',
      'No usar sobre superficies de aluminio o zinc',
    ],
    technicalData: {
      pH: '12,7 ± 0,5 (solución al 1%)',
      density: '1,25 ± 0,10 g/cm³',
      appearance: 'Líquido',
      color: 'Incoloro',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET Na 75 LQ (Detergente Líquido Alcalino)',
      date: '17/09/2026',
      properties:
        'El BIO DET Na 75 LQ es un detergente líquido alcalino desarrollado a base de Hidróxido de sodio y un tensioactivo LAURIL ETOXI SULFATO DE SODIO que se utiliza como detergente limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido de Sodio es un precursor de los jabones y detergentes, y al adicionar un tensioactivo, se aumenta su poder limpiador. Debido a su fácil solubilidad no necesita mucha agua, lo que hace que contenga mayor cantidad de agentes limpiadores.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido' },
        { label: 'Color', value: 'Incoloro' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH (solución al 1%)', value: '12,7 ± 0,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,25 ± 0,10 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y piletas, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución del 3 al 5%, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar entre 10 y 30 minutos y posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de tanques y piletas resistentes a soluciones alcalinas.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar ventilado y fresco.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 18. BIO DET Na75 PLUS (Limpiador alcalino solido) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'bio-det-na75-plus',
    image: '/imgprod/bio-det-na75-plus.jpeg',
    imageUrl: '/imgprod/bio-det-na75-plus.jpeg',
    name: 'BIO DET Na75 PLUS',
    code: 'IQA-NA75-PLUS',
    category: 'alcalinos',
    categoryLabel: 'Alcalino Sólido Sódico',
    badge: 'SODA SÓLIDA EN PERLAS',
    badgeColor: 'bg-blue-700',
    canisterColor: '#1d4ed8',
    isBag: true,
    title: 'Limpiador Alcalino Sólido en Perlas a Base de Sales de Sodio',
    tagline: 'Fórmula en perlas de alta densidad para lavado de tanques, piletas y vasijas',
    description:
      'Limpiador sólido alcalino desarrollado a base de sales de sodio que se utiliza como un limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido de Sodio en perlas es precursor de los jabones y detergentes, de gran potencia desengrasante y desincrustante de materia tartárica.',
    features: [
      'Perlas blancas de alta pureza cáustica sin polvo molesto',
      'Densidad aparente: 2,15 ± 0,5 g/cm³ | pH (sol. 10%): 12,1 ± 0,5',
      'Gran reactividad en disolución acuosa para desintegrar grasas',
      'Fácil dosificación directa en tinas de disolución',
      'Desarrollado para tanques, piletas y vasijas vitivinícolas',
    ],
    applications: [
      'Limpieza integral de tanques de vino y piletas de almacenamiento',
      'Lavado de vasijas de hormigón epoxiladas',
      'Desincrustación de sarro tartárico en bodegas',
      'Sistemas de recirculación CIP pesados',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '2%', temperature: 'Ambiente', contactTime: '20 min' },
      { dirtLevel: 'Media', concentration: '3% - 4%', temperature: 'Ambiente o tibia', contactTime: '20 - 25 min' },
      { dirtLevel: 'Pesada', concentration: '5%', temperature: '45 - 60 °C', contactTime: '25 - 30 min' },
    ],
    presentations: [
      { size: '25 kg', packaging: 'Bolsa plástica tricapa hermética', code: 'B25-NA75PLUS' },
      { size: '1000 kg', packaging: 'Big Bag con válvula de descarga', code: 'BB-NA75PLUS' },
    ],
    benefits: [
      'Perlas que no apelmazan y facilitan el pesaje exacto',
      'Excelente poder de saponificación sobre grasas y lípidos complejos',
      'Máxima economía por kilogramo de principio activo alcalino',
    ],
    compatibility: [
      'Apto para aceros inoxidables AISI 304, 316 y cerámicas industriales',
      'Incompatible con aluminio, bronce y metales atacables por sosa',
    ],
    technicalData: {
      pH: '12,1 ± 0,5 (solución al 10%)',
      density: '2,15 ± 0,5 g/cm³',
      appearance: 'Polvo en perlas',
      color: 'Blanco',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET Na75 PLUS (Limpiador alcalino solido).',
      date: '29/12/2025',
      properties:
        'Limpiador sólido alcalino desarrollado a base de sales de sodio que se utiliza como un limpiador integral en tanques y piletas de la industria vitivinícola y alimenticia en general. El Hidróxido de Sodio es un precursor de los jabones y detergentes, más a efectivo que el Hidróxido de Potasio. Debido a su solubilidad los jabones y limpiadores a base de Sodio no necesitan mucha agua para licuificarse, lo que hace que contengan mayor cantidad de agentes limpiadores.',
      physicochemical: [
        { label: 'Aspecto', value: 'Polvo en perlas' },
        { label: 'Color', value: 'Blanco' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH (solución al 10%)', value: '12,1 +/- 0,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '2,15 +/- 0,5 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y piletas, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Conforme a las necesidades, generalmente se debe preparar una solución al 2 al 5 %, incorporar la solución al proceso por recirculación con dispositivos de limpieza. En casos muy severos, usar menos diluido, dejándolo en contacto con la superficie a limpiar entre 20 y 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de superficies resistentes a álcalis cáusticos.',
      handlingAndStorage: 'Conservar en envase cerrado en lugar seco y alejado de la humedad.',
      packaging: 'Bolsas de 25 kg y big bags de 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 19. BIO DET OXI T (Líquido Desinfectante para tanques y filtros) - FECHA: 29/12/2025
  // =========================================================================
  {
    id: 'oxi-t',
    image: '/imgprod/bio-det-oxi-t.jpeg',
    imageUrl: '/imgprod/bio-det-oxi-t.jpeg',
    name: 'BIO DET OXI T',
    code: 'IQA-OXI-T',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Oxidante',
    badge: 'PERÓXIDO DE HIDRÓGENO',
    badgeColor: 'bg-teal-600',
    canisterColor: '#0d9488',
    isBag: false,
    title: 'Líquido Desinfectante Oxidante para Tanques y Filtros',
    tagline: 'Sustituto ecológico del cloro que no deja residuos nocivos ni altera aromas',
    description:
      'Líquido ácido a base de Peróxido de Hidrógeno desarrollado como un limpiador desinfectante integral para ser utilizado en tanques y filtros tangenciales de la industria vitivinícola y alimenticia en general. Oxidante fuerte compatible con el medio ambiente, deja poco o ningún residuo y no forma subproductos nocivos. Ataca lípidos y proteínas de membranas celulares dificultando la germinación de esporas y microorganismos.',
    features: [
      'Formulado a base de Peróxido de Hidrógeno estabilizado',
      'Sustituto ecológico del cloro sin olor clorado ni subproductos nocivos',
      'Eficaz incluso a bajas temperaturas y en envasado aséptico',
      'pH (solución al 10%): 2,5 ± 0,5 | Densidad: 1,10 ± 0,05 g/cm³',
      'Totalmente soluble en agua a cualquier temperatura',
    ],
    applications: [
      'Desinfección de tanques de fermentación, cubas y filtros tangenciales',
      'Esterilización de recipientes de envasado aséptico',
      'Tratamiento microbiológico en circuitos cerrados de bodega',
      'Líneas de embotellado y lavado de picos dosificadores',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1% - 1,5%', temperature: 'Ambiente o frío', contactTime: '20 min' },
      { dirtLevel: 'Media', concentration: '2% - 2,5%', temperature: 'Ambiente o frío', contactTime: '20 - 25 min' },
      { dirtLevel: 'Pesada', concentration: '3% - 4%', temperature: 'Ambiente o frío', contactTime: '25 - 30 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE con venteo', code: 'B20-OXIT' },
      { size: '200 kg', packaging: 'Tambor sellado ventilado', code: 'T200-OXIT' },
      { size: '1000 kg', packaging: 'Contenedor IBC ventilado', code: 'IBC-OXIT' },
    ],
    benefits: [
      'Se descompone únicamente en agua y oxígeno puro',
      'No contamina el vino, cerveza ni leche con olores residuales',
      'Asegura la prolongación de la vida útil de los productos envasados',
    ],
    compatibility: [
      'Compatible con aceros inoxidables AISI 304, 316, vidrio, PTFE y PVDF',
      'Evitar contacto con metales pesados o sustancias reductoras',
    ],
    technicalData: {
      pH: '2,5 ± 0,5 (solución al 10%)',
      density: '1,10 ± 0,05 g/cm³',
      appearance: 'Líquido incoloro',
      odor: 'Característico',
      solubility: 'Se disuelve en agua a cualquier temperatura',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO DET OXI T (Líquido Desinfectante para tanques y filtros)',
      date: '29/12/2025',
      properties:
        'Líquido ácido a base de Peróxido de Hidrógeno desarrollado como un limpiador desinfectante integral para ser utilizado en tanques y filtros tangenciales de la industria vitivinícola y alimenticia en general. Se sabe que el Peróxido de Hidrógeno es un oxidante fuerte lo que lo hace un excelente aliado para la desinfección de superficies y que cada día se usa más como sustituto del cloro. Cuenta con propiedades compatibles con el medio ambiente, deja poco o ningún residuo y no forma subproductos nocivos. Es un antiséptico general, su mecanismo de acción se debe a sus efectos oxidantes que permiten atacar una amplia variedad de compuestos orgánicos, como lípidos y proteínas de las membranas celulares de los microorganismos, dificultando la germinación de esporas anaerobias, por ejemplo. Posee un gran poder corrosivo, procede efectiva e inmediatamente frente a sustancias líquidas u otras materias orgánicas, aún en estado de congelación, por lo que resulta ser un elemento esencial a la hora de realizar ciertas labores de limpieza en el área industrial, como por ejemplo esterilizar los recipientes de envasado aséptico para prolongar la vida útil de los productos.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido incoloro' },
        { label: 'Olor', value: 'Característico' },
        { label: 'pH solución al 10%', value: '2,5 +/- 0,5' },
        { label: 'Solubilidad', value: 'Se disuelve en agua a cualquier temperatura' },
        { label: 'Densidad', value: '1,10 +/- 0.05 g/cm³' },
      ],
      applications: [
        'Es recomendado para todo tipo de limpieza en general, muy especialmente en los casos que se debe limpiar tanques y filtros, pero sirve de igual manera para todo tipo de superficies.',
      ],
      usageInstructions:
        'Se debe preparar una solución desde el 1 al 4 %, conforme a las necesidades, disolviendo el producto con agua limpia, incorporar la solución al proceso por recirculación con dispositivos de limpieza, dejar actuar (Tiempo de Contacto) de 20 a 30 minutos, posteriormente enjuagar muy bien con abundante agua limpia.',
      materialCompatibility: 'Apto para todo tipo de tanques y filtros de acero inoxidable.',
      handlingAndStorage: 'Conservar en envase cerrado ventilado, protegido del calor y luz solar.',
      packaging: 'Bidones plásticos con válvula de alivio 20 kg, tambores 200 kg, IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // 20. BIO FOAM ACID (Detergente espumante ácido) - FECHA: 24/02/2026
  // =========================================================================
  {
    id: 'bio-foam-acid',
    image: '/imgprod/bio-foam-acid.jpeg',
    imageUrl: '/imgprod/bio-foam-acid.jpeg',
    name: 'BIO FOAM ACID',
    code: 'IQA-FOAM-ACID',
    category: 'espumigenos',
    categoryLabel: 'Espumígeno Ácido',
    badge: 'ESPUMA ÁCIDA DESINCRUSTANTE',
    badgeColor: 'bg-purple-600',
    canisterColor: '#9333ea',
    isBag: false,
    title: 'Detergente Espumante Ácido para Eliminación de Incrustaciones',
    tagline: 'Espuma ácida de alta persistencia contra depósitos minerales, cal y piedra de leche',
    description:
      'BIO FOAM ACID es un limpiador de elevada acidez, formulado para eliminar suciedad de naturaleza inorgánica, especialmente las incrustaciones de depósitos minerales como los de la cal del agua o la piedra de leche y otras suciedades. Adecuado para instalaciones, equipos, paredes, suelos, cintas transportadoras, bancos y mesas de trabajo.',
    features: [
      'Elevada acidez formulada para desincrustación mineral por espuma',
      'Elimina eficazmente depósitos de cal, sarro y piedra de leche (milkstone)',
      'Excelente retención en planos verticales mediante equipos generadores de espuma',
      'Conductividad solución al 1% a 25°C: 17 mS/cm | Densidad: 1,35 ± 0,05 g/cm³',
      'pH < 2 (pH 5%: 1,5 a 2,5) de acción desincrustante profunda',
    ],
    applications: [
      'Limpieza ácida por espuma de cintas transportadoras, tolvas y mesas',
      'Paredes y azulejos con depósitos salinos o sarro en industrias lácteas y cárnicas',
      'Exterior de pasteurizadores, tanques y equipos de ordeño',
      'Inmersión de utensilios y partes desmontables',
    ],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '3%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '4% - 5%', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '5% - 6%', temperature: 'Ambiente', contactTime: '15 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-FOAMACID' },
      { size: '200 kg', packaging: 'Tambor sellado para ácidos', code: 'T200-FOAMACID' },
      { size: '1000 kg', packaging: 'Contenedor IBC con válvula de seguridad', code: 'IBC-FOAMACID' },
    ],
    benefits: [
      'Disuelve velozmente incrustaciones minerales sin vapores asfixiantes',
      'La espuma aumenta el tiempo de contacto en zonas verticales de difícil acceso',
      'Apto para aplicación con cañones de espuma o lavado manual por cepillado',
    ],
    compatibility: [
      'Apto para todo tipo de aceros inoxidables en la industria alimentaria',
      'No puede aplicarse sobre suelos de cemento u hormigón, ni superficies atacables por ácidos como terrazo, mármol, mosaico y piedras naturales',
    ],
    technicalData: {
      pH: '< 2 (pH 5%: 1,5 a 2,5)',
      density: '1,35 ± 0,05 g/cm³ a 20°C',
      appearance: 'Líquido limpio cristalino',
      conductivity: '17 mS/cm (solución al 1% a 25°C)',
      solubility: 'Totalmente soluble en agua',
      biodegradable: true,
    },
    officialTechSheet: {
      officialName: 'BIO FOAM ACID (Detergente espumante ácido para eliminación de incrustaciones)',
      date: '24/02/2026',
      properties:
        'BIO FOAM ACID es un limpiador de elevada acidez, formulado para eliminar suciedad de naturaleza inorgánica, especialmente las incrustaciones de depósitos minerales como los de la cal del agua o la piedra de leche y otras suciedades.',
      physicochemical: [
        { label: 'Aspecto', value: 'Líquido limpio cristalino' },
        { label: 'pH', value: '< 2' },
        { label: 'pH (5%)', value: '1,5 a 2,5' },
        { label: 'Densidad a 20° C', value: '1,35 ± 0,05 g/cm³' },
        { label: 'Conductividad solución al 1% a 25°C', value: '17 mS/cm' },
      ],
      applications: [
        'Adecuado para la limpieza de todas las superficies presentes en industrias de procesado de alimentos, tanto de instalaciones como de utensilios de trabajo, equipos, paredes, suelos, cintas transportadoras, utensilios, bancos y mesas de trabajo.',
      ],
      usageInstructions:
        'Equipos generadores de espuma: Aclarar previamente la zona a limpiar con agua a presión para eliminar los restos groseros. Cubrir la zona a limpiar con producto en una proporción entre el 3% y el 6%. Aplicar en forma de espuma, dejar actuar durante un mínimo de 15 minutos y a continuación aclarar bien con abundante agua potable.\nManual: Diluir a una proporción entre el 3% y el 6%, según la suciedad presente. Utilizar un estropajo o cepillo. Frotar y dejar actuar durante 15 minutos. Aclarar.\nInmersión: Introducir pequeños utensilios en una dilución de entre el 3% y el 6%, en función de la suciedad e incrustaciones que presenten durante unos 15 minutos. Después sacar del baño y frotar con un estropajo o cepillo. Aclarar.',
      materialCompatibility:
        'Apto para todo tipo de aceros inoxidables. No puede aplicarse sobre suelos de cemento u hormigón, ni sobre superficies que sean atacables por ácidos como terrazo, mármol, mosaico y piedras naturales.',
      handlingAndStorage:
        'Conservar en el envase original, alejado de temperaturas extremas. Consultar la ficha de datos de seguridad.',
      packaging: 'Bidones HDPE 20 kg, tambores 200 kg y contenedores IBC 1000 kg.',
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },

  // =========================================================================
  // ADDITIONAL MATERIAS PRIMAS & ESPECIALIDADES (COMPATIBILIDAD CON ESCENARIOS)
  // =========================================================================
  {
    id: 'soda-caustica-50',
    image: '/imgprod/bio-det-alka.jpeg',
    imageUrl: '/imgprod/bio-det-alka.jpeg',
    name: 'Soda Cáustica 50%',
    code: 'IQA-MP-SC50',
    category: 'materia_prima',
    categoryLabel: 'Materia Prima / Álcali',
    badge: 'MATERIA PRIMA',
    badgeColor: 'bg-blue-800',
    canisterColor: '#1e3a8a',
    isBag: false,
    title: 'Hidróxido de Sodio en Solución Acuosa al 50%',
    tagline: 'Materia prima de máxima pureza para formulación y limpieza pesada',
    description: 'Solución acuosa de hidróxido de sodio al 50% p/p para usos industriales en desengrase, saponificación y formulación química.',
    features: ['Concentración garantizada 50% p/p', 'Grado industrial alimentario', 'Densidad: 1.52 g/cm³'],
    applications: ['Saponificación y desengrase alcalino', 'Regulación de pH', 'Formulación CIP'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '1%', temperature: '60 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '2%', temperature: '70 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '3%', temperature: '80 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '30 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B30-SC50' },
      { size: '250 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T250-SC50' },
      { size: '1500 kg', packaging: 'Contenedor IBC reforzado', code: 'IBC-SC50' },
    ],
    benefits: ['Máxima reactividad química directa', 'Control de pureza por lote certificado'],
    compatibility: ['Acero inoxidable, PTFE, polietileno. Incompatible con aluminio, zinc y latón'],
    technicalData: {
      pH: '14.0 (extremo)',
      density: '1.52 g/cm³ a 20°C',
      appearance: 'Líquido viscoso incoloro a ligeramente opalescente',
      solubility: '100% soluble con desprendimiento exotérmico de calor',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'acido-fosforico-85',
    image: '/imgprod/bio-det-acid.jpeg',
    imageUrl: '/imgprod/bio-det-acid.jpeg',
    name: 'Ácido Fosfórico 85%',
    code: 'IQA-MP-AF85',
    category: 'materia_prima',
    categoryLabel: 'Materia Prima / Ácido',
    badge: 'MATERIA PRIMA',
    badgeColor: 'bg-red-800',
    canisterColor: '#991b1b',
    isBag: false,
    title: 'Ácido Fosfórico Técnico Grado Alimentario 85%',
    tagline: 'Ácido mineral inorgánico para pasivación, desincrustación y ajuste de pH',
    description: 'Ácido fosfórico concentrado al 85% para limpieza química, formulaciones desincrustantes y tratamientos de superficies de acero inoxidable.',
    features: ['Pureza mínima 85.0% H3PO4', 'Baja corrosividad relativa en acero inoxidable', 'Densidad: 1.68 g/cm³'],
    applications: ['Desincrustación de sales de calcio y magnesio', 'Ajuste de pH en mostos y bebidas', 'Pasivado de soldaduras sanitarias'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,5% - 1%', temperature: '40 - 50 °C', contactTime: '15 min' },
      { dirtLevel: 'Media', concentration: '1% - 2%', temperature: '50 - 60 °C', contactTime: '20 min' },
      { dirtLevel: 'Pesada', concentration: '2% - 3,5%', temperature: '60 - 70 °C', contactTime: '30 min' },
    ],
    presentations: [
      { size: '35 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B35-AF85' },
      { size: '300 kg', packaging: 'Tambor sellado para ácidos concentrados', code: 'T300-AF85' },
      { size: '1600 kg', packaging: 'Contenedor IBC homologado', code: 'IBC-AF85' },
    ],
    benefits: ['Eficaz acción desincrustante', 'No genera humos asfixiantes'],
    compatibility: ['Acero inoxidable AISI 304 y 316, plásticos. Incompatible con hierro dulce y galvanizado'],
    technicalData: {
      pH: '< 1.0 (ácido concentrado)',
      density: '1.68 g/cm³ a 20°C',
      appearance: 'Líquido viscoso límpido transparente',
      solubility: '100% soluble en agua',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'hipoclorito-sodio-100',
    image: '/imgprod/bio-det-cl.jpeg',
    imageUrl: '/imgprod/bio-det-cl.jpeg',
    name: 'Hipoclorito de Sodio 100 g/l',
    code: 'IQA-MP-HS100',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Clorado',
    badge: 'CLORADO PURO',
    badgeColor: 'bg-emerald-700',
    canisterColor: '#047857',
    isBag: false,
    title: 'Hipoclorito de Sodio al 10% (100 g Cloro Activo / Litro)',
    tagline: 'Desinfección de amplio espectro, tratamiento de aguas y blanqueo industrial',
    description: 'Solución acuosa estabilizada de hipoclorito de sodio con concentración de 100 g de cloro activo por litro para saneamiento profundo.',
    features: ['Cloro activo inicial: mín. 100 g/L', 'Estabilizado para retardar la descomposición térmica', 'Rápida acción viricida y bactericida'],
    applications: ['Desinfección de superficies y pisos', 'Cloración de aguas de proceso', 'Blanqueo de piezas'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,1% - 0,2% (100 - 200 ppm)', temperature: 'Ambiente', contactTime: '10 min' },
      { dirtLevel: 'Media', concentration: '0,5% (500 ppm)', temperature: 'Ambiente', contactTime: '15 min' },
      { dirtLevel: 'Pesada', concentration: '1% - 2% (1000 - 2000 ppm)', temperature: 'Ambiente', contactTime: '20 min' },
    ],
    presentations: [
      { size: '24 kg', packaging: 'Bidón plástico apilable HDPE con tapón con válvula', code: 'B24-HS100' },
      { size: '240 kg', packaging: 'Tambor sellado ventilado', code: 'T240-HS100' },
      { size: '1200 kg', packaging: 'Contenedor IBC ventilado', code: 'IBC-HS100' },
    ],
    benefits: ['Desinfección confiable y máxima concentración efectiva'],
    compatibility: ['Polietileno, PVC, PTFE, titanio. Incompatible con ácidos y metales atacables'],
    technicalData: {
      pH: '12.0 ± 0.5',
      density: '1.16 g/cm³',
      appearance: 'Líquido amarillento claro característico',
      solubility: 'Total',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
  {
    id: 'sanitex-forte',
    image: '/imgprod/bio-ap32.jpeg',
    imageUrl: '/imgprod/bio-ap32.jpeg',
    name: 'Sanitex Forte',
    code: 'IQA-STX-FORTE',
    category: 'desinfectantes',
    categoryLabel: 'Desinfectante Superficies',
    badge: 'DESINFECTANTE TERMINAL',
    badgeColor: 'bg-emerald-600',
    canisterColor: '#059669',
    isBag: false,
    title: 'Desinfectante Terminal sin Enjuague para Alimentos',
    tagline: 'Fórmula balanceada para sanitización rápida de equipos y líneas de fraccionamiento',
    description: 'Desinfectante formulado para aplicación terminal sin enjuague en concentraciones de uso, ideal para líneas de llenado y envasado.',
    features: ['Eficacia bactericida certificada', 'No requiere enjuague a dosis reglamentarias', 'Secado rápido'],
    applications: ['Picos de llenadoras y tapadoras', 'Cintas de transporte', 'Superficies de corte y mesadas'],
    dosageTable: [
      { dirtLevel: 'Ligera', concentration: '0,2% - 0,4%', temperature: 'Ambiente', contactTime: '5 min' },
      { dirtLevel: 'Media', concentration: '0,5% - 0,8%', temperature: 'Ambiente', contactTime: '10 min' },
      { dirtLevel: 'Pesada', concentration: '1,0%', temperature: 'Ambiente', contactTime: '15 min' },
    ],
    presentations: [
      { size: '20 kg', packaging: 'Bidón plástico apilable HDPE', code: 'B20-STX' },
      { size: '200 kg', packaging: 'Tambor sellado con tapón de seguridad', code: 'T200-STX' },
    ],
    benefits: ['Permite iniciar la producción inmediatamente tras el secado'],
    compatibility: ['Acero inoxidable, plásticos sanitarios, gomas'],
    technicalData: {
      pH: '6.5 ± 0.5 (neutro)',
      density: '1.02 g/cm³',
      appearance: 'Líquido incoloro',
      solubility: '100% soluble',
      biodegradable: true,
    },
    hasTechSheet: true,
    hasSafetySheet: true,
  },
];

const ALIASES: Product[] = [
  { ...BASE_PRODUCTS.find((p) => p.id === 'bio-foam')!, id: 'foam-plus' },
  { ...BASE_PRODUCTS.find((p) => p.id === 'bio-det-acid')!, id: 'acid' },
  { ...BASE_PRODUCTS.find((p) => p.id === 'bio-det-na75-plus')!, id: 'na75-plus' },
  { ...BASE_PRODUCTS.find((p) => p.id === 'bio-foam-cl')!, id: 'foam-clor-20' },
  { ...BASE_PRODUCTS.find((p) => p.id === 'bio-foam-acid')!, id: 'foam-acid-15' },
  { ...BASE_PRODUCTS.find((p) => p.id === 'hipoclorito-sodio-100')!, id: 'clor-liq-100' },
];

export const OFFICIAL_PRODUCTS: Product[] = [...BASE_PRODUCTS, ...ALIASES];


