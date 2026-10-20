import {
  Product,
  Industry,
  InteractiveScene,
  AcademyCourse,
  Certificate,
  TrainingLiveEvent,
} from '../types.ts';
import { OFFICIAL_PRODUCTS } from './productsData.ts';

// Direct imports for Vite asset bundling in production & development
import banner1Img from '../assets/images/banner1.webp';
import banner2Img from '../assets/images/banner2.webp';
import banner3Img from '../assets/images/banner3.webp';
import banner4Img from '../assets/images/banner4.webp';
import banner5Img from '../assets/images/banner5.webp';
import banner6Img from '../assets/images/banner6.webp';
import industryVitivinicolaImg from '../assets/images/industry_vitivinicola_1791476679148.jpg';
import industryLacteaImg from '../assets/images/industry_lactea_1791476688425.jpg';
import industryOlivesImg from '../assets/images/industry_olives_conveyor_1791476700534.jpg';
import industryPapeleraImg from '../assets/images/industry_papelera_1791476709581.jpg';
import industryGeneralImg from '../assets/images/industry_general_1791476718928.jpg';
import interquimicaSvg from '../assets/images/interquimica.svg';
import industrialProcessDiagramImg from '../assets/images/industrial_process_diagram_1791565701189.jpg';

// Image paths generated from prompt references (bundled via Vite)
export const IMAGES = {
  banner1: banner1Img, // Frigorífico / Cold room
  banner2: banner2Img, // Bodega / Wine barrels
  banner3: banner3Img, // Olivícola / Olive oil bottling line
  banner4: banner4Img, // Línea de jugos / Juice bottling line
  banner5: banner5Img, // Operario espuma / Foam sanitizing
  banner6: banner6Img, // Cervecería / Brewery cellar
  interquimica: interquimicaSvg, // Exact process diagram graphic
  processDiagram: industrialProcessDiagramImg, // Panoramic realistic equipment matching user reference
  heroBreweryCellar: banner6Img,
  operatorFoam: banner5Img,
  bottlingConveyor: banner4Img,
  frigorificoCold: banner1Img,
  oliveOilFacility: banner3Img,
  wineCellar: banner2Img,
  industryVitivinicola: industryVitivinicolaImg,
  industryLactea: industryLacteaImg,
  industryOlives: industryOlivesImg,
  industryPapelera: industryPapeleraImg,
  industryGeneral: industryGeneralImg,
};

export const PRODUCTS: Product[] = OFFICIAL_PRODUCTS;

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
  {
    id: 'papelera',
    name: 'Papelera',
    shortName: 'Papelera',
    icon: 'Layers',
    heroImage: IMAGES.industryPapelera,
    description:
      'Productos para la limpieza de equipos, rodillos, circuitos y sistemas en la industria del papel.',
    fullDescription:
      'Fórmulas químicas de alto rendimiento para el acondicionamiento y lavado continuo de fieltros y telas, control de pitch y adhesivos, pasivación y desincrustación de circuitos de pulpa y papel.',
    areas: [
      {
        id: 'fieltros-telas',
        name: 'Lavado de fieltros y telas de formación',
        icon: 'Layers',
        description: 'Detergentes de alta humectación para eliminar resinas, finos y adhesivos.',
        details: 'Recupera la permeabilidad y porosidad de los fieltros sin degradar las fibras sintéticas.',
        suggestedProductIds: ['ac32', 'na45'],
      },
      {
        id: 'circuitos-pasta',
        name: 'Circuitos de pasta y desincrustación',
        icon: 'Workflow',
        description: 'Tratamiento ácido y alcalino para remover carbonato cálcico y depósitos minerales.',
        details: 'Mantiene las cañerías y tinas de mezcla libres de incrustaciones inorgánicas.',
        suggestedProductIds: ['acid-c30', 'na75-plus'],
      },
    ],
  },
  {
    id: 'industria-general',
    name: 'Industria en general',
    shortName: 'Industria en general',
    icon: 'Factory',
    heroImage: IMAGES.industryGeneral,
    description:
      'Soluciones versátiles para múltiples procesos e industrias que requieren limpieza y desinfección efectiva.',
    fullDescription:
      'Amplia gama de soluciones desengrasantes, limpiadores neutros y alcalinos, inhibidores de corrosión y sanitizantes versátiles para plantas manufactureras, talleres, metalmecánica y procesos continuos.',
    areas: [
      {
        id: 'desengrase-piezas',
        name: 'Desengrase de piezas y maquinaria',
        icon: 'Factory',
        description: 'Soluciones desengrasantes para grasas minerales, aceites de corte y lubricantes.',
        details: 'Rápido desprendimiento por inmersión o aspersión sin atacar componentes metálicos.',
        suggestedProductIds: ['ac32', 'na45'],
      },
      {
        id: 'pisos-talleres',
        name: 'Limpieza de pisos industriales y plantas',
        icon: 'Grid',
        description: 'Detergentes alcalinos concentrados para pisos de hormigón, resinas y baldosas.',
        details: 'Disuelve huellas de neumáticos, derrames oleosos y suciedad sedimentada.',
        suggestedProductIds: ['foam-plus', 'ac32'],
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
        x: 25,
        y: 62,
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
        y: 78,
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
        y: 58,
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
        y: 58,
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
        y: 79,
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
        y: 75,
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
        name: 'Recepción de carne',
        x: 13,
        y: 58,
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
        x: 26,
        y: 68,
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
        y: 48,
        code: 'SD-01',
        iconName: 'Knife',
        commonProblem:
          'Acumulación de materia orgánica, grasas y proteínas que favorecen la proliferación bacteriana, generan olores desagradables y riesgo de contaminación cruzada.',
        recommendedSolution:
          'Limpieza alcalina y desinfección de alto desempeño para eliminar residuos, controlar la carga microbiana y asegurar la inocuidad en áreas de contacto con la carne.',
        suggestedProductIds: ['na45', 'sanitex-forte', 'oxi-t'],
        downloads: [
          { title: 'Protocolo de limpieza – Sala de desposte', type: 'protocol', filename: 'Protocolo_Desposte.pdf' },
          { title: 'Ficha técnica del proceso', type: 'techsheet', filename: 'Ficha_Tecnica_Desposte.pdf' },
        ],
      },
      {
        id: 'lineas-proceso',
        name: 'Líneas de proceso',
        x: 61,
        y: 52,
        code: 'LP-03',
        iconName: 'Lines',
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
        x: 57,
        y: 69,
        code: 'CT-05',
        iconName: 'Conveyor',
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
        name: 'Pisos y superficies',
        x: 37,
        y: 78,
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
        y: 62,
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
        y: 58,
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
        y: 58,
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
        y: 66,
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
        y: 68,
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
        y: 80,
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
    bgImage: IMAGES.banner2,
    hotspots: [
      {
        id: 'barricas-madera',
        name: 'Barricas de roble',
        x: 8,
        y: 78,
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
        x: 26,
        y: 59,
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
        id: 'linea-fraccionamiento-bodega',
        name: 'Línea de fraccionamiento',
        x: 22,
        y: 74,
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
        id: 'filtros-tangenciales-bodega',
        name: 'Filtros tangenciales',
        x: 36,
        y: 71,
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
        id: 'embotellado-bodega',
        name: 'Embotellado',
        x: 51,
        y: 71,
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
        y: 60,
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
        y: 58,
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
        y: 68,
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
