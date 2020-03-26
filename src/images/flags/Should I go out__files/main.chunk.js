(this["webpackJsonpshould-i-go-out"] = this["webpackJsonpshould-i-go-out"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody {\n  background: url(\"http://eindhovenhotspots.nl/wp-content/uploads/2016/08/Park-Eindhoven-Henri-Dunant.jpg\")\n    no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  text-align: center;\n}\n.App {\n  height: 90vh;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n.pageContent {\n  width: 500px;\n  background-color: rgba(233, 233, 233, 0.5);\n  padding: 2rem;\n  border-radius: 1rem;\n}\n.introScreen {\n  width: 600px;\n}\n@media only screen and (max-width: 500px) {\n  .pageContent,\n  .introScreen {\n    width: 90%;\n  }\n}\n.questionAnswers {\n  margin-bottom: 2rem;\n  text-align: left;\n  transform: translateX(25%);\n  max-width: 80%;\n}\n.radioButton {\n  margin-right: 5px;\n}\nh1,\nh3,\np,\n.answerLabel {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n  color: white;\n}\nh1 {\n  margin-bottom: 3rem;\n}\nh3 {\n  margin-bottom: 1rem;\n}\n.answerLabel {\n  margin: 0 1rem;\n  font-size: 1.3rem;\n}\n.languageButtons {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  height: 115px;\n  overflow-y: scroll;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n}\n.langFlag {\n  height: 50px;\n  width: 50px;\n  margin: 0 0.5rem 5px 0.5rem;\n}\n.langFlag:active {\n  opacity: 0.5;\n  border-radius: 2rem;\n  height: 50px;\n}\nnav {\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n@media only screen and (min-width: 600px) {\n  .toggleButton {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .languageButtons {\n    display: none;\n  }\n  .languageButtons.show {\n    margin: 0 auto;\n    height: 115px;\n    width: 300px;\n    overflow-y: scroll;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_Answer_Answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Answer/Answer */ "./src/components/Answer/Answer.tsx");
/* harmony import */ var _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HomePage/HomePage */ "./src/components/HomePage/HomePage.tsx");
/* harmony import */ var _components_Test_Test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Test/Test */ "./src/components/Test/Test.tsx");
/* harmony import */ var _store_answer_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/answer/actions */ "./src/store/answer/actions.ts");
/* harmony import */ var _store_questions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/questions/actions */ "./src/store/questions/actions.ts");
/* harmony import */ var _translations_allMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translations/allMessages */ "./src/translations/allMessages.ts");
/* harmony import */ var _translations_languageButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./translations/languageButtons */ "./src/translations/languageButtons.ts");
/* harmony import */ var _translations_letterCodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translations/letterCodes */ "./src/translations/letterCodes.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/App.tsx";















const App = props => {
  const {
    setAllQuestions,
    setAllAnswers
  } = props;
  const [language, setLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_translations_letterCodes__WEBPACK_IMPORTED_MODULE_12__["english"]);
  const [navClass, setNavClass] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("languageButtons");

  const handleChangeLanguage = newLanguage => {
    setLanguage(newLanguage);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setAllQuestions(_translations_allMessages__WEBPACK_IMPORTED_MODULE_10__["messages"][language].questions);
    setAllAnswers(_translations_allMessages__WEBPACK_IMPORTED_MODULE_10__["messages"][language].answers);
  }, [language, setAllAnswers, setAllQuestions]);

  const renderFlagButton = (flagImage, letterCode, languageFull, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "langFlag",
      onClick: () => handleChangeLanguage(letterCode),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: flagImage,
      alt: languageFull,
      title: languageFull,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }));
  };

  const toggleNav = () => {
    if (navClass === "languageButtons") {
      setNavClass("languageButtons show");
    } else {
      setNavClass("languageButtons");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["IntlProvider"], {
    locale: language,
    messages: _translations_allMessages__WEBPACK_IMPORTED_MODULE_10__["messages"][language],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toggleButton",
    onClick: toggleNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Languages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: navClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, _translations_languageButtons__WEBPACK_IMPORTED_MODULE_11__["languageButtonsData"].map((lang, i) => renderFlagButton(lang.image, lang.letterCode, lang.languageFull, i)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    exact: true,
    component: _components_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/test",
    exact: true,
    component: _components_Test_Test__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/answer",
    exact: true,
    component: _components_Answer_Answer__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })))));
};

const mapDispatchToProps = dispatch => ({
  setAllQuestions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_questions_actions__WEBPACK_IMPORTED_MODULE_9__["setAllQuestionsActionCreator"], dispatch),
  setAllAnswers: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_answer_actions__WEBPACK_IMPORTED_MODULE_8__["setAllAnswersActionCreator"], dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/components/Answer/Answer.tsx":
/*!******************************************!*\
  !*** ./src/components/Answer/Answer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_questions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/questions/actions */ "./src/store/questions/actions.ts");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/components/Answer/Answer.tsx";







const AnswerContainer = ({
  answer,
  history,
  setCurrentQuestion
}) => {
  const restartTest = () => {
    setCurrentQuestion(1);
    history.push("/test");
  };

  if (!answer.conclusion) {
    history.push("/");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "app.redirectToHome",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pageContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, answer.conclusion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, answer.explanation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: restartTest,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "app.retryButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
};

const mapStateToProps = state => ({
  answer: state.conclusions.drawn
});

const mapDispatchToProps = dispatch => ({
  setCurrentQuestion: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_store_questions_actions__WEBPACK_IMPORTED_MODULE_3__["setCurrentQuestionActionCreator"], dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AnswerContainer));

/***/ }),

/***/ "./src/components/HomePage/HomePage.tsx":
/*!**********************************************!*\
  !*** ./src/components/HomePage/HomePage.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_questions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/questions/actions */ "./src/store/questions/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/components/HomePage/HomePage.tsx";







