import {
  Ruler,
  Building2,
  HardHat,
  Waves,
  Map,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  /** Background image for the service card on the Home page and the image on the Services page.
   *  Replace this URL with any image you like — both places update automatically. */
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'surveying-mapping',
    title: 'Surveying & Mapping',
    shortDescription: 'Precise land measurement, boundary determination, and topographic mapping.',
    description:
      'Our surveying and mapping services form the foundation of every land and infrastructure project. Using total stations, GNSS/GPS receivers, and drone photogrammetry, we deliver millimetre-accurate cadastral surveys, topographic maps, and site plans that meet both legal and engineering requirements.',
    icon: Ruler,
    image: '/images/home/core-services/3.jpeg',
    features: [
      'Cadastral & boundary surveys',
      'Topographic & contour mapping',
      'GPS/GNSS control surveys',
      'Drone photogrammetry',
      'Site & layout plans',
      'As-built surveys',
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    shortDescription: 'Property sourcing, acquisition, advisory, and management services.',
    description:
      'We guide clients through every stage of property acquisition and disposal — from land sourcing and title verification to negotiation and documentation. Our real-estate team ensures every transaction is legally sound, properly documented, and aligned with your investment objectives.',
    icon: Building2,
    image: 'https://images.pexels.com/photos/10964081/pexels-photo-10964081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Land sourcing & verification',
      'Property sales & leasing',
      'Investment advisory',
      'Title verification (C of O, Governor\'s Consent)',
      'Property management',
      'Valuation services',
    ],
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering Works',
    shortDescription: 'Roads, drainage, foundations, and infrastructure built to standard.',
    description:
      'From road construction and drainage systems to foundations and site development, our civil engineering team delivers projects that meet Nigerian and international standards. We manage every phase from design through construction supervision, ensuring quality, safety, and timely delivery.',
    icon: HardHat,
    image: 'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Road & pavement construction',
      'Drainage & storm-water systems',
      'Foundation design & construction',
      'Site development & grading',
      'Retaining walls & structures',
      'Construction supervision',
    ],
  },
  {
    slug: 'hydrography',
    title: 'Hydrography',
    shortDescription: 'Underwater surveying and bathymetric mapping for coastal and inland waters.',
    description:
      'Our hydrographic survey services map the underwater topography of rivers, lagoons, and coastal waters. Using echo sounders and GNSS positioning, we produce bathymetric charts and water-depth data essential for dredging, port development, and environmental monitoring.',
    icon: Waves,
    image: 'https://images.pexels.com/photos/16059618/pexels-photo-16059618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Bathymetric surveys',
      'Water-depth measurement',
      'Shoreline & coastal mapping',
      'Dredging support surveys',
      'Underwater topography',
      'Tidal & current studies',
    ],
  },
  {
    slug: 'gis',
    title: 'Geographical Information System (GIS)',
    shortDescription: 'Spatial data collection, analysis, and mapping for decision-making.',
    description:
      'We build GIS solutions that turn geographic data into actionable intelligence. From spatial database design and data capture to custom map production and analysis, our GIS services support urban planning, environmental management, utilities, and land administration.',
    icon: Map,
    image: 'https://images.pexels.com/photos/5306430/pexels-photo-5306430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Spatial data capture & digitization',
      'GIS database design',
      'Thematic & custom mapping',
      'Land-use analysis',
      'Utility & infrastructure mapping',
      'Web GIS & interactive maps',
    ],
  },
  {
    slug: 'land-documentation',
    title: 'Land Documentation',
    shortDescription: 'Title processing, survey plans, and regulatory documentation.',
    description:
      'Navigating Nigerian land documentation can be complex. We handle the full spectrum of title processing — from survey plans and deed assignments to Certificate of Occupancy and Governor\'s Consent applications — ensuring your land rights are properly documented and legally protected.',
    icon: FileText,
    image: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Survey plan processing',
      'Certificate of Occupancy (C of O)',
      'Governor\'s Consent',
      'Deed of assignment & conveyance',
      'Land registry search & verification',
      'Development permit processing',
    ],
  },
];

export interface ProjectItem {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Lekki Coastal Bathymetric Survey',
    category: 'Hydrography',
    location: 'Lekki, Lagos',
    description: 'Comprehensive underwater survey of 15 km of coastline to support erosion-control planning and dredging operations.',
    image: 'https://images.pexels.com/photos/15069312/pexels-photo-15069312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Ibeju-Lekki Estate Layout & Survey',
    category: 'Surveying & Mapping',
    location: 'Ibeju-Lekki, Lagos',
    description: 'Topographic survey and site layout plan for a 120-acre residential estate, including boundary demarcation and road alignment.',
    image: 'https://images.pexels.com/photos/9751100/pexels-photo-9751100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Lakowe Access Road Construction',
    category: 'Civil Engineering',
    location: 'Lakowe, Lagos',
    description: 'Design and construction of a 2.5 km access road with drainage channels connecting to the Golf Course Road corridor.',
    image: 'https://images.pexels.com/photos/38462882/pexels-photo-38462882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Epe Land Title Regularization',
    category: 'Land Documentation',
    location: 'Epe, Lagos',
    description: 'Processed 40+ Certificates of Occupancy and Governor\'s Consent for a community land regularisation initiative.',
    image: 'https://images.pexels.com/photos/7567600/pexels-photo-7567600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Lagos Lagoon GIS Mapping Project',
    category: 'GIS',
    location: 'Lagos',
    description: 'Created a comprehensive GIS database of land use and environmental features around the Lagos lagoon for urban planning authorities.',
    image: 'https://images.pexels.com/photos/33998346/pexels-photo-33998346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Ibeju-Lekki Property Development Portfolio',
    category: 'Real Estate',
    location: 'Ibeju-Lekki, Lagos',
    description: 'Sourced, verified, and acquired 25 plots of land for a private investor portfolio with full title documentation.',
    image: 'https://images.pexels.com/photos/30094324/pexels-photo-30094324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const companyInfo = {
  name: 'ADS Transnational Field Services Ltd',
  tagline: 'Precision Surveying. Trusted Land Solutions.',
  address:
    'Unlimited Business Zone Plaza, Suite 37 Nazareth, Along Golf Course Road, Lakowe, Ibeju-Lekki, Lagos, Nigeria',
  phones: ['08023813245', '08066964396'],
  email: 'adstransnational@gmail.com',
  whatsapp: '2348023813245',
  shortAddress: 'Lakowe, Ibeju-Lekki, Lagos, Nigeria',
};
