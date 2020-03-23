import React from "react";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import { Question } from "../../types/question";
import { AppState } from "../../store/rootReducer";

interface TestProps {}

type Props = TestProps & LinkStateProps & LinkDispatchProps;

const Test: React.FC<Props> = props => {
  const { question, answers, questionNumber } = props.currentQuestion;
  const handleNextQuestion = (answer: string, id: number) => {
    console.log("Heloooooo: answer", answer, id);
    //logic for determining next question
    //if conclusion, go to /answer
  };

  return (
    <div>
      <div>
        <QuestionComponent
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

interface LinkDispatchProps {}

const mapStateToProps = (state: AppState) => ({
  currentQuestion: state.questions.current
});

export default connect(mapStateToProps)(Test);