const HomePage = props => {
  const startTest = () => {
    props.setCurrentQuestion(1);
    props.history.push("/test");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "introScreen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "app.title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    onClick: startTest,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "app.startButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

const mapDispatchToProps = dispatch => ({
  setCurrentQuestion: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store_questions_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentQuestionActionCreator"], dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(HomePage));

/***/ }),

/***/ "./src/components/Test/QuestionComponent.tsx":
/*!***************************************************!*\
  !*** ./src/components/Test/QuestionComponent.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/components/Test/QuestionComponent.tsx";




const QuestionComponent = props => {
  const {
    id,
    question,
    answers,
    handleNextQuestion,
    history
  } = props;
  const [givenAnswer, setGivenAnswer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleChange = event => {
    setGivenAnswer(event.target.value);
  };

  const handleNext = event => {
    event.preventDefault();

    if (!givenAnswer) {
      return alert(props.intl.formatMessage({
        id: "app.noAnswerError",
        defaultMessage: "You have choose one of the options"
      }));
    }

    handleNextQuestion(givenAnswer, id);
  };

  if (!question) {
    history.push("/");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "app.redirectToHome",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleNext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "questionAnswers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, answers.map((answer, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "answerLabel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "radioButton",
    type: "radio",
    name: "answer",
    value: answer,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }), answer)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "app.nextQuestionButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(QuestionComponent));

/***/ }),

/***/ "./src/components/Test/Test.tsx":
/*!**************************************!*\
  !*** ./src/components/Test/Test.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _QuestionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionComponent */ "./src/components/Test/QuestionComponent.tsx");
/* harmony import */ var _helper_files_determineNextQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper-files/determineNextQuestion */ "./src/helper-files/determineNextQuestion.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_questions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/questions/actions */ "./src/store/questions/actions.ts");
/* harmony import */ var _helper_files_generateError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper-files/generateError */ "./src/helper-files/generateError.ts");
/* harmony import */ var _store_answer_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/answer/actions */ "./src/store/answer/actions.ts");
/* harmony import */ var _helper_files_determineConclusion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helper-files/determineConclusion */ "./src/helper-files/determineConclusion.ts");
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/components/Test/Test.tsx";










const Test = props => {
  const {
    setCurrentQuestion,
    setAnswer,
    history,
    allAnswers,
    currentQuestion: {
      question,
      answers,
      questionNumber
    }
  } = props;
  const [answeredQuestions, setAnsweredQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleNextQuestion = (answer, id) => {
    const nextQuestionNumber = Object(_helper_files_determineNextQuestion__WEBPACK_IMPORTED_MODULE_3__["determineNextQuestion"])(answer, id);

    if (nextQuestionNumber > 0) {
      setAnsweredQuestions(prev => [...prev, id]);
      setCurrentQuestion(nextQuestionNumber);
    } else if (!nextQuestionNumber && answeredQuestions.length > 0) {
      setAnswer(Object(_helper_files_determineConclusion__WEBPACK_IMPORTED_MODULE_8__["determineConclusion"])(answer, id, allAnswers));
      history.push("/answer");
    } else if (!answeredQuestions.length) {
      return;
    } else {
      throw Object(_helper_files_generateError__WEBPACK_IMPORTED_MODULE_6__["generateError"])("Something went wrong with determining the next question.", 500);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pageContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    history: props.history,
    key: questionNumber,
    id: questionNumber,
    question: question,
    answers: answers,
    handleNextQuestion: handleNextQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => ({
  currentQuestion: state.questions.current,
  allAnswers: state.conclusions.all
});

const mapDispatchToProps = dispatch => ({
  setCurrentQuestion: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_questions_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentQuestionActionCreator"], dispatch),
  setAnswer: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_answer_actions__WEBPACK_IMPORTED_MODULE_7__["setAnswerActionCreator"], dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Test));

/***/ }),

/***/ "./src/helper-files/determineConclusion.ts":
/*!*************************************************!*\
  !*** ./src/helper-files/determineConclusion.ts ***!
  \*************************************************/
/*! exports provided: determineConclusion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineConclusion", function() { return determineConclusion; });
/* harmony import */ var _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/pos-neg-answers */ "./src/translations/pos-neg-answers.ts");

const determineConclusion = (finalQuestionAnswer, finalQuestionId, allAnswers) => {
  if (finalQuestionId === 5 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(finalQuestionAnswer) || finalQuestionId === 7 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer) || finalQuestionId === 9 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer)) return allAnswers.stayIn;
  if (finalQuestionId === 8 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer)) return allAnswers.youHero;
  if (finalQuestionId === 2 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer) || finalQuestionId === 3 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer) || finalQuestionId === 7 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(finalQuestionAnswer)) return allAnswers.goAlone;
  if (finalQuestionId === 5 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer)) return allAnswers.avoidOthers;
  if (finalQuestionId === 6 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(finalQuestionAnswer)) return allAnswers.caretaker;
  if (finalQuestionId === 9 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(finalQuestionAnswer)) return allAnswers.youShouldKnowBetter;
  return allAnswers.stayIn;
};

/***/ }),

/***/ "./src/helper-files/determineNextQuestion.ts":
/*!***************************************************!*\
  !*** ./src/helper-files/determineNextQuestion.ts ***!
  \***************************************************/
/*! exports provided: determineNextQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineNextQuestion", function() { return determineNextQuestion; });
/* harmony import */ var _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/pos-neg-answers */ "./src/translations/pos-neg-answers.ts");

