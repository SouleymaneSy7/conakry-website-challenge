type FAQTypes = {
  faqTitle: string;
  faqContents: {
    id: number;
    faqQuestion: string;
    faqResponse: string;
  }[];
};

const FAQ: FAQTypes = {
  faqTitle: "Foire aux Questions (FAQ)",
  faqContents: [
    {
      id: 0,
      faqQuestion: "Quelle est la meilleure période pour visiter Conakry ?",
      faqResponse:
        "La meilleure période pour visiter Conakry se situe entre novembre et avril, pendant la saison sèche, quand les températures sont agréables et les pluies rares.",
      // faqIcon: ,
    },
    {
      id: 1,
      faqQuestion: "Quels sont les monuments historiques à visiter ?",
      faqResponse:
        "Ne manquez pas le Palais du Peuple, la Grande Mosquée Fayçal, et le Musée National pour découvrir le patrimoine historique et culturel de la ville.",
      // faqIcon: ,
    },
    {
      id: 2,
      faqQuestion: "Quels sont les moyens de transport disponibles à Conakry ?",
      faqResponse:
        "À Conakry, vous pouvez vous déplacer en taxi collectif, moto-taxi, ou en bus public. Des services de taxi privés sont également disponibles via des applications mobiles.",
      // faqIcon: ,
    },

    {
      id: 3,
      faqQuestion: " Y a-t-il un système de transports publics réguliers ?",
      faqResponse:
        "Oui, la ville dispose d’un réseau de bus qui dessert les principales communes. Cependant, il est souvent plus pratique d’utiliser des taxis collectifs ou des motos-taxis pour des trajets plus rapides.",
      // faqIcon: ,
    },

    {
      id: 4,
      faqQuestion: "Où puis-je trouver des parcs ou espaces verts à Conakry ?",
      faqResponse:
        "Le Jardin Botanique de Conakry est l’un des principaux espaces verts de la ville. Vous pouvez également visiter les plages environnantes comme la plage de Rogbané pour profiter de la nature.",
      // faqIcon: ,
    },
  ],
};

export { FAQ };
