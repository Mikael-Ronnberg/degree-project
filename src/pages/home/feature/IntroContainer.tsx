import { Flex, Text } from "@chakra-ui/react";
import { GreyButton } from "../../../components/buttons/GreyButton";
import {
  introContainerStyle,
  introWhiteBoxStyles,
  introWhiteTextStyles,
} from "../style/styleHome";

export const IntroContainer = () => {
  return (
    <>
      <Flex {...introContainerStyle}>
        <Flex {...introWhiteBoxStyles}>
          <Text {...introWhiteTextStyles}>
            Med snorkel rensar vi våra vatten från skräp och skyddar havslivet.
            Ingen erfarenhet behövs, bara passion för naturen.
          </Text>
        </Flex>
        <GreyButton buttonText="Gå Med Du Också!" linkTo="/contact" />
      </Flex>
    </>
  );
};

// Hem
// Välkommen till Svepa Botten!
// Svepa Botten är en ideell förening dedikerad till att skydda och bevara den svenska undervattensmiljön. Vår mission är att rena våra vatten från skräp som metall, glas, plast och annat avfall, samt att övervaka och rapportera invasiva arter. Genom snorkling utforskar och rensar våra engagerade medlemmar Sveriges vackra men sårbara vattenmiljöer.

// Om Oss
// Vår Historia och Vision
// Svepa Botten grundades [år] av en grupp miljöentusiaster och dykare som såg behovet av att agera mot nedskräpningen i svenska vatten. Vår vision är klara, levande vatten där ekosystemen frodas och den biologiska mångfalden skyddas. Vi tror att genom gemensamma insatser kan vi göra en varaktig skillnad.

// Vårt Arbete
// Skräpsamling och Rapportering
// Varje månad organiserar vi snorklingsevent där våra medlemmar samlar skräp från havsbotten. Allt från övergivna fiskeredskap till bortkastade dryckesflaskor plockas upp och sorteras för återvinning. Vi dokumenterar och rapporterar även invasiva arter till relevanta myndigheter, vilket är avgörande för att skydda våra marina ekosystem.

// Bli Medlem
// Gå med i Vår Rörelse
// Vill du göra en skillnad för den svenska undervattensmiljön? Bli medlem i Svepa Botten! Som medlem får du delta i våra snorklingsevent, få utbildning om marina ekosystem och bidra till viktiga miljöinsatser. Ingen tidigare erfarenhet av snorkling krävs - bara en passion för miljön!

// Kontakt
// Kontakta Oss
// Har du frågor, vill samarbeta eller stödja vår verksamhet? Kontakta oss på [e-postadress] eller följ oss på sociala medier för senaste nyheterna och eventinformation.

// Stöd Oss
// Ditt Bidrag Gör Skillnad
// Din donation hjälper oss att fortsätta vårt arbete med att rena svenska vatten och skydda marina ekosystem. Varje bidrag, stort som litet, bidrar till inköp av utrustning, utbildningsmaterial och organisering av våra rensningsaktiviteter.
