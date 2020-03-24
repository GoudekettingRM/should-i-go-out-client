import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import { Question } from "../../types/question";
import { AppState } from "../../store/rootReducer";
import { determineNextQuestion } from "../../helper-files/determineNextQuestion";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentQuestion } from "../../store/questions/actions";
import { History } from "history";
import { generateError } from "../../helper-files/generateError";
import { setAnswer } from "../../store/answer/actions";
import { determineConclusion } from "../../helper-files/determineConclusion";

interface TestProps {
  history: History;
}

type Props = TestProps & LinkStateProps & LinkDispatchProps;

const Test: React.FC<Props> = props => {
  const { question, answers, questionNumber } = props.currentQuestion;
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleNextQuestion = (answer: string, id: number): void => {
    const nextQuestionNumber: number = determineNextQuestion(answer, id);

    console.log("answeredQuestions.length", answeredQuestions.length);
    console.log("nextQuestionNumber", nextQuestionNumber);

    if (nextQuestionNumber > 0) {
      setAnsweredQuestions(prev => [...prev, id]);
      props.setCurrentQuestion(nextQuestionNumber);
    } else if (!nextQuestionNumber && answeredQuestions.length > 0) {
      console.log("Conclusion can be reached!");
      props.setAnswer(determineConclusion(answer, id));
      props.history.push("/answer");
    } else if (!answeredQuestions.length) {
      return;
    } else {
      throw generateError(
        "Something went wrong with determining the next question.",
        500
      );
    }
  };

  console.log("'render' of test component");
  return (
    <div>
      <div>
        <QuestionComponent
          history={props.history}
          key={questionNumber}
          id={questionNumber}
          question={question}
          answers={answers}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
};

interface LinkStateProps {
  currentQuestion: Question;
}

interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
  setAnswer: (answer: string) => void;
}

const mapStateToProps = (state: AppState) => ({
  currentQuestion: state.currentQuestion
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(setCurrentQuestion, dispatch),
  setAnswer: bindActionCreators(setAnswer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
