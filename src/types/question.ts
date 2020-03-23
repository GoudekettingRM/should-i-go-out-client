export interface Question {
  questionNumber: number | null;
  question: string;
  answers: string[];
  explanation?: string;
}
