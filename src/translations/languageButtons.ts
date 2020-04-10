import ChangeLanguage from "../images/changeLanguage.svg";
import DutchFlag from "../images/flags/nl.svg";
import EnglishFlag from "../images/flags/uk.svg";
import SpanishFlag from "../images/flags/es.svg";
import PortugueseFlag from "../images/flags/pt.svg";
import GermanFlag from "../images/flags/de.svg";
import AustrianFlag from "../images/flags/at.svg";
import RomanianFlag from "../images/flags/ro.svg";
import NorwegianFlag from "../images/flags/nb.svg";
import DanishFlag from "../images/flags/da.svg";
import ItalianFlag from "../images/flags/it.svg";
import HungarianFlag from "../images/flags/hu.svg";
import GreekFlag from "../images/flags/gr.svg";

import {
  english,
  dutch,
  spanish,
  portuguese,
  german,
  austrian,
  romanian,
  norwegian,
  danish,
  italian,
  hungarian,
  greek,
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
    languageFull: "Austrian German",
  },
  { image: RomanianFlag, letterCode: romanian, languageFull: "Romanian" },
  { image: NorwegianFlag, letterCode: norwegian, languageFull: "Norwegian" },
  { image: DanishFlag, letterCode: danish, languageFull: "Danish" },
  { image: ItalianFlag, letterCode: italian, languageFull: "Italian" },
  { image: GreekFlag, letterCode: greek, languageFull: "Greek" },
  { image: HungarianFlag, letterCode: hungarian, languageFull: "Hungarian" },
];

export const getCurrentLanguageImage = (language: string): string => {
  const currentLanguage:
    | LanguageButtonType
    | undefined = languageButtonsData.find(
    (languageData) => languageData.letterCode === language
  );
  if (currentLanguage) {
    return currentLanguage.image;
  } else {
    return ChangeLanguage;
  }
};
