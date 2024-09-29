import {
  FacebookIcon,
  InstragramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/Icons.component";
import {
  bookImg,
  fashionWeek,
  festival,
  heroImg,
  IleImg,
  independanceImg,
  PalmCamayeneImg,
  plageRogbaneImg,
} from "./images-constants";

// Types
export type NavBarListTypes = {
  id: number;
  navBarListElementTitle: string;
  navBarListElementPath: string;
}[];

export type HeroSectionTypes = {
  heroTitle: string;
  heroBtnText: string;
  heroImage: string;
};

export type ExploreSectionType = {
  explorerTitle: string;
  explorerDescription: string;
};

export type ExploreCardsTypes = {
  id: number;
  cardImage: string;
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

export type communeMapMarkersTypes = {
  name: string;
  position: number[];
  description: string;
}[];

export type EvenementSectionTypes = {
  evenementTitle: string;
  evenementDescription: string;
};

export type EvenementCardsType = {
  id: number;
  evenementCardImg: string;
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
  heroImage: heroImg,
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
    cardImage: IleImg,
    cardTitle: "Îles de Loos",
    cardDescription:
      "L'archipel comprend trois îles : Tamara 'la sauvage', Room 'la tranquille' et Kassa 'la fêtarde'. Trois îles qu'il faut prendre le temps de découvrir tant leur beauté sauvage est préservée et la pêche, leur atout principal.",
    cardBtn: "Visiter",
  },
  {
    id: 13,
    cardImage: PalmCamayeneImg,
    cardTitle: "Hôtel - Palm Camayenne",
    cardDescription:
      "Ce luxueux hôtel propose des chambres avec vue sur l’océan Atlantique, un spa, une piscine, et une gastronomie haut de gamme. Une véritable oasis en plein cœur de la ville.",
    cardBtn: "Visiter",
  },
  {
    id: 14,
    cardImage:plageRogbaneImg ,
    cardTitle: "Plage de Rogbané",
    cardDescription:
      "Située au nord de Conakry, cette plage est populaire pour ses magnifiques couchers de soleil et ses ambiances décontractées. Un lieu idéal pour les balades en bord de mer et les pique-niques.",
    cardBtn: "Visiter",
  },
];

// Decouvrer Section
const discoverSection: discoverSectionTypes = {
  discoverTitle: "Découvrez Conakry en Vidéo",
  discoverDescription:
    "Plongez au cœur de Conakry à travers cette vidéo immersive qui met en lumière la beauté naturelle, la richesse culturelle et l’énergie vibrante de notre ville. Des plages dorées aux quartiers animés, des marchés traditionnels aux paysages enchanteurs, laissez-vous emporter par un voyage unique à la découverte de Conakry.Visionnez la vidéo et explorez une ville où chaque coin de rue raconte une histoire, et où la nature se mêle harmonieusement à un patrimoine culturel vivant. ",
  // discoverVideo: ,
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
    sliderTitle: "Commune de Dixinn",
    sliderDescription:
      "Un pôle éducatif et résidentiel important, Dixinn est connue pour ses universités, dont l’Université de Conakry. C’est aussi ici que se trouve le Stade du 28 Septembre, l’un des lieux sportifs les plus célèbres du pays.",
  },
  {
    id: 23,
    sliderTitle: "Commune de Matam",
    sliderDescription:
      "Un quartier commercial et résidentiel, Matam offre un mélange de marchés traditionnels et d’industries locales. Découvrez les petites entreprises artisanales qui font partie du tissu économique local.",
  },
  {
    id: 24,
    sliderTitle: "Commune de Ratoma",
    sliderDescription:
      "Ratoma est une zone en plein essor, connue pour sa population jeune et ses nombreux quartiers résidentiels. C’est un carrefour de la culture et de l’innovation, avec une scène artistique florissante et des initiatives locales dynamiques.",
  },
  {
    id: 25,
    sliderTitle: "Commune de Matoto",
    sliderDescription:
      "La plus grande commune de Conakry, Matoto est un centre industriel et commercial majeur. Elle abrite également l’aéroport international de Conakry, la porte d’entrée pour de nombreux visiteurs étrangers.",
  },
];

