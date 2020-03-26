import DutchFlag from "../images/flags/nl.svg";
import EnglishFlag from "../images/flags/uk.svg";
import SpanishFlag from "../images/flags/es.svg";
import PortugueseFlag from "../images/flags/pt.svg";
import GermanFlag from "../images/flags/de.svg";
import AustrianFlag from "../images/flags/at.svg";
import RomanianFlag from "../images/flags/ro.svg";
// import ItalianFlag from "../images/flags/it.svg";
// import NorwegianFlag from "../images/flags/no.svg";
import {
  english,
  dutch,
  spanish,
  portuguese,
  german,
  austrian,
  romanian
  // italian,
  // norwegian
} from "./letterCodes";

interface LanguageButtonType {
  image: string;
  letterCode: string;
  languageFull: string;
}

export const languageButtonsData: LanguageButtonType[] = [
  { image: EnglishFlag, letterCode: english, languageFull: "English" },
  { image: DutchFlag, letterCode: dutch, languageFull: "Dutch" },
  { image: SpanishFlag, letterCode: spanish, languageFull: "Spanish" },
  { image: PortugueseFlag, letterCode: portuguese, languageFull: "Portuguese" },
  { image: GermanFlag, letterCode: german, languageFull: "German" },
  {
    image: AustrianFlag,
    letterCode: austrian,
    languageFull: "Austrian German"
  },
  { image: RomanianFlag, letterCode: romanian, languageFull: "Romanian" }
  // { image: ItalianFlag, letterCode: italian, languageFull: "Italian" }
  // { image: NorwegianFlag, letterCode: norwegian, languageFull: "Norwegian" }
];