const determineNextQuestion = (givenAnswer, prevQuestionId) => {
  if (prevQuestionId === 1 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(givenAnswer)) return 8;
  if (prevQuestionId === 1 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 2;
  if (prevQuestionId === 2 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 3;
  if (prevQuestionId === 3 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 4;
  if (prevQuestionId === 4 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["positiveAnswers"].includes(givenAnswer)) return 5;
  if (prevQuestionId === 4 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 6;
  if (prevQuestionId === 6 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 7;
  if (prevQuestionId === 8 && _translations_pos_neg_answers__WEBPACK_IMPORTED_MODULE_0__["negativeAnswers"].includes(givenAnswer)) return 9;
  return 0;
};

/***/ }),

/***/ "./src/helper-files/generateError.ts":
/*!*******************************************!*\
  !*** ./src/helper-files/generateError.ts ***!
  \*******************************************/
/*! exports provided: generateError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateError", function() { return generateError; });
const generateError = (message, code) => {
  return {
    message,
    errorCode: code
  };
};

/***/ }),

/***/ "./src/images/flags/at.svg":
/*!*********************************!*\
  !*** ./src/images/flags/at.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/at.7fc4e220.svg";

/***/ }),

/***/ "./src/images/flags/de.svg":
/*!*********************************!*\
  !*** ./src/images/flags/de.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/de.d810f621.svg";

/***/ }),

/***/ "./src/images/flags/es.svg":
/*!*********************************!*\
  !*** ./src/images/flags/es.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/es.36938bbe.svg";

/***/ }),

/***/ "./src/images/flags/nl.svg":
/*!*********************************!*\
  !*** ./src/images/flags/nl.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nl.f163721e.svg";

/***/ }),

/***/ "./src/images/flags/pt.svg":
/*!*********************************!*\
  !*** ./src/images/flags/pt.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pt.70a47eed.svg";

/***/ }),

/***/ "./src/images/flags/ro.svg":
/*!*********************************!*\
  !*** ./src/images/flags/ro.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ro.edc6ec3b.svg";

/***/ }),

/***/ "./src/images/flags/uk.svg":
/*!*********************************!*\
  !*** ./src/images/flags/uk.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/uk.e5564902.svg";

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/store */ "./src/store/store.tsx");
var _jsxFileName = "/Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_5__["store"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
})))), document.getElementById("root"));

/***/ }),

/***/ "./src/store/answer/actions.ts":
/*!*************************************!*\
  !*** ./src/store/answer/actions.ts ***!
  \*************************************/
/*! exports provided: setAnswerActionCreator, setAllAnswersActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnswerActionCreator", function() { return setAnswerActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllAnswersActionCreator", function() { return setAllAnswersActionCreator; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/answer/types.ts");

const setAnswerActionCreator = answer => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ANSWER"],
    payload: answer
  };
};
const setAllAnswersActionCreator = allAnswers => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_ANSWERS"],
    payload: allAnswers
  };
};

/***/ }),

/***/ "./src/store/answer/reducer.ts":
/*!*************************************!*\
  !*** ./src/store/answer/reducer.ts ***!
  \*************************************/
/*! exports provided: conclusionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conclusionReducer", function() { return conclusionReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/answer/types.ts");

const initialState = {
  all: {
    stayIn: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    youHero: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    youShouldKnowBetter: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    caretaker: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    goAlone: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    avoidOthers: {
      id: 0,
      conclusion: "",
      explanation: ""
    }
  },
  drawn: {
    id: 0,
    explanation: "",
    conclusion: ""
  }
};
const conclusionReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_ANSWERS"]:
      {
        const newDrawnConclusion = Object.keys(action.payload).map(answer => action.payload[answer]).find(answer => answer.id === state.drawn.id);

        if (newDrawnConclusion) {
          return { ...state,
            all: action.payload,
            drawn: newDrawnConclusion
          };
        } else {
          return { ...state,
            all: action.payload
          };
        }
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ANSWER"]:
      {
        return { ...state,
          drawn: action.payload
        };
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/answer/types.ts":
/*!***********************************!*\
  !*** ./src/store/answer/types.ts ***!
  \***********************************/
/*! exports provided: SET_ANSWER, SET_ALL_ANSWERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ANSWER", function() { return SET_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_ANSWERS", function() { return SET_ALL_ANSWERS; });
const SET_ANSWER = "answer/SET_ANSWER";
const SET_ALL_ANSWERS = "answer/SET_ALL_ANSWERS";

/***/ }),

/***/ "./src/store/questions/actions.ts":
/*!****************************************!*\
  !*** ./src/store/questions/actions.ts ***!
  \****************************************/
/*! exports provided: setCurrentQuestionActionCreator, setAllQuestionsActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentQuestionActionCreator", function() { return setCurrentQuestionActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllQuestionsActionCreator", function() { return setAllQuestionsActionCreator; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/questions/types.ts");
/* harmony import */ var _helper_files_generateError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper-files/generateError */ "./src/helper-files/generateError.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/store.tsx");



const setCurrentQuestionActionCreator = questionNumber => {
  const questions = _store__WEBPACK_IMPORTED_MODULE_2__["store"].getState().questions.all;
  const currentQuestion = questions.find(question => question.questionNumber === questionNumber);

  if (currentQuestion) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_QUESTION"],
      payload: currentQuestion
    };
  } else {
    throw Object(_helper_files_generateError__WEBPACK_IMPORTED_MODULE_1__["generateError"])("Question does not exist", 404);
  }
};
const setAllQuestionsActionCreator = allQuestions => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_QUESTIONS"],
    payload: allQuestions
  };
};

/***/ }),

/***/ "./src/store/questions/reducer.ts":
/*!****************************************!*\
  !*** ./src/store/questions/reducer.ts ***!
  \****************************************/
/*! exports provided: questionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionReducer", function() { return questionReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/questions/types.ts");

const initialState = {
  all: [],
  current: {
    questionNumber: 0,
    question: "",
    answers: []
  }
};
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_QUESTION"]:
      {
        return { ...state,
          current: action.payload
        };
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_QUESTIONS"]:
      {
        const newCurrentQuestion = action.payload.find(question => question.questionNumber === state.current.questionNumber);

        if (newCurrentQuestion) {
          return { ...state,
            all: action.payload,
            current: newCurrentQuestion
          };
        } else return { ...state,
          all: action.payload
        };
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/questions/types.ts":
/*!**************************************!*\
  !*** ./src/store/questions/types.ts ***!
  \**************************************/
