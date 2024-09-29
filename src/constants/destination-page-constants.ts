import {
  adventureImg,
  barPlageImg,
  cultureImg,
  excursionImg,
  festival,
  festivalNationalImg,
  IleImg,
  independanceImg,
  jardinBotanique,
  kayak,
  madinaImg,
  marathonImg,
  monumentMartyrImg,
  museeImg,
  NatureImg,
  plageTwoImg,
  randonnerImg,
  soirDjImg,
  vieNocturne,
  villeConakryImg,
} from "./images-constants";
import clubMusicImg from "@/assets/images/dance-nuit.jpg";

// Types
export type DestinationHeroSectionContentsTypes = {
  heroImg: string;
  heroTitle: string;
  heroDescription: string;
  heroBtn: string;
};

export type CardsTypes = {
  id: number;
  cardImg: string;
  cardTitle: string;
  cardDescription: string;
  cardBtn: string;
}[];

// Hero Section
const destinationHeroSectionContents: DestinationHeroSectionContentsTypes = {
  heroImg: villeConakryImg,
  heroTitle:
    "Découvrez Conakry – Le carrefour culturel et naturel de la Guinée.",
  heroDescription:
    "Entre plages immaculées, marchés vibrants et sites historiques, Conakry est une ville pleine de surprises. Préparez-vous à découvrir le cœur battant de la Guinée.",
  heroBtn: "Planifiez votre visite",
};

// Nature
const natureCards: CardsTypes = [
  {
    id: 10,
    cardImg: plageTwoImg,
    cardTitle: "Plages de Rogbané",
    cardDescription:
      "Lieu idéal pour profiter du soleil et des couchers de soleil spectaculaires.",
    cardBtn: "Visiter",
  },
  {
    id: 11,
    cardImg: IleImg,
    cardTitle: "Îles de Kassa",
    cardDescription:
      "Excursion en bateau vers l'île de Kassa pour découvrir des plages isolées et des villages de pêcheurs authentiques.",
    cardBtn: "Visiter",
  },
  {
    id: 12,
    cardImg: jardinBotanique,
    cardTitle: "Jardin Botanique de Conakry",
    cardDescription:
      "Une oasis de verdure en plein cœur de la ville pour une pause nature.",
    cardBtn: "Visiter",
  },
];

// Culture
const cultureCards: CardsTypes = [
  {
    id: 21,
    cardImg: museeImg,
    cardTitle: "Musée National de Sandervalia",
    cardDescription:
      "Découvrez l’art et l’histoire de la Guinée à travers des expositions uniques.",
    cardBtn: "Visiter",
  },
  {
    id: 22,
    cardImg: monumentMartyrImg,
    cardTitle: "Monument aux Martyrs",
    cardDescription: "Un hommage aux héros de l'indépendance guinéenne.",
    cardBtn: "Visiter",
  },
  {
    id: 23,
    cardImg: madinaImg,
    cardTitle: "Grand Marché de Madina",
    cardDescription:
      "Le plus grand marché de Conakry, où vous pourrez acheter de l'artisanat local et des tissus traditionnels.",
    cardBtn: "Visiter",
  },
];

// Evenement
const destinationEvenementCards: CardsTypes = [
  {
    id: 31,
    cardImg: festivalNationalImg,
    cardTitle: "Festival National des Arts",
    cardDescription:
      "Un événement culturel majeur qui réunit des artistes et des musiciens de tout le pays.",
    cardBtn: "Visiter",
  },
  {
    id: 32,
    cardImg: marathonImg,
    cardTitle: "Le Marathon de Conakry",
    cardDescription:
      "Un événement sportif international qui attire des coureurs du monde entier.",
    cardBtn: "Visiter",
  },
  {
    id: 33,
    cardImg: independanceImg,
    cardTitle: "La Fête de l'Indépendance (2 octobre)",
    cardDescription:
      "Une célébration incontournable de l’indépendance de la Guinée, avec des défilés et des spectacles partout dans la ville",
    cardBtn: "Visiter",
  },
];

