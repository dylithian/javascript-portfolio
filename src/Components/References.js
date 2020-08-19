"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.References = void 0;

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

var References = /*#__PURE__*/function (_React$Component) {
  _inherits(References, _React$Component);

  var _super = _createSuper(References);

  function References() {
    _classCallCheck(this, References);

    return _super.apply(this, arguments);
  }

  _createClass(References, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Content.Content, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Professional References"))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Chris Bodenberger"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "General Manager", /*#__PURE__*/_react["default"].createElement("br", null), "Systech"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "Phone: (406)-498-8559")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Chris was my direct manager at Systech, and ran the company as a whole. I performed any tasks he gave me and managed a team of employees to complete any projects required. I provided him with daily, weekly, and monthly reports on my progress and the progress of the team. Given the nature of my work, he was also directly aware of any issues that may have arisen, and my performance was directly subject to his review."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "I acted as General Manager in his stead on the occasion that he was not present."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "CaLinda Roth"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Office Manager", /*#__PURE__*/_react["default"].createElement("br", null), "Systech"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "Phone: (206)-778-4981")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "CaLinda was our Office Manager, who was my direct subordinate and largely responsible for our bookkeeping work and social media. I was responsible for ensuring that her work reached the General Manager and for assigning her tasks that helped us meet company goals for growth and service excellence. I synthesized the information she provided in order to prepare the reports the General Manager received."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Todd Gasser"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "General Manager", /*#__PURE__*/_react["default"].createElement("br", null), "Staples"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "Personal Phone: (406)-490-9274", /*#__PURE__*/_react["default"].createElement("br", null), "Business Phone: (406)-494-1000")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Todd is the store manager at Staples in Butte. He supervises the entire store and is directly accountable to the District Manager. Todd was responsible for hiring me, assigning training, as well as directing all my direct supervisors."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Travis Immonen"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Print and Marketing Supervisor", /*#__PURE__*/_react["default"].createElement("br", null), "Staples"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "Phone: (406)-498-7112")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Travis managed the Copy and Print Center at Staples in Butte. He was responsible for training me in the operations and general procedures of the print center, and while he left Staples before I did, he was one of my close mentors and is very appraised of my working abilities and credentials."))));
    }
  }]);

  return References;
}(_react["default"].Component);

exports.References = References;
//# sourceMappingURL=References.js.map