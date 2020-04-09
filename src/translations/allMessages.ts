import messages_en from "./languageFiles/en.json";
import messages_nl from "./languageFiles/nl.json";
import messages_es from "./languageFiles/es.json";
import messages_pt from "./languageFiles/pt.json";
import messages_de from "./languageFiles/de.json";
import messages_at from "./languageFiles/at.json";
import messages_ro from "./languageFiles/ro.json";
import messages_nb from "./languageFiles/nb.json";
import messages_da from "./languageFiles/da.json";
import messages_it from "./languageFiles/it.json";
import messages_gr from "./languageFiles/gr.json";
// import messages_hu from "./languageFiles/hu.json";

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

export const messages: any = {
  [english]: messages_en,
  [dutch]: messages_nl,
  [spanish]: messages_es,
  [portuguese]: messages_pt,
  [german]: messages_de,
  [austrian]: messages_at,
  [romanian]: messages_ro,
  [norwegian]: messages_nb,
  [danish]: messages_da,
  [italian]: messages_it,
  [greek]: messages_gr,
  // [hungarian]: messages_hu
};
