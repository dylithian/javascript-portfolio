"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;

var _React = _interopRequireDefault(require("React"));

var _NavButton = require("./NavButton");

var _backgroundsModule = _interopRequireDefault(require("./../CSS Modules/backgrounds.module.css"));

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

var Navigation = /*#__PURE__*/function (_React$Component) {
  _inherits(Navigation, _React$Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _super.apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_React["default"].createElement("div", {
        className: "".concat(_layoutModule["default"].flexRowWithWrap, " ").concat(_layoutModule["default"].fullWidth, " ").concat(_backgroundsModule["default"].darkBlue)
      }, /*#__PURE__*/_React["default"].createElement(_NavButton.NavButton, {
        label: 'Personal',
        onClick: function onClick() {
          _this.props.buttonClicked('Personal');
        }
      }), /*#__PURE__*/_React["default"].createElement(_NavButton.NavButton, {
        label: "Work\xA0History",
        onClick: function onClick() {
          _this.props.buttonClicked('Work History');
        }
      }), /*#__PURE__*/_React["default"].createElement(_NavButton.NavButton, {
        label: 'Education',
        onClick: function onClick() {
          _this.props.buttonClicked('Education');
        }
      }), /*#__PURE__*/_React["default"].createElement(_NavButton.NavButton, {
        label: 'References',
        onClick: function onClick() {
          _this.props.buttonClicked('References');
        }
      }), /*#__PURE__*/_React["default"].createElement(_NavButton.NavButton, {
        label: 'Projects',
        onClick: function onClick() {
          _this.props.buttonClicked('Projects');
        }
      }));
    }
  }]);

  return Navigation;
}(_React["default"].Component);

exports.Navigation = Navigation;
//# sourceMappingURL=Navigation.js.map