// Adventure
const adventureCards: CardsTypes = [
  {
    id: 51,
    cardImg: randonnerImg,
    cardTitle: "Randonnée sur l’île de Roume",
    cardDescription:
      "Une escapade naturelle avec des vues panoramiques sur l'océan Atlantique.",
    cardBtn: "Visiter",
  },
  {
    id: 52,
    cardImg: kayak,
    cardTitle: "Kayak et sports nautiques",
    cardDescription:
      "Activités disponibles autour des plages de Conakry et des îles de Loos.",
    cardBtn: "Visiter",
  },
  {
    id: 53,
    cardImg: excursionImg,
    cardTitle: "Excursion au Mont Kakoulima",
    cardDescription:
      "Montagne voisine, idéale pour les randonnées et l’observation de la faune locale.",
    cardBtn: "Visiter",
  },
];

// Nocturne
const nocturneCards: CardsTypes = [
  {
    id: 61,
    cardImg: barPlageImg,
    cardTitle: "Bars en bord de plage",
    cardDescription:
      "Profitez d'une ambiance détendue avec des cocktails et de la musique en direct.",
    cardBtn: "En savoir plus",
  },
  {
    id: 62,
    cardImg: clubMusicImg,
    cardTitle: "Clubs de musique live",
    cardDescription:
      "Écoutez des groupes locaux et des performances de musique guinéenne traditionnelle. ",
    cardBtn: "En savoir plus",
  },
  {
    id: 63,
    cardImg: soirDjImg,
    cardTitle: "Soirées DJ dans les clubs",
    cardDescription:
      "Les lieux les plus branchés pour danser toute la nuit au rythme de la musique moderne.",
    cardBtn: "En savoir plus",
  },
];

const destinationContents = [
  {
    id: 1,
    classNames: "nature",
    title:
      "Détendez-vous sur les plages paradisiaques et découvrez la nature sauvage de Conakry.",
    description:
      "Conakry est entourée par des plages époustouflantes et des paysages naturels à couper le souffle. Que ce soit pour une journée de farniente ou une excursion à travers les îles environnantes, vous serez charmé par la beauté naturelle de la région.",
    img: NatureImg,
    cards: natureCards,
  },
  {
    id: 2,
    classNames: "culture",
    title:
      "Plongez dans l'histoire riche et les traditions vivantes de Conakry.",
    description:
      "De son passé colonial à sa culture contemporaine, Conakry regorge de trésors historiques et culturels. Que vous soyez passionné par l’histoire ou curieux des traditions guinéennes, vous trouverez de quoi éveiller votre curiosité",
    img: cultureImg,
    cards: cultureCards,
  },
  {
    id: 3,
    classNames: "evenement",
    title:
      "Participez aux festivals et célébrations qui font vibrer Conakry tout au long de l'année.",
    description:
      "Conakry est une ville vivante avec une scène culturelle dynamique. Chaque année, de nombreux événements et festivals célèbrent la musique, l’art, et les traditions guinéennes. Ne manquez pas ces moments uniques où la ville s’anime comme jamais.",
    img: festival,
    cards: destinationEvenementCards,
  },
  {
    id: 4,
    classNames: "adventure",
    title:
      "Vivez des expériences uniques entre nature, aventure et découvertes à Conakry.",
    description:
      "Conakry offre des activités variées pour les amateurs d'aventure. Que vous soyez en quête de randonnées, de sports nautiques ou d’exploration, la ville et ses environs vous offrent de multiples opportunités de loisirs",
    img: adventureImg,
    cards: adventureCards,
  },
  {
    id: 5,
    classNames: "nocturne",
    title: "Vie nocturne et divertissement",
    description:
      "Découvrez la vie nocturne animée de Conakry, des bars branchés aux boîtes de nuit traditionnelles.",
    img: vieNocturne,
    cards: nocturneCards,
  },
];

export { destinationHeroSectionContents, destinationContents };
