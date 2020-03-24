import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { setCurrentQuestionActionCreator } from "../../store/questions/actions";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import Button from "react-bootstrap/Button";

interface HomePageProps extends RouteComponentProps {}

type Props = HomePageProps & LinkDispatchProps;

const HomePage: React.FC<Props> = props => {
  const startTest = (): void => {
    props.setCurrentQuestion(1);
    props.history.push("/test");
  };

  return (
    <div className="introScreen">
      <h1>Welkom bij Should-I-Go-Out?</h1>
      <Button type="button" onClick={startTest}>
        Ik wil naar buiten gaan, maar is dat wel handig?
      </Button>
    </div>
  );
};

interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(
    setCurrentQuestionActionCreator,
    dispatch
  )
});

export default connect(null, mapDispatchToProps)(HomePage);