/*! exports provided: SET_CURRENT_QUESTION, SET_ALL_QUESTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_QUESTION", function() { return SET_CURRENT_QUESTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_QUESTIONS", function() { return SET_ALL_QUESTIONS; });
const SET_CURRENT_QUESTION = "questions/SET_CURRENT_QUESTION";
const SET_ALL_QUESTIONS = "questions/SET_ALL_QUESTIONS";

/***/ }),

/***/ "./src/store/rootReducer.tsx":
/*!***********************************!*\
  !*** ./src/store/rootReducer.tsx ***!
  \***********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _questions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/reducer */ "./src/store/questions/reducer.ts");
/* harmony import */ var _answer_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer/reducer */ "./src/store/answer/reducer.ts");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  questions: _questions_reducer__WEBPACK_IMPORTED_MODULE_1__["questionReducer"],
  conclusions: _answer_reducer__WEBPACK_IMPORTED_MODULE_2__["conclusionReducer"]
});

/***/ }),

/***/ "./src/store/store.tsx":
/*!*****************************!*\
  !*** ./src/store/store.tsx ***!
  \*****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.tsx");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : x => x;
const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]), devTools);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["rootReducer"], enhancer);


/***/ }),

/***/ "./src/translations/allMessages.ts":
/*!*****************************************!*\
  !*** ./src/translations/allMessages.ts ***!
  \*****************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ "./src/translations/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "./src/translations/en.json", 1);
/* harmony import */ var _nl_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nl.json */ "./src/translations/nl.json");
var _nl_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./nl.json */ "./src/translations/nl.json", 1);
/* harmony import */ var _es_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es.json */ "./src/translations/es.json");
var _es_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./es.json */ "./src/translations/es.json", 1);
/* harmony import */ var _pt_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pt.json */ "./src/translations/pt.json");
var _pt_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pt.json */ "./src/translations/pt.json", 1);
/* harmony import */ var _de_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./de.json */ "./src/translations/de.json");
var _de_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./de.json */ "./src/translations/de.json", 1);
/* harmony import */ var _at_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./at.json */ "./src/translations/at.json");
var _at_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./at.json */ "./src/translations/at.json", 1);
/* harmony import */ var _ro_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ro.json */ "./src/translations/ro.json");
var _ro_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ro.json */ "./src/translations/ro.json", 1);
/* harmony import */ var _letterCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letterCodes */ "./src/translations/letterCodes.ts");








const messages = {
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["english"]]: _en_json__WEBPACK_IMPORTED_MODULE_0__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["dutch"]]: _nl_json__WEBPACK_IMPORTED_MODULE_1__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["spanish"]]: _es_json__WEBPACK_IMPORTED_MODULE_2__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["portuguese"]]: _pt_json__WEBPACK_IMPORTED_MODULE_3__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["german"]]: _de_json__WEBPACK_IMPORTED_MODULE_4__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["austrian"]]: _at_json__WEBPACK_IMPORTED_MODULE_5__,
  [_letterCodes__WEBPACK_IMPORTED_MODULE_7__["romanian"]]: _ro_json__WEBPACK_IMPORTED_MODULE_6__
};

/***/ }),

/***/ "./src/translations/at.json":
/*!**********************************!*\
  !*** ./src/translations/at.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Servas bei Should-I-Go-Out?\",\"app.startButton\":\"I will raus, aba is des gscheid?\",\"app.nextQuestionButton\":\"Weiter\",\"app.retryButton\":\"No amoi\",\"app.redirectToHome\":\"Zruck zum Start\",\"app.noAnswerError\":\"Du musst dir eine Antwort aussuchen\",\"questions\":[{\"questionNumber\":1,\"question\":\"Gehst hackeln?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":2,\"question\":\"Gehst Essen einkaufen?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":3,\"question\":\"Gehst zum Apotheker?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":4,\"question\":\"Gehst spazieren?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":5,\"question\":\"Gehst allan oder mit Leuten mit denenst zamwohnst raus?\",\"answers\":[\"ja, allan oder mit Leuten mit denen ich zamwohn\",\"na, mit anderen Leuten\"]},{\"questionNumber\":6,\"question\":\"Willst an kranken Hawerer helfen?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":7,\"question\":\"Muass das jetzt sein?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":8,\"question\":\"Ist dei Hackn überlebensnotwendig für die Leitl?\",\"answers\":[\"ja\",\"na\"]},{\"questionNumber\":9,\"question\":\"Kannst von daham hackeln?\",\"answers\":[\"ja\",\"na\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Bleib zaus.\",\"explanation\":\"Du hast kan guatn Grund raus zu gehen. Du bringst dich selbst und andere in Gefahr, wennst rausgehst. Also bleib daham!\"},\"youHero\":{\"id\":2,\"conclusion\":\"Worauf wartest, schleich di!\",\"explanation\":\"Dei Hackn is überlebensnotwenig für die Gsellschaft. Danke und weiter so!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"I dadat ned rausgehn.\",\"explanation\":\"Dein Chef sollte dir erlauben von zu Hause zu arbeiten. Du bringst dich selbst und andere in Gefahr, wennst rausgehst. Wennst doch beschließst rauszugehen, halt Abstand zu anderen, zumindest 1,5 Meter.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Kümmer dich gut um deinen Hawerer. Geh allein und halt zumindest 1,5 Meter Abstand zu anderen. Halt dich an die Hygienevorschriften, damitst nicht selbst krank wirst.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Du kannst kurz rausgehen, mach was du machen musst. Geh allein und halt zumindest 1,5 Meter Abstand zu anderen. Wenn andere dir zu nahe kommen, sags ihnen und bitte sie Abstand zu halten. Dadurch beschützt du sie und dich selbst.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Du kannst kurz rausgehen. Halt 1,5 Meter Abstand zu anderen. Wenn andere dir zu nahe kommen, sags ihnen und bitte sie darum Abstand zu halten. Dadurch beschützt du sie und dich selbst.\"}}}");

/***/ }),

