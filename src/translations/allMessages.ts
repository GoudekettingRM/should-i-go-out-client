import messages_en from "./en.json";
import messages_nl from "./nl.json";
import messages_es from "./es.json";
import messages_pt from "./pt.json";
import messages_de from "./de.json";
import messages_at from "./at.json";
import messages_ro from "./ro.json";
import {
  english,
  dutch,
  spanish,
  portuguese,
  german,
  austrian,
  romanian
} from "./letterCodes";

export const messages: any = {
  [english]: messages_en,
  [dutch]: messages_nl,
  [spanish]: messages_es,
  [portuguese]: messages_pt,
  [german]: messages_de,
  [austrian]: messages_at,
  [romanian]: messages_ro
};
