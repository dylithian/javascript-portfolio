"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Personal = void 0;

var _react = _interopRequireDefault(require("react"));

var _BulletList = require("./BulletList");

var _Card = require("./Card");

var _Content = require("./Content");

var _EMSizer = require("./EMSizer");

var _FlexCenteredBox = require("./FlexCenteredBox");

var _Header = require("./Header");

var _NameCard = require("./NameCard");

var _TextBlock = require("./TextBlock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Personal = /*#__PURE__*/function (_React$Component) {
  _inherits(Personal, _React$Component);

  var _super = _createSuper(Personal);

  function Personal() {
    _classCallCheck(this, Personal);

    return _super.apply(this, arguments);
  }

  _createClass(Personal, [{
    key: "since",
    value: function since(year) {
      var years = new Date().getFullYear() - year;

      if (years == 0) {
        return '';
      } else if (years == 1) {
        return ' (1 Year)';
      } else if (years <= 10) {
        return " (".concat(years, " Years)");
      } else {
        return " (10+ Years)";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var since = this.since; // For semantic reasons.

      return /*#__PURE__*/_react["default"].createElement(_Content.Content, null, /*#__PURE__*/_react["default"].createElement(_NameCard.NameCard, null), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_FlexCenteredBox.FlexCenteredBox, null, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Experienced Software Developer with primary focus on:"), /*#__PURE__*/_react["default"].createElement(_BulletList.BulletList, {
        columns: "2",
        items: ['Java', "Modern\xA0JavaScript\xA0(ES6)", 'React', 'MySQL', 'Python', 'C#']
      }), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Also familiar with Ruby, Lua, PHP, AngularJS, and more.")), /*#__PURE__*/_react["default"].createElement(_FlexCenteredBox.FlexCenteredBox, null, /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "My core belief is that learning is a ", /*#__PURE__*/_react["default"].createElement("em", null, "choice"), " and a ", /*#__PURE__*/_react["default"].createElement("em", null, "privilege"), ". Success in the extremely complicated and fast-paced software engineering industry is a function of embracing that chaos and treating the opportunity to expand one\u2019s horizons as a challenge to rise above, not as a chore.")))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
        centered: true
      }, "Skills"), /*#__PURE__*/_react["default"].createElement(_BulletList.BulletList, {
        columns: "2",
        items: ["Java".concat(since(2013)), "C#".concat(since(2018)), "HTML5/CSS3".concat(since(2014)), "JavaScript".concat(since(2014)), "React\xA0&\xA0AngularJS".concat(since(2019)), 'Python', 'Lua', "jQuery".concat(since(2014)), "PHP".concat(since(2015)), "SQL-based\xA0RDB (Primarily\xA0MySQL)", 'Ruby', 'Management', "Babel & Webpack".concat(since(2020)), "NodeJS".concat(since(2019))]
      })), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
        centered: true
      }, "Personal Strengths"), /*#__PURE__*/_react["default"].createElement(_BulletList.BulletList, {
        columns: "2",
        items: ['Outgoing Personality', 'Fits well into any group', 'Comfortable working alone', 'Self-Starter', 'Strong Writing and Interpersonal Skills', 'Diligent; Unflinching work ethic', 'Meticulous; Quality producer', 'Punctual', 'I was taught proper coding practices', "Writes\xA0code\xA0for\xA0readability\xA0and\xA0maintainability, not\xA0just\xA0functionality"]
      })));
    }
  }]);

  return Personal;
}(_react["default"].Component);

exports.Personal = Personal;
//# sourceMappingURL=Personal.js.map