export interface Answer {
  id: number;
  conclusion: string;
  explanation: string;
}

export interface Answers {
  stayIn: Answer;
  youHero: Answer;
  youShouldKnowBetter: Answer;
  caretaker: Answer;
  goAlone: Answer;
  avoidOthers: Answer;
}
