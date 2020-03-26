import messages_en from "./en.json";
import messages_nl from "./nl.json";
import messages_es from "./es.json";
import messages_pt from "./pt.json";
import messages_de from "./de.json";
import messages_at from "./at.json";
import messages_ro from "./ro.json";
import messages_nb from "./nb.json";
import messages_da from "./da.json";
// import messages_it from "./it.json"

import {
  english,
  dutch,
  spanish,
  portuguese,
  german,
  austrian,
  romanian,
  norwegian,
  danish
  // italian
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
  [danish]: messages_da
  //[italian]: messages_it
};
