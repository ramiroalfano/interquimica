export type ProductCategory =
  | 'alcalinos'
  | 'acidos'
  | 'neutros'
  | 'espumigenos'
  | 'desinfectantes'
  | 'materia_prima'
  | 'todos';

export interface DosageRow {
  dirtLevel: 'Ligera' | 'Media' | 'Pesada';
  concentration: string;
  temperature: string;
  contactTime: string;
}

export interface ProductPresentation {
  size: string;
  packaging: string;
  code: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  category: ProductCategory;
  categoryLabel: string;
  badge: string;
  badgeColor: string; // e.g. 'bg-blue-600', 'bg-red-600', 'bg-emerald-600', 'bg-amber-600'
  canisterColor: string; // hex for visual container accent: '#2563eb', '#10b981', '#ef4444', '#d97706', '#8b5cf6'
  title: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  dosageNote?: string;
  dosageTable: DosageRow[];
  presentations: ProductPresentation[];
  benefits: string[];
  compatibility: string[];
  technicalData: {
    pH: string;
    density: string;
    appearance: string;
    solubility: string;
    biodegradable: boolean;
  };
  hasTechSheet: boolean;
  hasSafetySheet: boolean;
  imageUrl?: string;
}

export interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  code?: string;
  iconName: string;
  commonProblem: string;
  recommendedSolution: string;
  suggestedProductIds: string[];
  downloads: {
    title: string;
    type: 'protocol' | 'techsheet';
    filename: string;
  }[];
}

export interface InteractiveScene {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  bgImage: string;
  hotspots: Hotspot[];
}

export interface IndustryArea {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string;
  suggestedProductIds: string[];
}

export interface Industry {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  heroImage: string;
  description: string;
  fullDescription: string;
  areas: IndustryArea[];
}

export interface AcademyLesson {
  id: string;
  title: string;
  duration: string;
  moduleIndex: number;
  totalModules: number;
  learningPoints: string[];
  steps: {
    stepNumber: number;
    title: string;
    detail: string;
  }[];
  downloadableResources: {
    name: string;
    type: string;
    size: string;
  }[];
}

export interface AcademyCourse {
  id: string;
  title: string;
  category: string;
  industry: string;
  modulesCount: number;
  durationMinutes: number;
  progressPercent: number;
  status: 'en_progreso' | 'no_iniciado' | 'completado';
  image: string;
  description: string;
  currentLesson?: AcademyLesson;
}

export interface Certificate {
  id: string;
  courseTitle: string;
  issueDate: string;
  credentialId: string;
}

export interface TrainingLiveEvent {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  instructor: string;
  instructorRole: string;
  seatsLeft: number;
}

export interface CartItem {
  product: Product;
  presentation: string;
  quantity: number;
}