/***/ "./src/translations/de.json":
/*!**********************************!*\
  !*** ./src/translations/de.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Willkommen bei Should-I-Go-Out?\",\"app.startButton\":\"Ich will raus, aber ist das schlau?\",\"app.nextQuestionButton\":\"Weiter\",\"app.retryButton\":\"Nochmal probieren\",\"app.redirectToHome\":\"Zurück zum Start\",\"app.noAnswerError\":\"Du musst eine Antwort wählen\",\"questions\":[{\"questionNumber\":1,\"question\":\"Gehst du zur Arbeit?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":2,\"question\":\"Gehst du Lebensmittel einkaufen?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":3,\"question\":\"Gehst du zur Apotheke?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":4,\"question\":\"Gehst du frische Luft schnappen?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":5,\"question\":\"Gehst du alleine bzw. mit Leuten mit denen du zusammenwohnst raus?\",\"answers\":[\"ja, alleine oder mit Leuten mit denen ich zusammenwohne\",\"nein, mit anderen Leuten\"]},{\"questionNumber\":6,\"question\":\"Bist du unterwegs zu einem kranken Bekannten um ihm/ihr zu helfen?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":7,\"question\":\"Kann was du vorhast warten?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":8,\"question\":\"Ist dein Job überlebensnotwendig für die Gesellschaft?\",\"answers\":[\"ja\",\"nein\"]},{\"questionNumber\":9,\"question\":\"Kannst du von zu Hause aus arbeiten?\",\"answers\":[\"ja\",\"nein\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Bleib zu Hause.\",\"explanation\":\"Du hast zurzeit keinen guten Grund raus zu gehen. Du bringst dich selbst und andere in Gefahr, wenn du das doch tust. Bitte mach's nicht.\"},\"youHero\":{\"id\":2,\"conclusion\":\"Du solltest AUF JEDEN FALL rausgehen!\",\"explanation\":\"Was du tust, ist überlebensnotwenig für die Gesellschaft und wir danken dir. Weiter so!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"Geh lieber nicht raus.\",\"explanation\":\"Dein Chef sollte dir erlauben von zu Hause zu arbeiten. Du bringst dich selbst und andere in Gefahr, wenn du das doch tust. Wenn du doch beschließt zu gehen, halte Abstand zu anderen, zumindest 1,5 Meter.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Bitte kümmere dich gut um deine(n) Bekannte(n). Geh allein und halte zumindest 1,5 Meter Abstand zu anderen. Halte dich an die Hygienevorschriften, sodass du nicht selbst krank wirst.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Du kannst kurz rausgehen, um zu tun was du tun musst. Geh allein und halte zumindest 1,5 Meter Abstand zu anderen. Wenn andere dir zu nahe kommen, sag es ihnen und bitte sie darum Abstand zu halten. Dadurch beschützt du sie und dich selbst.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Du kannst vorsichtig rausgehen.\",\"explanation\":\"Du kannst kurz rausgehen. Halte 1,5 Meter Abstand zu anderen. Wenn andere dir zu nahe kommen, sag es ihnen und bitte sie darum Abstand zu halten. Dadurch beschützt du sie und dich selbst.\"}}}");

/***/ }),

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Welcome to Should-I-Go-Out?\",\"app.startButton\":\"I want to go out, but is that wise?\",\"app.nextQuestionButton\":\"Next\",\"app.retryButton\":\"Check again\",\"app.redirectToHome\":\"Back to home...\",\"app.noAnswerError\":\"You have choose one of the options\",\"questions\":[{\"questionNumber\":1,\"question\":\"Are you going to work?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":2,\"question\":\"Are you going to do groceries?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":3,\"question\":\"Are you going to the pharmacy?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":4,\"question\":\"Are you going to get some fresh air?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":5,\"question\":\"Are you going by yourself or just with the people you live with?\",\"answers\":[\"yes, by myself or with people I live with\",\"no, with others\"]},{\"questionNumber\":6,\"question\":\"Are you going to help out a sick person?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":7,\"question\":\"Whatever your are going to do, could it wait?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":8,\"question\":\"Is your job vital for society?\",\"answers\":[\"yes\",\"no\"]},{\"questionNumber\":9,\"question\":\"Is working from home a possibility?\",\"answers\":[\"yes\",\"no\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Stay inside.\",\"explanation\":\"You don't have a sound reason to go out at the moment. By doing so anyway, you endanger yourself and others. Please don't do this.\"},\"youHero\":{\"id\":2,\"conclusion\":\"You should DEFINITELY go out!\",\"explanation\":\"What you're doing is crucial for our society and we thank you. Keep it up!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"You better not go out.\",\"explanation\":\"Your boss should allow you to work from home. By going to work anyway, you endanger not only yourself, but also others. If you do decide to go, keep your distance to other people, at least 1.5 meters.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"You can carefully go out.\",\"explanation\":\"Please, go take care of the person you want to help. Do go by yourself and keep a distance of 1.5 meters away from other people. Above all, take care not to get sick yourself, by taking proper hygiene measures.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"You can carefully go out.\",\"explanation\":\"You can briefly go out to do what you have to do. Do go by yourself and keep a distance of 1.5 meters away from other people. If others come too close, say that and tell them to keep their distance. By doing this, you protect them and yourself.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"You can carefully go out.\",\"explanation\":\"You can briefly go out. Keep a distance of 1.5 meters away from other people. If others come too close, say that and tell them to keep their distance. By doing this, you protect them and yourself.\"}}}");

/***/ }),

