"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Education = void 0;

var _react = _interopRequireDefault(require("react"));

var _Aligner = require("./Aligner");

var _Card = require("./Card");

var _Content = require("./Content");

var _EMSizer = require("./EMSizer");

var _Header = require("./Header");

var _SubHeader = require("./SubHeader");

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

var Education = /*#__PURE__*/function (_React$Component) {
  _inherits(Education, _React$Component);

  var _super = _createSuper(Education);

  function Education() {
    _classCallCheck(this, Education);

    return _super.apply(this, arguments);
  }

  _createClass(Education, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Content.Content, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Education"))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Green River College"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Computer Science Major", /*#__PURE__*/_react["default"].createElement("br", null), "Auburn, WA"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "GPA 4.0")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Studied toward an Associates Degree in Computer Science and Information Technology. Had to leave for personal reasons while only two credits away from the full degree. The two credits were electives, not core class credits."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "The program emphasized technical writing on top of standard software development and mathematics."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Tahoma Senior High School"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Graduated with Distinguished Honors", /*#__PURE__*/_react["default"].createElement("br", null), "Covington, WA"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "GPA 3.833")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Took part in several AP classes, the most notable of which was one year of education with Java programming, and one additional year of extended Java development through a program with the University of Washington."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Participated in multiple extra-curricular activities including leading the Programming Club in senior year as well as other social activity clubs throughout earlier years."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Graduated with Distinguished (highest) Honors for exemplary academic performance."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "School later became a middle school."))));
    }
  }]);

  return Education;
}(_react["default"].Component);

exports.Education = Education;
//# sourceMappingURL=Education.js.map