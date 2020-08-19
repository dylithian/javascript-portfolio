"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkHistory = void 0;

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

var WorkHistory = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkHistory, _React$Component);

  var _super = _createSuper(WorkHistory);

  function WorkHistory() {
    _classCallCheck(this, WorkHistory);

    return _super.apply(this, arguments);
  }

  _createClass(WorkHistory, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Content.Content, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Employment History"))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Denny Menholt Ford"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "IT Manager", /*#__PURE__*/_react["default"].createElement("br", null), "Butte, MT"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "March 2020 - Present")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Primarily a systems administrator role, where I was the top authority for all computers and network devices for the largest dealership in the entirety of Butte-Silverbow county."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Managed the entire tech department and acted as the webmaster, network and server administrator, hardware acquisition and installation manager, and primary tech support employee."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Hardware setup included a full domain-administrated network layout with multiple distinct LANs, more than 100 computers, 25+ printers, and several routers and intermediate switches."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Performed various inventory management, pricing maintenance, and administration roles when time was available."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Also included a social media management component, including marketing and design presence on Facebook, Google, Indeed, and more. Acted additionally as the company administrator for the Microsoft 365 domain."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Systech"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Manager/Tech Lead", /*#__PURE__*/_react["default"].createElement("br", null), "Butte, MT"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "2019 - April 2020")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "In essence, the assistant manager and CFO for a small computer repair shop business."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Ran a tech repair shop with a significant media presence and inventory/parts component. Job responsibilities on a daily basis included running a tech team of 3-4 technicians repairing approximately 6-10 machines at a time, providing excellent customer service, performing financial transactions and bookkeeping, managing inventory and ordering parts, interacting with vendors, and occasional business-to-business interaction."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Occasionally involved programming knowledge as the situation needed. Built numerous internal-use scripts, primarily in Python, Ruby, and JavaScript."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "I also built the entirety of Systech's website and internal inventory management program from the ground up, including an ES6 JavaScript + React frontend and a PHP+MySQL backend. The inventory management system was built to be extensible, responsive, modular, and straightforward."))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, null, "Staples"), /*#__PURE__*/_react["default"].createElement(_SubHeader.SubHeader, null, /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "left"
      }, "Certified Technician (Later Tech Sales)", /*#__PURE__*/_react["default"].createElement("br", null), "Butte, MT"), /*#__PURE__*/_react["default"].createElement(_Aligner.Aligner, {
        align: "right"
      }, "2017 - March 2020")), /*#__PURE__*/_react["default"].createElement(_EMSizer.EMSizer, {
        size: "48"
      }, /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "In brief, an entry-level sales associate position with a mix of sales and technical expertise components."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "Hired on as a Certified Technician after passing Staples' internal certification exam (twice), and then performed tech repair and sales work for the tech department in the Butte Store. Tasks included repair work of all kinds on current and legacy Windows machines, and expertise (though not in the job description) was required in networking, mobile devices including phones and tablets, GPS systems, printers, and home security systems. Also involved a heavy sales component in which I was number 2 in the store, as well as #1 in the entire chain for employees in my position, based on sales performance."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "The position later stopped requiring recertification and became a Tech Sales Associate position."), /*#__PURE__*/_react["default"].createElement(_TextBlock.TextBlock, null, "I became cross-trained (voluntarily) in the print & marketing center which included print shop work as well as graphic design. I also was cross-trained in inventory management and received approximately one year of management training, and essentially acted as a manager in every capacity aside from the job title."))));
    }
  }]);

  return WorkHistory;
}(_react["default"].Component);

exports.WorkHistory = WorkHistory;
//# sourceMappingURL=WorkHistory.js.map