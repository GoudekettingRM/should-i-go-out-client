export const determineConclusion = (
  finalQuestionAnswer: string,
  finalQuestionId: number
): string => {
  if (
    (finalQuestionId === 5 && finalQuestionAnswer === "nee") ||
    (finalQuestionId === 7 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 9 && finalQuestionAnswer === "ja")
  )
    return "Blijf binnen.";

  if (finalQuestionId === 8 && finalQuestionAnswer === "ja")
    return "Ga alstublieft naar je werk. Wat je doet is cruciaal voor onze samenleving en we danken je. Ga zo door!";

  if (
    (finalQuestionId === 2 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 3 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 7 && finalQuestionAnswer === "nee")
  )
    return "Je kunt kort naar buiten gaan om te doen wat je moet doen. Ga alleen en blijf minimaal 1.5 meter weg van andere mensen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen.";

  if (finalQuestionId === 5 && finalQuestionAnswer === "ja")
    return "Je kunt kort naar buiten gaan om te doen wat je moet doen. Blijf wel minimaal 1.5 meter weg van anderen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen.";

  if (finalQuestionId === 6 && finalQuestionAnswer === "ja")
    return "Ga alstublieft naar de persoon die je wilt verzorgen. Ga wel alleen en blijft minstens 1.5 meter weg van andere mensen. Zorg bovendien dat je zelf niet ziek wordt, door goede hygiëne maatregelen te nemen.";

  if (finalQuestionId === 9 && finalQuestionAnswer === "nee")
    return "Je baas zou moeten toestaan dat je thuis blijft. Door toch naar je werk te gaan breng je niet alleen jezelf in gevaar, maar ook anderen. Als je toch besluit te gaan, houdt afstand van anderen, minimaal 1.5 meter.";

  return "Blijf binnen.";
};
