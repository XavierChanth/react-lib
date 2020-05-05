'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactJss = require('react-jss');

var darkTheme = {
  background: '#050505',
  element: '#020887',
  primary: '#2B50AA',
  secondary: '#1B998B',
  tertiary: '#FCD0A1',
  danger: '#EA526F'
};
var ThemeContext = React__default.createContext({});

var DarkThemeProvider = function DarkThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: darkTheme
  }, children);
};

var CustomThemeProvider = function CustomThemeProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme;
  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};

var Button = function Button(_ref) {
  var children = _ref.children;
  var theme = React.useContext(ThemeContext);
  var classes = reactJss.createUseStyles({
    button: {
      color: theme.primary,
      backgroundColor: theme.element
    }
  })();
  return /*#__PURE__*/React__default.createElement("button", {
    className: classes.button
  }, children);
};

exports.Button = Button;
exports.CustomThemeProvider = CustomThemeProvider;
exports.DarkThemeProvider = DarkThemeProvider;
exports.ThemeContext = ThemeContext;
