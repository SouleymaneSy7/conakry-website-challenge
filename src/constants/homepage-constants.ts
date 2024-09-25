import {
  FacebookIcon,
  InstragramIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/Icons.component";

// Types
export type NavBarListTypes = {
  id: number;
  navBarListElementTitle: string;
  navBarListElementPath: string;
}[];

export type HeroSectionTypes = {
  heroTitle: string;
  heroBtnText: string;
};

export type ExploreSectionType = {
  explorerTitle: string;
  explorerDescription: string;
};

export type ExploreCardsTypes = {
  id: number;
  cardTitle: string;
  cardDescription: string;
  cardBtn: string;
}[];

export type discoverSectionTypes = {
  discoverTitle: string;
  discoverDescription: string;
};

export type CommuneSectionTypes = {
  communeTitle: string;
  communeDescription: string;
};

export type CommuneSliderTypes = {
  id: number;
  sliderTitle: string;
  sliderDescription: string;
}[];

export type EvenementSectionTypes = {
  evenementTitle: string;
  evenementDescription: string;
};

export type EvenementCardsType = {
  id: number;
  evenementCardTitle: string;
  evenementCardDate: string;
  evenementCardDescription: string;
  evenementCardBtn: string;
}[];

export type FooterLinksTypes = {
  id: number;
  linkTitle: string;
  linkList: string[];
}[];

export type FooterNewsletterTypes = {
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterInputPlaceholder: string;
  newsletterBtn: string;
};

// Navbar
const navBarList: NavBarListTypes = [
  {
    id: 0,
    navBarListElementTitle: "Accueil",
    navBarListElementPath: "/",
  },
  {
    id: 1,
    navBarListElementTitle: "Destination",
    navBarListElementPath: "/destination",
  },
  {
    id: 2,
    navBarListElementTitle: "Histoire",
    navBarListElementPath: "/history",
  },
  {
    id: 3,
    navBarListElementTitle: "Contactez-nous",
    navBarListElementPath: "/contacts",
  },
];

const navBarBtn = "Découvrir Conakry";

// Hero Section
const heroSection: HeroSectionTypes = {
  heroTitle:
    "Plongez au coeur de la culture africaine - Conakry, un berceau de traditions et de créativité.",
  heroBtnText: "Explorer les attractions touristiques",
  // heroImage: heroImg,
};

// Explore Section
const exploreSection: ExploreSectionType = {
  explorerTitle: "Explorer des Endroits",
  explorerDescription:
    "Conakry regorge de lieux à explorer. Partez à la découverte de ces endroits et laissez-vous surprendre par la diversité de la ville.",
};

const exploreCards: ExploreCardsTypes = [
  {
    id: 11,
    // cardImage: ,
    cardTitle: "Îles de Loos",
    cardDescription:
      "L'archipel comprend trois îles : Tamara 'la sauvage', Room 'la tranquille' et Kassa 'la fêtarde'. Trois îles qu'il faut prendre le temps de découvrir tant leur beauté sauvage est préservée et la pêche, leur atout principal.",
    cardBtn: "Visiter",
  },
  {
    id: 12,
    // cardImage: ,
    cardTitle: "Îles de Loos",
    cardDescription:
      "L'archipel comprend trois îles : Tamara 'la sauvage', Room 'la tranquille' et Kassa 'la fêtarde'. Trois îles qu'il faut prendre le temps de découvrir tant leur beauté sauvage est préservée et la pêche, leur atout principal.",
    cardBtn: "Visiter",
  },
];

// Decouvrer Section
const discoverSection: discoverSectionTypes = {
  discoverTitle: "Découvrez Conakry en Vidéo",
  discoverDescription:
    "Plongez au cœur de Conakry à travers cette vidéo immersive qui met en lumière la beauté naturelle, la richesse culturelle et l’énergie vibrante de notre ville. Des plages dorées aux quartiers animés, des marchés traditionnels aux paysages enchanteurs, laissez-vous emporter par un voyage unique à la découverte de Conakry.Visionnez la vidéo et explorez une ville où chaque coin de rue raconte une histoire, et où la nature se mêle harmonieusement à un patrimoine culturel vivant. ",
  // decouvrerVideo: ,
};

// Commune Section
const communeSection: CommuneSectionTypes = {
  communeTitle: "A Propos des Communes de Conakry",
  communeDescription:
    "Découvrez les cinq communes principales de Conakry à travers une carte interactive détaillée. Chacune de ces communes possède une identité unique, offrant un mélange de culture, de patrimoine et de services essentiels. Naviguez à travers ces quartiers dynamiques et apprenez-en plus sur ce qui rend chaque commune spéciale.",
};

const communeSlider: CommuneSliderTypes = [
  {
    id: 21,
    sliderTitle: "Commune de Kaloum",
    sliderDescription:
      "Le cœur historique et administratif de Conakry. Kaloum abrite les institutions gouvernementales, les principaux bureaux d’affaires, ainsi que des sites emblématiques comme le Palais du Peuple et le Port Autonome de Conakry.",
  },
  {
    id: 22,
    sliderTitle: "Commune de Ratoma",
    sliderDescription:
      "Le cœur historique et administratif de Conakry. Kaloum abrite les institutions gouvernementales, les principaux bureaux d’affaires, ainsi que des sites emblématiques comme le Palais du Peuple et le Port Autonome de Conakry.",
  },
];

// Evenement Section
const evenementSection: EvenementSectionTypes = {
  evenementTitle: "Événements à venir à Conakry",
  evenementDescription:
    "Découvrez les événements culturels, festifs et officiels qui marquent la vie dynamique de Conakry. Que vous soyez passionné de culture, amateur de musique ou intéressé par l’histoire, ne manquez pas ces moments clés de l’année !",
};

const evenementSectionBtn = "Voir plus";

const evenementCards: EvenementCardsType = [
  {
    id: 31,
    // evenementCardImg: ,
    evenementCardTitle: "Anniversaire de l’Indépendance de la Guinée",
    evenementCardDate: "2 Octobre 2024",
    evenementCardDescription:
      "Commémoration de l’indépendance de la Guinée avec des cérémonies officielles, des défilés militaires et des festivités populaires à travers toute la ville. Un moment fort d'unité et de fierté nationale.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 32,
    // evenementCardImg: ,
    evenementCardTitle: "Salon International du Livre de Conakry (SILC)",
    evenementCardDate: "Novembre 2024",
    evenementCardDescription:
      "Conakry, Capitale Mondiale du Livre en 2017, continue de célébrer la littérature à travers ce salon. Des auteurs locaux et internationaux y participent, offrant conférences, ateliers et séances de dédicaces.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 33,
    // evenementCardImg: ,
    evenementCardTitle: "Conakry Fashion Week",
    evenementCardDate: "Août 2024",
    evenementCardDescription:
      "La semaine de la mode à Conakry présente les créations des stylistes guinéens et africains. Cet événement attire des designers, des influenceurs et des amateurs de mode de tout le continent.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 34,
    // evenementCardImg: ,
    evenementCardTitle: "Conakry Fashion Week",
    evenementCardDate: "Août 2024",
    evenementCardDescription:
      "La semaine de la mode à Conakry présente les créations des stylistes guinéens et africains. Cet événement attire des designers, des influenceurs et des amateurs de mode de tout le continent.",
    evenementCardBtn: "Réserver votre place",
  },
];

// Footer
const footerLinks: FooterLinksTypes = [
  {
    id: 41,
    linkTitle: "Decouvrir Conakry",
    linkList: [
      "Guides et expériences",
      "Manger et boire",
      "Où séjourner",
      "Activités",
    ],
  },
  {
    id: 42,
    linkTitle: "Information pour les visiteurs",
    linkList: [
      "Bienvenue à Conakry",
      "Météo et climat",
      "Tourisme",
      "Transports",
    ],
  },
];

const footerNewsletter: FooterNewsletterTypes = {
  newsletterTitle: "Restez connecté avec Conakry !",
  newsletterDescription:
    "Recevez les dernières nouvelles, événements et mises à jour directement dans votre boîte de réception.",
  newsletterInputPlaceholder: "Entrez votre e-mail",
  newsletterBtn: "Rejoindre la newsletter",
};

const footerSocialIcons = [
  FacebookIcon,
  InstragramIcon,
  TwitterIcon,
  TikTokIcon,
  YoutubeIcon,
];

const footerCopyright =
  "© 2024 - Ville de Conakry - Guinée. Tous droits réservés.";

export {
  navBarList,
  navBarBtn,
  heroSection,
  exploreSection,
  exploreCards,
  discoverSection,
  communeSection,
  communeSlider,
  evenementSection,
  evenementSectionBtn,
  evenementCards,
  footerLinks,
  footerNewsletter,
  footerCopyright,
  footerSocialIcons,
};
