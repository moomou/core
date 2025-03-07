'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _dateFns = _interopRequireDefault(require('@date-io/date-fns'));
var _xDatePickers = require('@mui/x-date-pickers');
var _excluded = ['forwardedRef'];
function TimeField(_ref) {
  var forwardedRef = _ref.forwardedRef,
    props = (0, _objectWithoutProperties2['default'])(_ref, _excluded);
  return /*#__PURE__*/ _react['default'].createElement(
    _xDatePickers.LocalizationProvider,
    {
      dateAdapter: _dateFns['default'],
      locale: props.locale
    },
    /*#__PURE__*/ _react['default'].createElement(
      _xDatePickers.TimePicker,
      (0, _extends2['default'])({}, props, {
        ref: forwardedRef,
        format: 'HH:mm:ss',
        value: props.value || null,
        onChange: props.onChange,
        clearable: true,
        InputProps: {
          style: {
            fontSize: 13
          }
        },
        inputProps: {
          'aria-label': ''.concat(
            props.columnDef.title,
            ': press space to edit'
          )
        }
      })
    )
  );
}
var _default = /*#__PURE__*/ _react['default'].forwardRef(function TimeFieldRef(
  props,
  ref
) {
  return /*#__PURE__*/ _react['default'].createElement(
    TimeField,
    (0, _extends2['default'])({}, props, {
      forwardedRef: ref
    })
  );
});
exports['default'] = _default;
