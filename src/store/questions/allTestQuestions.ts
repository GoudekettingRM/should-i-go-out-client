import { Question } from "../../types/question";

export const questions: Question[] = [
  {
    questionNumber: 1,
    question: "Ga je naar je werk?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 2,
    question: "Ga je boodschappen doen?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 3,
    question: "Ga je naar de apotheek?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 4,
    question: "Ga je een frisse neus halen?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 5,
    question:
      "Doe je dit alleen of alleen met mensen die bij je in huis wonen?",
    answers: [
      "ja, alleen of alleen met mensen die bij je in huis wonen",
      "nee, ook met andere mensen"
    ]
  },
  {
    questionNumber: 6,
    question: "Ga je een ziek persoon verzorgen?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 7,
    question: "Wat je dan ook maar gaat doen, kan dit later?",
    answers: ["ja", "nee"]
  },
  {
    questionNumber: 8,
    question: "Werk je in een vitaal beroep?",
    answers: ["ja", "nee"],
    explanation:
      "De lijst van vitale beroepen kun je hier vinden: https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19/veelgestelde-vragen-over-coronavirus-en-kinderopvang/cruciale-beroepen"
  },
  {
    questionNumber: 9,
    question: "Is thuiswerken een mogelijkheid?",
    answers: ["ja", "nee"]
  }
];
