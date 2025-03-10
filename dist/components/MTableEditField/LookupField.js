'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _FormControl2 = _interopRequireDefault(
  require('@mui/material/FormControl')
);
var _FormHelperText2 = _interopRequireDefault(
  require('@mui/material/FormHelperText')
);
var _Select2 = _interopRequireDefault(require('@mui/material/Select'));
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _MenuItem2 = _interopRequireDefault(require('@mui/material/MenuItem'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _react = _interopRequireDefault(require('react'));
var _excluded = ['forwardedRef'];
function LookupField(_ref) {
  var forwardedRef = _ref.forwardedRef,
    props = (0, _objectWithoutProperties2['default'])(_ref, _excluded);
  return /*#__PURE__*/ _react['default'].createElement(
    _FormControl2['default'],
    {
      ref: forwardedRef,
      error: Boolean(props.error)
    },
    /*#__PURE__*/ _react['default'].createElement(
      _Select2['default'],
      (0, _extends2['default'])({}, props, {
        value: props.value === undefined ? '' : props.value,
        onChange: function onChange(event) {
          return props.onChange(event.target.value);
        },
        style: {
          fontSize: 13
        },
        SelectDisplayProps: {
          'aria-label': props.columnDef.title
        }
      }),
      Object.keys(props.columnDef.lookup).map(function (key) {
        return /*#__PURE__*/ _react['default'].createElement(
          _MenuItem2['default'],
          {
            key: key,
            value: key
          },
          props.columnDef.lookup[key]
        );
      })
    ),
    Boolean(props.helperText) &&
      /*#__PURE__*/ _react['default'].createElement(
        _FormHelperText2['default'],
        null,
        props.helperText
      )
  );
}
var _default = /*#__PURE__*/ _react['default'].forwardRef(
  function LookupFieldRef(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      LookupField,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
);
exports['default'] = _default;
