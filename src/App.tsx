import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test/Test";
import AnswerContainer from "./components/Answer/Answer";
import { IntlProvider } from "react-intl";
import messages_en from "./translations/en.json";
import messages_nl from "./translations/nl.json";
import { connect } from "react-redux";
import { Question } from "./types/question";
import { bindActionCreators, Dispatch } from "redux";
import { setAllQuestionsActionCreator } from "./store/questions/actions";
import { setAllAnswersActionCreator } from "./store/answer/actions";
import { Answers } from "./types/answer";
import EnglishFlag from "./images/flags/uk.svg";
import DutchFlag from "./images/flags/nl.svg";

const messages: any = {
  en: messages_en,
  nl: messages_nl
};

interface AppProps {}

type Props = AppProps & LinkDispatchProps;

const App: React.FC<Props> = props => {
  const { setAllQuestions, setAllAnswers } = props;
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };
  useEffect(() => {
    setAllQuestions(messages[language].questions);
    setAllAnswers(messages[language].answers);
  }, [language, props]);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={Test} />
          <Route path="/answer" exact component={AnswerContainer} />
        </Switch>
        <div className="languageButtons">
          <div className="langFlag" onClick={() => handleChangeLanguage("nl")}>
            <img src={DutchFlag} alt="Dutch" />
          </div>
          <div className="langFlag" onClick={() => handleChangeLanguage("en")}>
            <img src={EnglishFlag} alt="English" />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};

interface LinkDispatchProps {
  setAllQuestions: (allQuestions: Question[]) => void;
  setAllAnswers: (allAnswers: Answers) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAllQuestions: bindActionCreators(setAllQuestionsActionCreator, dispatch),
  setAllAnswers: bindActionCreators(setAllAnswersActionCreator, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
