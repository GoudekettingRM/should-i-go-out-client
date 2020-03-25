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

const messages: any = {
  en: messages_en,
  nl: messages_nl
};

interface AppProps {}

type Props = AppProps & LinkDispatchProps;

const App: React.FC<Props> = props => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };
  useEffect(() => {
    props.setAllQuestions(messages[language].questions);
    //set all answers as well
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
          <button onClick={() => handleChangeLanguage("nl")}>Dutch</button>
          <button onClick={() => handleChangeLanguage("en")}>English</button>
        </div>
      </div>
    </IntlProvider>
  );
};

interface LinkDispatchProps {
  setAllQuestions: (allQuestions: Question[]) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAllQuestions: bindActionCreators(setAllQuestionsActionCreator, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
