webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.420ebd710ea1cea3dc98.hot-update.js.map