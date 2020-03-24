export interface Answer {
  conclusion: string;
  explanation: string;
}

interface Answers {
  stayIn: Answer;
  youHero: Answer;
  youShouldKnowBetter: Answer;
  caretaker: Answer;
  goAlone: Answer;
  avoidOthers: Answer;
}

export const answers: Answers = {
  stayIn: {
    conclusion: "Blijf binnen.",
    explanation:
      "Je hebt geen gegronde reden om nu naar buiten te gaan. Door dit toch te doen, breng je anderen in gevaar. Doe dit alstublieft niet."
  },
  youHero: {
    conclusion: "Je kunt ZEKER gaan!",
    explanation:
      "Wat je doet is cruciaal voor onze samenleving en we danken je. Ga zo door!"
  },
  youShouldKnowBetter: {
    conclusion: "Je kunt beter niet naar buiten gaan.",
    explanation:
      "Je baas zou moeten toestaan dat je thuis blijft. Door toch naar je werk te gaan breng je niet alleen jezelf in gevaar, maar ook anderen. Als je toch besluit te gaan, houdt afstand van anderen, minimaal 1.5 meter."
  },
  caretaker: {
    conclusion: "Je kunt voorzichtig naar buiten.",
    explanation:
      "Ga alstublieft naar de persoon die je wilt verzorgen. Ga wel alleen en blijft minstens 1.5 meter weg van andere mensen. Zorg bovendien dat je zelf niet ziek wordt, door goede hygiëne maatregelen te nemen."
  },
  goAlone: {
    conclusion: "Je kunt voorzichtig naar buiten.",
    explanation:
      "Je kunt kort naar buiten gaan om te doen wat je moet doen. Ga alleen en blijf minimaal 1.5 meter weg van andere mensen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen. Hiermee bescherm je jezelf en anderen."
  },
  avoidOthers: {
    conclusion: "Je kunt voorzichtig naar buiten.",
    explanation:
      "Je kunt kort naar buiten gaan. Blijf wel minimaal 1.5 meter weg van anderen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen. Hiermee bescherm je jezelf en anderen."
  }
};
