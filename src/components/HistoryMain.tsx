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

      {/* <div>
        <h2></h2>
      </div> */}

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
