"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Education = require("./Components/Education");

var _Navigation = require("./Components/Navigation");

var _Personal = require("./Components/Personal");

var _Projects = require("./Components/Projects");

var _References = require("./Components/References");

var _WorkHistory = require("./Components/WorkHistory");

var _nativeElementsModule = _interopRequireDefault(require("./CSS Modules/nativeElements.module.css"));

var _layoutModule = _interopRequireDefault(require("./CSS Modules/layout.module.css"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buttonClicked", function (label) {
      _this.setState({
        currentTab: label
      });
    });

    _this.state = {
      currentTab: 'Personal'
    };
    return _this;
  }

  _createClass(Main, [{
    key: "getAppropriateContent",
    value: function getAppropriateContent() {
      switch (this.state.currentTab) {
        case 'Personal':
          return /*#__PURE__*/_react["default"].createElement(_Personal.Personal, null);
          break;

        case 'Work History':
          return /*#__PURE__*/_react["default"].createElement(_WorkHistory.WorkHistory, null);
          break;

        case 'Education':
          return /*#__PURE__*/_react["default"].createElement(_Education.Education, null);
          break;

        case 'References':
          return /*#__PURE__*/_react["default"].createElement(_References.References, null);
          break;

        case 'Projects':
          return /*#__PURE__*/_react["default"].createElement(_Projects.Projects, null);
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: '100%'
        },
        className: "".concat(_layoutModule["default"].flexColumnNoWrap)
      }, /*#__PURE__*/_react["default"].createElement(_Navigation.Navigation, {
        buttonClicked: this.buttonClicked
      }), this.getAppropriateContent());
    }
  }]);

  return Main;
}(_react["default"].Component); // Style the entry element because CSS Modules doesn't play nicely with IDs.


document.getElementById('entry').style.height = '100%';
document.getElementById('entry').style.width = '100%';
document.getElementById('entry').style.margin = '0';
document.getElementById('entry').style.padding = '0';

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Main, null), document.getElementById('entry'));
//# sourceMappingURL=Main.js.map