/***/ "./src/translations/es.json":
/*!**********************************!*\
  !*** ./src/translations/es.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Bienvenido a Should-I-Go-Out?\",\"app.startButton\":\"Quiero salir, pero deberia?\",\"app.nextQuestionButton\":\"Siguiente\",\"app.retryButton\":\"Reintentar\",\"app.redirectToHome\":\"Volver al inicio...\",\"app.noAnswerError\":\"Debe elegir una de las opciones\",\"questions\":[{\"questionNumber\":1,\"question\":\"Sales a trabajar?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":2,\"question\":\"Sales a hacer compras?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":3,\"question\":\"Sales a la farmacia?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":4,\"question\":\"Sales a tomar un poco de aire?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":5,\"question\":\"Sales solo o solamente con las personas con las cuales vives?\",\"answers\":[\"si, solo o con las personas que vivo\",\"no, con mas gente\"]},{\"questionNumber\":6,\"question\":\"Sales a ayudar a una persona que se encuentra enferma?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":7,\"question\":\"Sea lo que sea que sales a hacer, puede esperar?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":8,\"question\":\"Es tu trabajo vital para la sociedad?\",\"answers\":[\"si\",\"no\"]},{\"questionNumber\":9,\"question\":\"Trabajar desde casa es una posibilidad para usted?\",\"answers\":[\"si\",\"no\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Quedate en tu casa.\",\"explanation\":\"No parece que tengas una razon valida para salir en este momento. Saliendo de igual manera estas poniendo a ti mismo y a otros en riesgo. Por favor considera no salir.\"},\"youHero\":{\"id\":2,\"conclusion\":\"Si, DEFINITIVAMENTE deberias salir!\",\"explanation\":\"Lo que estas haciendo es vital para el funcionamiento de la sociedad y te lo agradecemos mucho!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"Es mejor que no salgas.\",\"explanation\":\"Your boss should allow you to work from home. By going to work anyway, you endanger not only yourself, but also others. If you do decide to go, keep your distance to other people, at least 1.5 meters.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Puedes salir con cuidado.\",\"explanation\":\"Por favor, vaya a cuidar a esa persona que quiere ayudar. Sal por tu cuenta y manten 1.5m de distancia con el resto de las peronas. Por sobre todo, ten cuidado de no enfermarte tu mismo, toma las medidas higienicas recomendadas.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Puedes salir con cuidado.\",\"explanation\":\"Puedes salir momentaneamente a hacer lo que necesites. Sal por tu cuenta y manten 1.5m de distancia con el resto de las peronas. Si otras personas se acercan mucho, diles que mantengan su distancia. Haciendo esto estaras cuidando de ti y de ellos tambien.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Puedes salir con cuidado.\",\"explanation\":\"Puedes salir momentaneamente. Manten 1.5m de distancia con el resto de las peronas. Si otras personas se acercan mucho, diles que mantengan su distancia. Haciendo esto estaras cuidando de ti y de ellos tambien.\"}}}");

/***/ }),

/***/ "./src/translations/languageButtons.ts":
/*!*********************************************!*\
  !*** ./src/translations/languageButtons.ts ***!
  \*********************************************/
/*! exports provided: languageButtonsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageButtonsData", function() { return languageButtonsData; });
/* harmony import */ var _images_flags_nl_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/flags/nl.svg */ "./src/images/flags/nl.svg");
/* harmony import */ var _images_flags_nl_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_flags_nl_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_flags_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/flags/uk.svg */ "./src/images/flags/uk.svg");
/* harmony import */ var _images_flags_uk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_flags_uk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_flags_es_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/flags/es.svg */ "./src/images/flags/es.svg");
/* harmony import */ var _images_flags_es_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_flags_es_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_flags_pt_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/flags/pt.svg */ "./src/images/flags/pt.svg");
/* harmony import */ var _images_flags_pt_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_flags_pt_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_flags_de_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/flags/de.svg */ "./src/images/flags/de.svg");
/* harmony import */ var _images_flags_de_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_flags_de_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_flags_at_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/flags/at.svg */ "./src/images/flags/at.svg");
/* harmony import */ var _images_flags_at_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_flags_at_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_flags_ro_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/flags/ro.svg */ "./src/images/flags/ro.svg");
/* harmony import */ var _images_flags_ro_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_flags_ro_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _letterCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letterCodes */ "./src/translations/letterCodes.ts");






 // import ItalianFlag from "../images/flags/it.svg";
// import NorwegianFlag from "../images/flags/no.svg";


const languageButtonsData = [{
  image: _images_flags_uk_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["english"],
  languageFull: "English"
}, {
  image: _images_flags_nl_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["dutch"],
  languageFull: "Dutch"
}, {
  image: _images_flags_es_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["spanish"],
  languageFull: "Spanish"
}, {
  image: _images_flags_pt_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["portuguese"],
  languageFull: "Portuguese"
}, {
  image: _images_flags_de_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["german"],
  languageFull: "German"
}, {
  image: _images_flags_at_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["austrian"],
  languageFull: "Austrian German"
}, {
  image: _images_flags_ro_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  letterCode: _letterCodes__WEBPACK_IMPORTED_MODULE_7__["romanian"],
  languageFull: "Romanian"
} // { image: ItalianFlag, letterCode: italian, languageFull: "Italian" }
// { image: NorwegianFlag, letterCode: norwegian, languageFull: "Norwegian" }
];

/***/ }),

/***/ "./src/translations/letterCodes.ts":
/*!*****************************************!*\
  !*** ./src/translations/letterCodes.ts ***!
  \*****************************************/
/*! exports provided: english, dutch, spanish, portuguese, german, austrian, romanian, italian, norwegian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function() { return english; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dutch", function() { return dutch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spanish", function() { return spanish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portuguese", function() { return portuguese; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "german", function() { return german; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "austrian", function() { return austrian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "romanian", function() { return romanian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italian", function() { return italian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norwegian", function() { return norwegian; });
const english = "en";
const dutch = "nl";
const spanish = "es";
const portuguese = "pt";
const german = "de-DE";
const austrian = "de-AT";
const romanian = "ro";
const italian = "it";
const norwegian = "no";

/***/ }),

