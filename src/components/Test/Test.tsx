import React from "react";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import { Question } from "../../types/question";
import { AppState } from "../../store/rootReducer";

interface TestProps {}

type Props = TestProps & LinkStateProps & LinkDispatchProps;

const Test: React.FC<Props> = () => {
  // update the store with answer
  const handleNextQuestion = (answer: string, id: number) => {
    console.log("Heloooooo: answer", answer, id);
  };

  return (
    <div>
      <div>
        <QuestionComponent
          key={1}
          id={1}
          question={"This is the first question"}
          answers={["yes", "no"]}
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
