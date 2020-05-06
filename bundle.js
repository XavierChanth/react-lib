'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactJss = require('react-jss');

var darkTheme = {
  accent: '#fff',
  accentHover: '#ddd',
  background: '#050505',
  primary: '#2B50AA',
  secondary: '#1B998B',
  info: '#F0544F',
  danger: '#EA324F'
};
var ThemeContext = React__default.createContext({});

var DarkThemeProvider = function DarkThemeProvider(_ref) {
  var children = _ref.children,
      jssOverride = _ref.jssOverride;
  overrideCss(darkTheme);
  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: darkTheme
  }, children);
};

var CustomThemeProvider = function CustomThemeProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme,
      jssOverride = _ref2.jssOverride;
  overrideCss(theme);
  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};

var isColor = function isColor(string) {
  return darkTheme.hasOwnProperty(string);
};

var overrideCss = function overrideCss(theme, jss) {
  document.getElementsByTagName("body")[0].style.backgroundColor = theme.background; // TODO override document with JSS somehow
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      args = _objectWithoutProperties(_ref, ["children", "onClick"]);

  var theme = React.useContext(ThemeContext);
  var color;

  for (var arg in args) {
    if (isColor(arg)) {
      color = theme[arg];
    }
  }

  if (!color) color = theme.primary;
  var classes = reactJss.createUseStyles({
    button: {
      color: theme.accent,
      backgroundColor: color,
      display: "inline-block",
      border: "none",
      borderRadius: "2px",
      '&:hover': {
        filter: "saturate(1.2)"
      }
    }
  })();
  return /*#__PURE__*/React__default.createElement("button", {
    className: classes.button,
    onClick: onClick
  }, children);
};

exports.Button = Button;
exports.CustomThemeProvider = CustomThemeProvider;
exports.DarkThemeProvider = DarkThemeProvider;
exports.ThemeContext = ThemeContext;