/***/ "./src/translations/nl.json":
/*!**********************************!*\
  !*** ./src/translations/nl.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Welkom bij Should-I-Go-Out?\",\"app.startButton\":\"Ik wil naar buiten gaan, maar is dat wel handig?\",\"app.nextQuestionButton\":\"Volgende\",\"app.retryButton\":\"Check opnieuw\",\"app.redirectToHome\":\"Terug naar home...\",\"app.noAnswerError\":\"Je moet één van de opties kiezen\",\"questions\":[{\"questionNumber\":1,\"question\":\"Ga je naar je werk?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":2,\"question\":\"Ga je boodschappen doen?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":3,\"question\":\"Ga je naar de apotheek?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":4,\"question\":\"Ga je een frisse neus halen?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":5,\"question\":\"Doe je dit alleen of alleen met mensen die bij je in huis wonen?\",\"answers\":[\"ja, alleen of alleen met mensen die bij je in huis wonen\",\"nee, ook met andere mensen\"]},{\"questionNumber\":6,\"question\":\"Ga je een ziek persoon verzorgen?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":7,\"question\":\"Wat je dan ook maar gaat doen, kan dit later?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":8,\"question\":\"Werk je in een vitaal beroep?\",\"answers\":[\"ja\",\"nee\"]},{\"questionNumber\":9,\"question\":\"Is thuiswerken een mogelijkheid?\",\"answers\":[\"ja\",\"nee\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Blijf binnen.\",\"explanation\":\"Je hebt geen gegronde reden om nu naar buiten te gaan. Door dit toch te doen, breng je jezelf en anderen in gevaar. Doe dit alstublieft niet.\"},\"youHero\":{\"id\":2,\"conclusion\":\"Je kunt ZEKER gaan!\",\"explanation\":\"Wat je doet is cruciaal voor onze samenleving en we danken je. Ga zo door!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"Je kunt beter niet naar buiten gaan.\",\"explanation\":\"Je baas zou moeten toestaan dat je thuis blijft. Door toch naar je werk te gaan breng je niet alleen jezelf in gevaar, maar ook anderen. Als je toch besluit te gaan, houdt afstand van anderen, minimaal 1.5 meter.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Je kunt voorzichtig naar buiten.\",\"explanation\":\"Ga alstublieft naar de persoon die je wilt verzorgen. Ga wel alleen en blijft minstens 1.5 meter weg van andere mensen. Zorg bovendien dat je zelf niet ziek wordt, door goede hygiëne maatregelen te nemen.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Je kunt voorzichtig naar buiten.\",\"explanation\":\"Je kunt kort naar buiten gaan om te doen wat je moet doen. Ga alleen en blijf minimaal 1.5 meter weg van andere mensen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen. Hiermee bescherm je jezelf en anderen.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Je kunt voorzichtig naar buiten.\",\"explanation\":\"Je kunt kort naar buiten gaan. Blijf wel minimaal 1.5 meter weg van anderen. Als anderen te dicht bij komen, geef dit aan en zeg dat ze afstand moeten nemen. Hiermee bescherm je jezelf en anderen.\"}}}");

/***/ }),

/***/ "./src/translations/pos-neg-answers.ts":
/*!*********************************************!*\
  !*** ./src/translations/pos-neg-answers.ts ***!
  \*********************************************/
/*! exports provided: positiveAnswers, negativeAnswers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveAnswers", function() { return positiveAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negativeAnswers", function() { return negativeAnswers; });
const positiveAnswers = ["yes", "ja", "si", "sim", "da", "yes, by myself or with people I live with", "ja, alleen of alleen met mensen die bij je in huis wonen", "si, solo o con las personas que vivo", "sim, sozinho ou com pessoas com quem vivo", "ja, alleine oder mit Leuten mit denen ich zusammenwohne", "ja, allan oder mit Leuten mit denen ich zamwohn", "da, singur/ă sau cu cei cu care locuiesc"];
const negativeAnswers = ["no", "nee", "não", "nein", "na", "nu", "no, with others", "nee, ook met andere mensen", "no, con mas gente", "não, vou sair com outras pessoas", "nein, mit anderen Leuten", "na, mit anderen Leuten", "nu, cu altcineva"];

/***/ }),

