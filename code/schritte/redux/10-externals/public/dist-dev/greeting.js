webpackJsonp([0],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var GreetingDetail = (_temp = _class = function (_React$Component) {
  _inherits(GreetingDetail, _React$Component);

  _createClass(GreetingDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          greeting = _state.greeting;

      var saveDisabled = !(name && greeting);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          ref: function ref(input) {
            return _this2.input = input;
          },
          onChange: function onChange(event) {
            return _this2.updateModel(event);
          },
          name: "name",
          value: name,
          placeholder: "Name"
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { onChange: function onChange(event) {
            return _this2.updateModel(event);
          }, name: "greeting", value: greeting, placeholder: "Greeting" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.reset();
            } },
          "Clear"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          { disabled: saveDisabled, onClick: function onClick() {
              return _this2.save();
            } },
          "Save"
        )
      );
    }
  }]);

  function GreetingDetail(props) {
    _classCallCheck(this, GreetingDetail);

    var _this = _possibleConstructorReturn(this, (GreetingDetail.__proto__ || Object.getPrototypeOf(GreetingDetail)).call(this, props));

    _this.state = {
      name: "",
      greeting: ""
    };
    return _this;
  }

  _createClass(GreetingDetail, [{
    key: "reset",
    value: function reset() {
      this.setState({ name: "", greeting: "" });
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "save",
    value: function save() {
      var onSave = this.props.onSave;
      var _state2 = this.state,
          name = _state2.name,
          greeting = _state2.greeting;

      onSave({
        name: name,
        greeting: greeting
      });
    }
  }, {
    key: "updateModel",
    value: function updateModel(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }]);

  return GreetingDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {
  onSave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, _temp);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(null, function (dispatch) {
  return {
    onSave: function onSave(greeting) {
      return dispatch(__WEBPACK_IMPORTED_MODULE_2__actions__["saveGreeting"](greeting));
    }
  };
})(GreetingDetail));

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HcmVldGluZy9HcmVldGluZ0RldGFpbC5qcyJdLCJuYW1lcyI6WyJHcmVldGluZ0RldGFpbCIsInN0YXRlIiwibmFtZSIsImdyZWV0aW5nIiwic2F2ZURpc2FibGVkIiwiaW5wdXQiLCJ1cGRhdGVNb2RlbCIsImV2ZW50IiwicmVzZXQiLCJzYXZlIiwicHJvcHMiLCJzZXRTdGF0ZSIsImZvY3VzIiwib25TYXZlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiY29ubmVjdCIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztJQUVNQSxjOzs7Ozs2QkFLSztBQUFBOztBQUFBLG1CQUNvQixLQUFLQyxLQUR6QjtBQUFBLFVBQ0NDLElBREQsVUFDQ0EsSUFERDtBQUFBLFVBQ09DLFFBRFAsVUFDT0EsUUFEUDs7QUFFUCxVQUFNQyxlQUFlLEVBQUVGLFFBQVFDLFFBQVYsQ0FBckI7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLGVBQUs7QUFBQSxtQkFBVSxPQUFLRSxLQUFMLEdBQWFBLEtBQXZCO0FBQUEsV0FEUDtBQUVFLG9CQUFVO0FBQUEsbUJBQVMsT0FBS0MsV0FBTCxDQUFpQkMsS0FBakIsQ0FBVDtBQUFBLFdBRlo7QUFHRSxnQkFBSyxNQUhQO0FBSUUsaUJBQU9MLElBSlQ7QUFLRSx1QkFBWTtBQUxkLFVBREY7QUFRRSwrRUFBTyxVQUFVO0FBQUEsbUJBQVMsT0FBS0ksV0FBTCxDQUFpQkMsS0FBakIsQ0FBVDtBQUFBLFdBQWpCLEVBQW1ELE1BQUssVUFBeEQsRUFBbUUsT0FBT0osUUFBMUUsRUFBb0YsYUFBWSxVQUFoRyxHQVJGO0FBU0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtLLEtBQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQSxTQVRGO0FBVUU7QUFBQTtBQUFBLFlBQVEsVUFBVUosWUFBbEIsRUFBZ0MsU0FBUztBQUFBLHFCQUFNLE9BQUtLLElBQUwsRUFBTjtBQUFBLGFBQXpDO0FBQUE7QUFBQTtBQVZGLE9BREY7QUFnQkQ7OztBQUVELDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBR2pCLFVBQUtULEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBSGlCO0FBT2xCOzs7OzRCQUVPO0FBQ04sV0FBS1EsUUFBTCxDQUFjLEVBQUVULE1BQU0sRUFBUixFQUFZQyxVQUFVLEVBQXRCLEVBQWQ7QUFDQSxVQUFJLEtBQUtFLEtBQVQsRUFBZ0I7QUFDZCxhQUFLQSxLQUFMLENBQVdPLEtBQVg7QUFDRDtBQUNGOzs7MkJBRU07QUFBQSxVQUNHQyxNQURILEdBQ2MsS0FBS0gsS0FEbkIsQ0FDR0csTUFESDtBQUFBLG9CQUVzQixLQUFLWixLQUYzQjtBQUFBLFVBRUdDLElBRkgsV0FFR0EsSUFGSDtBQUFBLFVBRVNDLFFBRlQsV0FFU0EsUUFGVDs7QUFHTFUsYUFBTztBQUNMWCxrQkFESztBQUVMQztBQUZLLE9BQVA7QUFJRDs7O2dDQUVXSSxLLEVBQU87QUFDakIsV0FBS0ksUUFBTCxxQkFBaUJKLE1BQU1PLE1BQU4sQ0FBYVosSUFBOUIsRUFBcUNLLE1BQU1PLE1BQU4sQ0FBYUMsS0FBbEQ7QUFDRDs7OztFQXREMEIsNkNBQUFDLENBQU1DLFMsVUFDMUJDLFMsR0FBWTtBQUNqQkwsVUFBUSxrREFBQU0sQ0FBVUMsSUFBVixDQUFlQztBQUROLEM7OztBQXdEckIsK0RBQWUsb0VBQUFDLENBQVEsSUFBUixFQUFjO0FBQUEsU0FBYTtBQUN4Q1QsWUFBUTtBQUFBLGFBQVlVLFNBQVMsdURBQXFCcEIsUUFBckIsQ0FBVCxDQUFaO0FBQUE7QUFEZ0MsR0FBYjtBQUFBLENBQWQsRUFFWEgsY0FGVyxDQUFmLEUiLCJmaWxlIjoiZ3JlZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY2xhc3MgR3JlZXRpbmdEZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGdyZWV0aW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNhdmVEaXNhYmxlZCA9ICEobmFtZSAmJiBncmVldGluZyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbnB1dCA9PiAodGhpcy5pbnB1dCA9IGlucHV0KX1cbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy51cGRhdGVNb2RlbChldmVudCl9XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy51cGRhdGVNb2RlbChldmVudCl9IG5hbWU9XCJncmVldGluZ1wiIHZhbHVlPXtncmVldGluZ30gcGxhY2Vob2xkZXI9XCJHcmVldGluZ1wiIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5yZXNldCgpfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtzYXZlRGlzYWJsZWR9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2F2ZSgpfT5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBncmVldGluZzogXCJcIlxuICAgIH07XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJcIiwgZ3JlZXRpbmc6IFwiXCIgfSk7XG4gICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHsgb25TYXZlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbmFtZSwgZ3JlZXRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgb25TYXZlKHtcbiAgICAgIG5hbWUsXG4gICAgICBncmVldGluZ1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTW9kZWwoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgZGlzcGF0Y2ggPT4gKHtcbiAgb25TYXZlOiBncmVldGluZyA9PiBkaXNwYXRjaChhY3Rpb25zLnNhdmVHcmVldGluZyhncmVldGluZykpXG59KSkoR3JlZXRpbmdEZXRhaWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR3JlZXRpbmcvR3JlZXRpbmdEZXRhaWwuanMiXSwic291cmNlUm9vdCI6IiJ9