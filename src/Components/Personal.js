"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Personal = void 0;

var _react = _interopRequireDefault(require("react"));

var _Aligner = require("./Aligner");

var _Card = require("./Card");

var _Content = require("./Content");

var _Header = require("./Header");

var _NameCard = require("./NameCard");

var _SubHeader = require("./SubHeader");

var _TextBlock = require("./TextBlock");

var _backgroundModule = _interopRequireDefault(require("./../CSS Modules/background.module.css"));

var _layoutModule = _interopRequireDefault(require("./../CSS Modules/layout.module.css"));

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
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Content.Content, null, /*#__PURE__*/_react["default"].createElement(_NameCard.NameCard, null), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Placeholder Content:"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Left Text"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "Right Text", /*#__PURE__*/_react["default"].createElement("br", null), "RightTwo")), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Morbi tincidunt augue interdum velit euismod in. Egestas integer eget aliquet nibh praesent. Sapien eget mi proin sed libero enim sed faucibus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Eu mi bibendum neque egestas. Eu volutpat odio facilisis mauris sit amet massa. Lorem donec massa sapien faucibus et molestie. Sed id semper risus in hendrerit gravida rutrum quisque non."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Donec massa sapien faucibus et molestie. Sed enim ut sem viverra aliquet eget sit amet. Aliquam ultrices sagittis orci a. Lorem sed risus ultricies tristique nulla. Semper eget duis at tellus at urna. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Metus dictum at tempor commodo ullamcorper. Interdum consectetur libero id faucibus nisl. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Laoreet sit amet cursus sit amet dictum sit amet justo. Ornare quam viverra orci sagittis eu volutpat odio. Iaculis at erat pellentesque adipiscing commodo elit at. Congue eu consequat ac felis donec. Sodales ut etiam sit amet nisl purus in mollis nunc. Amet dictum sit amet justo donec enim diam. Sit amet risus nullam eget felis eget nunc lobortis. Commodo quis imperdiet massa tincidunt."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Nunc sed augue lacus viverra vitae congue. Amet tellus cras adipiscing enim eu. Eget nunc scelerisque viverra mauris in aliquam sem. At quis risus sed vulputate odio ut enim blandit. Enim diam vulputate ut pharetra. Ut consequat semper viverra nam libero justo laoreet sit amet. Malesuada fames ac turpis egestas maecenas. Nunc congue nisi vitae suscipit tellus. Non consectetur a erat nam. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Et netus et malesuada fames ac turpis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Nisl purus in mollis nunc sed. Tincidunt id aliquet risus feugiat in. Nibh praesent tristique magna sit amet. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Volutpat ac tincidunt vitae semper quis lectus. Sed augue lacus viverra vitae."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Odio euismod lacinia at quis risus sed vulputate. Id semper risus in hendrerit. Posuere urna nec tincidunt praesent semper feugiat nibh. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus et magnis dis parturient montes nascetur. Gravida cum sociis natoque penatibus et. Aliquam malesuada bibendum arcu vitae elementum curabitur. Diam maecenas sed enim ut.")));
    }
  }]);

  return Personal;
}(_react["default"].Component);

exports.Personal = Personal;
//# sourceMappingURL=Personal.js.map