/***/ "./src/translations/pt.json":
/*!**********************************!*\
  !*** ./src/translations/pt.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Bem-vindo a Should-I-Go-Out?\",\"app.startButton\":\"Quero sair de casa, mas será que devo?\",\"app.nextQuestionButton\":\"Próximo\",\"app.retryButton\":\"Tentar outra vez\",\"app.redirectToHome\":\"Voltar ao início...\",\"app.noAnswerError\":\"Tens que escolher uma das opções\",\"questions\":[{\"questionNumber\":1,\"question\":\"Vais para o trabalho?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":2,\"question\":\"Vais comprar comida?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":3,\"question\":\"Vais à farmácia?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":4,\"question\":\"Vais sair para apanhar ar?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":5,\"question\":\"Vais sozinho ou somente com pessoas com quem vives?\",\"answers\":[\"sim, sozinho ou com pessoas com quem vivo\",\"não, vou sair com outras pessoas\"]},{\"questionNumber\":6,\"question\":\"Vais sair para ajudar alguém que está doente?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":7,\"question\":\"Seja o que for que vais fazer, pode esperar?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":8,\"question\":\"O teu trabalho é essencial para a sociedade?\",\"answers\":[\"sim\",\"não\"]},{\"questionNumber\":9,\"question\":\"Podes trabalhar a partir de casa?\",\"answers\":[\"sim\",\"não\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Fica em casa.\",\"explanation\":\"Não tens uma razão boa para sair de casa neste momento. Se saires à mesma, estás a arriscar a tua saúde e a dos outros. Por favor, fica em casa.\"},\"youHero\":{\"id\":2,\"conclusion\":\"Deves DEFINITIVAMENTE sair!\",\"explanation\":\"As tuas actividades são cruciais para a sociedade, por isso obrigada. Continua!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"Espero que não tenhas que sair de casa.\",\"explanation\":\"O teu empregador deveria deixar-te trabalhar a partir de casa. Se não deixa, está a arriscar a tua saúde e a dos outros. Se tiveres mesmo que ir, mantem pelo menos 1,5 metros de distância entre ti e outras pessoas.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Podes sair, mas tem cuidado.\",\"explanation\":\"Vai ajudar quem precisas de ajudar. Vai sozinho e mantem pelo menos 1,5 metros de distância entre ti e as outras pessoas. Acima de tudo, tenta não ficar doente, tomando as próprias medidas de higiene.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Podes sair, mas tem cuidado.\",\"explanation\":\"Podes sair e faz rapidamente que precisas de fazer. Vai sozinho e mantem pelo menos 1,5 metros de distância entre ti e as outras pessoas. Se outras pessoas vierem para perto de ti, pede-lhes para manter a distância. Ao fazer isto, estas a proteger-te a ti e a eles.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Podes sair, mas tem cuidado.\",\"explanation\":\"Podes sair para rapidamente fazer o que queres fazer. Mantem pelo menos 1,5 metros de distância entre ti e as outras pessoas. Se outras pessoas vierem para perto de ti, pede-lhes para manter a distancia. Ao fazer isto, estas a proteger-te a ti e a eles.\"}}}");

/***/ }),

/***/ "./src/translations/ro.json":
/*!**********************************!*\
  !*** ./src/translations/ro.json ***!
  \**********************************/
/*! exports provided: app.title, app.startButton, app.nextQuestionButton, app.retryButton, app.redirectToHome, app.noAnswerError, questions, answers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.title\":\"Bun venit pe Should-I-Go-Out?\",\"app.startButton\":\"Vreau să ies din casă, dar ar trebui?\",\"app.nextQuestionButton\":\"Înainte\",\"app.retryButton\":\"Încearcă din nou\",\"app.redirectToHome\":\"Înapoi la prima pagină...\",\"app.noAnswerError\":\"Trebuie să alegi una dintre opțiuni\",\"questions\":[{\"questionNumber\":1,\"question\":\"Mergi la serviciu?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":2,\"question\":\"Mergi la cumpărături?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":3,\"question\":\"Mergi la farmacie?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":4,\"question\":\"Ieși la aer curat?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":5,\"question\":\"Mergi singur/ă sau doar cu cei cu care locuiești?\",\"answers\":[\"da, singur/ă sau cu cei cu care locuiesc\",\"nu, cu altcineva\"]},{\"questionNumber\":6,\"question\":\"Mergi să ajuți pe cineva bolnav?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":7,\"question\":\"Ceea ce vrei să faci ar putea aștepta?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":8,\"question\":\"Este slujba ta esențială pentru societate?\",\"answers\":[\"da\",\"nu\"]},{\"questionNumber\":9,\"question\":\"Ai putea să lucrezi de acasă?\",\"answers\":[\"da\",\"nu\"]}],\"answers\":{\"stayIn\":{\"id\":1,\"conclusion\":\"Stai acasă.\",\"explanation\":\"Momentan nu ai un motiv suficient de bun pentru a ieși din casă. Dacă vei face asta, te vei pune în pericol atât pe ține cât și pe cei din jurul tău. Te rog, nu face asta!\"},\"youHero\":{\"id\":2,\"conclusion\":\"Cu siguranță ar trebui să ieși din casă!\",\"explanation\":\"Activitatea ta este esențială pentru societate și îți mulțumim. Ține-o tot așa!\"},\"youShouldKnowBetter\":{\"id\":3,\"conclusion\":\"Ar fi mai bine dacă nu ai ieși din casă.\",\"explanation\":\"Șeful tău ar trebui să îți dea voie să lucrezi de acasă. Mergând la serviciu, pui în pericol atât sănătatea ta cât și pe cea a celorlalți. Dacă vei hotărî să mergi, nu uita să păstrezi o distanță de cel puțin 1.5 metri de ceilalți.\"},\"caretaker\":{\"id\":4,\"conclusion\":\"Poți ieși din casă cu grijă.\",\"explanation\":\"Poți merge să ai grijă de persoana pe care vrei să o ajuți! Mergi singur/ă și păstrează o distanță de cel puțin 1.5 metri de ceilalți. Ai grijă, mai ales, să nu te îmbolnăvești. Protejează-te respectând măsurile de igienă.\"},\"goAlone\":{\"id\":5,\"conclusion\":\"Poți ieși din casă cu grijă.\",\"explanation\":\"Poți ieși pe scurt din casă pentru a face ceea ce ai de făcut. Mergi singur/ă și păstrează o distanță de cel puțin 1.5 metri de alți oameni. Dacă ceilalți vin prea aproape, atenționează-i și spune-le să păstreze distanța. Făcând asta, îi vei proteja atât pe ei, cât și pe tine.\"},\"avoidOthers\":{\"id\":6,\"conclusion\":\"Poți ieși din casă cu grijă.\",\"explanation\":\"Poți ieși pe scurt din casă. Păstrează o distanță de cel puțin 1.5 metri de alți oameni. Dacă ceilalți vin prea aproape, atenționează-i și spune-le să păstreze distanța. Făcând asta, îi vei proteja atât pe ei, cât și pe tine.\"}}}");

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/robingoudeketting/Documents/code-practice/should-i-go-out/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/robingoudeketting/Documents/code-practice/should-i-go-out/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/robingoudeketting/Documents/code-practice/should-i-go-out/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map