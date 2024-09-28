import Button from "./Buttons";
import Container from "./Container";
import { historyIntroduction } from "@/constants/history-page-constants";

const HistoryMain = () => {
  const { historyTitle, historyIntro } = historyIntroduction;

  return (
    <Container as={"main"} className="history-main | container">
      <div className="history__intro">
        <h1>{historyTitle}</h1>
        <p>{historyIntro}</p>
      </div>

      <div>
        <h2>Étymologie</h2>
        <p>
          Selon une légende, à l'origine, il y avait dans l'
          <a href="#">
            <strong>île Tombo</strong>
          </a>
          , non loin de l'actuel port, un framager géant sous lequel un paysan{" "}
          <a href="#">
            <strong>baga</strong>
          </a>{" "}
          du nom de{" "}
          <a href="#">
            <strong>Cona</strong>
          </a>{" "}
          avait construit sa case. Sa palmeraie produisait le meilleur{" "}
          <a href="#">
            <strong>vin de palme</strong>
          </a>{" "}
          de l'île; les gens de{" "}
          <a href="#">
            <strong>Kaporo</strong>
          </a>{" "}
          venaient donc boire sous le fromager de Cona. Ils disaient alors:«Je
          vais chez Cona, sur l'autre rive{" "}
          <a href="#">
            <strong>(nakiri)</strong>
          </a>{" "}
          ». Ainsi, par contraction, le lieu devint{" "}
          <a href="#">
            <strong>Conakry</strong>
          </a>{" "}
          .
        </p>
      </div>

      <div>
        <h2>Situation</h2>

        <p>
          Située au sud-ouest de la Guinée, sur la presqu'
          <a href="#">
            <strong>île de Camayenne</strong>
          </a>{" "}
          , près des{" "}
          <a href="#">
            <strong>îles de Loos</strong>
          </a>
          , l'agglomération de Conakry s'étend sur la plaine côtière parcourue
          de petits fleuves qui descendent du{" "}
          <a href="#">
            <strong>Fouta-Djalon</strong>
          </a>
          . Le territoire de la ville est orienté au nord-est/sud-ouest et se
          termine par la péninsule de{" "}
          <a href="#">
            <strong>Kaloum</strong>
          </a>{" "}
          et l'
          <a href="#">
            <strong>île de Tombo</strong>
          </a>{" "}
          .Tout comme{" "}
          <a href="#">
            <strong>Dakar</strong>
          </a>
          , Conakry est une ville-péninsule. La presqu'île de Camayenne se
          présente comme un promontoire rocheux d'une altitude maximum de 146
          mètres. Cernée à la fois par la mer et par des forêts de mangroves sa
          largeur ne dépasse pas les 6,5 kilomètres. Le sol y est en grande
          partie latéritique. Le{" "}
          <a href="#">
            <strong>mont Kakoulima</strong>
          </a>
          , culminant à 1 011 mètres d'altitude, domine le Nord du paysage.
        </p>

        {/* <div>
          <img src="" alt="" />
        </div> */}
      </div>

      <div>
        <h2>Histoire</h2>
        <p>
          Le territoire où se trouve Conakry appartenait au{" "}
          <a href="#">
            <strong>royaume de Dubréka</strong>
          </a>
          . La région est alors occupée par les{" "}
          <a href="#">
            <strong>Bagas</strong>
          </a>
          , qui avaient accueilli des{" "}
          <a href="#">
            <strong>Soussous</strong>
          </a>
          , venus du nord du{" "}
          <a href="#">
            <strong>Mandingue</strong>
          </a>{" "}
          après la destruction de leur capitale sur le{" "}
          <a href="#">
            <strong>Niger</strong>
          </a>{" "}
          en 1236 par{" "}
          <a href="#">
            <strong>Soundjata Keïta</strong>
          </a>
          . En 1880,{" "}
          <a href="#">
            <strong>Balé Demba</strong>
          </a>
          , manga (roi) de Dubréka, signe un traité de protectorat avec la
          France, point de départ de la colonisation de la Guinée. Le 1er
          février 1885, il cède aux Français un terrain sur l'île de Tombo, près
          du village de Conakry, En 1887, les Anglais reconnaissent que l'île de
          Tombo, abritant les quatre villages de Conakry,{" "}
          <a href="#">
            <strong>Boulbinet</strong>
          </a>
          ,{" "}
          <a href="#">
            <strong>Krutown</strong>
          </a>{" "}
          et Tombo, relève des Français . Pendant la période française, Conakry
          devient la capitale de la colonie des «{" "}
          <a href="#">
            <strong>Rivières du Sud</strong>
          </a>{" "}
          » en 1889, puis de la «{" "}
          <a href="#">
            <strong>Guinée française et dépendances</strong>
          </a>{" "}
          », colonie autonome placée sous l'autorité du gouvernement général de
          Dakar. En 1890, l'île de Tombo ne compte encore que 150 habitants.
          Sélectionné par les colons français pour sa capacité à accueillir un
          port en eau profonde, le site a fait l'objet d'un régime de
          développement extraverti fondé sur l'exploitation des ressources
          naturelles, notamment minières. La{" "}
          <a href="#">
            <strong>bauxite</strong>
          </a>{" "}
          fut ainsi exploitée dans le périmètre actuel de la ville de Conakry,
          puis dans des régions plus éloignées.De 1966 à 1972, l'ancien
          président ghanéen{" "}
          <a href="#">
            <strong>Kwame Nkrumah</strong>
          </a>{" "}
          y vit en exil et y fonde une maison d'édition.
        </p>

        {/* <div>
          <img src="" alt="" />
        </div> */}
      </div>

      <div>
        <h2>Période post-coloniale et indépendance</h2>

        <p>
          Après la Seconde Guerre mondiale, la lutte pour l’indépendance en
          Afrique s’intensifie, et la Guinée joue un rôle central dans ce
          processus. Sous la conduite de{" "}
          <a href="#">
            <strong>Sékou Touré</strong>
          </a>
          , l’un des leaders panafricanistes les plus influents, Conakry devient
          le foyer de la résistance contre la domination coloniale. En{" "}
          <a href="#">
            <strong>1958</strong>
          </a>
          , la Guinée est la première colonie française à refuser l’adhésion à
          la Communauté française proposée par{" "}
          <a href="#">
            <strong>Charles de Gaulle</strong>
          </a>
          , devenant ainsi le premier pays d'Afrique francophone à obtenir son
          indépendance. Avec l'indépendance proclamée le{" "}
          <a href="#">
            <strong>2 octobre 1958</strong>
          </a>
          , Conakry est propulsée au rang de capitale d'un État souverain. Sékou
          Touré, le premier président du pays, y instaure un régime marxiste,
          axé sur l’indépendance totale des anciennes puissances coloniales.
          Conakry devient alors un point de rencontre des{" "}
          <a href="#">
            <strong>intellectuels, révolutionnaires</strong>
          </a>{" "}
          et figures politiques du continent africain et du monde entier. Des
          personnalités comme{" "}
          <a href="#">
            <strong>Kwame Nkrumah</strong>
          </a>{" "}
          du Ghana ou{" "}
          <a href="#">
            <strong>Amílcar Cabral</strong>
          </a>{" "}
          du Cap-Vert et de la Guinée-Bissau trouvent refuge dans cette ville
          qui symbolise la résistance contre le colonialisme. Cependant, cette
          période est aussi marquée par des tensions politiques internes et des
          répressions sévères. Conakry voit naître le tristement célèbre{" "}
          <a href="#">
            <strong>Camp Boiro</strong>
          </a>
          , un centre de détention politique où de nombreux opposants au régime
          de Touré sont emprisonnés, torturés et parfois exécutés. Cette phase
          sombre de l'histoire de la ville laisse une empreinte indélébile sur
          la mémoire collective de la Guinée.
        </p>
      </div>

      <div>
        <h2>Les années de transformation post-Sékou Touré</h2>
        <p>
          Après la mort de Sékou Touré en{" "}
          <a href="#">
            <strong>1984</strong>
          </a>
          , un coup d'État militaire dirigé par le général{" "}
          <a
            href="
          #"
          >
            <strong>Lansana Conté</strong>
          </a>{" "}
          renverse le gouvernement. Conakry entre alors dans une nouvelle phase
          de transition politique. Le régime de Conté, bien que plus modéré que
          celui de son prédécesseur, reste marqué par des périodes d’instabilité
          et de tension sociale. Durant cette période, la ville continue de
          croître démographiquement, malgré les défis économiques et les crises
          politiques. Conakry subit d'importants bouleversements au fil des
          décennies, avec un développement urbain accéléré mais souvent mal
          planifié. L'absence d'infrastructures adéquates et de services publics
          efficaces crée des défis majeurs pour les habitants de la capitale,
          tels que l'accès à l’
          <a href="#">
            <strong>eau potable</strong>
          </a>
          , à l'
          <a href="#">
            <strong>électricité</strong>
          </a>{" "}
          et aux services de{" "}
          <a href="#">
            <strong>santé</strong>
          </a>
          . Néanmoins, la ville reste le centre névralgique du pays, attirant de
          plus en plus de populations rurales en quête d’opportunités.
        </p>
      </div>

      <div>
        <h2>Conakry dans l’ère moderne</h2>
        <p>
          Aujourd'hui, Conakry est une métropole où se mélangent les influences{" "}
          <a href="#">
            <strong>traditionnelles et modernes</strong>
          </a>
          . Elle conserve des traces visibles de son passé colonial à travers
          certains bâtiments et quartiers historiques, mais elle est aussi en
          pleine mutation, avec la construction de{" "}
          <a href="#">
            <strong>nouvelles infrastructures</strong>
          </a>
          , notamment des routes, des complexes commerciaux, des universités et
          des zones résidentielles modernes. La ville se démarque comme le cœur
          culturel de la Guinée, avec des événements majeurs tels que le
          <a href="#">
            <strong>Festival des Arts de Conakry</strong>
          </a>
          , qui attire des artistes de toute l'Afrique de l'Ouest. La musique y
          joue un rôle central, qu'il s'agisse des{" "}
          <a href="#">
            <strong>percussions traditionnelles</strong>
          </a>{" "}
          du peuple soussou ou des{" "}
          <a href="#">
            <strong>rythmes modernes</strong>
          </a>{" "}
          qui résonnent dans les clubs et les radios locales. Les{" "}
          <a href="#">
            <strong>marchés de Conakry</strong>
          </a>
          , tels que celui de{" "}
          <a href="#">
            <strong>Madina</strong>
          </a>
          , offrent un aperçu vibrant de la vie quotidienne, où se mêlent les
          couleurs, les sons et les odeurs d'une ville en pleine effervescence.
          Conakry est aussi le siège des principales institutions politiques du
          pays, accueillant le{" "}
          <a href="#">
            <strong>Palais présidentiel</strong>
          </a>
          , les{" "}
          <a href="#">
            <strong>ministères</strong>
          </a>{" "}
          et les{" "}
          <a href="#">
            <strong>ambassades étrangères</strong>
          </a>
          , faisant d'elle le centre du pouvoir guinéen.
        </p>
      </div>

      <div>
        <h2>Les défis contemporains et l'avenir de Conakry</h2>

        <p>
          Malgré son dynamisme, Conakry fait face à de nombreux défis, notamment
          liés à l'urbanisation rapide, la{" "}
          <a href="#">
            <strong>gestion des déchets</strong>
          </a>
          , les{" "}
          <a href="#">
            <strong>inondations récurrentes</strong>
          </a>{" "}
          pendant la saison des pluies, ainsi que les{" "}
          <a href="#">
            <strong>embouteillages</strong>
          </a>{" "}
          et les infrastructures en sous-capacité. Le gouvernement et les
          acteurs locaux s'efforcent de trouver des solutions durables pour
          faire face à ces problèmes tout en soutenant la croissance économique
          et le développement social. Conakry est aussi le point de départ pour
          explorer les merveilles naturelles du pays, comme les{" "}
          <a href="#">
            <strong>îles de Loos</strong>
          </a>
          , qui offrent des plages magnifiques à quelques kilomètres de la
          capitale, ou encore les{" "}
          <a href="#">
            <strong>montagnes du Fouta-Djalon</strong>
          </a>
          , riches en biodiversité.
        </p>
      </div>

      <Button type="button" className="history--btn">
        Visiter Conakry
      </Button>

      <a href="#" className="history__link">
        Découvrez d'autres sections liées à la culture, aux événements, et à la
        vie quotidienne de Conakry.
      </a>
    </Container>
  );
};

export default HistoryMain;