const communeMapMarkers: communeMapMarkersTypes = [
  {
    name: "Kaloum",
    position: [9.5149641, -13.7084413],
    description:
      "Kaloum – Le Cœur Historique et Administratif. Kaloum, située sur la presqu’île, est le centre administratif et historique de Conakry. On y trouve les institutions gouvernementales, les ambassades, ainsi que les grandes entreprises. Connue pour son architecture coloniale et ses bâtiments emblématiques, Kaloum est le cœur battant de la capitale.",
  },
  {
    name: "Matam",
    position: [9.5450927, -13.6646999],
    description:
      "Matam – Le Carrefour Culturel et Commercial. Matam est un quartier principalement résidentiel, mais qui abrite également des zones commerciales importantes. Connu pour sa diversité, Matam est un carrefour culturel où se mélangent traditions guinéennes et influences modernes. La mosquée Fayçal, la plus grande mosquée de Guinée, y est située.",
  },
  {
    name: "Dixinn",
    position: [9.5471058, -13.6729364],
    description:
      "Dixinn – Le Poumon Universitaire. Dixinn abrite certaines des institutions les plus importantes de Conakry, dont l’Université Gamal Abdel Nasser. Ce quartier dynamique est aussi un centre pour les jeunes, avec de nombreux événements culturels et sportifs. Dixinn est à la fois résidentiel et universitaire.",
  },
  {
    name: "Matoto",
    position: [9.618061, -13.5889068],
    description:
      "Matoto – La Porte d’Entrée de Conakry. Matoto est la plus grande commune de Conakry en termes de superficie. C’est ici que se trouve l’aéroport international de Gbessia, porte d’entrée de la Guinée. Matoto est un centre d’affaires en plein essor, avec une population croissante et des quartiers en pleine expansion.",
  },
  {
    name: "Ratoma",
    position: [9.6306334, -13.6078389],
    description:
      "Ratoma – Le Dynamisme de la Jeunesse. Ratoma est la commune la plus peuplée et l'une des plus dynamiques. Ce quartier résidentiel attire les jeunes et les familles, avec ses nombreux marchés, ses écoles, et ses lieux de divertissement. C’est ici que se trouve la célèbre plage de Rogbané, prisée pour ses festivals et événements en plein air.",
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
    evenementCardImg: independanceImg ,
    evenementCardTitle: "Anniversaire de l’Indépendance de la Guinée",
    evenementCardDate: "2 Octobre 2024",
    evenementCardDescription:
      "Commémoration de l’indépendance de la Guinée avec des cérémonies officielles, des défilés militaires et des festivités populaires à travers toute la ville. Un moment fort d'unité et de fierté nationale.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 32,
    evenementCardImg: bookImg,
    evenementCardTitle: "Salon International du Livre de Conakry (SILC)",
    evenementCardDate: "Novembre 2024",
    evenementCardDescription:
      "Conakry, Capitale Mondiale du Livre en 2017, continue de célébrer la littérature à travers ce salon. Des auteurs locaux et internationaux y participent, offrant conférences, ateliers et séances de dédicaces.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 33,
    evenementCardImg: festival,
    evenementCardTitle: "Festival National des Arts et de la Culture (FENAC)",
    evenementCardDate: "Mars 2025",
    evenementCardDescription:
      "Célébration de la diversité culturelle guinéenne à travers des performances artistiques, des expositions d’artisanat et des danses traditionnelles. Un rendez-vous incontournable pour découvrir les talents locaux et l'héritage culturel du pays.",
    evenementCardBtn: "Réserver votre place",
  },
  {
    id: 34,
    evenementCardImg: fashionWeek,
    evenementCardTitle: "Conakry Fashion Week",
    evenementCardDate: "Août 2025",
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
  communeMapMarkers,
  evenementSection,
  evenementSectionBtn,
  evenementCards,
  footerLinks,
  footerNewsletter,
  footerCopyright,
  footerSocialIcons,
};
